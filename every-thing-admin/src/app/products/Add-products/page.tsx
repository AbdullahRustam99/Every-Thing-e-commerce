"use client";
import React, { useEffect, useState } from "react";
import Header from "@/components/Header";
import { client } from "@/sanity/lib/client";
import { useRouter } from "next/navigation";
const AddProducts = () => {
  const router = useRouter();
  const [form, setForm] = useState({
    productName: "",
    description: "",
    price:0,
    category: "",
    inventory:0,
    colors: [""],
    status: "",
    img: "",
  });
  const handleimg = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const asset = await client.assets.upload("image", file);
      console.log("uploded Assets",asset)
      setForm((prevForm) => ({
        ...prevForm,
        img: asset._id,
      }));
    }
  };
  const submits = async () => {
    const response = await client.create({
      _type: "product",
      ...form,
      image: {
        _type: "image",
        asset: {
          _type: "reference",
          _ref: form.img,
        },
      },
    });
    router.push("/products");
    console.log(response);
  };
  return (
    <>
      <Header />
      <div className="bg-gray-100 pt-10">
        <div className="max-w-4xl  mx-auto bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Product Form</h2>

          <div className="grid  grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border p-4 rounded-lg">
              <p className="text-sm text-gray-600 mb-2">Thumbnail</p>
              <div className="cursor-pointer w-full h-32 bg-gray-200 flex items-center justify-center rounded-md">
                <label className="cursor-pointer">
                  <input
                    type="file"
                    accept=".png, .jpg, .jpeg"
                    onChange={handleimg}
                  />
                  <img
                    src={form.img}
                    alt="Uploaded"
                    className="mt-2 w-32 h-32 rounded-md"
                  />
                </label>
              </div>
              <p className="text-xs text-gray-500 mt-2">
                Only .png, .jpg, .jpeg formats are accepted.
              </p>
            </div>

            <div className=" border p-4 rounded-lg">
              <label className="block text-sm">Product Name</label>
              <input
                type="text"
                className="w-full border rounded-md p-2 mt-1"
                placeholder="Product name"
                value={form.productName}
                onChange={(e) =>
                  setForm({ ...form, productName: e.target.value })
                }
              />

              <label className="block text-sm mt-4">Description</label>
              <textarea
                className="w-full border rounded-md p-2 mt-1"
                rows={3}
                placeholder="Type your text here..."
                value={form.description}
                onChange={(e) =>
                  setForm({ ...form, description: e.target.value })
                }
              />
            </div>
          </div>

          <div className="mt-6 border p-4 rounded-lg">
            <label className="block text-sm">Price</label>
            <input
              type="number"
              className="w-full border rounded-md p-2 mt-1"
              placeholder="$0.00"
              value={form.price}
              onChange={(e) => setForm({ ...form, price: parseInt(e.target.value) })}
            />
          </div>
          <div className="mt-6 border p-4 rounded-lg">
            <label className="block text-sm">Categories</label>

            <input
              type="text"
              className="w-full border rounded-md p-2 mt-1"
              placeholder="e.g MenShoes , WomenShoes"
              value={form.category}
              onChange={(e) => setForm({ ...form, category: e.target.value })}
            />
          </div>
          <div className="mt-6 border p-4 rounded-lg">
            <label className="block text-sm">Quantity</label>
            <input
              type="number"
              className="w-full border rounded-md p-2 mt-1"
              placeholder="$0.00"
              value={form.inventory}
              onChange={(e) => setForm({ ...form, inventory: parseInt(e.target.value) })}
            />
          </div>
          <div className="flex justify-between mt-6 border p-4 rounded-lg">
            <div className="w-full px-5">
              <label className="block text-sm">Color</label>
              <input
                type="text"
                className="w-full border rounded-md p-2 mt-1"
                placeholder="e.g blue ,red"
                value={form.colors}
                onChange={(e) => setForm({ ...form, colors:[ e.target.value ]})}
              />
            </div>
            <div className="w-full px-5">
              <label className="block text-sm">Status</label>
              <input
                type="text"
                className="w-full border rounded-md p-2 mt-1"
                placeholder="eg pending "
                value={form.status}
                onChange={(e) => setForm({ ...form, status: e.target.value })}
              />
            </div>
          </div>
          <div className="">
            <button
              onClick={submits}
              className="bg-blue-500 text-white font-semibold text-2xl w-full mt-6 border p-4 rounded-lg"
            >
              ADD
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddProducts;
