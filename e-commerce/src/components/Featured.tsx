import React from "react";
import Button from "@/components/Button";
import Image from "next/image";
import Banner from "@/img/fetaured.png";
import Link from "next/link";

const Featured = () => {
  return (
    <div>
      <div className="max-w-[1440px]">
        <div className="px-10 pt-10 pb-3">
          <p className="font-medium text-[23px]">Featured</p>
        </div>
        <div className="w-full flex-col flex gap-5 text-center px-10 justify-center items-center mb-4">
          <div>
            <Image src={Banner} alt="banner" />
          </div>

          <h1 className="md:text-[56px] text-[25px] font-medium leading-[30px] md:leading-[70px]">
            STEP INTO WHAT FEELS GOOD
          </h1>

          <p className="md:w-[500px] w-[340px] text-[15px]">
            Cause everyone should know the feeling of running in that perfect
            pair.
          </p>
          <div className="flex justify-center lg:gap-10 ">
            <Link href={"/All-Products"}>
              <Button text="Find Your Shoes" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
