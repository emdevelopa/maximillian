
import React from "react";
import Navbar from "./components/navbar/navbar";


const MarketPlace = (props) => {
  return (
    <section className="bg-[#131111] w-full px-20 max-md-[400px]:px-8">
      <Navbar logo={props.logo} />
    </section>
  );
};

export default MarketPlace;
