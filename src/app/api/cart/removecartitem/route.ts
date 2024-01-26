import Cart from "../../../../models/cartModel";
import { NextRequest, NextResponse } from "next/server";
import { connect } from "../../../../dbConfig/dbConfig";

connect();

export async function DELETE(request: NextRequest, response: NextResponse) {
  try {
    const productId = request.nextUrl.searchParams.get("id");
    const userId = request.nextUrl.searchParams.get("userid");

    const cart = await Cart.findOne({ user_id: userId });

    if (!cart) {
      return NextResponse.json({
        success: false,
        message: "Cart not found",
      });
    }

    const updatedCart = await Cart.findOneAndUpdate(
      { user_id: userId },
      { $pull: { items: { id: productId } } },
      { new: true }
    );

    if (!updatedCart) {
      return NextResponse.json({
        success: false,
        message: "Item not found in Cart",
      });
    }

    // Recalculate total_amount after item removal
    const totalAmount = updatedCart.items.reduce(
      (total, item) => total + item.quantity * item.price,
      0
    );

    // Update total_amount in the cart
    updatedCart.total_amount = totalAmount;

    await updatedCart.save();

    return NextResponse.json({
      success: true,
      message: "Item removed from Cart",
      data: {
        updatedCart,
        totalAmount,
      },
    });
  } catch (error) {
    console.error("Error removing item from Cart", error);
    return NextResponse.json({
      success: false,
      message: "Error removing item from Cart",
    });
  }
}
