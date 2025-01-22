"use client";
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Main from "@/components/Mains";
import Products from "@/components/Products";
import Featured from "@/components/Featured";
import Dontmiss from "@/components/Dontmiss";
import Gearup from "@/components/Gearup";
import Essiental from "@/components/Essiental";
const Home = () => {
  return (
    <>
      <Header  />
      <Main />
      <Products />
      <Featured />
      <Gearup />
      <Dontmiss />
      <Essiental />
      <Footer />
    </>
  );
};
export default Home;
