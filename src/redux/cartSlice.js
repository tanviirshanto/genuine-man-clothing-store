import Quantity from "@/app/[type]/[variation]/components/quantity";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { isError } from "util";
import {
  getCartItems
} from "./cartApi";


const initialState = {
    data:{},
    isLoading: false,
    isError: false,
    error: "",
}

export const fetchCartItems = createAsyncThunk(
  "cartItems/fetchCartItems",
  async ({user_id}) => {
    const cartItems = await getCartItems({ user_id });
    console.log(cartItems.p)
    return cartItems.p;
  }
);


const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addtocart(state, action) {

      const itemToAdd = action.payload.cartItem;
      const existingItem = state.data.find((item) => item.id === itemToAdd.id);
      if (existingItem) {
        existingItem.quantity = existingItem.quantity + itemToAdd.quantity;
      } else state.data.push(action.payload.cartItem);

      if (action.payload.session) {
        localStorage.setItem("cartItems", JSON.stringify(state.data));
      }
    },
    setData: (state, action) => {
      state.data = action.payload;
      // Save data to localStorage when it's updated in the Redux store
      localStorage.setItem('cartItems', JSON.stringify(action.payload));
    },
    // Other reducers for your slice if you have any
  },
  
  extraReducers: (builder) => {
    builder
      .addCase(fetchCartItems.pending, (state) => {
        state.isError = false;
        state.isLoading = true;
      })
      .addCase(fetchCartItems.fulfilled, (state, action) => {
        state.isError = false;
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(fetchCartItems.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.error?.message;
        state.data = [];
      })

    
    
    

    // Other actions and reducers for managing state
  }
})


export const { addtocart } = cartSlice.actions;
export default cartSlice.reducer;
