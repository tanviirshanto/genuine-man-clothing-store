/* eslint-disable react/prop-types */

import Image from "next/image"


function ItemCard({imgUrl}) {
  return (
    <div className="basis-1/4 flex flex-col items-center flex-grow-0 flex-shrink-0">
 <Image width="0"
  height="0" src={imgUrl} className="rounded transition-transform duration-300 transform hover:scale-110  w-64 h-auto"
     alt=""  />
     <div className="w-64">
         <p className=" pt-4 text-md ">
514™ STRAIGHT FIT LEVI{"'"}S® FLEX MEN{"'"}S JEANS </p>
             <p className="text-md pt-1 text-red-500 font-bold pb-3">Tk. 2000</p>
     </div>
    
 </div>
  )
}

export default ItemCard