
import React from "react";
import Navbar from "./components/navbar/navbar";
import HeroSection from "./components/heroSection/hero";


const MarketPlace = (props) => {
  return (
    <section className="bg-[#131111] w-full px-[8em] max-md-[400px]:px-8">
      <Navbar logo={props.logo} />
      <HeroSection />
    </section>
  );
};

export default MarketPlace;
