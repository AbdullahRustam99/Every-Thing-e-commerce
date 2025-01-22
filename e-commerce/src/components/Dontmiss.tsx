import React from "react";
import dontmissinmg from "@/img/dontmiss.png";
import Image from "next/image";
import Button from "@/components/Button"
const DontMiss = () => {
	return (
    <div className="px-10 flex gap-2 flex-col mt-20 max-w-[1440px]">
      <h2 className="text-[22px] font-medium mb-6">Dont Miss</h2>

      <div className="flex  md:flex-row gap-6">
        <div>
          <Image src={dontmissinmg} alt="Left Image" />
        </div>
      </div>
      <div className=" flex justify-center items-center gap-3 flex-col">
        <p className="md:text-[52px] text-[20px] font-medium">
          FLIGHT ESSENTIALS
        </p>
        <p className="text-[15px] ">
          Your built-to-last, all-week wears—but with style only Jordan Brand
          can deliver.
        </p>
        <Button text="Shop" />
      </div>
    </div>
  );
};

export default DontMiss;
