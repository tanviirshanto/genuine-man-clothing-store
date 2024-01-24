"use client";
import useGlobalContext from "@/app/Context/store";
import Image from "next/image";

import React, { useEffect } from "react";

function SideImages({ images }) {
  const { displayImage, setDisplayImage } = useGlobalContext();

  const imgOnClickHandler = (i) => {
    setDisplayImage(i);
  };

  useEffect(() => {
    // Set the first image as the initial display image on page load
    if (images.length > 0 && !displayImage) {
      setDisplayImage(images[0]);
    }
  }, [images, displayImage, setDisplayImage]);

  // const imgOnMd = "md:w-[90%] md:h-[15%]";
  
  return (
    <div className="scroll-container order-3 md:order-1">
      <div className="  overflow-x-scroll md:overflow-x-hidden md:overflow-y-scroll  whitespace-nowrap  md:h-[800px]   scroll-content ">
        <div className="flex flex-row  justify-between md:justify-start md:flex-col max-w-[100%] md:mr-4">
          {images?.map((i) => (
            <Image
              width={200}
              height={250}
              src={i}
              alt=""
              className={`hover:border-2 hover:border-slate-900  md:w-full ${
                displayImage === i ? "border-2 border-slate-900" : ""
              } md:mb-4 mr-3`}
              onClick={() => imgOnClickHandler(i)}
              key={i}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default SideImages;


// scrollbar-track-white scrollbar-thin scrollbar-thumb-slate-400 scrollbar-rounded-[20px]