
import React from "react";
import Navbar from "./components/navbar/navbar";
import HeroSection from "./components/heroSection/hero";
import Catalogue from "./components/catalogue/catalogue";
import WWO from "./components/whatWeOffer/wwo";
import PC from "./components/petsCollection/petsColl";
import Works from "./components/works/Works";
import Footer from "./components/footer/Footer";
import Contact from "./components/contact/Contact";
import Testimonial from "./components/testimonials/Testimonial";
import GetInTouch from "./components/getInTouch/GetInTouch";
import FAQ from "./components/faq/FAQ";


const MarketPlace = (props) => {
  return (
    <section className="bg-[#131111] w-full px-[8em] max-md-[400px]:px-8">
      <Navbar logo={props.logo} />
      <HeroSection />
      <Catalogue />
      <WWO />
      <PC/>
      <Works />
      <Testimonial />
      <GetInTouch />
      {/* <Contact /> */}
      <FAQ />
      <Footer logo={props.logo}/>
    </section>
  );
};

export default MarketPlace;
