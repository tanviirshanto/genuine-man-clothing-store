import { createFavouriteItem, fetchFavouriteItems } from "@/redux/favourite/favouriteSlice";
import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

function Favourites({ cartItem, user_id }) {
  const { item_id, name, image, price, clothtype, variation} = cartItem;
  // console.log(cartItem);
  const favouriteItem = {
    id: item_id,
    name,
    image,
    price,
    clothtype,
    variation,
  };
  const postData = {
    favouriteItem,
    userid: user_id,
  };
  const dispatch = useDispatch();




  const { data, isLoading, isError } = useSelector((state) => state.favourite);
  // const { items } = data;
  // console.log(data);
  useEffect(() => {
    if (user_id) dispatch(fetchFavouriteItems({ user_id }));
  }, [user_id, dispatch]);




  async function addToFavouriteItems() {
    // try {
    if (user_id) {
      //   console.log(postData)
      // const response = await axios.post(
      //   "/api/favourite/addtofavourite",
      //   postData
      // );
      
      // console.log("Item added to Favourite successfully:", response.data);
      dispatch(createFavouriteItem(postData))
    }
  }




  return (
    <button
      className="mr-5 w-[15%] border border-slate-300 hover:bg-black"
      onClick={addToFavouriteItems}
    >
      ❤️
    </button>
  );
}

export default Favourites;
