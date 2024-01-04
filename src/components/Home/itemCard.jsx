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
    <div className="basis-1/4 flex flex-col items-center flex-grow-0 flex-shrink-0">
      <Image
        width={900}
        height={900}
        src={images[0]}
        className="rounded transition-transform duration-300 transform hover:scale-110  h-auto"
        alt=""
      />
      <div className="">
        <a href={`/${clothtype}/${variation}/${name}/${_id}`}>{" "}
        <p className=" pt-4 text-md ">{name}</p></a>
        <p className="text-md pt-1 text-red-500 font-bold pb-3">{price}$</p>
        <div className="w-full bg-slate-400">
          <button
            className="bg-black text-slate-50 w-full py-1"
            onClick={addTC}
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ItemCard