import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import ToggleBurger from "./Hamburger";
import About from "./about";
import { faHamburger, faX, re } from "@fortawesome/free-solid-svg-icons";
import Journal from "./journal";
import WhatWeOffer from "./offer";
import TestimonialCarousel from "./testimonial";
import Footer from "./footer";

export default function Home(props) {
  const [onHover, setOnHover] = useState(false);
  const [showToolTips, setShowToolTips] = useState(false);
  const [hamburger, SetHamburger] = useState(false);
  const handleDropdown = () => {
    setOnHover(!onHover);
  };

  const handleShowToolTips = () => {
    setShowToolTips(true);
  };
  const handleHideToolTips = () => {
    setShowToolTips(false);
  };
  // console.log(hamburger);
  const images = [
    props.imageZero,
    props.imageOne,
    props.imageTwo,
    props.imageThree,
    props.imageFour,
    props.imageFive,
    props.imageSix,
    props.imageSeven,
    props.imageEight,
    props.imageNine,
  ];
  return (
    <>
      <section className="bg-black">
        <div className="bgImage">
          <nav className="text-white absolute w-full flex justify-around z-30">
            <img src={props.logo} alt="logo" className="w-[9em] " />

            <ul
              className={
                "flex justify-around items-center w-[40%] max-md-957:bg-[#000000fa] " +
                (hamburger
                  ? "max-md-[600px]:flex max-md-[600px]:w-full max-md-[600px]:absolute max-md-[600px]:right-0 max-md-[600px]:left-0 max-md-[600px]:top-[0%]  max-md-[600px]:gap-4 max-md-[600px]:h-[90vh] max-md-[600px]:flex-col "
                  : "max-md-[600px]:hidden")
              }
            >
              <li>
                <a
                  href="#about"
                  className="hover:text-orange-400 hover:underline"
                >
                  ABOUT
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-400 hover:underline">
                  MARKETPLACE
                </a>
              </li>
              {/* <li>
                <p
                  className="hover:text-orange-400 cursor-pointer"
                  onClick={handleDropdown}
                >
                  STORES <FontAwesomeIcon icon={faAngleDown} />
                </p>

                <div
                  className={
                    "absolute bg-[#0000009e] p-2 flex gap-2 rounded " +
                    (onHover ? "block" : "hidden")
                  }
                >
                  <div className="flex flex-col gap-4 items-start text-[13px]">
                    <p className="flex items-center gap-2">
                      <FontAwesomeIcon icon={faCat} />
                      Pets
                    </p>
                    <p className="flex items-center gap-3">
                      <FontAwesomeIcon icon={faMobile} />
                      Gadgets
                    </p>
                    <p className="flex items-center gap-2">
                      <FontAwesomeIcon icon={faStore} />
                      Wears
                    </p>
                    <p className="flex items-center gap-3">
                      <FontAwesomeIcon icon={faBook} />
                      Book
                    </p>
                  </div>
                </div>
              </li> */}

              <li>
                <a href="#" className="hover:text-orange-400 hover:underline">
                  BLOG
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-orange-400 relative hover:underline"
                  onMouseOver={handleShowToolTips}
                  onMouseLeave={handleHideToolTips}
                >
                  CONTACT
                  {/* <span
                    className={
                      "absolute left-0  top-5 bg-white text-black text-[12px] p-1 rounded-sm " +
                      (showToolTips ? "block" : "hidden")
                    }
                  >
                    Art & Entertainment
                  </span> */}
                </a>
              </li>
            </ul>
            <div className="absolute top-[40%] right-5 hidden max-md-[600px]:block cursor-pointer">
              <p onClick={() => ToggleBurger(SetHamburger)}>
                {hamburger ? (
                  <FontAwesomeIcon icon={faX} size="xl" />
                ) : (
                  <FontAwesomeIcon icon={faHamburger} size="xl" />
                )}
              </p>
            </div>
          </nav>
          <div className="bg-[#00000071] text-white h-[90vh] flex justify-center items-center">
            <div className="flex flex-col items-center">
              <h1 className="text-[65px] font-bold text-center max-md-[600px]:text-[42px]">
                The <span className="text-[#F94C30]"> Frontier</span> Community
              </h1>
              <p className="text-center">
                Established with a vision to bridge the gap between innovation{" "}
                <br />
                and impact, our journey is a testament to our dedication to{" "}
                <br />
                creating meaningful and sustainable solutions.
              </p>
            </div>
          </div>
        </div>
        <div className="text-white pt-[6em]">
          <div className="flex items-center flex-col gap-4 ">
            <h1 className="text-[36px] font-bold">Explore</h1>
            <p className="text-center w-1/2 max-md-[600px]:w-full max-md-[600px]:px-1">
              Maximillian Solutions Limited is a pioneering force at the
              intersection of innovation and impact, strategically metamorphism
              the Seven Mountains of Influence. From cutting-edge technology
              solutions to transformative social initiatives, we ascend each
              peak with precision, shaping the future across business,
              government, education, media, arts & entertainment, family, and
              religion. Explore our dynamic ecosystem where we leverage
              expertise to drive positive change, creating a lasting imprint on
              the landscape of influence.
            </p>
          </div>
          {/* <div className="px-[8em] flex justify-between ">
            <div
              className="w-[20em] h-[34em] bg-blue-500 p-2 bg-no-repeat bg-cover"
              style={{ backgroundImage: `url(${props.imageOne})` }}
            ></div>
            <div
              className="w-[20em] h-[34em] bg-blue-500 p-2 bg-no-repeat bg-cover"
              style={{ backgroundImage: `url(${props.imageTwo})` }}
            ></div>
            <div
              className="w-[20em] h-[34em] bg-blue-500 p-2 bg-no-repeat bg-cover"
              style={{ backgroundImage: `url(${props.imageThree})` }}
            ></div>
          </div> */}
          {/* <p className="text-center text-[14px] text-blue-600"></p> */}
        </div>

        {/* Journal */}
        <Journal images={props.imageNine} journalImage={props.journalImage} />

        {/* About us */}
        <About cto={props.cto} founder={props.founder} />

        {/* What we offer */}
        <WhatWeOffer />
        {/* <TestimonialCarousel /> */}
        <Footer logo={props.logo} />
      </section>
    </>
  );
}
