"use client";
import React, { useEffect, useState } from "react";
import Header from "@/components/Header";
import { client } from "@/sanity/lib/client";

const ProductOrderDetalis = () => {
  interface Order {
    _id: string;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    sum: number;
    cart: {
      productId: string;
      productName: string;
      productQuantity: number;
      price: number;
      image: string;
    }[];
    _createdAt: string;
  }

  const [order, setOrder] = useState<Order[]>([]);
  const [toggleRow, settoggleRow] = useState<string | null>(null);
  const api = `*[_type == "orderDetails"]{
  _id,
  firstName,
  lastName,
  email,
  phone,
  sum,
  cart[]{
    productId,
    productName,
    productQuantity,
    price
  },
   _createdAt 
}
`;
  useEffect(() => {
    async function fetchData() {
      const product = await client.fetch(api);
      console.log(product);
      setOrder(product);
    }
    fetchData();
  }, []);
  console.log(order);
  const toggel = (orderId: string) => {
    if (toggleRow === orderId) {
      settoggleRow(null);
    } else {
      settoggleRow(orderId);
    }
  };

  return (
    <>
      <Header />
      <div className="bg-gray-100 p-6 font-sans">
        <div className="max-w-5xl mx-auto bg-white p-6 rounded-lg shadow-md">
          <h1 className="text-xl font-bold text-gray-800">Product Orders</h1>
          <p className="text-gray-500 text-sm">Avg. 57 orders per day</p>

          <div className="flex justify-between items-center my-4">
            <div className="flex space-x-4">
              <select className="border px-3 py-2 rounded-lg text-gray-600">
                <option key="show-all">Show All</option>
                <option key="pending">Pending</option>
                <option key="confirmed">Confirmed</option>
                <option key="shipped">Shipped</option>
              </select>
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
                  <th className="py-3 text-left text-gray-600">ORDER ID</th>
                  <th className="py-3 text-left text-gray-600">CREATED</th>
                  <th className="py-3 text-left text-gray-600">CUSTOMER</th>
                  <th className="py-3 text-left text-gray-600">TOTAL</th>
                  <th className="py-3 text-left text-gray-600">STATUS</th>
                </tr>
              </thead>
              <tbody>
                {order.map((item) => {
                  return (
                    <>
                      <tr key={item._id} className="border-b">
                        <td className="py-3">{item._id}</td>
                        <td>{new Date(item._createdAt).toLocaleString()}</td>
                        <td>
                          {(
                            item.firstName +
                            " " +
                            item.lastName
                          ).toLocaleLowerCase()}
                        </td>
                        <td>${item.sum}</td>
                        <td>
                          <div className="flex space-x-4">
                            <select className="border px-3 py-2 rounded-lg text-gray-600">
                              <option>Show All</option>
                              <option>Pending</option>
                              <option>Confirmed</option>
                              <option>Shipped</option>
                            </select>
                          </div>
                        </td>
                        <td>
                          <button
                            onClick={() => toggel(item._id)}
                            className="text-gray-600 font-bold"
                          >
                            {toggleRow === item._id ? "-" : "+"}
                          </button>
                        </td>
                      </tr>
                      {toggleRow === item._id &&
                        item.cart.map((product) => (
                          <tr key={item._id} className="bg-gray-50 h-20 overflow-y-scroll">
                            <td colSpan={6} className="p-4 text-gray-600">
                              <div
                                className="flex items-center space-x-4 border-b py-2"
                                key={product.productId}
                              >
                                <img
                                  src={product.image}
                                  alt={product.productName}
                                  className="w-12 h-12 object-cover rounded"
                                />
                                <div className="pl-3 w-96">
                                  <p className="font-semibold">
                                    {product.productName}
                                  </p>
                                </div>
                                <div className="w-16 ">
                                  <p className="font-semibold ">Cost </p>
                                  <p className=" ">${product.price}</p>
                                </div>
                                <div className="w-16">
                                  <p className="font-semibold ">Qty</p>{" "}
                                  <p className=" ">{product.productQuantity}</p>
                                </div>
                                <div className="w-16">
                                  <p className="font-semibold ">Total</p>
                                  <p className=" ">
                                    ${product.price * product.productQuantity}
                                  </p>
                                </div>
                              </div>
                            </td>
                          </tr>
                        ))}
                    </>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductOrderDetalis;
