"use client";
import React, { useEffect, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { BiCart } from "react-icons/bi";
import Link from "next/link";
import { client } from "@/sanity/lib/client";
import { useCart } from "@/app/Context/createContext";
interface Product {
  _id: number;
  productName: string;
  category: string;
  price: number;
  inventory: number;
  colors: string[];
  status: string;
  imageUrl: string;
  description: string;
  quantity: number;
}
const ProductDetails = ({ params }: { params: { id: string } }) => {
  const { id } = params;
  const { addToCart } = useCart();
  const api = `*[_type == "product"]{
  _id,
  productName,
  category,
  price,
  inventory,
  colors,
  status,
  "imageUrl": image.asset->url,
  description
}`;
  
  const [productData, setProductData] = useState<Product[]>([]);

  useEffect(() => {
    async function fetchData() {
      const product = await client.fetch(api);
      setProductData(product);
    }
    fetchData();
  }, []);
  
  const [quantity, setquantity] = useState(0);

  const productItem = productData.find((item: Product) => String(item._id) === String(id));
  console.log(productItem);

  return (
    <>
      <Header />
      {productItem ? (
        <div className="px-10 py-10 flex gap-10 md:gap-20 md:py-20 items-center justify-center flex-col lg:flex-row">
          <div>
            <Image
              src={urlFor(productItem.imageUrl).url()}
              alt="productImg"
              width={400}
              height={400}
            />
          </div>
          <div>
            <h1 className="text-[23px] md:text-[48px] font-medium pb-3 w-[350px]">
              {productItem.productName}
            </h1>
            <p className="text-[15px] min-w-[250px] md:w-[375px] pb-4">
              {productItem.description}
            </p>
            <div className="flex justify-between gap-5 pb-5">
              <p className="text-[23px] md:text-[36px] font-medium pb-3">
                $ {productItem.price}
              </p>
              <div className="flex justify-center items-center gap-0 mr-20">
                <button onClick={() => setquantity(quantity - 1)} className=" bg-black rounded-md cursor-pointer text-white p-2">
                  -
                </button>
                <p className=" border-2 border-black px-5 py-1 ">{quantity}</p>
                <button onClick={() => setquantity(quantity + 1)} className=" bg-black rounded-md cursor-pointer text-white p-2">
                  +
                </button>
              </div>
            </div>
            <div className="flex items-center bg-black rounded-[200px] cursor-pointer text-white pl-3 w-44">
              <BiCart size={25} className="" />
              <Link href={"/Cart"}>
                <button
                  className="py-[8px] px-[22px] bg-[#000000]  rounded-[400px] text-white"
                  onClick={() => addToCart({ ...productItem }, quantity)}
                >
                  Add to Cart
                </button>
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <p className="text-4xl text-center pt-28 ">Loading...</p>
      )}

      <Footer />
    </>
  );
};

export default ProductDetails;
