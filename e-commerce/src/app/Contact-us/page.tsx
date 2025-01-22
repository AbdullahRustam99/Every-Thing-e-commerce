import React from "react";
import Button from "@/components/Button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { BiSolidLike } from "react-icons/bi";
import { BiSolidDislike } from "react-icons/bi";
import { BiSearch } from "react-icons/bi";
import { ImMobile } from "react-icons/im";
import { RiMessage2Fill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";
import location from "@/img/nike locaion.png";
import Image from "next/image";
import Link from "next/link";

const NikeMember = () => {
  return (
    <>
      <Header />
      <div className="px-10 flex justify-center items-center flex-col text-center gap-2 my-5">
        <h2 className="uppercase text-[32px] font-bold">GET HELP</h2>
        <div className="flex items-center justify-between border-[1px]  border-[#757575] py-3 px-5 gap-4 rounded-xl">
          <input
            placeholder="What can we help you with?"
            className="w-[190px] md:w-[270px] placeholder:text-[#757575]"
          />
          <BiSearch size={20} className="text-[#757575]" />
        </div>
      </div>
      <div className="px-10 mb-10">
        <div className="flex flex-col md:flex-row mb-10">
          <div className=" min-w-[270px] mb-5 pr-5   md:border-r-2">
            <h1 className="text-[17px] md:text-[28px] font-medium">
              WHAT PAYMENT OPTIONS CAN I USE ON NIKE ORDERS?
            </h1>
            <p className="text-[15px] font-normal">
              We want to make buying your favourite Nike shoes and gear online
              fast and easy, and we accept the following payment options:
            </p>
            <div className="ml-5 flex flex-col gap-2 my-2">
              <p className="text-[16px] font-normal">
                Visa, Mastercard, Diners Club, Discover, American Express, Visa
                Electron, Maestro
              </p>
              <p className="text-[16px] font-normal">
                If you enter your PAN information at checkout, youll be able to
                pay for your order with PayTM or a local credit or debit card.
              </p>
              <p className="text-[16px] font-normal">Apple Pay</p>
            </div>
            <p className="text-[16px] font-normal mb-2">
              <span className="underline font-medium"> Nike Members</span> can
              store multiple debit or credit cards in their profile for faster
              checkout. If youre not already a Member,{" "}
              <span className="underline font-medium">join us today</span>.
            </p>
            <div className="flex gap-4">
              <Link href={"/Join"}>
                <Button text="JOIN US" />
              </Link>
              <Link href={"/All-Products"}>
                <Button text="SHOP NIKE" />
              </Link>
            </div>
            <h1 className="text-[26px] md:text-[28px] font-medium mt-5">
              FAQs
            </h1>
            <div className="my-4">
              <h1 className="text-[16px] font-medium ">
                Does my card need international purchases enabled?
              </h1>
              <p className="text-[16px] font-normal">
                Yes, we recommend asking your bank to enable international
                purchases on your card. You will be notified at checkout if
                international purchases need to be enabled.
              </p>
            </div>
            <p className="text-[16px] font-normal">
              Please note, some banks may charge
              <span className="underline font-medium">
                {" "}
                a small transaction{" "}
              </span>
              fee for international orders.
            </p>
            <div className="my-4">
              <h1 className="text-[16px] font-medium ">
                Can I pay for my order with multiple methods?
              </h1>
              <p className="text-[16px] font-normal">
                Can I pay for my order with multiple methods? No, payment for
                Nike orders cant be split between multiple payment methods.
              </p>
            </div>
            <div className="my-4">
              <h1 className="text-[16px] font-medium ">
                What payment method is accepted for SNKRS orders?
              </h1>
              <p className="text-[16px] font-normal">
                You can use any accepted credit card to pay for your SNKRS
                order.
              </p>
            </div>
            <div className="my-4">
              <h1 className="text-[16px] font-medium ">
                Why dont I see Apple Pay as an option?
              </h1>
              <p className="text-[16px] font-normal">
                To see Apple Pay as an option in the Nike App or on Nike.com,
                youll need to use a compatible Apple device running the latest
                OS, be signed in to your iCloud account and have a supported
                card in your Wallet. Additionally, youll need to use Safari to
                use Apple Pay on Nike.com.
              </p>
            </div>
            <div>
              <p className="text-[16px] font-normal">
                Was this answer helpful?
              </p>
              <div className="flex gap-3">
                <BiSolidLike size={23} />
                <BiSolidDislike size={23} />
              </div>
              <h1 className="text-[16px] font-medium pt-3 pb-2 text-[#757575]">
                RELATED
              </h1>
              <div className="ml-5">
                <h1 className="text-[16px] underline font-medium ">
                  WHAT ARE NIKES DELIVERY OPTIONS?
                </h1>
                <h1 className="text-[16px] underline font-medium ">
                  HOW DO I GET FREE DELIVERY ON NIKE ORDERS?
                </h1>
              </div>
            </div>
          </div>
          <div className="flex justify-around items-center flex-col md:ml-10">
            <h1 className="text-[26px] md:text-[28px] font-medium">
              Contact Us
            </h1>
            <div className="flex justify-evenly items-center flex-col">
              <ImMobile size={60} />
              <p className="text-[16px] font-medium">000 800 919 0566</p>
              <p className="text-[16px] font-normal w-52 text-center">
                Products & Orders: 24 hours a day, 7 days a week Company Info &
                Enquiries: 07:30 - 16:30, Monday - Friday
              </p>
            </div>
            <div className="flex justify-evenly items-center flex-col">
              <RiMessage2Fill size={60} />
              <p className="text-[16px] font-medium">24 hours a day</p>
              <p className="text-[16px] font-normal">7 days a week</p>
            </div>
            <div className="flex justify-evenly items-center flex-col">
              <MdEmail size={60} />
              <p className="text-[16px] font-medium">We will reply within</p>
              <p className="text-[16px] font-normal">five business days</p>
            </div>
            <div className="flex justify-evenly items-center flex-col">
              <Image src={location} alt="location" />
              <p className="text-[16px] font-medium">STORE LOCATOR</p>
              <p className="text-[16px] font-normal">
                Find Nike retail stores near you
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default NikeMember;
