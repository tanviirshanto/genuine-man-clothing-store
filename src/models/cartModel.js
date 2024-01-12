import mongoose from "mongoose";

import User from "./userModel";
import Product from "./productModel";

// Define schema for carts
const cartSchema = new mongoose.Schema({
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

      image: String,
      
      quantity: {
        type: Number,
        required: true,
      },
      size: String,
      shippingMethod: String,
      price:Number
    },
  ],
  total_amount: {
    type: Number,
    required: true,
  },
});

// Define a virtual property to compute the subtotal
cartSchema.virtual("items.subTotal").get(function () {
  return this.items.reduce(
    (total, item) => total + item.quantity * item.price,
    0
  );
});

// Ensure the virtual property is included when converting the document to JSON
cartSchema.set("toJSON", { virtuals: true });

cartSchema.pre("save", function (next) {
  // Calculate total based on the sum of subtotals of all items
  const totalAmount = this.items.reduce(
    (total, item) => total + item.quantity * item.price,
    0
  );
    console.log(totalAmount);
  // Assign the calculated total to the total_amount field
  this.total_amount = totalAmount;

  next(); // Move to the next middleware
});

// Create the cart model
const Cart = mongoose.models.carts || mongoose.model("carts", cartSchema);

export default Cart;
