'use client'
// import Cart from './cart'
// import CartButton from './cartbutton'
//      import CartShow from './Sidebar/cartshow'
import Menu from '../../components/navbar/menu'
// import MainSidebar from './Sidebar/sidebar'
// import Searchbox from './searchbox'
import Login from '../../components/navbar/login'
import Register from "../../components/navbar/register";

import CartView from '../../components/navbar/cartview'
import Categories from '../../components/navbar/categories'
import Image from 'next/image'

import Cottons4 from '../../../public/Cottons4.svg'
 
import { useSession, signOut } from "next-auth/react";

import FavouritesView from "../../components/navbar/showfavourite";

function Navbar() {
 const { data: session } = useSession();
 
  // console.log(session)
  return (
    <div className=" bg-slate-50 shadow-md   ">
      <div className="   flex justify-between items-center  w-[92%] mx-auto py-1 whitespace-nowrap ">
        <div className="flex items-center">
          <Menu />
          <div>
            <a href="/" className="inline mr-10">
              {" "}
              <Image
                height={0}
                width={0}
                src={Cottons4}
                className=" inline w-[150px] "
                alt=""
              />{" "}
            </a>
          </div>
          <Categories />
        </div>
        <div className="hidden">
          <a href="/">
            <Image
              height="0"
              src="Cottons4.svg"
              width={150}
              className=" inline "
              alt=""
            />
          </a>
        </div>
        <div className="flex items-center">
          <FavouritesView />
          <CartView />
          {session ? (
            <div className="flex gap-3">
              <p className="font-bold">Hi {session?.user?.name}</p>
              <button onClick={() => signOut()}>Sign Out</button>
            </div>
          ) : (
            <div className="flex">
              <Login />
              <Register />
            </div>
          )}

          {/* <MainSidebar/> */}
        </div>
        {/* <!-- drawer component --> */}
      </div>
    </div>
  );
}

export default Navbar