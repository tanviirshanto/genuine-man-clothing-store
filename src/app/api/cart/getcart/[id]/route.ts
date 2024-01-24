import { connect } from "../../../../../dbConfig/dbConfig";
import Cart from "../../../../../models/cartModel";
import console from "console";
import { NextResponse } from "next/server";

connect();
export async function GET(request, { params }: any) {
  const { id } = params;
  console.log(id);
  const p = await Cart.findOne({ user_id: id });
  // console.log(p)
  return NextResponse.json({ p }, { status: 200 });
}
