import axios from "axios";

export const getCartItems = async ({ user_id }) => {
  const response = await axios.get(`/api/cart/getcart/${user_id}`);

  return response.data;
};

export const addToCart = async (postData) => {
  // console.log(postData)
  const response = await axios.post("/api/cart/additemtocart", postData);
  // console.log(response)

  return response.data;
};


export const deleteCartItem = async (postData) => {
  let response = await axios.delete(
    `/api/cart/removecartitem?userid=${postData.userid}&id=${postData.id}`
  )
console.log(response);
  response = await response.data;
  return response;
  
}