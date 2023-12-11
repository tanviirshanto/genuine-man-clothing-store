import React from 'react'

function SizeChart({sizes}) {
    
    // const btns=[];
    // for(let i=23;i<=34;i++){
    //             btns.push(<button className='basis-[12%] py-2  text-sm border-[1px] border-slate-300 rounded'>{i}</button>)
    // }

  return (
    <div className=''>
        <h1 className='mb-4 font-bold'>
            Size
        </h1>

        <div className='flex justify-start  gap-4  columns-3 flex-wrap'>
            {sizes.map((s)=><button className='basis-[12%] py-2  text-sm border-[1px] border-slate-300 rounded' key={s._id}>{s.size}</button>)}
        </div>

        <div className='mt-8'>
            <h1 className='underline font-bold mb-5'>Size Guide</h1>
            
        </div>

    </div>
  )
}

export default SizeChart