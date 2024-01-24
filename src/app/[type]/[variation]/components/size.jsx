'use client'
import React, { useState, useEffect } from "react";



function SizeChart({sizes, id, setCartItem, cartItem }) {
  const [data, setData] = useState(null);
  const [active, setActive] = useState(null);
  // const [isLoading, setLoading] = useState(true);

  // useEffect(() => {

  //   fetch(`http://localhost:3000/api/product/${id}`)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setData(data);
  //       setLoading(false);
  //       // console.log(data);
  //     });
  // }, []);

  useEffect(
    () => {
    setCartItem({ ...cartItem, size: active?.size });
      
    },
  [active])


  const updateCartItem = (s) => {
    setActive(s);
     console.log(cartItem)
  }
 
  // if (isLoading) return <p>Loading...</p>;
  // if (!data) return <p>No profile data</p>;
  return (
    <div className="">
      <h1 className="mb-4 font-bold">Size</h1>

      <div className="flex justify-start  gap-4  columns-3 flex-wrap ">
        {sizes.map((s) => (
          <button
            className={`basis-[12%] py-1  text-sm border-[1px] border-slate-300 rounded ${
              active?.size === s.size ? "border-slate-900 border-2" : ""
            } `}
            key={s._id}
            onClick={() => updateCartItem(s)}
          >
            {s.size}
          </button>
        ))}
      </div>
      <p className="mt-2 ml-1">{active?.quantity}</p>

      <div className="mt-8">
        <h1 className="underline font-bold mb-5">Size Guide</h1>
      </div>
    </div>
  );
}

export default SizeChart;



  // const btns=[];
  // for(let i=23;i<=34;i++){
  //             btns.push(<button className='basis-[12%] py-2  text-sm border-[1px] border-slate-300 rounded'>{i}</button>)
  // }
    // const [active, setActive] = useState()