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
import { ToastContainer, toast } from "react-toastify";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormField,
  FormItem,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { v4 as uuidv4 } from "uuid";
import { useRouter } from "next/navigation";

const formSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  address1: z.string().min(1, "Address is required"),
  address2: z.string().optional(),
  postalcode: z.string().min(1, "Postal code is required").max(6),
  locality: z.string().min(1, "Locality is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().regex(/^\+?[0-9]{7,15}$/, "Invalid phone number"),
});

const OrderForm = () => {
  const { cart, removeFromCart } = useCart();
  const router = useRouter();
  useEffect(() => {
    console.log("Cart contents:", cart);
  }, [cart]);
  const [sum, setSum] = useState(0);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  useEffect(() => {
    const total = cart.reduce(
      (acc: number, item: { price: number; quantity: number }) =>
        Math.round(acc + item.price * item.quantity),
      0
    );
    setSum(total);
  }, [cart]);

  const submit = async (values: z.infer<typeof formSchema>) => {
    try {
      const data = {
        firstName: values.firstName,
        lastName: values.lastName,
        address1: values.address1,
        postalcode: values.postalcode,
        locality: values.locality,
        email: values.email,
        phone: values.phone,
        address2: values.address2,
        cart: cart.map((item) => ({
          _key: uuidv4(),
          productId: item._id,
          productName: item.productName,
          productQuantity: item.quantity,
          price: item.price,
          Image: item.imageUrl
        })),
        sum,
      };

      const response = await client.create({
        _type: "orderDetails",
        ...data,
      });
      router.push("/All-Products");
      console.log("Order Submitted:", response);
      toast("Order placed successfully!", { type: "success", autoClose: 1000 });
    } catch (error) {
      console.log("Error submitting order:", error);
      toast("Failed to submit order.", { type: "error", autoClose: 1000 });
    }
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
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(submit)}
                className="flex flex-col gap-5 mb-5 max-w-[295px] md:max-w-[440px]"
              >
                <div className="flex  items-center border-2 border-black p-5 gap-4 rounded-xl">
                  <PiPackage size={25} />
                  <p className="text-[16px] font-medium ">Deliver It</p>
                </div>

                <h1 className="font-medium text-[17px]">
                  Enter your name and address:
                </h1>

                <FormField
                  control={form.control}
                  name="firstName"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          placeholder="First Name"
                          type="text"
                          {...field}
                          className=" w-full border border-gray-300 rounded-md shadow-sm p-2"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="lastName"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          placeholder="Last Name"
                          type="text"
                          {...field}
                          className=" w-full border border-gray-300 rounded-md shadow-sm p-2"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="address1"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          placeholder="Address1"
                          type="text"
                          {...field}
                          className=" w-full border border-gray-300 rounded-md shadow-sm p-2"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="address2"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          placeholder="Address2"
                          type="text"
                          {...field}
                          className=" w-full border border-gray-300 rounded-md shadow-sm p-2"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="flex justify-between">
                  <FormField
                    control={form.control}
                    name="postalcode"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            placeholder="Postal Code"
                            type="text"
                            {...field}
                            className=" w-[85%] border border-gray-300 rounded-md shadow-sm p-2"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="locality"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            placeholder="Locality"
                            type="text"
                            {...field}
                            className=" w-full border border-gray-300 rounded-md shadow-sm p-2"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="flex flex-col gap-3">
                  <h1 className="font-medium text-[16px]">
                    Whats your contact information?
                  </h1>
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            placeholder="E-mail"
                            type="text"
                            {...field}
                            className=" w-full border border-gray-300 rounded-md shadow-sm p-2"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            placeholder="Phone"
                            type="tel"
                            {...field}
                            className=" w-full border border-gray-300 rounded-md shadow-sm p-2"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="flex flex-col gap-3">
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
                      <span className="underline">Cookie Policy</span>.
                      eShopWorld is a trusted Nike partner.
                    </p>
                  </div>
                </div>
                <button
                  type="submit"
                  className="py-[8px] px-[22px] bg-[#000000]  rounded-[400px] text-white"
                >
                  Order Now
                </button>
              </form>
            </Form>
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
                              alt="Men"
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
        <ToastContainer position="bottom-right" />
      </div>
      <Footer />
    </>
  );
};

export default OrderForm;
