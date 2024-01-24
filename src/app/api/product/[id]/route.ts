import { connect } from "../../../../dbConfig/dbConfig";
import Product from "../../../../models/productModel";
import { NextResponse } from "next/server";

connect();
export async function GET(request, { params }: any) {
  const { id } = params;
  const p = await Product.findOne({ _id: id });
  return NextResponse.json({ p }, { status: 200 });
}
