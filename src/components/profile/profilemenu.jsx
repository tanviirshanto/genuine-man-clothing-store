
import { CgProfile } from "react-icons/cg";
import { PiAddressBook } from "react-icons/pi";
import { FaKey, FaCartPlus } from "react-icons/fa";
import { MdOutlineShoppingCart, MdOutlineLogout } from "react-icons/md";
import { useSession, signOut } from "next-auth/react";
import React from "react";

function ProfileMenu({active, setActive}) {
    
  return (
    <div className="divide-y divide-gray-400  mx-5 md:mx-0">
      <div className="pl-5 pb-2 cursor-pointer">
        <a className="flex items-center gap-2 " onClick={() => setActive(1)}>
          {" "}
          <span>
            <CgProfile />
          </span>{" "}
          Profile
        </a>
      </div>
      <div className="pl-5 pt-3 pb-2 cursor-pointer">
        <a className="flex items-center gap-2" onClick={() => setActive(2)}>
          <span>
            <MdOutlineShoppingCart />
          </span>{" "}
          Orders
        </a>
      </div>
      <div className="pl-5 pt-3 pb-2 cursor-pointer">
        <a className="flex items-center gap-2" onClick={() => setActive(1)}>
          <span>
            <FaCartPlus />
          </span>{" "}
          Cart
        </a>
      </div>
      <div className="pl-5 pt-3 pb-2 cursor-pointer">
        <a className="flex items-center gap-2">
          <span>
            <FaKey />
          </span>{" "}
          Change Password
        </a>
      </div>
      <div className="pl-5 pt-3 pb-2 cursor-pointer">
        <a className="flex items-center gap-2 
         " onClick={() => signOut()} >
          {" "}
          <span>
            <MdOutlineLogout />
          </span>{" "}
          Logout
        </a>
      </div>
    </div>
  );
}

export default ProfileMenu;
