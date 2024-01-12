import axios from "axios";

export const getCartItems = async ({ user_id }) => {
  const response = await axios.get(`/api/cart/getcart/${user_id}`);

  return response.data;
};


export const deleteCartItem = async (postData) => {
  let response = await fetch(
    `http://localhost:3000/api/cart/removecartitem?userid=${postData.userid}&id=${postData.id}`,
    { method: "delete" }
  )

  response = await response.json();
  return response;
  
}