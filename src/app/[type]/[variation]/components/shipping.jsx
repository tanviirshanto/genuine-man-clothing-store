

function Shipping() {
  return (
    <div className='flex justify-around md:ml-0  mx-7 gap-3 '>
        <button className='font-bold border-[1px] border-slate-300 rounded w-full py-5 px-3 text-left'>
Pick up in store <p className='text-xs text-slate-400 text-left mt-1'>Select size to see if item is in stock</p>
        </button>
        <button className='font-bold border-[1px] border-slate-300 rounded w-full py-5 px-3 text-left '>
Ship <p className='text-xs text-slate-400 text-left mt-1'>Select size to see if item is in stock</p>
        </button>
    </div>
  )
}

export default Shipping