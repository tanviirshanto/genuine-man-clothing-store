'use client'

import { FaCartShopping } from "react-icons/fa6";
import menstapered from "../../assets/Mens_Tapered.jpg";
import SidebarItem from "./SidebarItem";
import { useSession } from "next-auth/react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { fetchCartItems, setData } from "@/redux/cartSlice";

function CartView() {
  const { data: session } = useSession();

  const [user_id, setUserId] = useState(null);
  const [cartData, setCartData] = useState(null)
  // console.log(cartItems)
  const dispatch = useDispatch();
  

  const { data, isLoading, isError } = useSelector(
    (state) => state.cart
  );
  const { items=[], total_amount } = data || {};


const [isOpen, setIsOpen] = useState(false);


  useEffect(() => {
    // If session is available and user_id is not set
    if (session && !user_id) {
      const getUserId = async () => {
        const id = session?.user?.id;
        setUserId(id);
      };
      getUserId();
    }
  }, [session, user_id]);
  


  useEffect(() => {
    if (!session) {
      const datafromlocalstorage = localStorage.getItem("cartItems");

      if (datafromlocalstorage !== "undefined") {
        dispatch(setData(JSON.parse(datafromlocalstorage)));

      }
    }
  }, []);
  

  useEffect(() => {
  if(session)
  dispatch(fetchCartItems({ user_id }));
}, [user_id]);

  
  let content = null;
  

  if (session) {
    if (isLoading) content = <p>Loading...</p>;

    if (!isLoading && isError)
      content = <p className="error">There was an error occured</p>;

    if (!isLoading && !isError && items?.length > 0) {
      content = items?.map((i) =>
              {
                //  console.log(i);
                return <SidebarItem item={i} key={i._id} user_id={user_id} />;})
    }

    if (!isLoading && !isError && items?.length === 0) {
      content = <p>No transactions found!</p>;
    }
  }
  else {
    content = items?.map((i) => {
      //  console.log(i);
      return <SidebarItem item={i} key={i._id}  />;
    });
  }
const forcartview = "transition-all w-[550px] duration-500";
  return (
    <div className="group">
      <div>
        <button className="cartzindex hover:text-slate-50  md:text-lg font-medium  items-center  top-10 right-10 hidden md:block ">
          <FaCartShopping />
        </button>
        <button
          className="cartzindex hover:text-slate-50  md:text-lg font-medium  items-center  top-10 right-10 flex md:hidden "
          onClick={() => setIsOpen(!isOpen)}
        >
          <FaCartShopping />
        </button>
      </div>
      <div
        className={`cartzindex sbar md:group-hover:w-[550px]  group-hover:transition-all h-[100vh] absolute group-hover:duration-500 right-0 top-0 overflow-hidden ${
          isOpen ? "sbarOpen" : ""
        }`}
      >
        <div className="relative  pt-8 flex flex-col  text-slate-50  pl-5 pr-1 object-contain">
          <div className="text-slate-50 h-[75vh]">
            <div className="flex justify-center items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="md:mr-14 md:hidden"
              >
                <FaCartShopping />
              </button>
              <a href={`/cart`} className="md:mr-14 hidden md:block">
                <FaCartShopping />
              </a>
            </div>
            <div className="flex text-center">
              <h1 className="text-lg font-bold">
                <a href={`/cart`}>Your bag</a>{" "}
              </h1>{" "}
            </div>
            <div className="mt-5 mb-3 whitespace-normal">
              Lorem ipsum dolor sit amet consectetur adipisicing.
            </div>

            <div className="overflow-y-scroll overflow-x-hidden  whitespace-nowrap h-[70%] w-[90%] mx-auto scrollbar-track-white scrollbar-thin scrollbar-thumb-slate-400 ">
              {content}
            </div>
          </div>
          <div className="w-[90%] items-end ">
            <div className="flex justify-between font-semibold mb-2 ">
              <h1>Estimated Total</h1>
              <h1>${session ? total_amount : ""}</h1>
            </div>
            <button className="bg-slate-50 text-slate-950 w-full py-3 font-bold mb-5">
              <a href={`/cart`}>Go to Order Page</a>{" "}
            </button>{" "}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartView;
