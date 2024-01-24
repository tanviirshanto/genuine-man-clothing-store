import Image from 'next/image';
import React from 'react'
import { useDispatch } from "react-redux";
import { removeCartItem } from "@/redux/cartSlice";


function OrderItem({ item, user_id }) {
    
  const dispatch = useDispatch();

   const { _id,id, variation, clothtype, name,image,price,size, quantity} = item;

  const postData = {
    userid: user_id,
    id: item.id,
    };
    
  async function handleRemove(e) {
    e.preventDefault();
    // console.log(id);
    dispatch(removeCartItem(postData));
  }
    
   return (
     <div className="flex" key={_id}>
       <div className="md:h-60 w-32 h-40 relative">
         <a href={`/${clothtype}/${variation}/${name}/${id}`}>
           {" "}
           <Image width={800} height={800} src={image} alt="" />
         </a>
       </div>
       <div className="flex flex-col justify-between  md:h-60 h-40 md:ml-10 ml-5  ">
         <div className="md:w-[70%] w-full text-xs md:text-lg leading-loose  ">
           <a href={`/${clothtype}/${variation}/${name}/${id}`}>
             <h1 className="font-semibold">{name}</h1>
           </a>
           {/* <h1 className="text-lightc">{ color }</h1> */}
           <h1>
             <span className="font-medium text-sm">{price}</span>
             <span className="line-through text-lightc md:ml-5 ml-2 text-sm">
               $69.50
             </span>
           </h1>
           <div className="flex flex-col md:flex-row md:gap-10 gap-3 mb-4 text-sm ">
             <h1>{size}</h1>
             <h1>
               Qty: <span>-{quantity}+</span>
             </h1> 
           </div>
           <div className="flex  gap-2  text-lightc text-xs mt-5">
             <h1 className="md:hidden text-slate-950">
               Total <span className="font-bold">$34.99</span>
             </h1>
             <h1 className="underline">Move to favorites</h1>{" "}
             <button
               className="underline hidden md:block ml-8 "
               onClick={handleRemove}
             >
               {" "}
               Remove
             </button>
           </div>
         </div>
       </div>
     </div>
   );
}

export default OrderItem