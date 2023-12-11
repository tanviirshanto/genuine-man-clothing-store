"use client";

import { FaCartShopping } from "react-icons/fa6";
import menstapered from "../../assets/Mens_Tapered.jpg";
import SidebarItem from "./SidebarItem";

function CartView() {
  return (
    <div className="group ">
      <div>
        <a
          className="cartzindex hover:text-slate-50 pr-3 md:text-lg font-medium flex items-center "
          href={`/cart`}
        >
          <FaCartShopping />
        </a>
      </div>
      <div className="sidebarz sbar md:group-hover:w-[550px]  group-hover:transition-all  absolute group-hover:duration-500 right-0 top-0 overflow-hidden ">
        <div className="relative  pt-8 flex flex-col justify-between text-slate-50 h-[95%] pl-5 pr-1">
          <div className="text-slate-50 ">
            <div className="flex justify-center items-center">
            <a href="/cart" className="mr-14">
                <FaCartShopping />
              </a>
            </div>
            <div className="flex text-center">
              <h1 className="text-lg font-bold">
                <a href={`/cart`}>Your bag</a>{" "}
              </h1>{" "}
              
            </div>
            <div className="mt-5 mb-3">
              Lorem ipsum dolor sit amet consectetur adipisicing.
            </div>

            <div className="overflow-y-scroll overflow-x-hidden  whitespace-nowrap h-[400px] w-[90%] mx-auto scrollbar-track-white scrollbar-thin scrollbar-thumb-slate-400 ">
              <SidebarItem imgUrl={menstapered} />
              <SidebarItem imgUrl={menstapered} />

              <SidebarItem imgUrl={menstapered} />
              <SidebarItem imgUrl={menstapered} />
            </div>
          </div>
          <div className="w-[90%] items-end my-5">
            <div className="flex justify-between font-semibold mb-5">
              <h1>Estimated Total</h1>
              <h1>78.98$</h1>
            </div>
            <button className="bg-slate-50 text-slate-950 w-full py-3 font-bold">
              <a href={`/cart`}>Check Out</a>{" "}
            </button>{" "}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartView;
