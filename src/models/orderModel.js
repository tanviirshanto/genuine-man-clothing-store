import mongoose from "mongoose";

import User from './userModel'
import Product from './productModel'

// Define schema for Orders
const orderSchema = new mongoose.Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // Reference to the Customer model
    required: true
  },
  order_date: {
    type: Date,
    default: Date.now
  },
  items: [
    {
      product_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product' // Reference to the Product model
      },
      quantity: {
        type: Number,
        required: true
      },
      size: String,
      color: String
    }
  ],
  total_amount: {
    type: Number,
    required: true
  },
  status: {
    type: String,
    enum: ['pending', 'shipped', 'delivered'], // Example status options
    default: 'pending'
  }
});

// Create the Order model
const Order = mongoose.models.orders || mongoose.model("orders", orderSchema);


module.exports = Order;