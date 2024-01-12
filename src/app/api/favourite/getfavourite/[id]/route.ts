import { connect } from "@/dbConfig/dbConfig";
import Favourite from "@/models/FavouriteModel";
import { NextResponse } from "next/server";

connect();
export async function GET(request, { params }: any) {
  const { id } = params;
  // console.log(id);
    const p = await Favourite.findOne({ user_id: id });
    // console.log(p)
  return NextResponse.json({ p }, { status: 200 });
}
