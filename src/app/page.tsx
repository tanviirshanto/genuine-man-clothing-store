
// import banner1 from '../assets/banner1.webp'

import RowThree from '../components/Home/rowthree'
import RowTwo from '../components/Home/rowtwo'
import { cld } from '../cloudinary'
import {AdvancedImage} from '@cloudinary/react';
import Image from 'next/image';
import { connect } from '../dbConfig/dbConfig';
import Product from '@/models/productModel';

connect()

let i=0

const myImage = cld.image('cottons/casualshirt/remtvgwxmltkjyjhltdw').toURL()

export async function GetProducts() {
  
  const p = await Product.find({ variation: "Jeans" })
  
  return p
  
}

async function Home() {
  const jeans = await GetProducts();
  return (
    <div className=''>
    <div className=' text-center  h-screen  '>
      
      <div className='h-[90%] bg-[#F7F2E5] flex items-center justify-center'>
      <h1 className='md:text-8xl text-3xl font-extrabold bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-transparent bg-clip-text animate-gradient  '>Early Winter <span className='text-red-600 animate-pulse'>Sale</span> <br />  Going On!</h1>
      </div>

    </div>
    <RowTwo jeans={jeans} />
    <RowThree/>
    
<div>{/* <AdvancedImage cldImg={myImage} /> */}
<Image width="0"
  height="0" src={myImage} alt="" />
</div>
    {/* <div>
      {
        ps.map((s)=>(
          <div key={s._id}>{s.name}</div>
        ))
      }
    </div> */}
    </div>
  )
}

export default Home