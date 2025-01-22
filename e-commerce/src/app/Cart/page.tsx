"use client";
import React, { useState, useEffect } from "react";
import { useCart } from "@/app/Context/createContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import { Heart, Trash } from "lucide-react";
import Button from "@/components/Button";
import Link from "next/link";
import { urlFor } from "@/sanity/lib/image";

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
                      <Trash onClick={() => removeFromCart(item._id)} />
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
              <Button text=" Member Checkout" />
            </Link>
          </div>
        </div>
      <Footer />
    </>
  );
};

export default ShoppingCart;
