import { connect } from "@/dbConfig/dbConfig";
import User from "@/models/userModel";
import { NextResponse } from "next/server";

connect();
export async function GET(request, { params }: any) {
  const { id } = params;
  const p = await User.findOne({ _id: id });
  return NextResponse.json({ p }, { status: 200 });
}
