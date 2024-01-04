"use client";
import { useState,useEffect } from "react";
function Shipping({setCartItem, cartItem }) {
  const [smethod, setSmethod] = useState("");

  // const updateCartItem = (c) => {
  //   setCartItem({ ...cartItem, shippingMethod: c });
  //   setSmethod(c)
  //   console.log(cartItem);
  // };

  useEffect(() => {
    setCartItem({ ...cartItem, shippingMethod: smethod });
    // console.log(cartItem);
  }, [smethod]);


  return (
    <div className="flex justify-around md:ml-0  mx-7 gap-3 ">
      <button
        className={`font-bold border-[1px] border-slate-300 rounded w-full py-5 px-3 text-left ${
          smethod === "Pick up in store" ? "border-slate-900 border-[2px]" : ""
        } `}
        onClick={() => setSmethod("Pick up in store")}
      >
        Pick up in store{" "}
        <p className="text-xs font-normal text-slate-400 text-left mt-1">
          Select size to see if item is in stock
        </p>
      </button>
      <button
        className={`font-bold border-[1px] border-slate-300 rounded w-full py-5 px-3 text-left ${
          smethod === "Ship" ? "border-slate-900 border-[2px]" : ""
        } `}
        onClick={() => setSmethod("Ship")}
      >
        Ship{" "}
        <p className="text-xs font-normal text-slate-400 text-left mt-1">
          Select size to see if item is in stock
        </p>
      </button>
    </div>
  );
}

export default Shipping;
