"use client"
import React, { useEffect, useState } from "react";
import Header from "@/components/Header";
import { client } from "@/sanity/lib/client";


const Customers = () => {
  interface OrderDetails {
    firstName: string;
    lastName: string;
    address1: string;
    address2?: string;
    postalcode: string;
    locality: string;
    email: string;
    phone: string;
  }

  const [order, setOrder] = useState<OrderDetails[]>([]);
  const api = `*[_type == "orderDetails"] {
  firstName,
  lastName,
  address1,
  address2,
  postalcode,
  locality,
  email,
  phone
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

  return (
    <>

      <Header />
      <div className="bg-gray-100 p-6 font-sans">
        <div className="max-w-5xl mx-auto bg-white p-6 rounded-lg shadow-md">
          <h1 className="text-xl font-bold text-gray-800">Customers</h1>

          <div className="flex justify-between items-center my-4">
          
            <input
              type="text"
              placeholder="Search"
              className="border w-[1000px] px-3 py-2 rounded-lg text-gray-600"
            />
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b">
                  <th className="py-3  text-left text-gray-600"> NAME</th>
                  <th className="py-3  text-left text-gray-600"> Address</th>
                  <th className="py-3  text-left text-gray-600"> Email</th>
                  <th className="py-3  text-left text-gray-600"> Phone</th>
                  <th className="py-3  text-left text-gray-600"> Locality</th>
                  <th className="py-3  text-left text-gray-600"> Postal Code</th>
                  <th></th>
                </tr>
              </thead>
              {order.map((item) => {
                return (
                  <>
                    <tbody>
                      <tr className="border-b" x-data="{ open: false }">
                        <td className="py-3 px-3 w-[150px]">
                          {(
                            item.firstName +
                            " " +
                            item.lastName
                          ).toLocaleUpperCase()}
                        </td>
                        <td className="py-3 px-3 w-[40px]">{item.address1}</td>
                        <td className="py-3 px-3 w-[40px]">{item.email}</td>
                        <td className="py-3 px-3 w-[40px]">{item.phone}</td>
                        <td className="py-3 px-3 w-[40px]">{item.locality}</td>
                        <td>{item.postalcode}</td>
                      </tr>
                    </tbody>
                  </>
                );
              })}
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Customers;
