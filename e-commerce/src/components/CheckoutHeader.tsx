
import Image from 'next/image';
import React from 'react'
import logo from "@/img/logo.png"
import { IoBagOutline } from "react-icons/io5";
import { BiCommentDetail } from "react-icons/bi";


const CheckoutHeader = () => {
  return (
    <>
      <div className="w-full px-10 py-3 text-center text-[14px] max-w-[1440px]">
        <div className="flex flex-col md:flex-row lg:items-center lg:justify-center lg:gap-32 w-full">
          <div className="flex justify-evenly  lg:justify-between w-full ">
            <div className="lg:ml-24">
              <Image src={logo} alt="top logo" />
            </div>
          </div>
          <div className="flex gap-5 w-full items-center lg:w-[50%] justify-center">
            <p className="text-left">000 808 100 9253</p>

            <p className="flex items-center text-[11px] font-medium pr-4 h-[14px]">
              <BiCommentDetail size={20} />
            </p>
            <p className="flex items-center text-[11px] font-medium pr-4 h-[14px]">
              <IoBagOutline size={20} />
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default CheckoutHeader