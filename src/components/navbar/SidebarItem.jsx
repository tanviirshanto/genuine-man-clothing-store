'use client'
import { removeCartItem } from "@/redux/cartSlice";
import Image from "next/image"
import { useDispatch } from "react-redux";


function SidebarItem({ item, user_id }) {

  const dispatch = useDispatch();
  
  const { _id, id, variation, clothtype, name, image, price, size, quantity } =
     item;
console.log(item)
  const postData = {
    userid: user_id,
    id:item.id,
  };
  async function handleRemove(e) {
    e.preventDefault();
    // console.log(id);
    dispatch(removeCartItem(postData));
  }

  
  // console.log(item)
  return (
    <div className="pr-2 md:w-[400px]">
      <div className="flex  mt-5 mb-3 gap-3 items-center ">
        <div className="w-[30%]">
          <a href={`/${clothtype}/${variation}/${name}/${id}`}>
            <Image
              width={300}
              height={400}
              src={item.image}
              className=" w-full "
              alt=""
            />
          </a>
        </div>
        <div className="flex flex-col text-wrap w-[60%] text-sm">
          <a href={`/${clothtype}/${variation}/${name}/${id}`} >
            <h1 className="overflow-clip hover:text-blue-500 ">{item.name}</h1>
          </a>
          <h1 className="text-slate-400 mt-1">Take a hint - Black</h1>
          <div className="flex mt-1">
            <h1 className="">${item.price}</h1>{" "}
            {/* <h1 className="line-through text-slate-400">$68.98</h1> */}
          </div>
          <div className="flex justify-between mt-1">
            <h1>
              <span>Size: {item.size}</span>{" "}
            </h1>
            <h1 className="mr-10">
              Qty: <span>{item.quantity}</span>
            </h1>
          </div>
          <div>
            <h1>
              Subtotal:{" "}
              <span className="font-bold">${item.price * item.quantity}</span>
            </h1>
          </div>
          <div>
            <button className="underline text-slate-200 hover:text-red-600" onClick={handleRemove}>
              Remove
            </button>
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
}

export default SidebarItem