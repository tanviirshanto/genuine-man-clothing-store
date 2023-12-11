//@ts-nocheck

import Product from "./src/models/productModel";
import mongoose from "mongoose";
import dotenv from "dotenv";
import { prod } from "./src/data/data";

dotenv.config({ path: __dirname + "/.env.local" });
// console.log(process.env.MONGODB_URI);

mongoose
  .connect('mongodb+srv://amishantto:shanto8920@cluster0.etsci5c.mongodb.net/' )
  .then(() => console.log("DB Connected"))
  .catch((error) => console.log("DB Connection Failed", error.message));

const importData = async () => {
    try {
      // delete previous data | avoid duplication
      await Product.deleteMany();
  
      await Product.insertMany(prod);
  
      console.log("Data imported");
  
      // 0 is a success code and 1 (or another number) can be a failure code.
      process.exit();
    } catch (error:any) {
      console.log("Data not imported", error.message);
      process.exit(1);
    }
  };
  
  const destroyData = async () => {
    try {
      await Product.deleteMany();
  
      console.log("Data destroyed");
      process.exit();
    } catch (error) {
      console.log("Data not destroyed");
      process.exit(1);
    }
  };
  // console.log(process.argv);
  
  if (process.argv[2] == "-d") {
    destroyData();
  } else {
    importData();
  }