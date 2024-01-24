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

const getFirstName = (fullName) => {
  const firstName = fullName?.split(" ")[0];
  return firstName;
};

function Navbar() {
  const { data: session } = useSession();
  const id = session?.user?.id;
 const firstName = getFirstName(session?.user?.name);
  // console.log(session)
  return (
    <div className="max-w-screen stickyIfFails bg-slate-50">
      <div className="flex   justify-end items-end py-1 px-5">
        <div className="flex ">
          {session ? (
            <div className="flex gap-3">
              <a href={`/profile/${id}`} className="font-bold text-sm">Hi {firstName}</a>
              <button className="text-xs" onClick={() => signOut()}>
                Log Out
              </button>
            </div>
          ) : (
            <div className="flex">
              <Login />
              <Register />
            </div>
          )}
        </div>
      </div>

      <hr />

      <div className="   flex justify-between items-center  mx-5 py-1 whitespace-nowrap ">
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

          {/* <MainSidebar/> */}
        </div>
        {/* <!-- drawer component --> */}
      </div>
    </div>
  );
}

export default Navbar