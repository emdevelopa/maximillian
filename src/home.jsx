import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDown,
  faArrowDown,
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
        <nav className="text-white fixed w-full flex justify-around">
          <img src={props.logo} alt="swsw" className="w-[9em]" />

          <ul className="flex justify-around items-center w-[40%] max-md-957:bg-red-700 max-md-[600px]:hidden">
            <li>
              <a href="#" className="hover:text-orange-400">
                ABOUT
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-orange-400"
                onClick={handleDropdown}
              >
                STORES <FontAwesomeIcon icon={faAngleDown} />
              </a>

              <div
                className={
                  "absolute bg-[#0000009e] p-2 flex gap-2 rounded " +
                  (onHover ? "block" : "hidden")
                }
              >
                <div className="flex flex-col gap-4 items-start text-[13px]">
                  <p className="flex items-center">
                    {/* <FontAwesomeIcon icon={faCat} /> */}
                    pet
                  </p>
                  <p className="flex items-center">
                    {/* <FontAwesomeIcon icon={faMobile} /> */}
                    Mobile
                  </p>
                  <p className="flex items-center">
                    {/* <FontAwesomeIcon icon={faStore} /> */}
                    Store
                  </p>
                  <p className="flex items-center">
                    {/* <FontAwesomeIcon icon={faBook} /> */}
                    Book
                  </p>
                </div>
              </div>
            </li>
            <li>
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
          <div className="absolute top-[40%] right-5 hidden max-md-[600px]:block">
            <p>menu</p>
          </div>
        </nav>
        <div className="bg-[#00000071] text-white h-[90vh] flex justify-center items-center">
          <div className="flex flex-col items-center">
            <h1 className="text-[65px] font-bold text-center">The Frontier Community</h1>
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
          <h1 className="text-[36px]">Our Journal</h1>
          <p className="text-center w-1/2">
            Our favorite stories about self development and opportunities for
            you to get involved in protecting your experience.
          </p>
        </div>
        <div className="px-[8em] flex justify-between mb-12 max-md-[600px]:flex-col">
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
