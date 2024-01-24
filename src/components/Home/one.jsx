import Image from "next/image";
import React from "react";
import test from '../../assets/test.jpg'
function One() {
  return (
    <div className="flex flex-col md:flex-row mt-10 md:mt-2 ">
      <div className="md:w-1/2 my-auto order-2 md:order-1">
        <div className="md:w-1/2 mx-2 md:mx-auto flex flex-col text-center md:text-left gap-4 ">
          <h1 className="text-sm text-red-600 font-bold">New</h1>
          <h1 className="text-2xl font-extrabold">THE DENIM SHOP</h1>
          <h1 className="text-sm">
            You know we love jeans, but that’s just the tip of the iceberg for
            our denim obsession. Shop shirts, outerwear and more all in our
            favorite fabric.
          </h1>
          <div className="flex flex-col md:flex-row underline gap-4 font-bold text-center">
            <a href="">Shop Men</a>
            <a href="">Shop Women</a>
          </div>
        </div>
      </div>
      <div className="md:w-1/2 p-8 order-1 md:order-2">
        <Image
          alt=""
          src={test}
          height="0"
          width="0"
          className="flex justify-start"
        />
      </div>
    </div>
  );
}

export default One;
