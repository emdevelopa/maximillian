import {
  faFacebook,
  faGooglePlusG,
  faInstagram,
  faXTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Footer(props) {
  return (
    <footer className="bg-[#0c0c0cdc] m-[3em] text-white flex flex-col gap-[2em]">
      <section className="flex flex-col justify-around items-center">
        <img src={props.logo} alt="logo" className="w-[9em] " />
        <div className="mb-6 flex gap-8">
          <a href="zhttps://www.facebook.com/maximillian.solutions.limited?mibextid=ZbWKwL">
            <FontAwesomeIcon
              icon={faFacebook}
              size="xl"
              className="hover:text-orange-400"
            />
          </a>
          <a href="https://www.instagram.com/maximillian_solutions?igsh=NGU3bmMwNXdndDM1&utm_source=qr">
            <FontAwesomeIcon
              icon={faInstagram}
              size="xl"
              className="hover:text-orange-400"
            />
          </a>
          <a href="https://x.com/maximillian_sol?s=21">
            {" "}
            <FontAwesomeIcon
              icon={faXTwitter}
              size="xl"
              className="hover:text-orange-400"
            />
          </a>
          {/* <a href="#">
            {" "}
            <FontAwesomeIcon
              icon={faYoutube}
              size="xl"
              className="hover:text-orange-400"
            />
          </a> */}
          {/* <a href="#">
            <FontAwesomeIcon
              icon={faGooglePlusG}
              size="xl"
              className="hover:text-orange-400"
            />
          </a> */}
        </div>
        <ul className="flex gap-8 text-[14px] max-md-[600px]:flex-col max-md-[600px]:items-center">
          <li>
            <a href="#about" className="hover:text-orange-400 hover:underline">
              ABOUT
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-orange-400 hover:underline">
              MARKETPLACE
            </a>
          </li>

          <li>
            <a href="#" className="hover:text-orange-400 hover:underline">
              BLOG
            </a>
          </li>
          <li>
            <a
              href="#"
              className="hover:text-orange-400 relative hover:underline"
            >
              CONTACT
            </a>
          </li>
        </ul>
      </section>
      <p className="text-center bg-black p-4 max-md-[600px]:text-[16px]">
        Copyright &copy; 2024 Maximillian Solutions, All rights reserved.
      </p>
    </footer>
  );
}
