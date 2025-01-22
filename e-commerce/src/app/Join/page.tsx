"use client"
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer"
import Logo from "@/img/logo.png";
import Image from "next/image";
import Link from "next/link";
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
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const formSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters long" }),
  firstName: z.string().nonempty({ message: "First Name is required" }),
  lastName: z.string().nonempty({ message: "Last Name is required" }),
  dob: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, {
    message: "Date of Birth must be in the format YYYY-MM-DD",
  }),
  gender: z.enum(["male", "female"], { message: "Gender is required" }),
  emailUpdates: z.boolean().optional(),
});


const NikeMember = () => {
  const form = useForm<z.infer<typeof formSchema>>({
      resolver: zodResolver(formSchema),
    });
  
    function onSubmit(values: z.infer<typeof formSchema>) {
      console.log(values);
    }
  return (
    <>
      <Header />
      <div className="flex justify-center items-center">
        <div className="px10 flex justify-center items-center flex-col text-center gap-2 md:max-w-[380px] px-5 my-5">
          <Image src={Logo} alt="logo" />
          <h2 className="text-3xl font-bold mb-6">Become a Nike Member</h2>

          <p className="text-lg mb-4">
            Create your Nike Member profile and get first access to the very
            best of Nike products, inspiration, and community.
          </p>

          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="flex flex-col gap-5"
            >
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        placeholder="Email"
                        {...field}
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        placeholder="Password"
                        {...field}
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="firstName"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        placeholder="First Name"
                        {...field}
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
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
                        {...field}
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="dob"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        placeholder="Date OF Birth"
                        {...field}
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="gender"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        placeholder="Gender"
                        {...field}
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        placeholder="Password"
                        {...field}
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button
                className="py-[8px] px-[22px] bg-[#000000]  rounded-[400px] text-white"
                type="submit"
              >
                Submit
              </Button>
            </form>
          </Form>
        
          <p className="text-sm text-gray-500 mt-4">
            Already a Member?
            <Link href={"/Singin"} className="text-blue-500">
              Sign In
            </Link>
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default NikeMember;
