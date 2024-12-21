import React from "react";
import Header from "../layout/Header";
import HeroSection from "../Home/HeroSection";
import Services from "../Home/Services";
import ProductList from "../Product/ProductList";
import Inspiration from "../Home/inspiration";
import TipsAndTricks from "../Home/Tips-n-Tricks";
import FuniroFurniture from "../Home/FuniroFurniture";
import Footer from "../layout/Footer";

const Home = () => {
  return (
    <>
      <div className="bg-[#F9F1E7]">
        <Header />
        <HeroSection />
      </div>
      <div className="w-full max-w-7xl mx-auto px-6">
        <Services />
      </div>
      <ProductList />
      <Inspiration />
      <TipsAndTricks />
      <FuniroFurniture />
      <Footer />
    </>
  );
};

export default Home;
