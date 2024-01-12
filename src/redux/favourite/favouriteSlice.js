
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { addFavourite, deleteFavourite, getFavouriteItems } from "./favouriteApi";

const initialState = {
  data: {
    items: [],
  },
  isLoading: false,
  isError: false,
  error: "",
};

export const fetchFavouriteItems = createAsyncThunk(
  "favouriteItems/fetchFavouriteItems",
  async ({ user_id }) => {
    const favouriteItems = await getFavouriteItems({ user_id });
    // console.log(cartItems.p)
    return favouriteItems.p;
  }
);

export const createFavouriteItem = createAsyncThunk(
  "favouriteItems/createFavouriteItem",
  async (postData) => {
      const favouriteItem = await addFavourite(postData);
    //   console.log(data)
    return favouriteItem;
  }
);


export const removeFavourite = createAsyncThunk(
  "favourite/removeFavourite",
  async (postData) => {
     console.log(postData);
    const favourite = await deleteFavourite(postData);
    return favourite;
  }
);



const favouriteSlice = createSlice({
  name: "favourite",
  initialState,
  reducers: {
    addtofavourite(state, action) {
      const itemToAdd = action.payload.favouriteItem;

      const existingItem = state.data.items.find(
        (item) => item.item_id === itemToAdd.item_id
      );
    //   console.log(itemToAdd);
      if (existingItem) {
        console.log("Item already exists");
      } else state.data.items.push(action.payload.cartItem);


    },


  },

    extraReducers: (builder) => {
      builder
          
        
          .addCase(fetchFavouriteItems.pending, (state) => {
            state.isError = false;
            state.isLoading = true;
          })
          .addCase(fetchFavouriteItems.fulfilled, (state, action) => {
            state.isError = false;
            state.isLoading = false;
            state.data = action.payload;
          })
          .addCase(fetchFavouriteItems.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.error = action.error?.message;
            state.data = [];
          })



          .addCase(createFavouriteItem.pending, (state) => {
            state.isError = false;
            state.isLoading = true;
          })
          .addCase(createFavouriteItem.fulfilled, (state, action) => {
            state.isError = false;
            state.isLoading = false;
            console.log(action.payload)
            const itemToAdd =
              action.payload && action.payload.items
                ? action.payload.items
                : [];
            console.log(itemToAdd);

            //   console.log(itemToAdd);
            if (itemToAdd !== null) state.data.items=itemToAdd;
          })
          .addCase(createFavouriteItem.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.error = action.error?.message;
          })



          .addCase(removeFavourite.pending, (state) => {
            state.isError = false;
            state.isLoading = true;
          })
          .addCase(removeFavourite.fulfilled, (state, action) => {
            // console.log(action.payload)
            // const removedItemId = action.payload.id;
            // state.isError = false;
            // state.isLoading = false;
            // state.data.items = state.data.items.filter(
            //   (item) => item.id !== removedItemId
            // );
            // console.log(state.data.items);
            console.log(action);
            state.isError = false;
            state.isLoading = false;

            state.data.items = state.data.items.filter(
              (t) => t.id !== action.meta.arg.id
            );

          })
          .addCase(removeFavourite.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.error = action.error?.message;
            console.log(state.error);
          });


  },
});

export const { addtofavourite} = favouriteSlice.actions;
export default favouriteSlice.reducer;
