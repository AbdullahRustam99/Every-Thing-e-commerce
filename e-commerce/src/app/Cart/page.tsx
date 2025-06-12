"use client";
import React, { useState, useEffect } from "react";
import { useCart } from "@/app/Context/createContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import { Heart, Trash } from "lucide-react";
import Link from "next/link";
import { urlFor } from "@/sanity/lib/image";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const ShoppingCart = () => {
  const { cart, removeFromCart } = useCart();
  const [sum, setSum] = useState(0);
 
  useEffect(() => {
    const total = cart.reduce(
      (acc: number, item: { price: number; quantity: number }) =>
        Math.round(acc + item.price * item.quantity),
      0
    );
    setSum(total);
  }, [cart]);
  const notify = (productName: string) => {
    toast(`${productName} Was removed from cart`, { type: "warning" });
  };

  const empty = () => {
    toast(`Add Product to Checkout`, { type:"warning" });
  }

  if (cart == null || cart.length === 0) {
    return (
      <>
        <Header />
        <h2 className="text-3xl font-bold ml-20 mb-6">Bag</h2>
        <div className="lg:flex  lg:justify-evenly  bg-white p-8 max-w-[1440px]">
          <div className="flex justify-evenly flex-col ">
            {cart.map((item) => {
              return (
                <div
                  key={item._id}
                  className="flex flex-col justify-between gap-3 pb-4 md:flex-row md:w-[500px] lg:w-[520px]"
                >
                  <div>
                    <Image
                      src={urlFor(item.imageUrl).url()}
                      alt="MEn"
                      width={200}
                      height={200}
                    />
                  </div>
                  <div className="flex flex-col gap-3">
                    <h3 className="text-xl font-semibold">
                      {item.productName}
                    </h3>
                    <p className="text-gray-500">{item.category}</p>
                    <p className="text-gray-500">{item.colors}</p>

                    <div className="flex gap-4">
                      <p className="text-gray-500">Quantity {item.quantity}</p>
                    </div>

                    <div className="flex gap-4 cursor-pointer">
                      <Heart />
                      <Trash
                        onClick={() => {
                          removeFromCart(item._id);
                          notify(item.productName);
                        }}
                      />
                    </div>
                  </div>
                  <p className="text-lg font-bold">$ {item.price}</p>
                </div> 
              );
            })}
          </div>
          <div className="lg:w-[344px] w-full">
            <h3 className="text-xl font-semibold pb-4">Summary</h3>
            <div className="flex justify-between mb-2">
              <p className="text-gray-500">Subtotal</p>
              <p className="text-lg font-bold">$ {sum}</p>
            </div>
            <div className="flex justify-between mb-2">
              <p className="text-gray-500">Estimated Delivery & Handling</p>
              <p className="text-lg font-bold">Free</p>
            </div>
            <div className="flex justify-between mb-4">
              <p className="text-gray-500">Total</p>
              <p className="text-lg font-bold">$ {sum}</p>
            </div>
            <Link href={"/Cart/Checkout"}>
              <button
                className="py-[8px] px-[22px] bg-[#000000]  rounded-[400px] text-white"
                onClick={() =>{
                if(cart.length === 0){
                  empty()}}}
              >
                Member Checkout
              </button>
            </Link>
          </div>
        </div>
        <ToastContainer position="bottom-right" />
        <Footer />
      </>
    );
  }
};

export default ShoppingCart;
