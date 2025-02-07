import React from "react";
import Link from "next/link"
const Header = () => {
  return (
    <>
      <div className="flex justify-between items-center px-10 py-5 bg-gray-100">
        <h1 className="text-3xl font-bold text-gray-900">
          Every Thing Admin Dashboard
        </h1>
        <div className="flex space-x-4">
          <Link href={"/"} className="bg-blue-600 text-white font-semibold px-4 py-2 rounded-lg">
            Home
          </Link>
          <Link href={"/orders"} className="bg-blue-600 text-white font-semibold px-4 py-2 rounded-lg">
            Orders
          </Link>
          <Link href={"/customers"} className="bg-blue-600 text-white font-semibold px-4 py-2 rounded-lg">
            Customers
          </Link>
          <Link href={"/products"} className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-5 py-2 rounded-lg shadow-md transition">
            Product
          </Link>
        </div>
      </div>
    </>
  );
};

export default Header;
