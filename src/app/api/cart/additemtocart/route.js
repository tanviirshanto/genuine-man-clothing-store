import { useSession } from "next-auth/react";
import { NextRequest, NextResponse } from "next/server";
import { connect } from "../../../../dbConfig/dbConfig";
import { getSession } from "next-auth/react";
import Cart from "../../../../models/cartModel";
connect();

export  async function POST(request, response) {
  
   // Connect to MongoDB
  // try {
  
    const body = await request.json();
  // console.log(body)
    const { cartItem, user_id } = body;

    const {
      item_id,
      quantity,
      name,
      image,
      size,
      price,
      shippingMethod,
      clothtype,
      variation
    } = cartItem;
    // console.log(user_id);
    if (!user_id || !item_id || !quantity) {
      // return response.status(400).json({ error: "Incomplete data" });
      return NextResponse.json({ error: "Incomplete data" }, { status: 400 });
    }

    // Find the user's cart based on the user ID
    let userCart = await Cart.findOne({ user_id });

    if (!userCart) {
      // Create a new cart if it doesn't exist for the user
      userCart = new Cart({ user_id, items: [], total_amount: 0 });
    }

  if (userCart) {
    // Check if the item already exists in the cart
    const existingItemIndex = userCart.items.findIndex((item) => {
      console.log(item.id.toString(), item_id.toString());
      
      return item.id.toString() === item_id.toString();
    });
    console.log(existingItemIndex);
    if (existingItemIndex !== -1) {
      // If the item exists, update its quantity
      userCart.items[existingItemIndex].quantity += parseInt(quantity);
    } else {
      // Otherwise, add the item to the cart
      const newItem = {
        id: item_id,
        name,
        clothtype,
        variation,
        image,
        quantity: parseInt(quantity),
        size,
        shippingMethod,
        price,
        // Other item details (name, image, size, subtotal, shippingMethod)
      };
      userCart.items.push(newItem);
    }
  }

    await userCart
      .save()
      .then((userCart) => {
        console.log("Item added to cart", userCart);
        // Handle successful save
      })
      .catch((error) => {
        console.error("Error adding to cart", error);
        // Handle error
      });

     return NextResponse.json(userCart);

}

