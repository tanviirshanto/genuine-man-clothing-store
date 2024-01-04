import axios from "axios";

export const getCartItems = async ({ user_id }) => {
  const response = await axios.get(`/api/cart/getcart/${user_id}`);

  return response.data;
};