import React from "react";
import Navbar from "./navbar/navbar";

const MarketPlace = (props) => {
  return (
    <section className="bg-[#131111] w-full">
      <Navbar logo={props.logo } />

      <h1 className="text-red-400">MarketPlace</h1>
    </section>
  );
};

export default MarketPlace;
