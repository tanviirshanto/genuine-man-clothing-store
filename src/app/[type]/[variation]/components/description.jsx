import React from 'react'


function Description({description,descriptionlist, howitfits, composition_care}) {
  return (
    <div className='flex justify-center md:flex-row flex-col mx-3 md:mx-5 my-10 gap-8'>
        <div className='text-md md:w-2/3   md:ml-14  '>
            
            
           <div className=''> <p>{description}</p>
            
            <ul className='list-disc list-inside'>{descriptionlist?.map(
                (dl)=><li key={dl}>{dl}</li>
            )}
                
            </ul>
            <a href="" className='underline font-bold pt-2 text-sm'>See more</a>
            </div></div>
    
        <div className='md:w-1/3 md:mr-10'>
            <h1 className='font-bold'>How it Fits</h1>
            <ul className='list-disc list-inside text-[#6E6E6E] text-sm font-normal'>
                {howitfits?.map((f)=><li key={f}>{f}</li>
                )}
                
            </ul>
            <h1 className='font-bold mt-5'> Composition & Care</h1>
            <ul className='list-disc list-inside text-[#6E6E6E] text-sm font-normal'>
                {composition_care?.map((c)=><li key={c}>{c}</li>
                )}
                
            </ul>
        </div>

    </div>
  )
}

export default Description