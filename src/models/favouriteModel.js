import mongoose from "mongoose";

import User from "./userModel";
import Product from "./productModel";

// Define schema for carts
const favouriteSchema = new mongoose.Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User", // Reference to the Customer model
    required: true,
  },

  items: [
    {
      id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product", // Reference to the Product model
      },

      name: String,

      clothtype: String,
      
      variation:String,

      image: String,

      price: Number,
    },
  ],
});



// Create the Favourite model
const Favourite =
  mongoose.models.favourites || mongoose.model("favourites", favouriteSchema);

export default Favourite;
