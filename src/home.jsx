import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBook,
  faCaretDown,
  faCat,
  faMobile,
  faStore,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export default function Home(props) {
  const [onHover, setOnHover] = useState(false);
  const [showToolTips, setShowToolTips] = useState(false);
  const handleDropdown = () => {
    setOnHover(!onHover);
  };

  const handleShowToolTips = () => {
    setShowToolTips(true);
  };
  const handleHideToolTips = () => {
    setShowToolTips(false);
  };
  return (
    <>
      <div className="bgImage">
        <nav className="text-white fixed w-full">
          <ul className="flex justify-around py-4 items-center">
            <li>
              <a href="#" className="hover:text-orange-400">
                ABOUT
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-orange-400"
                onMouseOver={handleDropdown}
              >
                STORES <FontAwesomeIcon icon={faCaretDown} />
              </a>

              <ul
                className={
                  "absolute bg-[#0000009e] p-2 rounded " +
                  (onHover ? "block" : "hidden")
                }
              >
                <li>
                  <FontAwesomeIcon icon={faCat} /> Pets
                </li>
                <li>
                  <FontAwesomeIcon icon={faMobile} /> Gadgets
                </li>
                <li>
                  <FontAwesomeIcon icon={faStore} /> Wears
                </li>
                <li>
                  <FontAwesomeIcon icon={faBook} /> Books
                </li>
                <li></li>
              </ul>
            </li>
            <li>
              <img src={props.logo} alt="swsw" className="w-[9em]" />
              {/* <div className="h-[4em] w-[4em] rounded-[50%] bg-blue-700"></div> */}
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
        </nav>
        <div className="bg-[#00000071] text-white h-[90vh] flex justify-center items-center">
          <div className="flex flex-col items-center">
            <h1 className="text-[65px] font-bold">The Frontier Community</h1>
            <p>Digital Resolutions, Digital Hub</p>
          </div>
        </div>
      </div>
      <div className="bg-black text-white pt-[6em]">
        <div className="flex items-center flex-col gap-4 mb-12">
          <h1 className="text-[36px]">Explore</h1>
          <p className="text-center w-1/2">
            Maximillian Solutions Limited is a pioneering force at the
            intersection of innovation and impact, strategically metamorphism
            the Seven Mountains of Influence. From cutting-edge technology
            solutions to transformative social initiatives, we ascend each peak
            with precision, shaping the future across business, government,
            education, media, arts & entertainment, family, and religion.
            Explore our dynamic ecosystem where we leverage expertise to drive
            positive change, creating a lasting imprint on the landscape of
            influence."
          </p>
        </div>
        <div className="px-[8em] flex justify-between mb-12">
          <div className="w-[20em] h-[25em] bg-blue-500"></div>
          <div className="w-[20em] h-[25em] bg-[orange]"></div>
          <div className="w-[20em] h-[25em] bg-blue-500"></div>
        </div>
        <p className="text-center text-[14px] text-blue-600">SEE MORE &gt;</p>
      </div>
      <div className="bg-black text-white pt-[6em]">
        <div className="flex items-center flex-col gap-4 mb-12">
          <h1 className="text-[36px]">The Journal</h1>
          <p className="text-center w-1/2">
            Our favorite stories about public lands and opportunities for you to
            get involved in protecting your outdoor experience
          </p>
        </div>
        <div className="px-[8em] flex justify-between mb-12">
          <div className="flex flex-col items-center gap-4">
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
          </div>
        </div>
        <p className="text-center text-[14px] text-blue-600">ALL POSTS &gt;</p>
      </div>
      <footer className="bgImage h-[20em] flex items-end text-white justify-center">
        <p>&copy; 2023 MAXIMILLIAN All rights reserved</p>
      </footer>
    </>
  );
}
