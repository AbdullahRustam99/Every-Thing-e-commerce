import React from "react";
import Image1 from "@/img/Image (2).png";
import Image2 from "@/img/Image (3).png";
import Image3 from "@/img/Image (4).png";
import Image from "next/image";

const Essiental = () => {
  return (
    <div className=" px-10 my-20 max-w-[1440px]">
      <h2 className="text-[23px] font-medium mb-6">The Essentials</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="text-center">
          <h3 className="text-2xl font-semibold mb-4">Mens</h3>
          <Image
            src={Image1}
            alt="Mens Essentials"
            className="w-full h-auto object-cover mb-4"
          />
        </div>

        <div className="text-center">
          <h3 className="text-2xl font-semibold mb-4">Womens</h3>
          <Image src={Image2} alt="Womens Essentials" />
        </div>

        <div className="text-center">
          <h3 className="text-2xl font-semibold mb-4">Kids</h3>
          <Image
            src={Image3}
            alt="Kids Essentials"
            className="w-full h-auto object-cover mb-4"
          />
        </div>
      </div>
      
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 justify-center mt-10">
          <div className="flex flex-col gap-2">
            <p className="text-[15px] font-medium">Icons</p>
            <ul className="flex flex-col gap-2 ">
              <li>Air Force 1</li>
              <li>Huarache</li>
              <li>Air Max 90</li>
              <li>Air Max 95</li>
            </ul>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-[15px] font-medium">Shoes</p>
            <ul className="flex flex-col gap-2 ">
              <li>All Shoes</li>
              <li>Custom Shoes</li>
              <li>Jordan Shoes</li>
              <li>Jordan Shoes</li>
            </ul>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-[15px] font-semibold">Clothing</p>
            <ul className="flex flex-col gap-2 ">
              <li>All Clothing</li>
              <li>Modest Wear</li>
              <li>Hoodies</li>
              <li>Shirts & Tops</li>
            </ul>
          </div>
          <div className="flex flex-col  gap-2">
            <p className="text-[15px] font-medium">Kids</p>
            <ul className="flex flex-col gap-2 ">
              <li>Infant & Toddler Shoes</li>
              <li>Kids Shoes</li>
              <li>Kids Jordan Shoes</li>
              <li>Kids Basketball Shoes</li>
            </ul>
          </div>
        </div>
      </div>
  )
};

export default Essiental;
