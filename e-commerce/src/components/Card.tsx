import Image, { StaticImageData } from "next/image";
import React from "react";
import Link from "next/link";
interface CardProps {
  productimageUrl: string | StaticImageData;
  productid: string;
  productName: string;
  productCategory: string;
  productinventory: number;
  productprice: number; 
  productcolors: string[]; 
 
}
const Card = (props:CardProps) => {
  return (
    <>
      <div className="max-w-[1440px]">
        <Link href={`/All-Products/${props.productid}`}>
          <Image
            src={props.productimageUrl}
            alt="Product Img"
            width={250}
            height={250}
          />
          <h3 className="text-xl font-semibold mb-2 w-[200px]">
            {props.productName}
          </h3>
          <p className="flex justify-between  text-gray-500 mb-4 w-[200px]">
            {props.productCategory}
            <p className="text-gray-500">{props.productinventory}</p>
          </p>
          <p className="text-gray-500">{props.productcolors}</p>
          <p className="text-lg font-bold">$ {props.productprice}</p>
        </Link>
      </div>
    </>
  );
};

export default Card;
