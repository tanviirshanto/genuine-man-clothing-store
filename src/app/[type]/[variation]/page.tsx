'use client'
import Star from "./components/star";
import Color from "./components/color";
import SizeChart from "./components/size";
import Quantity from "./components/quantity";
import Shipping from "./components/shipping";
import AddToBag from "./components/addtobag";
import Description from "./components/description";

import Image from "next/image";
import {connect} from '../../../dbConfig/dbConfig'
import Product from '@/models/productModel';
import SideImages from './components/sideImages'
import MainImg from "./components/mainImg";




export async function GetProduct() {
  connect()
  const p=await Product.findOne({_id:"6571dd1ff1f83cb4e9875b3c"})
  console.log(p)
  return p
  
}

async function ViewProduct() {
  const ps=await GetProduct()
  // const [displayImg,setDisplayImg]=useState(mensbootcut)

  const imgOnMd = "md:w-[90%] md:h-[15%]"
  return (
    <div>
      
      <div className="hidden md:block  text-md px-2 items-center justify-start md:ml-12 md:mb-10 mt-8 ">
        
        <ul className="flex">
            <li><a href="" className="underline">Clothing</a>
          {" / "}</li>
          <li><a href="" className="underline">Men</a>
          {" / "}</li>
          <li><a href="" className="underline">Jeans</a>
          {" / "}</li>
          <li><a href="" className="underline">Straight</a>
          {" / "} 501® Original Fit Men{"'"}s Jeans</li>
        </ul>
      </div>


      <div className="">
      <div className="gap-3 md:mx-14">
        
      <div className="flex flex-col md:flex-row md:max-h-fit md:justify-between md:gap-14 ">
      <div className="ml-7 md:hidden">
      <p className="underline md:hidden mb-8 text-sm">Clothings</p>
        <p className="font-bold text-lg pb-2">Low Pro Men{"'"}s Jeans</p>
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

          {/* side images */}
        {/* <div className="flex flex-row  justify-between md:justify-start md:flex-col  gap-3 order-3 overflow-x-scroll md:overflow-x-hidden md:overflow-y-scroll max-w-[100%] whitespace-nowrap my-3 px-2 md:px-0 md:order-1 md:max-h-[900px] md:max-w-[10%] ">
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
        </div> */}
  <SideImages images={ps.images}/>
  <MainImg firstImage={ps.images[0]} />
        {/* main image */}
        {/* <div className="order-2  flex justify-center">
          <Image width="0"
  height="0" src={displayImg} alt="" className="max-w-[100%] max-h-[850px]             " />
        </div> */}

        {/* rightmost column */}
        <div className="order-3 ">
          <div className="hidden md:block"><p className="font-bold">{ps.name}</p>
          <Star/>
          <p className="font-bold pt-2">{ps.price}$</p>
          <p className="text-[10px] text-slate-500 pt-2">
            Or 4 installments of $19.88 by afterpay
          </p>
          <p className="text-red-500 text-xs pt-2">
            {" "}
            Buy 2+, Get 30% Off: Applied at checkout
          </p>
          </div>
          <div className=" ml-7 md:ml-0">
            <Color />
          </div>
          <div className="ml-7 md:ml-0 mr-5 mb-5">
            <SizeChart sizes={ps.sizes}/>
          </div>
          <div className="my-7 mr-8 ml-7 md:ml-0">
            <Quantity />
          </div>
          <div>
            <Shipping/>
          </div>

          <AddToBag/>

        </div></div></div>
       
            
          
      </div>

      <Description description={ps.description} descriptionlist={ps.descriptionlist} howitfits={ps.howitfits} composition_care={ps.composition_care} />
      {/* <Maylike/> */}
    </div>
  );
}

export default ViewProduct;
