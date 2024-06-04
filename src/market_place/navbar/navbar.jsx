import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { faHeadset } from "@fortawesome/free-solid-svg-icons/faHeadset";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Navbar = (props) => {
  return (
    <nav className="flex justify-between">
      <div>
        <img src={props.logo} alt="logo" className="w-[6em] " />
      </div>
      <div>
        <ul >
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
        <ul>
          <li>
            <a href="register">
              <FontAwesomeIcon icon={faHeadset} /> Live Chat
            </a>
          </li>
          <li>
            <a href="#">Get Started</a>
          </li>
                  <li>
                      <a href="#"><FontAwesomeIcon icon={faCartShopping}/> Cart</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
