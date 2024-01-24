'use client'
import { useState } from 'react'
import {ImMenu} from 'react-icons/im'
import {BiSolidTShirt} from 'react-icons/bi'
import {GiPoloShirt} from 'react-icons/gi'
import {PiShirtFoldedFill,PiPantsFill} from 'react-icons/pi'





function Menu() {
    const [isOpen,setIsOpen] =useState(false)
  return (
    <div className="inline ">
      <button className="" onClick={() => setIsOpen(!isOpen)}>
        <ImMenu />
      </button>

      {/* <a href="/"> <img src="Cottons4.svg" width={150} className=' inline ' alt="" /> </a> */}
      {isOpen && (
        <div className="cartzindex  w-full h-screen transition-all  absolute duration-500 left-0 top-0  overflow-hidden px-8  bg-black">
          <div className="   text-white relative ">
            {/* <div className='absolute right-0 top-0 underline cursor-pointer' onClick={()=>setIsOpen(!isOpen)}>
Close
          </div> */}
            <div className="mt-7   flex flex-col flex-wrap">
              {" "}
              <a
                className="underline cursor-pointer mb-7"
                onClick={() => setIsOpen(!isOpen)}
              >
                Close
              </a>
              <div>Shirts</div>
              <div className="pl-5 flex flex-col flex-wrap pb-5">
                <a
                  href="/categories/formal-shirt"
                  className="hover:bg-slate-50 hover:text-slate-900"
                >
                  Formal-Shirt
                </a>
                <a
                  href="/categories/casualshirt"
                  className="hover:bg-slate-50 hover:text-slate-900"
                >
                  Casual-Shirt
                </a>

                <a
                  href="/categories/tshirts"
                  className="hover:bg-slate-50 hover:text-slate-900"
                >
                  T-Shirt
                </a>
                <a
                  href="/categories/polo"
                  className="hover:bg-slate-50 hover:text-slate-900"
                >
                  Polo
                </a>
              </div>
              <div>Pants</div>
              <div className="pl-5 flex flex-col flex-wrap pb-5">
                <a
                  href="/categories/jeans"
                  className="hover:bg-slate-50 hover:text-slate-900"
                >
                  Jeans
                </a>
                <a
                  href="/categories/chinos"
                  className="hover:bg-slate-50 hover:text-slate-900"
                >
                  Chinos
                </a>
                <a
                  href="/categories/formal-pant"
                  className="hover:bg-slate-50 hover:text-slate-900"
                >
                  Formal-Pant
                </a>
              </div>
              <a href="/categories/accesories">Accessories</a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Menu