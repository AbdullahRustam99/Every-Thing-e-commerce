import Image from "next/image";
import React from "react";
import { BiLocationPlus } from "react-icons/bi";
import img from "@/img/checkfooter.png"
const CheckoutFooter = () => {
  return (
    <div className="bg-black text-white">
      
      <div className="flex justify-between items-center flex-col md:flex-row  border-t-2 border-[#ffffff73] pt-2 pb-4 px-10">
        <div className="flex flex-wrap  items-center gap-3 text-[11px]">
          <p className="flex items-center gap-3">
            <span>
              <BiLocationPlus size={20} />
            </span>
            Pakistan
          </p>
          <p className="text-[11px] flex justify-center items-center  text-[#ffffff73]">
            © 2023 Nike, Inc. All Rights Reserved
          </p>
          <p className="flex items-center text-[#ffffff73] text-[11px] font-medium lg:pr-4  h-[14px]">
            Terms of Sale
          </p>
          <p className="flex items-center text-[#ffffff73] text-[11px] font-medium lg:pr-4  h-[14px]">
            Terms of Use
          </p>
          <p className="flex items-center text-[#ffffff73] text-[11px] font-medium lg:pr-4  h-[14px]">
            Nike Privacy Policy
          </p>
			  </div>
			  <div className="pt-2 md:p-0">
				<Image src={img} alt="img"/>  
			  </div>
      </div>
    </div>
  );
};

export default CheckoutFooter;
