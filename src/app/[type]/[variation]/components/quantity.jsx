'use client'

import { useState } from "react";

function Quantity() {
    const [count,setCount]=useState(1)
    const decreaseCount=()=>{
        if(count!==1){
            setCount(count-1)
        }
    } 
  return (
    <div>
      
      
      <div className="flex justify-between items-center font-bold">
        <h1>Select Quantity</h1>
        <div className="flex gap-5 items-center">
            <h1 onClick={decreaseCount} className="cursor-pointer select-none text-xl text-slate-400">
                -
            </h1>
            <h1 className="select-none text-sm">
                {count}
            </h1>
            <h1 onClick={()=>setCount(count+1)} className="cursor-pointer select-none text-xl">
                +
            </h1>
        </div>

      </div>
    </div>
  );
}

export default Quantity;
