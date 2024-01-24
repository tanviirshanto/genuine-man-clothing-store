// import React from "react";
import oneBack from '../../assets/oneBack.jpg'
import oneFront from '../../assets/oneFront.jpg'
import twoBack from '../../assets/twoBack.jpg'
// import threeBack from '../assets/threeBack.jpg'
import twoFront from '../../assets/twoFront.jpg'
import threeFront from '../../assets/threeFront.jpg'
import Image from 'next/image'





function RowFour() {
 return (
   <div className="z-10">
     <div className="pb-10 ">
       <div className="   ">
         <div className=" text-slate-900 text-4xl font-bold  flex items-center justify-center my-10 ">
           <h1>Shirts</h1>
         </div>
         <div className="flex justify-between items-center pt-3 px-3 gap-3 overflow-x-scroll min-w-full scrollbar-track-white scrollbar-thin scrollbar-thumb-slate-400">
           <div className="">
             <Image
               src={oneFront}
               className="rounded transition-transform duration-300 transform hover:scale-110 w-40 h-50"
               alt=""
             />
             <p className="pl-12 pt-4 text-xs font-bold">Mens Tapered</p>
             <p className="text-xs text-red-500 pl-16 font-semibold pb-3">
               Tk. 2000
             </p>
           </div>
           <div>
             <Image
               width="0"
               height="0"
               src={oneBack}
               className="rounded transition-transform duration-300 transform hover:scale-110 w-40 h-50"
               alt=""
             />
             <p className="pl-12 pt-4 text-xs font-bold">Mens Tapered</p>
             <p className="text-xs text-red-500 pl-16 font-semibold pb-3">
               Tk. 2000
             </p>
           </div>

           <div>
             <Image
               width="0"
               height="0"
               src={twoFront}
               className="rounded transition-transform duration-300 transform hover:scale-110 w-40 h-50"
               alt=""
             />
             <p className="pl-12 pt-4 text-xs font-bold">Mens Tapered</p>
             <p className="text-xs text-red-500 pl-16 font-semibold pb-3">
               Tk. 2000
             </p>
           </div>
           <div>
             <Image
               width="0"
               height="0"
               src={twoBack}
               className="rounded transition-transform duration-300 transform hover:scale-110 w-40 h-50"
               alt=""
             />
             <p className="pl-12 pt-4 text-xs font-bold">Mens Tapered</p>
             <p className="text-xs text-red-500 pl-16 font-semibold pb-3">
               Tk. 2000
             </p>
           </div>
           <div>
             <Image
               width="0"
               height="0"
               src={threeFront}
               className="rounded transition-transform duration-300 transform hover:scale-110 w-40 h-50"
               alt=""
             />
             <p className="pl-12 pt-4 text-xs font-bold">Mens Tapered</p>
             <p className="text-xs text-red-500 pl-16 font-semibold pb-3">
               Tk. 2000
             </p>
           </div>
         </div>
       </div>
     </div>
   </div>
 );
}

export default RowFour;
