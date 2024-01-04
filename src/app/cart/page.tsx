"use client";
import Image from "next/image";
import menstapered from "../../assets/Mens_Tapered.jpg";
// import Cart from "@/models/cartModel";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import axios from "axios";

function Cart() {
  const { data: session } = useSession();
  const [user_id, setUserId] = useState(null);
  const [cartData, setCartData] = useState(null);
  
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

  useEffect(() => {
    // Fetch cart data when user_id is available
    if (user_id) {
      const fetchData = async () => {
        try {
          console.log(user_id);
          const response = await axios.get(`/api/cart/getcart/${user_id}`);
          setCartData(response.data.p);
          // console.log(cartData)
        } catch (err) {
          console.error("Error fetching data:", err);
        }
      };
      fetchData();
    }
  }, [user_id]);

  return (
    <div className="md:px-10 px-5 mb-5">
      <div className="flex flex-col md:flex-row gap-10">
        <div className="md:w-[60%] w-full">
          <div className="flex justify-between   my-10 justify-items-center">
            <h1 className="font-bold justify-start text-xl">Shopping Bag</h1>
                      <h1 className="text-lightc justify-end">{cartData?.items?.length} Items</h1>
          </div>

          <div className="flex  flex-col justify-between">
                      {cartData?.items?.map((c) => {
                const { id, variation, clothtype,name } = c;
              return (
                <div className="flex" key={c._id}>
                  <div className="md:h-60 w-32 h-40 relative">
                    <Image width={800} height={800} src={c.image} alt="" />
                  </div>
                  <div className="flex flex-col justify-between  md:h-60 h-40 md:ml-10 ml-5  ">
                    <div className="md:w-[70%] w-full text-xs md:text-lg leading-loose  ">
                      <a href={`/${clothtype}/${variation}/${name}/${id}`}>
                        <h1 className="font-semibold">{c.name}</h1>
                      </a>
                      <h1 className="text-lightc">
                        Firefly Brite - Light Wash
                      </h1>
                      <h1>
                        <span className="font-medium">{c.price}</span>
                        <span className="line-through text-lightc md:ml-5 ml-2">
                          $69.50
                        </span>
                      </h1>
                      <div className="flex flex-col md:flex-row md:gap-10 gap-3 mb-4">
                        <h1>{c.size}</h1>
                        <h1>
                          Qty: <span>-{c.quantity}+</span>
                        </h1>
                      </div>
                      <div className="flex  gap-2  text-lightc text-xs mt-5">
                        <h1 className="md:hidden text-slate-950">
                          Total <span className="font-bold">$34.99</span>
                        </h1>
                        <h1 className="underline">Move to favorites</h1>{" "}
                        <h1 className="underline hidden md:block ml-8 ">
                          Remove
                        </h1>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}

            <div className="flex flex-col whitespace-nowrap items-end w-full bg-slate-300  ">
              <div className="hidden md:block">
                <h1>
                                  Total <span className="font-bold">${ cartData?.total_amount}</span>
                </h1>
              </div>
            </div>
          </div>
        </div>

        {/* right column */}
        <div
          className="md:w-[40%] 
            w-full my-10"
        >
          <div className="md:text-xl md:text-left text-center font-bold whitespace-nowrap">
            Payment Summery
          </div>
          <div className="flex justify-between mt-4 whitespace-nowrap">
            <div>
              {" "}
              <h1 className="font-bold">Promotions</h1>
            </div>
            <div>
              <h1 className="underline text-slate-400">Promo Details</h1>
            </div>
          </div>
          <div>
            <div className="w-full  mt-10 relative group">
              <input
                type="text"
                id="username"
                required
                className="w-full h-10 px-4 text-sm peer outline-none border-b-2 border-slate-600 "
              />
              <label className="transform transition-all absolute top-0 left-0 h-full flex items-center  text-sm group-focus-within:text-xs peer-valid:text-xs group-focus-within:h-1/2 peer-valid:h-1/2 group-focus-within:-translate-y-full peer-valid:-translate-y-full group-focus-within:pl-0 peer-valid:pl-0 text-slate-500">
                Promo code
              </label>
            </div>

            <div className=" flex justify-between mt-10">
              <h1 className="text-slate-400">Items</h1>
              <h1 className="">$93.5</h1>
            </div>
            <div className="flex justify-between mt-10">
              <div>
                <h1 className="text-slate-400">Shipping</h1>
                <p className="underline text-green-600">
                  Free shipping and returns
                </p>
              </div>
              <div>Free</div>
            </div>

            <div className="flex justify-between mt-10 mb-5">
              <div className="text-slate-400">Estimated tax</div>
              <div>Calculated in checkout</div>
            </div>
            <hr />
            <div className="flex justify-between font-bold mt-8">
              <h1>Total</h1>
              <h1>$98.38</h1>
            </div>

            <div className="mt-5">
              <button className="w-full bg-black text-slate-50 py-3">
                {" "}
                Check out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
