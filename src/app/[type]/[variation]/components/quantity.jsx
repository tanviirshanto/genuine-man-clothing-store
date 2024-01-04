'use client'

import { useState, useEffect } from "react";

function Quantity({ setCartItem, cartItem, price }) {
  const [count, setCount] = useState(1);

  const decreaseCount = () => {
    if (count !== 1) {
      setCount((prevCount) => prevCount - 1);
    }
  };

  const increaseCount = () => {
    setCount((prevCount) => prevCount + 1);
  };

  useEffect(() => {
    // Update cartItem when count changes
    // console.log(price)
    const updatedCartItem = { ...cartItem, quantity: count, subTotal:price*count };
    setCartItem(updatedCartItem);
    // console.log(cartItem);
  }, [count]);

  return (
    <div>
      <div className="flex justify-between items-center font-bold">
        <h1>Select Quantity</h1>
        <div className="flex gap-5 items-center">
          <h1
            onClick={decreaseCount}
            className={`cursor-pointer select-none text-xl  ${
              count === 1 ? "text-slate-400" : "text-slate-900"
            } `}
          >
            -
          </h1>
          <h1 className="select-none text-sm">{count}</h1>
          <h1
            onClick={increaseCount}
            className="cursor-pointer select-none text-xl"
          >
            +
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Quantity;
