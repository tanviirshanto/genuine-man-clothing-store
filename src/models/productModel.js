const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: 
    {
        type: String,
        required: [true, "Please provide a name"]
      },

  clothtype: 
     {
        type: String,
        required: [true, "Please provide a type(Shirt/Pant/...)"]
      },
    
  
  variation: 
    {
        type: String,
        required:[true, "Please provide a type(tshirt-polo-)"]
      },
    
  
  images: [{
        type: String,
        required: [true, "Please provide images"]
      }],
      
  sizes: [
    
     { size: {
        type: String,
        required: [true, "Please provide a size"]
      },
      quantity:{
        type:Number,
        required: [true, "Please provide quantity for a size"]
      } ,
    }

  ],
  color: [{
    name: {
      type: String,
      required: [true, "Please provide product color"],
    code: {
      type: String,
      required: [true, "Please provide product color code"],
    
  }}}],

  rating: {
    count: Number,
    
    reviewers: [{ email: String,
    rated:Number }],
  },

  description: {
    
        type: String,
        required: [true, "Please provide a description"]
      
    },

  descriptionlist: [
    {
      type: String,
    },
  ],
  howitfits: [
    {
      
        type: String,
        required: [true, "Please provide how it fits"]
      
    },
  ],
  composition_care: [
    {
      
        type: String,
        required: [true, "Please provide Composition Care"]
      
      
    },
  ],
  tags: [
    {
      
        type: String,
        required: [true, "Please provide some tags"]
      
      
    },
  ],
  price: { type: Number },
  discount: {
    type: Number,
  },
});

const Product =
  mongoose.models.products || mongoose.model("products", productSchema);

export default Product;
