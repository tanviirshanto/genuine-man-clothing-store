'use client'
import { useEffect, useRef, useState } from "react";

function Color({ colors, setCartItem, cartItem }) {
  const [colorName, setColorName] = useState(null);
  const [clrcode, setClrcode] = useState("#55FF33");

  const [className, setClassName] = useState("hidden");
  const showRef = useRef(null);

  useEffect(() => {
    setCartItem({ ...cartItem, color: colorName });
    // console.log(cartItem);
  }, [colorName]);

  // const updateCartItem = (c) => {
  //   setCartItem({ ...cartItem, color: c.name })
  //   setColorName(c.name);
  //   // console.log(c.name);
  //     console.log(cartItem);
  // }

if (colors==="") return <p></p>;
  return (
    <div className="my-5">
      <h1 className="text-slate-500 mb-3">{colorName}</h1>{" "}
      <div className="flex justify-start flex-col ">
        <div className=" flex gap-3 mb-2">
          {colors?.map((c) => {
            // console.log(c);
            // setClrcode(c?.code)
            return (
              <div
                className={`rounded-full w-8 h-8  border-4 border-slate-100 hover:bg-slate-800 `}
                style={{ backgroundColor: `${c.code}` }}
                key={c?.name}
                onClick={() => setColorName(c.name)}
              ></div>
            );
          })}

          {/* <div
            className="rounded-full w-8 h-8 bg-green-500 border-4 border-slate-100 hover:bg-green-400 outline-10 outline-slate-900"
            onClick={() => setColorName("Green")}
          ></div>
          <div
            className="rounded-full w-8 h-8 bg-red-500 border-4 border-slate-100 hover:bg-red-400"
            onClick={() => setColorName("Red")}
          ></div>
          <div
            className="rounded-full w-8 h-8 bg-pink-500 border-4 border-slate-100 hover:bg-pink-400"
            onClick={() => setColorName("Pink")}
          ></div>
          <div
            className="rounded-full w-8 h-8 bg-yellow-400 border-4 border-slate-100 hover:bg-yellow-300"
            onClick={() => setColorName("Yellow")}
          ></div> */}
          {/* <div>
            <button
              onClick={() => {
                if (showRef.current.className === "hidden") setClassName("");
                else setClassName("hidden");
              }}
            >
              more
            </button>
          </div> */}
        </div>

        {/* <div className={className} ref={showRef}>
          <div className="flex gap-3  ">
            <div
              className="rounded-full w-8 h-8 bg-slate-950 border-4 border-slate-200 hover:bg-slate-800 "
              onClick={() => setColorName("Black")}
            ></div>
            <div
              className="rounded-full w-8 h-8 bg-green-500 border-4 border-slate-100 hover:bg-green-400 outline-10 outline-slate-900"
              onClick={() => setColorName("Green")}
            ></div>
            <div
              className="rounded-full w-8 h-8 bg-red-500 border-4 border-slate-100 hover:bg-red-400"
              onClick={() => setColorName("Red")}
            ></div>
            <div
              className="rounded-full w-8 h-8 bg-pink-500 border-4 border-slate-100 hover:bg-pink-400"
              onClick={() => setColorName("Pink")}
            ></div>
            <div
              className="rounded-full w-8 h-8 bg-yellow-400 border-4 border-slate-100 hover:bg-yellow-300"
              onClick={() => setColorName("Yellow")}
            ></div>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default Color;
