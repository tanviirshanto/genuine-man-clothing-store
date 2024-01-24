import { useSelector, useDispatch } from "react-redux";
import { addtocart } from "@/redux/cartSlice";
import axios from "axios";
import { useSession } from "next-auth/react";
import Favourites from "./favourites";

function AddToBag({ cartItem, price}) {
  const { data: session } = useSession();
  let user_id = session?.user?.id
  //  console.log(session)
  const cartItems = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  // console.log(user_id)
  const postData = {
    cartItem,
    user_id,
  };

  async function addToCartItems() {
    dispatch(addtocart({ cartItem, price, session }));
    // try {
    if(session){
      const response = await axios.post("/api/cart/additemtocart", postData);
    // console.log("Response:", response);
      console.log("Item added to cart successfully:", response.data);}
  }

  return (
    <div
      className=' sticky flex bottom-0   
    data-te-sticky-position="bottom" mt-7 bg-white '
    >
      <Favourites cartItem={cartItem} user_id={ user_id } />
      <button
        className=" bg-black text-slate-50 md:py-2  px-14 w-[85%] md:mr-5 mr-2   "
        onClick={addToCartItems}
      >
        Add to Bag
      </button>
    </div>
  );
}

export default AddToBag;
