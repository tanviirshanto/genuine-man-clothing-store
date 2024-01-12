import Favourite from "@/models/FavouriteModel";
import { NextRequest, NextResponse } from "next/server";
import { connect } from '../../../../dbConfig/dbConfig'

connect();

export async function DELETE(request: NextRequest, response: NextResponse) {
  try {
    const productId = request.nextUrl.searchParams.get("id");
    const userId = request.nextUrl.searchParams.get("userid");
    console.log(productId, userId);

    const favourite = await Favourite.findOneAndUpdate(
      { user_id: userId },
      { $pull: { items: { id: productId } } },
      { new: true }
    );

    if (!favourite) {
      return NextResponse.json({
        success: false,
        message: "Favourite not found",
      });
    }

    return NextResponse.json({
      success: true,
      message: "Item removed from Favourite",
    });
  } catch (error) {
    console.error("Error removing item from Favourite", error);
    return NextResponse.json({
      success: false,
      message: "Error removing item from Favourite",
    });
  }
}
