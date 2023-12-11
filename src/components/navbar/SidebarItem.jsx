import Image from "next/image"

function SidebarItem({imgUrl}) {
  return (
    <div className="pr-2 w-[400px]">
            <div className="flex justify-between mt-5 gap-3 items-start">
                <div> 
                    <Image width="0"
  height="0" src={imgUrl} className="max-h-36  " alt="" />
                </div>
                <div className="flex flex-col">
                    <h1>
501® Original Fit Women{"'"}s Jeans</h1>
<h1 className="text-slate-400 mt-1">Take a hint - Black</h1>
<div className="flex mt-1">
    <h1 className="">$58.98</h1> <h1 className="line-through text-slate-400">$68.98</h1>
</div>
<div className="flex justify-between mt-1">
    <h1><span>28L</span>*<span>26W</span> </h1><h1 className="mr-10">Qty: <span>2</span></h1>
</div>
<div>
    <h1>Subtotal: <span className="font-bold">$91</span></h1>
</div>
</div>
                </div>

            </div>
  )
}

export default SidebarItem