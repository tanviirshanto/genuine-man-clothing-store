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
  
  // let user_id = "6579f7a87b7a6c3809d42a4d"
  // console.log(user_id)session?.user?.id;
  // const cartItems = useSelector((state) => state.cart.data);
const [user_id, setUserId] = useState(null);
  const [cartData, setCartData] = useState(null)
  // console.log(cartItems)
  const dispatch = useDispatch();
  
  const { data, isLoading, isError } = useSelector(
    (state) => state.cart
  );
  const { items, total_amount } = data;
  // useEffect(() => {
  //   // Fetch data from local storage
  //   const dataFromLocalStorage = JSON.parse(
  //     localStorage.getItem("cart")
  //   );

  //   if (dataFromLocalStorage) {
  //     // Dispatch action to update Redux state with data from local storage
  //     dispatch(setData(dataFromLocalStorage));
  //   }
  // }, [dispatch]);

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
  
  // Run the effect when session or user_id changes

  // useEffect(() => {
  //   // Fetch cart data when user_id is available
  //   if (user_id) {
  //     const fetchData = async () => {
  //       try {
  //         // console.log(user_id);
  //         const response = await axios.get(`/api/cart/getcart/${user_id}`);
  //         setCartData(response.data.p);
  //         // console.log(cartData)
  //       } catch (err) {
  //         console.error("Error fetching data:", err);
  //       }
  //     };
  //     fetchData();
  //   }
  // }, [user_id]);

useEffect(() => {
  dispatch(fetchCartItems({ user_id }));
}, [user_id]);

  
    let content = null;
    if (isLoading) content = <p>Loading...</p>;

    if (!isLoading && isError)
      content = <p className="error">There was an error occured</p>;

    if (!isLoading && !isError && items?.length > 0) {
      content = items?.map((i) =>
              {
                //  console.log(i);
                return (
                <SidebarItem
                  item={i}
                  key={i._id}
                />
              )})
    }

    if (!isLoading && !isError && items?.length === 0) {
      content = <p>No transactions found!</p>;
    }

  return (
    <div className="group">
      <div>
        <a
          className="cartzindex hover:text-slate-50 pr-3 md:text-lg font-medium flex items-center"
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
             
             
             {content}
              {/* {cartItems?.map((i) =>
              {
                //  console.log(i);
                return (
                <SidebarItem
                  item={i}
                  key={i._id}
                />
              )})} */}
              {/* <SidebarItem imgUrl={menstapered} />
              <SidebarItem imgUrl={menstapered} />

              <SidebarItem imgUrl={menstapered} />
              <SidebarItem imgUrl={menstapered} /> */}


              
            </div>
          </div>
          <div className="w-[90%] items-end my-5">
            <div className="flex justify-between font-semibold mb-5">
              <h1>Estimated Total</h1>
              <h1>{ total_amount }</h1>
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
