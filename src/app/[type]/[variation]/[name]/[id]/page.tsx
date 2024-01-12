//@ts-nocheck
"use client";
import React, { useState, useEffect } from "react";

import Star from "../../components/star";
import Color from "../../components/color";
import SizeChart from "../../components/size";
import Quantity from "../../components/quantity";
import Shipping from "../../components/shipping";
import AddToBag from "../../components/addtobag";
import Description from "../../components/description";

import Image from "next/image";
import { connect } from "../../../../../dbConfig/dbConfig";
import Product from "@/models/productModel";
import SideImages from "../../components/sideImages";
import MainImg from "../../components/mainImg";
import  axiosInstance  from "@/utils/axios";
import { useSelector, useDispatch } from "react-redux";
import { useSession } from "next-auth/react";

// export async function GetProduct(prodId) {
//   connect();
//   const p = await Product.findOne({ _id: prodId });
//   // console.log(p);   
//   return p;
// }

function ViewProduct({ params }: any) {
  //cartItem is which item we want to add in cart
  const [cartItem, setCartItem] = useState(null);
  //item is the displayed product
  const [item, setItem] = useState(null);
  const [isLoading, setLoading] = useState(true);

  const cartItems = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    fetch(`http://localhost:3000/api/product/${params.id}`)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data)
        setItem(data.p);
        setLoading(false);
        //initially we set cart item from the item loaded
        setCartItem({
          ...cartItem,
          item_id: data?.p._id,
          name: data.p.name,
          image: data.p.images[0],
          color: data.p.color[0].name,
          quantity: 1,
          shippingMethod: "Ship",
          price: data.p.price,
          size: data.p.sizes[2].size,
          variation: data.p.variation,
          clothtype:data.p.clothtype
        });
        // console.log(data);
        // console.log(data.p.color);
      });
    
    
  }, []);

  // const item = await GetProduct(params.id);
  // const [displayImg,setDisplayImg]=useState(mensbootcut)

  const imgOnMd = "md:w-[90%] md:h-[15%]";

  if (isLoading) return <p>Loading...</p>;
  if (!item) return <p>No profile data</p>;

  return (
    <div>
      <div className="hidden md:block  text-md px-2 items-center justify-start md:ml-12 md:mb-10 mt-8 ">
        <ul className="flex text-xs">
          <li>
            <a href="" className="underline pr-1">
              Clothing
            </a>
            {"  /  "}
          </li>
          <li>
            <a href="" className="underline  px-1">
              {params.type}
            </a>
            {"  / "}
          </li>
          <li>
            <a href="" className="underline px-1">
              {params.variation}
            </a>
            {" / "}
          </li>
          <li className="pl-1">{item?.name}</li>
        </ul>
      </div>

      <div className="">
        <div className="gap-3 md:mx-14">
          <div className="flex flex-col md:flex-row md:max-h-fit md:justify-between md:gap-14 ">
            <div className="ml-7 md:hidden">
              <p className="underline md:hidden mb-8 text-sm">Clothings</p>
              <p className="font-bold text-lg pb-2">{params.name}</p>
              <Star />
              <p className="font-bold pt-2">$79.50</p>
              <p className="text-[10px] text-slate-500 pt-2">
                Or 4 installments of $19.88 by afterpay
              </p>
              <p className="text-red-500 text-xs pt-3 pb-3">
                {" "}
                Buy 2+, Get 30% Off: Applied at checkout
              </p>
            </div>

            <SideImages images={item?.images} />
            <MainImg firstImage={item?.images[0]} />
            {/* main image */}
            {/* <div className="order-2  flex justify-center">
          <Image width="0"
  height="0" src={displayImg} alt="" className="max-w-[100%] max-h-[850px]             " />
        </div> */}

            {/* rightmost column */}
            <div className="order-3 md:h-auto flex flex-col justify-between ">
              <div>
                <div className="hidden md:block">
                  <p className="font-bold">{item?.name}</p>
                  <Star />
                  <p className="font-bold pt-2">{item?.price}$</p>
                  <p className="text-[10px] text-slate-500 pt-2">
                    Or 4 installments of $19.88 by afterpay
                  </p>
                  <p className="text-red-500 text-xs pt-2">
                    {" "}
                    Buy 2+, Get 30% Off: Applied at checkout
                  </p>
                </div>
                <div className=" ml-7 md:ml-0">
                  <Color
                    colors={item.color}
                    setCartItem={setCartItem}
                    cartItem={cartItem}
                  />
                </div>
                <div className="ml-7 md:ml-0 mr-5 mb-5">
                  <SizeChart
                    id={params.id}
                    setCartItem={setCartItem}
                    cartItem={cartItem}
                  />
                </div>
                <div className="my-7 mr-8 ml-7 md:ml-0">
                  <Quantity
                    id={params.id}
                    setCartItem={setCartItem}
                    cartItem={cartItem}
                    price={item.price}
                  />
                </div>
                <div>
                  <Shipping
                    id={params.id}
                    setCartItem={setCartItem}
                    cartItem={cartItem}
                  />
                </div>
              </div>

              <AddToBag price={item.price} cartItem={cartItem}  />
            </div>
          </div>
        </div>
      </div>

      <Description
        description={item?.description}
        descriptionlist={item?.descriptionlist}
        howitfits={item?.howitfits}
        composition_care={item?.composition_care}
      />
      {/* <Maylike/> */}
    </div>
  );
}

export default ViewProduct;



































{
  /* side images */
}
{
  /* <div className="flex flex-row  justify-between md:justify-start md:flex-col  gap-3 order-3 overflow-x-scroll md:overflow-x-hidden md:overflow-y-scroll max-w-[100%] whitespace-nowrap my-3 px-2 md:px-0 md:order-1 md:max-h-[900px] md:max-w-[10%] ">
          <Image width="0"
  height="0" src={oneBack} alt="" className={`w-18  h-24 ${imgOnMd} hover:border-2 hover:border-slate-900`}  onClick={()=>setDisplayImg(oneBack)}/>
          <Image width="0"
  height="0" src={oneFront} alt="" className={`w-18  h-24 ${imgOnMd} hover:border-2 hover:border-slate-900`}  onClick={()=>setDisplayImg(oneFront)}/>
          <Image width="0"
  height="0" src={oneBack} alt="" className={`w-18  h-24 ${imgOnMd} hover:border-2 hover:border-slate-900`}  onClick={()=>setDisplayImg(oneBack)}/>
          <Image width="0"
  height="0" src={oneFront} alt="" className={`w-18  h-24 ${imgOnMd} hover:border-2 hover:border-slate-900`}  onClick={()=>setDisplayImg(oneFront)}/>
          <Image width="0"
  height="0" src={oneBack} alt="" className={`w-18  h-24 ${imgOnMd} hover:border-2 hover:border-slate-900`}  onClick={()=>setDisplayImg(oneBack)}/>
          <Image width="0"
  height="0" src={oneBack} alt="" className={`w-18  h-24 ${imgOnMd} hover:border-2 hover:border-slate-900`}  onClick={()=>setDisplayImg(oneBack)}/>
          <Image width="0"
  height="0" src={oneFront} alt="" className={`w-18  h-24 ${imgOnMd} hover:border-2 hover:border-slate-900`} onClick={()=>setDisplayImg(oneBack)} />
          <Image width="0"
  height="0" src={oneBack} alt="" className={`w-18  h-24 ${imgOnMd} hover:border-2 hover:border-slate-900`}  onClick={()=>setDisplayImg(oneBack)}/>
          <Image width="0"
  height="0" src={oneFront} alt="" className={`w-18  h-24 ${imgOnMd} hover:border-2 hover:border-slate-900`}  onClick={()=>setDisplayImg(oneBack)}/>
          <Image width="0"
  height="0" src={oneBack} alt="" className={`w-18  h-24 ${imgOnMd} hover:border-2 hover:border-slate-900`}  onClick={()=>setDisplayImg(oneBack)}/>
        </div> */
}
