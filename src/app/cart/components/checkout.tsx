import axios from "axios";
import React from "react";

function Checkout({
  user_id,
  cartData,
  email,
  address,
  contact,
  total
}) {

    console.log(cartData)

  const orderData = {
    order_date: new Date(),
    address,
    email,
    contact,
    items: cartData?.items,
    status: "pending",
    payment: "pending",
    total_amount:total
  };
    
    const postData = {
        user_id,
        orderData
    }


    async function placeOrder() {
        if (user_id) {
            console.log(postData)
            const response = await axios.post("/api/order/placeorder", postData);
    // console.log("Response:", response);
      console.log("Placed Order successfully:", response.data);}
    }
    
     
    

  return (
    <div className="mt-5">
      <button
        className="w-full bg-black text-slate-50 py-3"
        onClick={placeOrder}
      >
        {" "}
        Check out
      </button>
    </div>
  );
}

export default Checkout;
