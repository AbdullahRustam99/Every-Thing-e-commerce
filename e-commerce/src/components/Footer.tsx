import React from "react";
import {
 
  BiLogoFacebook,
  BiLogoInstagram,
  BiLogoTwitter,
  BiLogoYoutube,
  BiLocationPlus,
} from "react-icons/bi";


const footer = () => {
  return (
    <>
      <div className="w-full bg-black text-white max-w-[1440px]">
        <div className=" px-20 py-20 justify-between gap-20 flex flex-col  lg:flex-row ">
          <div className=" flex justify-between flex-col  lg:w-[50%] md:flex-row w-full md:items-center">
            <ul className=" font-medium text-[12px] pb-7 flex flex-col gap-3 ">
              <li>Find A Store</li>
              <li>Become A Member</li>
              <li>Sign Up for Email</li>
              <li>Send Us Feedback</li>
              <li>Student Discounts</li>
            </ul>
            <div>
              <p className="font-medium text-[14px] pb-7">Get Help</p>
              <ul className="flex flex-col gap-3 text-[#7E7E7E] font-normal text-[12px]">
                <li>Order Status</li>
                <li>Delivery</li>
                <li>Returns</li>
                <li>Payment Options</li>
                <li>Contact Us On Nike.com Inquiries</li>
                <li>Contact Us On All Other Inquiries</li>
              </ul>
            </div>
            <div>
              <p className="font-medium text-[14px] pb-7">About Nike</p>
              <ul className="flex flex-col gap-3 text-[#7E7E7E] font-normal text-[12px]">
                <li>News</li>
                <li>Careers</li>
                <li>Investors</li>
                <li>Sustainability</li>
              </ul>
            </div>
          </div>
          <div>
            <div className="flex gap-4  cursor-pointer">
              <BiLogoFacebook
                size={40}
                className="bg-[#ffffff73]  text-black w-9 h-9 rounded-[50%] p-2"
              />
              <BiLogoInstagram
                size={20}
                className="bg-[#ffffff73]  text-black w-9 h-9 rounded-[50%] p-2"
              />
              <BiLogoTwitter
                size={20}
                className="bg-[#ffffff73]  text-black w-9 h-9 rounded-[50%] p-2"
              />
              <BiLogoYoutube
                size={20}
                className="bg-[#ffffff73]  text-black w-9 h-9 rounded-[50%] p-2"
              />
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center flex-col md:flex-row  border-t-2 border-[#ffffff73] pt-2 pb-4 px-10">
          <div className="flex items-center gap-5 text-[11px]">
            <p className="flex items-center gap-5">
              <span>
                <BiLocationPlus size={20}/>
              </span>
              Pakistan
            </p>
            <p className="text-[11px] flex justify-center items-center  text-[#ffffff73]">
              © 2023 Nike, Inc. All Rights Reserved
            </p>
          </div>

          <div className="flex lg:gap-2 lg:w-[35%]">
            <p className="flex items-center text-[#ffffff73] text-[11px] font-medium lg:pr-4 pr-1  h-[14px]">
              Guides
            </p>
            <p className="flex items-center text-[#ffffff73] text-[11px] font-medium lg:pr-4 pr-1  h-[14px]">
              Terms of Sale
            </p>
            <p className="flex items-center text-[#ffffff73] text-[11px] font-medium lg:pr-4 pr-1  h-[14px]">
              Terms of Use
            </p>
            <p className="flex items-center text-[#ffffff73] text-[11px] font-medium lg:pr-4 pr-1  h-[14px]">
              Nike Privacy Policy
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default footer;
