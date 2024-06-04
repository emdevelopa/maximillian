import { faCartShopping, faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { faHeadset } from "@fortawesome/free-solid-svg-icons/faHeadset";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Navbar = (props) => {
  return (
    <nav className="flex justify-between items-center text-zinc-50">
      <div>
        <img src={props.logo} alt="logo" className="w-[6em] " />
      </div>
      <div>
        <ul className="flex gap-8">
          <li>
            <a href="#">About</a>
          </li>

          <li>
            <a href="#">Stores</a>
          </li>
          <li>
            <a href="#">Cars</a>
          </li>
          <li>
            <a href="#">A & E</a>
          </li>
        </ul>
      </div>
      <div>
        <ul className="flex gap-8 items-center">
          <li>
            <a href="register">
              <FontAwesomeIcon icon={faHeadset} /> Live Chat
            </a>
          </li>
          <li>
            <a
              href="#"
              className="bg-[#ff2d2d38] px-2 py-2 rounded-md hover:bg-black"
            >
              Get Started <FontAwesomeIcon icon={faUserCircle}/>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="bg-[#F94C30] px-2 py-2 rounded-sm hover:bg-black"
            >
              <FontAwesomeIcon icon={faCartShopping} /> Cart
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
