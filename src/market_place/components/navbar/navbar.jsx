import React, { useState } from "react";
import { CartSection, LinkSection } from "./navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faCancel, faTimes } from "@fortawesome/free-solid-svg-icons";

const Navbar = (props) => {
  const [showMobileNav, setShowMobileNav] = useState(false);
  
  const toggleNavbar = () => {
    setShowMobileNav(!showMobileNav);
  };

  return (
    <nav className="flex justify-between items-center text-zinc-50">
      <div>
        <img src={props.logo} alt="logo" className="w-[5em] " />
      </div>
      {/* Bars Icon */}
      <FontAwesomeIcon
        icon={faBars}
        size="lg"
        className=" hover:text-[#F94C30] cursor-pointer hidden max-md-[400px]:block"
        onClick={() => toggleNavbar()}
      />

      {/* Desktop */}
      <div className="flex w-[70%] justify-between max-md-[400px]:hidden">
        <LinkSection LinkSectionStyle="flex gap-8" />
        <CartSection CartSectionStyle="flex gap-8 items-center" />
      </div>

      {/* Mobile */}
      <div
        className={`hidden max-md-[400px]:bg-[#000000ea] max-md-[400px]:p-10 max-md-[400px]:absolute max-md-[400px]:top-[0%] max-md-[400px]:left-[0%] max-md-[400px]:right-[0%] ${
          showMobileNav ? "max-md-[400px]:block" : "hidden"
        }`}
      >
        <FontAwesomeIcon
          icon={faTimes}
          size="lg"
          className="absolute right-[10%] hover:text-[#F94C30] cursor-pointer"
          onClick={() => toggleNavbar()}
        />
        <LinkSection LinkSectionStyle="flex gap-8 flex-col items-center mb-[2em]" />
        <CartSection CartSectionStyle="flex gap-8 items-center flex-col" />
      </div>
    </nav>
  );
};

export default Navbar;
