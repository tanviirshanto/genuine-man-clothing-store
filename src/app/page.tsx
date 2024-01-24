
// import banner1 from '../assets/banner1.webp'

import RowThree from '../components/Home/rowthree'
import RowFour from "../components/Home/rowfour";
import RowTwo from '../components/Home/rowtwo'
import RowOne from "../components/Home/rowone";
import Banner from "../components/Home/banner";
import One from "../components/Home/one";
import Two from "../components/Home/two";



import { cld } from '../cloudinary'
import {AdvancedImage} from '@cloudinary/react';
import Image from 'next/image';
import { connect } from '../dbConfig/dbConfig';
import Product from '@/models/productModel';
import Typewriter from "typewriter-effect";


connect()

let i=0

const myImage = cld.image('cottons/casualshirt/remtvgwxmltkjyjhltdw').toURL()

async function GetProducts() {
  
  const p = await Product.find()
  
  return p
  
}

async function Home() {
  const jeans = await GetProducts();
  const allProducts = await GetProducts();
  

  return (
    <div className="">
      <Banner />
      <One />
      {/* <Two /> */}
      {/* <RowOne/> */}
      <RowTwo jeans={jeans} />
      <RowThree allProducts={allProducts} />
      <RowFour />

      <div>
        {/* <AdvancedImage cldImg={myImage} /> */}
        <Image width="0" height="0" src={myImage} alt="" />
      </div>
      {/* <div>
      {
        ps.map((s)=>(
          <div key={s._id}>{s.name}</div>
        ))
      }
    </div> */}
    </div>
  );
}

export default Home