import Quantity from "@/app/[type]/[variation]/components/quantity";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { isError } from "util";
import {
  deleteCartItem,
  getCartItems
} from "./cartApi";


const initialState = {
  data: {
      items:[]
    },
    isLoading: false,
    isError: false, 
    error: "",
}

export const fetchCartItems = createAsyncThunk(
  "cartItems/fetchCartItems",
  async ({user_id}) => {
    const cartItems = await getCartItems({ user_id });
    // console.log(cartItems.p)
    return cartItems.p;
  }
);


export const removeCartItem = createAsyncThunk(
  "cart/removeCartItem",
  async (postData) => {
    console.log(postData);
    const cart = await deleteCartItem(postData);
    return cart;
  }
);




const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addtocart(state, action) {

      const itemToAdd = action.payload.cartItem;
      
      const existingItem = state.data.items.find(
        (item) => item.item_id === itemToAdd.item_id
      );
      console.log(itemToAdd);
      if (existingItem) {
        existingItem.quantity = existingItem.quantity + itemToAdd.quantity;
      } else state.data.items.push(action.payload.cartItem);

      if (action.payload.session===null) {
        localStorage.setItem("cartItems", JSON.stringify(state.data.items));
      }
    },


    setData: (state, action) => {
      state.data.items = action.payload;
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


      .addCase(removeCartItem.pending, (state) => {
        state.isError = false;
        state.isLoading = true;
      })
      .addCase(removeCartItem.fulfilled, (state, action) => {
        console.log(action);
        state.isError = false;
        state.isLoading = false;
        state.data.items = state.data.items.filter(
          (t) => t.id !== action.meta.arg.id
        );

        state.data.total_amount = state.data.items.reduce(
          (total, item) => total + item.quantity * item.price,
          0
        );

      })
      .addCase(removeCartItem.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.error?.message;
        console.log(state.error);
      });



    // Other actions and reducers for managing state
  }
})


export const { addtocart,setData } = cartSlice.actions;
export default cartSlice.reducer;
