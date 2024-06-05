
import React from "react";
import Navbar from "./components/navbar/navbar";


const MarketPlace = (props) => {
  return (
    <section className="bg-[#131111] w-full px-20">
      
      <Navbar logo={props.logo}/>

      {/* <h1 className="text-red-400">MarketPlace</h1> */}
    </section>
  );
};

export default MarketPlace;
