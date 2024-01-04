'use client'
import Image from "next/image"


function SidebarItem({ item }) {
    // console.log(item)
  return (
    <div className="pr-2 w-[400px]">
      <div className="flex  mt-5 gap-3 items-start ">
        <div className="w-[30%]">
          <Image
            width={300}
            height={400}
            src={item.image}
            className="h-72 w-full "
            alt=""
          />
        </div>
        <div className="flex flex-col text-wrap w-[60%]">
          <h1 className="">{item.name}</h1>
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
        </div>
      </div>
    </div>
  );
}

export default SidebarItem