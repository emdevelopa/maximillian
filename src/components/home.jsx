import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Carousel from "./Carousel";
import ToggleBurger from "./Hamburger";
import {
  faAngleDown,
  faBook,
  faCat,
  faMobile,
  faStore,
} from "@fortawesome/free-solid-svg-icons";

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
  console.log(hamburger);
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
          <nav className="text-white w-full flex justify-around z-30">
            <img src={props.logo} alt="logo" className="w-[9em] " />

            <ul
              className={
                "flex justify-around items-center w-[40%] max-md-957:bg-red-700 " +
                (hamburger ? "max-md-[600px]:block" : "max-md-[600px]:hidden")
              }
            >
              <li>
                <a href="#" className="hover:text-orange-400">
                  ABOUT
                </a>
              </li>
              <li>
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
              </li>

              <li>
                <a href="#" className="hover:text-orange-400">
                  CARS
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-orange-400 relative"
                  onMouseOver={handleShowToolTips}
                  onMouseLeave={handleHideToolTips}
                >
                  A&E
                  <span
                    className={
                      "absolute left-0  top-5 bg-white text-black text-[12px] p-1 rounded-sm " +
                      (showToolTips ? "block" : "hidden")
                    }
                  >
                    Art & Entertainment
                  </span>
                </a>
              </li>
            </ul>
            <div className="absolute top-[40%] right-5 hidden max-md-[600px]:block">
              <p onclick={() => ToggleBurger(SetHamburger)}>Menu</p>
            </div>
          </nav>
          <div className="bg-[#00000071] text-white h-[90vh] flex justify-center items-center">
            <div className="flex flex-col items-center">
              <h1 className="text-[65px] font-bold text-center">
                The Frontier Community
              </h1>
              <p>Digital Resolutions, Digital Hub</p>
            </div>
          </div>
        </div>
        <div className=" text-white pt-[6em]">
          <div className="flex items-center flex-col gap-4 mb-12">
            <h1 className="text-[36px] font-bold">Explore</h1>
            <p className="text-center w-1/2">
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
          <div className="px-[8em] flex justify-between ">
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
          </div>
          <p className="text-center text-[14px] text-blue-600"></p>
        </div>
        <div className=" text-white pt-[6em]">
          <div className="flex items-center flex-col gap-4 mb-12">
            <h1 className="text-[36px] font-bold">Maximillian Journal</h1>
            <p className="text-center w-1/2">
              Our favorite stories about self development and opportunities for
              you to get involved in protecting your experience.
            </p>
          </div>
          <div className="px-[8em] flex justify-between max-md-[600px]:flex-col">
            {/* <div className="flex flex-col items-center gap-4"> */}
            <Carousel images={images} />

            {/* </div> */}
            {/* <div className="flex flex-col items-center gap-4">
            <div className="w-[30em] h-[20em] bg-blue-500"></div>
            <p>MAY 30, 2017</p>
            <h1 className="font-bold text-[24px]">An Unforgettable</h1>
            <p className="text-center mt-4 ">
              If you have one day to visit Yosemite National Park <br /> and you
              want to make the most out of it.
            </p>
          </div>
          <div className="flex flex-col items-center gap-4">
            <div className="w-[30em] h-[20em] bg-blue-500"></div>
            <p>MAY 30, 2017</p>
            <h1 className="font-bold text-[24px]">An Unforgettable</h1>
            <p className="text-center mt-4 ">
              If you have one day to visit Yosemite National Park <br /> and you
              want to make the most out of it.
            </p>
          </div> */}
            <div className="flex flex-col items-center gap-4">
              <a href="#">
                <div className="w-[30em] h-[20em] bg-blue-500"></div>
              </a>
              <p>MAY 30, 2017</p>
              <h1 className="font-bold text-[24px]">An Unforgettable</h1>
              <p className="text-center mt-4 ">
                If you have one day to visit Yosemite National Park <br /> and
                you want to make the most out of it.
              </p>
            </div>
          </div>

          {/* <p className="text-center text-[14px] text-blue-600">ALL POSTS &gt;</p> */}
        </div>

        {/* About us */}
        <section className="text-white py-[6em] px-[4em]">
          <h1 className="text-center font-bold text-[36px]">About Us</h1>
          <div className=" flex justify-between gap-6">
            <h1 className="text-[45px] font-bold w-[40%]">
              <span className="text-[#F94C30]">Introduction</span> To Best{" "}
              <br />
              Tech Agency!
            </h1>

            <p className="w-[30%] py-4">
              Harum quisquam amet debitis pariatur quas? Nemo excepturi duis
              minim nostrud officiis dolorem fugit itaque, fugiat excepturi
              modi, porta.
            </p>
            <p className="w-[30%] py-4">
              Harum quisquam amet debitis pariatur quas? Nemo excepturi duis
              minim nostrud officiis dolorem fugit itaque, fugiat excepturi
              modi, porta.
            </p>
          </div>
          <div className="flex gap-10 mt-8">
            <div className="p-[2em] rounded-[2em] bg-white text-black">
              <h3 className="font-bold text-[20px]">Best Price Guaranteed</h3>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </div>
            <div className="p-[2em] rounded-[2em] bg-[#F94C30] text-white">
              <h3 className="font-bold text-[20px]">Finance Analysis</h3>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </div>
            <div className="p-[2em] rounded-[2em] bg-white text-black">
              <h3 className="font-bold text-[20px]">Professional Team</h3>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <div className="flex items-center w-[10em] m-auto px-[1em] py-1 rounded-[4em] mt-[6em] justify-center gap-2 custom-shadow">
              <div className="bg-[#F94C30] w-4 h-4 rounded-full"></div>Our Team{" "}
              <div className="bg-[#F94C30] w-4 h-4 rounded-full"></div>
            </div>
            <div className=" flex items-center flex-col gap-6">
              <h1 className="text-[45px] font-bold ">
                <span className="text-[#F94C30]">Team</span> Members
              </h1>
              <p className="w-[40%] text-center">
                Sint nascetur facere, delectus conubia consequuntur, nonummy
                distinctio! Non officiis, id natus non nisl provident justo.
              </p>
            </div>
            {/* Card Sections */}
            <div>
              <div></div>
            </div>
          </div>
        </section>
        <footer className="bgImage h-[20em] flex items-end text-white justify-center">
          <p>&copy; 2023 MAXIMILLIAN All rights reserved</p>
        </footer>
      </section>
    </>
  );
}
