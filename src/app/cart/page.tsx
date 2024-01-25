"use client";
import Image from "next/image";
import menstapered from "../../assets/Mens_Tapered.jpg";
// import Cart from "@/models/cartModel";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import axios from "axios";
import Checkout from "./components/checkout";
import { useDispatch, useSelector } from "react-redux";
import OrderItem from "./components/orderItem";

function Cart() {
  const { data: session } = useSession();
  const [user_id, setUserId] = useState(null);
  const [cartData, setCartData] = useState(null);
  const [total, setTotal] = useState(0);
  const [shipping, setShipping] = useState(5);
  const [estimated_tax, setEstimated_tax] = useState(0);
  const [tax, setTax] = useState(5);
  const [address, setAddress] = useState();
  const [contact, setContact] = useState();
  const [email, setEmail] = useState();

  const dispatch = useDispatch();
  const { data, isLoading, isError } = useSelector((state) => state.cart);

  const { items, total_amount } = data;


  const calculateTotal = () => {
    const Etax = parseFloat(
      (cartData?.total_amount || 0) * (tax / 100)
    ).toFixed(2);
    setEstimated_tax(Etax);

    const t = (
      parseFloat(cartData?.total_amount || 0) +
      parseFloat(Etax) +
      shipping
    ).toFixed(2);
    setTotal(t);
  };

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
  }, [user_id, data]);

  useEffect(() => {
    calculateTotal();
  }, [cartData, shipping, tax, estimated_tax]);


  let content = null;
  

  if (session) {
    if (isLoading) content = <p>Loading...</p>;

    if (!isLoading && isError)
      content = <p className="error">There was an error occured</p>;
    
    if (!isLoading && !isError && items?.length > 0) {
      content = items?.map((item) => (
        <OrderItem item={item} key={item.id} user_id={user_id} />


      )  )}
  }

  return (
    <div className="md:px-10 px-5 mb-5">
      <div className="flex flex-col md:flex-row gap-10">
        <div className="md:w-[60%] w-full">
          <div className="flex justify-between   my-10 justify-items-center">
            <h1 className="font-bold justify-start text-xl">Shopping Bag</h1>
            <h1 className="text-lightc justify-end">
              {cartData?.items?.length} Items
            </h1>
          </div>

          <div className="flex  flex-col justify-between">
            {content}

            <div className="flex flex-col whitespace-nowrap items-end w-full bg-slate-300  ">
              <div className="hidden md:block">
                <h1>
                  Total <span className="font-bold">${total_amount}</span>
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

          <div>
            
            <div className="w-full  mt-10 relative group">
              <div className="relative">
                <input
                  type="text"
                  required
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  id="floating_outlined"
                  className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 focus:border-2 peer"
                  placeholder=" "
                />
                <label
                  for="floating_outlined"
                  className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-focus:font-bold peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                >
                  Address
                </label>
              </div>
            </div>
            <div className="w-full  mt-10 relative group">
              <div className="relative">
                <input
                  type="text"
                  required
                  value={contact}
                  onChange={(e) => setContact(e.target.value)}
                  id="contact"
                  className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 focus:border-2 peer"
                  placeholder=" "
                />
                <label
                  for="contact"
                  className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-focus:font-bold peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                >
                  Contact
                </label>
              </div>
            </div>
            <div className="w-full  mt-10 relative group">
              <div className="relative">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  id="email"
                  className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 focus:border-2 peer"
                  placeholder=" "
                />
                <label
                  for="email"
                  className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-focus:font-bold peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                >
                  Email
                </label>
              </div>
            </div>
            <div className=" flex justify-between mt-10">
              <h1 className="text-slate-400">Items</h1>
              <h1 className="">${cartData?.total_amount}</h1>
            </div>
            <div className="flex justify-between mt-10">
              <div>
                <h1 className="text-slate-400">Shipping</h1>
                {/* <p className="underline text-green-600">
                  Free shipping and returns
                </p> */}
              </div>
              <div className="">5$</div>
            </div>
            <div className="flex justify-between mt-10 mb-5">
              <div className="text-slate-400">Estimated tax</div>
              <div>
                {estimated_tax}(
                <span className="font-bold text-sm">{tax}%</span>)
              </div>
            </div>
            <hr />
            <div className="flex justify-between font-bold mt-8">
              <h1>Total</h1>
              <h1>${total}</h1>
            </div>
            <Checkout
              user_id={user_id}
              cartData={cartData}
              email={email}
              address={address}
              contact={contact}
              total={total}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
