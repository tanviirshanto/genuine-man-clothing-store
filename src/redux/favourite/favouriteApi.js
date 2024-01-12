import axios from "axios";

export const getFavouriteItems = async ({ user_id }) => {
  const response = await axios.get(`/api/favourite/getfavourite/${user_id}`);

  return response.data;
};

export const addFavourite = async (postData) => {
    // console.log(postData)
    const response = await axios.post("/api/favourite/addtofavourite", postData);
    // console.log(response)

  return response.data;
};


  
 export const deleteFavourite = async (postData) => {
   let response = await fetch(
     `http://localhost:3000/api/favourite/removefavourite?userid=${postData.userid}&id=${postData.id}`,
     { method: "delete" }
   );

   response = await response.json();
  return response
   // console.log(response);
  // if (response.success) {
  //   alert("Favourite Removed")
  // }
   };
    // Re-throw the error for proper handling in Redux slice
  




