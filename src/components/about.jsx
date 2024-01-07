import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin,
  faXTwitter,
  faYoutube,
  // Add more social media icons as needed
} from "@fortawesome/free-brands-svg-icons";
import { faX } from "@fortawesome/free-solid-svg-icons";

export default function About(props) {
  return (
    <>
      <section className="text-white py-[6em] px-[4em]" id="about">
        <h1 className="text-center font-bold text-[36px] mb-[1em]">About Us</h1>
        <div className=" flex justify-between gap-6">
          <h1 className="text-[45px] font-bold w-[40%]">
            <span className="text-[#F94C30]">Introduction</span> To Best <br />
            Tech Agency!
          </h1>

          <p className="w-[30%] py-4">
            Harum quisquam amet debitis pariatur quas? Nemo excepturi duis minim
            nostrud officiis dolorem fugit itaque, fugiat excepturi modi, porta.
          </p>
          <p className="w-[30%] py-4">
            Harum quisquam amet debitis pariatur quas? Nemo excepturi duis minim
            nostrud officiis dolorem fugit itaque, fugiat excepturi modi, porta.
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
          <div className="flex justify-around">
            <div className="relative w-[20em] bg-white text-black rounded-[2em]">
              <img
                src={props.juice}
                alt="juice"
                className="rounded-tl-[2em] rounded-tr-[2em]"
              />
              <div className="bg-[#F94C30] p-2 text-center rounded-[1.5rem]  absolute left-5 top-[60%] right-5 text-white">
                <h1 className="font-bold text-[20px] ">Shammar Kayode-ige</h1>
                <p className="font-bold text-[14px]">Founder</p>
              </div>
              <div className="flex gap-6 justify-center pt-[5em] pb-8">
                <a href="#">
                  <FontAwesomeIcon icon={faFacebook} />
                </a>
                <a href="#">
                  <FontAwesomeIcon icon={faXTwitter} />
                </a>
                <a href="#">
                  <FontAwesomeIcon icon={faYoutube} />
                </a>
                <a href="#">
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
              </div>
            </div>
            <div className="relative w-[20em] bg-white text-black rounded-[2em]">
              <img
                src={props.juice}
                alt="juice"
                className="rounded-tl-[2em] rounded-tr-[2em]"
              />
              <div className="bg-[#F94C30] p-2 text-center rounded-[1.5rem]  absolute left-5 top-[60%] right-5 text-white">
                <h1 className="font-bold text-[20px] ">Gyimah Isaac</h1>
                <p className="font-bold text-[14px]">CEO</p>
              </div>
              <div className="flex gap-6 justify-center pt-[5em] pb-8">
                <a href="#">
                  <FontAwesomeIcon icon={faFacebook} />
                </a>
                <a href="#">
                  <FontAwesomeIcon icon={faXTwitter} />
                </a>
                <a href="#">
                  <FontAwesomeIcon icon={faYoutube} />
                </a>
                <a href="#">
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
              </div>
            </div>
            <div className="relative w-[20em] bg-white text-black rounded-[2em]">
              <img
                src={props.juice}
                alt="juice"
                className="rounded-tl-[2em] rounded-tr-[2em]"
              />
              <div className="bg-[#F94C30] p-2 text-center rounded-[1.5rem]  absolute left-5 top-[60%] right-5 text-white">
                <h1 className="font-bold text-[20px] ">Olufunmilayo Philip</h1>
                <p className="font-bold text-[14px]">Marketing Director</p>
              </div>
              <div className="flex gap-6 justify-center pt-[5em] pb-8">
                <a href="#">
                  <FontAwesomeIcon icon={faFacebook} />
                </a>
                <a href="#">
                  <FontAwesomeIcon icon={faXTwitter} />
                </a>
                <a href="#">
                  <FontAwesomeIcon icon={faYoutube} />
                </a>
                <a href="#">
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
