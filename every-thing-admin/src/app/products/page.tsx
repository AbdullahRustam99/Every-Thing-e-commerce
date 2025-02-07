"use client";
import React, { useEffect, useState } from "react";
import Header from "@/components/Header";
import { client } from "@/sanity/lib/client";
import Link from "next/link";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Product = () => {
  interface Product {
    _id: string;
    productName: string;
    category: string;
    price: number;
    inventory: number;
    colors: string[];
    status: string;
    imageUrl: string;
    description: string;
  }

  const [Products, setProducts] = useState<Product[]>([]);
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

  useEffect(() => {
    async function fetchData() {
      const product = await client.fetch(api);
      console.log(product);
      setProducts(product);
    }
    fetchData();
  }, []);
  console.log(Products);

  const delet = async (productId: string) => {
    try {
      await client.delete(productId);
      setProducts((items) => {
        return items.filter((item) => item._id !== productId);
      });
      toast(`Product Deleted `, { type: "success" });
    } catch (error) {
      console.log(error);
      toast(`Faile to delete`, { type: "error" });
    }
  };
  return (
    <>
      <Header />
      <div className="bg-gray-100 p-6 font-sans">
        <div className="max-w-5xl mx-auto bg-white p-6 rounded-lg shadow-md">
          <h1 className="text-xl font-bold text-gray-800">Products</h1>

          <div className="flex justify-between items-center my-4">
            <div className="flex space-x-4">
              <Link
                href={"/products/Add-products"}
                className="bg-blue-600 text-white font-semibold px-4 py-2 rounded-lg"
              >
                Add Products
              </Link>
            </div>
            <input
              type="text"
              placeholder="Search"
              className="border px-3 py-2 rounded-lg text-gray-600"
            />
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b">
                  <th className="py-3  text-left text-gray-600"> Product</th>
                  <th className="py-3  text-left text-gray-600"> Category</th>
                  <th className="py-3  text-left text-gray-600"> Price</th>
                  <th className="py-3  text-left text-gray-600"> Quantity</th>
                  <th className="py-3  text-left text-gray-600"> Action</th>
                </tr>
              </thead>
              <tbody>
                {Products.map((item) => {
                  return (
                    <tr
                      key={item._id}
                      className="border-b"
                      x-data="{ open: false }"
                    >
                      <td className="py-3 gap-5 flex w-[270px]">
                        <Image
                          src={urlFor(item.imageUrl).url()}
                          alt="img"
                          width={60}
                          height={60}
                        />
                        {item.productName}
                      </td>
                      <td className="py-3 w-[300px]">{item.category}</td>
                      <td className="py-3  w-[100px]">{item.price}</td>
                      <td className="py-3  w-[100px]">{item.inventory}</td>
                      <td>
                        <button
                          onClick={() => {
                            delet(item._id);
                          }}
                          className="bg-blue-600 text-white font-semibold px-6 py-2 rounded-lg"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
        <ToastContainer position="bottom-right" />
      </div>
    </>
  );
};

export default Product;
