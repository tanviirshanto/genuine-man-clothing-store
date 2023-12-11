import { useState } from "react";
import oneBack from "../assets/oneBack.jpg";
const products=[
  {
    "title":"fhhfhb bfhdbhjhj fnsssjbjf kfhffh kdnfsf jkdjksjkjjjk dsjkjkskj ",
    "image":oneBack
  },
  {
    "title":"fhhfhb bfhdbhjhj fnsssjbjf kfhffh kdnfsf jkdjksjkjjjk dsjkjkskj",
    "image":oneBack
  },
  {
    "title":"fhhfhb bfhdbhjhj fnsssjbjf kfhffh kdnfsf jkdjksjkjjjk dsjkjkskj",
    "image":oneBack
  },
  {
    "title":"fhhfhb bfhdbhjhj fnsssjbjf kfhffh kdnfsf jkdjksjkjjjk dsjkjkskj",
    "image":oneBack
  },
  {
    "title":"fhhfhb bfhdbhjhj fnsssjbjf kfhffh kdnfsf jkdjksjkjjjk dsjkjkskj",
    "image":oneBack
  },
  {
    "title":"fhhfhb bfhdbhjhj fnsssjbjf kfhffh kdnfsf jkdjksjkjjjk dsjkjkskj",
    "image":oneBack
  },
  {
    "title":"fhhfhb bfhdbhjhj fnsssjbjf kfhffh kdnfsf jkdjksjkjjjk dsjkjkskj",
    "image":oneBack
  },
  {
    "title":"fhhfhb bfhdbhjhj fnsssjbjf kfhffh kdnfsf jkdjksjkjjjk dsjkjkskj",
    "image":oneBack
  },
  {
    "title":"fhhfhb bfhdbhjhj fnsssjbjf kfhffh kdnfsf jkdjksjkjjjk dsjkjkskj",
    "image":oneBack
  },
  {
    "title":"fhhfhb bfhdbhjhj fnsssjbjf kfhffh kdnfsf jkdjksjkjjjk dsjkjkskj",
    "image":oneBack
  },
  {
    "title":"fhhfhb bfhdbhjhj fnsssjbjf kfhffh kdnfsf jkdjksjkjjjk dsjkjkskj",
    "image":oneBack
  },{
    "title":"fhhfhb bfhdbhjhj fnsssjbjf kfhffh kdnfsf jkdjksjkjjjk dsjkjkskj",
    "image":oneBack
  }
  
]


const Maylike = () => {
  const [startIndex, setStartIndex] = useState(0);


  const showPrevious = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 5);
    }
  };

  const showNext = () => {
    if (startIndex + 5 < products.length) {
      setStartIndex(startIndex + 5);
    }
  };

  return (
    <div className="flex items-center overflow-x-scroll space-x-4 flex-nowrap">
      {products.map((product)=>
      <div key={product.title} className=" w-1/5 inline-block">
<img className="whitespace-nowrap" src={product.image} alt="" />
<h1 className="">{product.title}</h1>
      </div>
      )}
    </div>
  );
};

export default Maylike;