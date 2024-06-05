import React from "react";
import { CartSection, LinkSection } from "./navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCancel, faTimes } from "@fortawesome/free-solid-svg-icons";

const Navbar = (props) => {
  return (
    <nav className="flex justify-between items-center text-zinc-50">
      <div>
        <img src={props.logo} alt="logo" className="w-[6em] " />
      </div>
      {/* Desktop */}
      <div className="flex w-[70%] justify-between max-md-[400px]:hidden">
        <LinkSection LinkSectionStyle="flex gap-8" />
        <CartSection CartSectionStyle="flex gap-8 items-center" />
      </div>

      {/* Mobile */}
      <div className="hidden max-md-[400px]:bg-[#000000d8] max-md-[400px]:block max-md-[400px]:p-10 max-md-[400px]:absolute max-md-[400px]:top-[0%] max-md-[400px]:left-[0%] max-md-[400px]:right-[0%]">
        <FontAwesomeIcon icon={faTimes} size="lg" className="absolute right-[10%]"/>
        <LinkSection LinkSectionStyle="flex gap-8 flex-col items-center mb-[2em]" />
        <CartSection CartSectionStyle="flex gap-8 items-center flex-col" />
      </div>
    </nav>
  );
};

export default Navbar;
