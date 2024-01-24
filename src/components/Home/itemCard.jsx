/* eslint-disable react/prop-types */
 'use client'
import axios from "axios"
import Image from "next/image"
// import { useState } from "react"

// const addToCart = () => {
//   axios.post(`/api/cart/${userId}`)
// }

import { useSelector, useDispatch } from "react-redux";
import {addtocart} from '../../redux/cartSlice' 

function ItemCard({ xyz }) {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart);
  // const [cart, setCart] = useState()
  const addTC = ()=>{
    dispatch(addtocart(parsedObject))
     console.log(cartItems)
  }
  const parsedObject=JSON.parse(xyz)
  const {  _id, name,  clothtype, variation, images, price} = parsedObject;
  // console.log(name);
  return (
    <div className="md:basis-1/5 basis-1/3 flex flex-col items-center flex-grow-0 flex-shrink-0">
      <Image
        width={250}
        height={350}
        src={images[0]}
        className="rounded transition-transform duration-300 transform hover:scale-110 w-56 h-50"
        alt=""
      />
      <div className="w-48">
        <a href={`/${clothtype}/${variation}/${name}/${_id}`}>
          {" "}
          <p className=" pt-4 text-md text-sm text-[#333333] font-semibold line-clamp-2">
            {name}
          </p>
        </a>
        <p className="text-md pt-1 text-red-500 font-bold pb-3">{price}$</p>
        {/* <div className="w-full bg-slate-400">
          <button
            className="bg-black text-slate-50 w-full py-1"
            onClick={addTC}
          >
            Add to cart
          </button>
        </div> */}
      </div>
    </div>
  );
}

export default ItemCard