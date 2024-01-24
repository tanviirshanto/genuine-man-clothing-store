'use client'
import useGlobalContext from '@/app/Context/store'
import Image from 'next/image'
// import './Magnifier.css';
import React, { useEffect,useRef } from 'react';

import OneBack from '../assets/OneBack.jpg'

function MainImg({firstImage}) {
const {displayImage,setDisplayImage}=useGlobalContext()
// console.log(displayImage)



  return (
    
      <div className="order-2 flex justify-center 
      md:h-[800px] mx-5" >
      
      <Image src={displayImage} width={900} height={500} alt="Your Image"  />
     
      
      </div>
    
  )
}

export default MainImg