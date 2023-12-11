'use client'
import useGlobalContext from "@/app/Context/store"
import Image from "next/image"


import React, { useEffect } from 'react';

function SideImages({images}) {
const {displayImage,setDisplayImage}=useGlobalContext()

const imgOnClickHandler = (i) => {
  setDisplayImage(i); 
};

useEffect(() => {
  // Set the first image as the initial display image on page load
  if (images.length > 0 && !displayImage) {
    setDisplayImage(images[0]);
  }
}, [images, displayImage, setDisplayImage]);




    const imgOnMd = "md:w-[90%] md:h-[15%]"
  return (
    
    <div className="flex flex-row  justify-between md:justify-start md:flex-col  gap-8 order-3 overflow-x-scroll md:overflow-x-hidden md:overflow-y-scroll max-w-[100%] whitespace-nowrap my-3 px-2 md:px-0 md:order-1 md:max-h-[100%] md:max-w-[30%] scrollbar-track-white scrollbar-thin scrollbar-thumb-slate-400">
        {images?.map(
            (i)=>(<Image width={100}
            height={250} src={i} alt="" className={`hover:border-2 hover:border-slate-900 md:mx-8`}  onClick={() => imgOnClickHandler(i)} key={i} />)
            
        )}
        
    </div>
    
    
  )
}

export default SideImages