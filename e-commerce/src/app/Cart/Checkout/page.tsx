"use client";
import React, { useEffect, useState } from "react";
import Header from "@/components/CheckoutHeader";
import Footer from "@/components/CheckoutFooter";
import Image from "next/image";
import { useCart } from "@/app/Context/createContext";
import { PiPackage } from "react-icons/pi";
import { urlFor } from "@/sanity/lib/image";
import { Trash } from "lucide-react";
import { client } from "@/sanity/lib/client";

const OrderForm = () => {
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

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    address1: "",
    address2: "",
    postalcode: "",
    locality: "",
    email: "",
    phone: "",
    pan: "",
  });
const submit = async () => {
    const data = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      address1: formData.address1,
      address2: formData.address2,
      postalcode: formData.postalcode,
      locality: formData.locality,
      email: formData.email,
      phone: formData.phone,
      pan: formData.pan,
    };
    const responce = await client.create({
      _type: "formSubmission",
      ...data,
    });
    console.log(responce);
    setFormData({
      firstName: "",
      lastName: "",
      address1: "",
      address2: "",
      postalcode: "",
      locality: "",
      email: "",
      phone: "",
      pan: "",
    });
  };

  return (
    <>
      <Header />
      <div className="px-10 mb-20 max-w-[1440px]">
        <h2 className="text-3xl font-bold mb-6">Place Your Order</h2>

        <div className="grid grid-cols-1 justify-items-center gap-2 justify-between lg:grid-cols-2">
          <div className="2xl:w-[500px] lg:w-[340px] w-[320px]">
            <div>
              <h1 className="text-[52] font-bold md-4">
                How would you like to get your order?
              </h1>
              <p className="text-[14px] mb-3">
                Customs regulation for India require a copy of the recipients
                KYC. The address on the KYC needs to match the shipping address.
                Our courier will contact you via SMS/email to obtain a copy of
                your KYC. The KYC will be stored securely and used solely for
                the purpose of clearing customs (including sharing it with
                customs officials) for all orders and returns. If your KYC does
                not match your shipping address, please click the link for more
                information. Learn More
              </p>
            </div>

            <form className="flex flex-col gap-5 mb-5 max-w-[295px] md:max-w-[440px]">
              <div className="flex  items-center border-2 border-black p-5 gap-4 rounded-xl">
                <PiPackage size={25} />
                <p className="text-[16px] font-medium ">Deliver It</p>
              </div>

              <h1 className="font-medium text-[17px]">
                Enter your name and address:
              </h1>
              <div>
                <input
                  placeholder="First Name"
                  type="text"
                  onChange={(e) =>
                    setFormData({ ...formData, firstName: e.target.value })
                  }
                  value={formData.firstName}
                  className=" w-full border border-gray-300 rounded-md shadow-sm p-2"
                />
              </div>
              <div>
                <input
                  type="text"
                  onChange={(e) =>
                    setFormData({ ...formData, lastName: e.target.value })
                  }
                  value={formData.lastName}
                  placeholder="Last Name"
                  className=" w-full border border-gray-300 rounded-md shadow-sm p-2"
                />
              </div>

              <div>
                <input
                  type="text"
                  onChange={(e) =>
                    setFormData({ ...formData, address1: e.target.value })
                  }
                  value={formData.address1}
                  placeholder="Address1"
                  className=" w-full border border-gray-300 rounded-md shadow-sm p-2"
                />
              </div>
              <div>
                <input
                  type="text"
                  onChange={(e) =>
                    setFormData({ ...formData, address2: e.target.value })
                  }
                  value={formData.address2}
                  placeholder="Address2"
                  className=" w-full border border-gray-300 rounded-md shadow-sm p-2"
                />
              </div>
              <div className="flex justify-between">
                <div>
                  <input
                    type="text"
                    onChange={(e) =>
                      setFormData({ ...formData, postalcode: e.target.value })
                    }
                    value={formData.postalcode}
                    placeholder="Postal Code"
                    className=" w-[85%] border border-gray-300 rounded-md shadow-sm p-2"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    onChange={(e) =>
                      setFormData({ ...formData, locality: e.target.value })
                    }
                    value={formData.locality}
                    placeholder="Locality"
                    className=" w-full border border-gray-300 rounded-md shadow-sm p-2"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <h1 className="font-medium text-[16px]">
                  Whats your contact information?
                </h1>
                <div>
                  <input
                    type="email"
                    placeholder="E-mail"
                    className=" w-full border border-gray-300 rounded-md shadow-sm p-2"
                  />
                  <p className="text-[11px] ml-2 mt-1 text-[#757575]">
                    A confirmation email will be sent after checkout.
                  </p>
                </div>
                <div>
                  <input
                    type="tel"
                    placeholder="Phone"
                    className=" w-full border border-gray-300 rounded-md shadow-sm p-2"
                  />
                  <p className="text-[11px] ml-2 mt-1 text-[#757575]">
                    A carrier might contact you to confirm delivery.
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <h1 className="font-medium text-[16px]">Whats your PAN?</h1>

                <div>
                  <input
                    type="text"
                    onChange={(e) =>
                      setFormData({ ...formData, pan: e.target.value })
                    }
                    value={formData.pan}
                    placeholder="PAN"
                    className=" w-full border border-gray-300 rounded-md shadow-sm p-2"
                  />
                </div>
                <p className="text-[11px] ml-2 mt-1 text-[#757575]">
                  Enter your PAN to enable payment with UPI, Net Banking or
                  local card methods
                </p>
                <div className="flex justify-start gap-2">
                  <input
                    type="checkbox"
                    placeholder="Phone"
                    className="  border border-gray-300 rounded-md shadow-sm p-2"
                  />
                  <p className="text-[11px] ml-2 mt-1 text-[#757575]">
                    Save PAN details to Nike Profile
                  </p>
                </div>
                <div className="flex justify-start gap-2">
                  <input
                    type="checkbox"
                    placeholder="Phone"
                    className="  border border-gray-300 rounded-md shadow-sm p-2"
                  />
                  <p className="text-[11px] ml-2 mt-1 text-[#757575]">
                    I have read and consent to eShopWorld processing my
                    information in accordance with the{" "}
                    <span className="underline">Privacy Statement</span> and
                    <span className="underline">Cookie Policy</span>. eShopWorld
                    is a trusted Nike partner.
                  </p>
                </div>
              </div>
            </form>
            <div>
              <button
                onClick={submit}
                className="py-[8px] px-[22px] bg-[#000000]  rounded-[400px] text-white"
              >
                Oder Now
              </button>
            </div>
            <div className="flex flex-col gap-3">
              <div className="border-t-2 py-1 my-2 text-[20px] ">Delivery</div>
              <div className="border-t-2 py-1 my-2 text-[20px] text-[#757575]">
                Shipping
              </div>
              <div className="border-t-2 py-1 my-2 text-[20px] text-[#757575]">
                Billing
              </div>
              <div className="border-t-2 py-1 my-2 text-[20px] text-[#757575]">
                Payment
              </div>
            </div>
          </div>
          <div>
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
              <div className="flex justify-between mb-2 border-t-2 border-b-2 py-2">
                <p className="text-black font-bold tetx-[19px]">Total</p>
                <p className="text-lg font-bold">$ {sum}</p>
              </div>
              <div>
                <p>
                  The total reflects the price of your order, including all
                  duties and taxes
                </p>
                {cart.map((item) => {
                  return (
                    <>
                      <div
                        key={item._id}
                        className="border-t-2 border-b-2 py-1 my-2 text-[17px] "
                      >
                        <div className="flex justify-between ">
                          <h1 className="font-bold mb-5 tetx-[25px]">
                            {item.productName}
                          </h1>
                          <button onClick={() => removeFromCart(item._id)}>
                            <Trash />
                          </button>
                        </div>
                        <div className="flex justify-between flex-col gap-7 pb-4 md:flex-row">
                          <div>
                            <Image
                              src={urlFor(item.imageUrl).url()}
                              width={160}
                              height={160}
                              alt="Me n"
                            />
                          </div>
                          <div className=" gap-3">
                            <p className="text-gray-500">{item.category}</p>
                            <p className="text-gray-500">{item.colors}</p>
                            <div className=" ">
                              <p className="flex text-gray-500">
                                Quantity: {item.quantity}
                              </p>
                              <p className="text-lg font-bold">
                                Price: $ {item.price}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default OrderForm;
