import React from 'react'

function Banner() {
  return (
    <div className="flex flex-col text-center max-w-full bg-[#9D2A3F] text-slate-100 gap-5 py-8">
      <h1 className="text-sm font-bold ">END OF SEASON SALE</h1>
      <h1 className="text-4xl font-extrabold">EXTRA 50% OFF SALE STYLES</h1>
      <h1 className="max-w-[450px] mx-3 md:mx-auto flex text-center text-xs">
        PSA: These deals are on their way out. It’s your last chance to take
        home this season’s classics. Online and in select stores. Auto-applied
        at checkout. Final sale.
      </h1>
      <div className="flex mx-auto md:gap-6 gap-2 text-sm">
        <button className="bg-black text-slate-100 py-2 px-2 border-rounded-full font-bold">
          Shop Shirt
        </button>
        <button className="bg-black text-slate-100 py-2 px-2 border-rounded-full font-bold">
          Shop Pant
        </button>
        <button className="bg-black text-slate-100 py-2 px-2 border-rounded-full font-bold  ">
          Accessories
        </button>
      </div>
    </div>
  );
}

export default Banner