"use client"
import Image from 'next/image';
import React from 'react'
import TypewriterComponent from 'typewriter-effect';
import Mens_Bootcut from '../../assets/Mens_Bootcut.jpg'

function RowOne() {
  return (
    <div className=" text-center  md:h-screen bg-slate-900 ">
      <div className="h-[90%] w-[90%] mx-auto  flex  flex-col md:flex-row">
        {/* <h1 className='md:text-8xl text-3xl font-extrabold bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-transparent bg-clip-text animate-gradient  '>Early Winter <span className='text-red-600 animate-pulse'>Sale</span> <br />  Going On!</h1> */}
        <div className='w-1/2 h-[200px] md:h-[300px]'>
          <TypewriterComponent
            options={{
              strings: [
                "<h1 class='md:text-8xl text-3xl font-extrabold bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-transparent bg-clip-text animate-gradient  '>Early Winter <span className='text-red-600 animate-pulse'>Sale</span> <br />  Going On!</h1>",
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
        <div className='w-1/2 flex justify-center'>
          <Image src={Mens_Bootcut} alt="" height={400} width={300} />
        </div>
      </div>
    </div>
  );
}

export default RowOne