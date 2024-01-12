import mongoose from "mongoose";

import User from "./userModel";
import Product from "./productModel";

// Define schema for Orders
const orderSchema = new mongoose.Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User", // Reference to the Customer model
    required: true,
  },

  orders: [
    {
      order_date: {
        type: Date,
        
      },
      address: {
        type: String,
        required: [true, "Please provide your order address"],
      },
      email: String,
      contact: {
        type: String,
        required: [true, "Please provide your contact number"],
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
          price: Number,
        },
      ],

      status: {
        type: String,
        enum: ["pending", "shipped", "delivered, cancelled"], // Example status options
  
      },

      payment: {
        type: String,
        enum: ["pending", "paid", "cash on delivery"], // Example status options
      
      },

      total_amount: {
        type: Number,
        required: true,
      },
    },
  ],
});

orderSchema.virtual("subTotal").get(function () {
  // Check if 'orders' array exists and has items
  if (this.orders && this.orders.length > 0) {
    // Calculate subtotal by iterating through each order and its items
    return this.orders.reduce((total, order) => {
      // Check if 'items' array exists in each order
      if (order.items && order.items.length > 0) {
        const orderSubTotal = order.items.reduce(
          (orderTotal, item) => orderTotal + item.quantity * item.price,
          0
        );
        return total + orderSubTotal;
      }
      return total; // If 'items' array is empty or undefined, return current total
    }, 0);
  }
  return 0; // If 'orders' array is empty or undefined, return 0 as subtotal
});


// Ensure the virtual property is included when converting the document to JSON
orderSchema.set("toJSON", { virtuals: true });

// Create the Order model
const Order = mongoose.models.orders || mongoose.model("orders", orderSchema);

export default Order;
