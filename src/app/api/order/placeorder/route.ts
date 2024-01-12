
import { NextRequest, NextResponse } from "next/server";
import { connect } from "../../../../dbConfig/dbConfig";

import Order from "../../../../models/orderModel";
connect();

export async function POST(request: NextRequest, response: NextResponse) {
  // Connect to MongoDB
  // try {

  const body = await request.json();
   console.log(body)
  const {user_id, orderData } = body;


  // console.log(user_id);
  if (!user_id  ) {
    // return response.status(400).json({ error: "Incomplete data" });
    return NextResponse.json({ error: "Incomplete data" }, { status: 400 });
  }

  // Find the user's cart based on the user ID
  let userOrder = await Order.findOne({ user_id });
  console.log(userOrder);
  if (!userOrder) {
    // Create a new Order if it doesn't exist for the user
    userOrder = new Order({ user_id, orders: []},);
  }
  console.log(orderData);

  userOrder.orders.push(orderData);

  await userOrder
    .save()
    .then((userOrder:any) => {
      console.log("Item added to Order", userOrder);
      // Handle successful save
    })
    .catch((error:any) => {
      console.error("Error adding to Order", error);
      // Handle error
    });

  return NextResponse.json(userOrder);

}

