import React from 'react'
import  {footerLinks}  from './constants'
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import uniqid from "uniqid";

function Footer() {
  return (
    <div className='pl-8 pb-14 pt-5 bg-slate-100'>
      <div className=" flex justify-between flex-col md:flex-row gap-5 text-sm">
        {footerLinks.map((i) => (
          <div key={uniqid()} className=" md:w-1/4">
            <h1 className="my-5 font-bold ">{i.name}</h1>
            <div className="flex flex-col text-xs gap-2">
              {i.items.map((item) => (
                <a href="" key={uniqid()} className="">
                  {" "}
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        ))}
        
          </div>
          <div className="flex gap-2 mt-5">
          <FaFacebook /> <FaXTwitter /> <FaInstagram /> <FaLinkedin />{" "}
          <FaYoutube />{" "}
        </div>
    </div>
  );
}

export default Footer