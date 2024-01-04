import React from 'react'

// const fits={
//     "names":
//         ["Snug Through The Hip And Thigh",'High rise: 10 7/8"',"Straight Leg"]
    
// }

// const composition ={
//     "names":[
//         "99% cotton, 1% elastane",
//         "Denim",
//         "Strech",
//         "Button fly",
//         "5-pocket styling",
//         "Machine wash cold - normal cycle. wash inside out with like colors, do not bleach, tumble dry medium, warm iron if needed, dry cleaning possible        ",
//         "Imported"
//     ]
// }

function Description({description,descriptionlist, howitfits, composition_care}) {
  return (
    <div className='flex justify-center md:flex-row flex-col  mx-5 my-10 gap-8'>
        <div className='text-md md:w-2/3   md:ml-14  '>
            
            
           <div className=''> <p>{description}</p>
            
            <ul className='list-disc list-inside'>{descriptionlist?.map(
                (dl)=><li key={dl}>{dl}</li>
            )}
                
            </ul>
            <a href="" className='underline font-bold pt-2 text-sm'>See more</a>
            </div></div>
    
        <div className='md:w-1/3 mr-10'>
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