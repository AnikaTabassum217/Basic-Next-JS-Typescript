import React from "react";
import { CiHeart } from "react-icons/ci";
import { BsCart3 } from "react-icons/bs";
import { FaRegUser } from "react-icons/fa6";
const Navbar=()=>{
    return(
        <>
        <div className="w-full shadow-md bg-blue-00 p-4">
          <div className="flex justify-between items-center">
             <div className="font-semibold">Exclusive</div>
             <div className="flex gap-4">
                <div className="text-base font-normal text-gray-800">Home</div>
                <div className="text-base font-normal text-gray-800">Contact</div>
                <div className="text-base font-normal text-gray-800">About</div>
                <div className="text-base font-normal text-gray-800">Sign Up</div>
             </div>
             <div className="flex gap-4">
             <CiHeart size={20}/>
             <BsCart3/>
             <FaRegUser/>
             </div>
          </div>
        </div>
      
        </>
    )
}
export default Navbar