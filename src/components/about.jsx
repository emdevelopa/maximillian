import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faXTwitter,
  faYoutube,
  // Add more social media icons as needed
} from "@fortawesome/free-brands-svg-icons";

export default function About(props) {
  return (
    <>
      <section
        className="text-white py-[6em] px-[4em] max-md-[600px]:px-[1em]"
        id="about"
      >
        <h1 className="text-center font-bold text-[36px] mb-[1em]">About Us</h1>
        <div className=" flex justify-between gap-6 max-md-[600px]:gap-4 max-md-[600px]:flex-col">
          <h1 className="text-[45px] font-bold w-[40%] max-md-[600px]:w-full max-md-[600px]:text-center max-md-[600px]:text-[26px] max-md-[600px]:leading-[1.2em]">
            <span className="text-[#F94C30]">Introduction</span> To Best <br />
            Tech Agency!
          </h1>

          <p className="w-[30%] py-4 max-md-[600px]:w-full max-md-[600px]:text-center ">
            At Maximillian Solutions, we are not just a tech agency; we are
            innovators, collaborators, and architects of digital transformation.
          </p>
          <p className="w-[30%] py-4 max-md-[600px]:w-full max-md-[600px]:text-center max-md-[600px]:py-0">
            With a relentless commitment to excellence, we navigate the
            ever-evolving landscape of technology, offering unparalleled
            solutions that redefine industry standards.
          </p>
        </div>
        <div className="flex gap-10 mt-8 max-md-[600px]:w-full max-md-[600px]:text-center max-md-[600px]:flex-col">
          <div className="p-[2em] rounded-[2em] bg-white text-black">
            <h3 className="font-bold text-[20px]">Digital Transformation</h3>
            Seamlessly integrate technology into your operations,
            revolutionizing the way you do business.
          </div>
          <div className="p-[2em] rounded-[2em] bg-[#F94C30] text-white">
            <h3 className="font-bold text-[20px]">
              Financial Analysis Precision
            </h3>
            Elevate your decision-making with our expertise in financial
            analysis. We go beyond technology, helping you decipher financial
            complexities, conduct risk assessments, and develop strategic plans
            that align with your financial objectives.
          </div>
          <div className="p-[2em] rounded-[2em] bg-white text-black">
            <h3 className="font-bold text-[20px]">Custom Development</h3>
            Tailor-made solutions that align with your business goals and adapt
            to your evolving needs..
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <div className="flex items-center w-[10em] m-auto px-[1em] py-1 rounded-[4em] mt-[6em] justify-center gap-2 custom-shadow">
            <div className="bg-[#F94C30] w-4 h-4 rounded-full"></div>Our Team{" "}
            <div className="bg-[#F94C30] w-4 h-4 rounded-full"></div>
          </div>
          <div className=" flex items-center flex-col gap-6">
            <h1 className="text-[45px] font-bold max-md-[600px]:w-full max-md-[600px]:text-center max-md-[600px]:leading-[1.2em]">
              <span className="text-[#F94C30]">Team</span> Members
            </h1>
            <p className="w-[40%] text-center max-md-[600px]:w-full">
              Meet the driving force behind Maximillian Solutions — our
              exceptional team of tech enthusiasts, innovators, and problem
              solvers. Each member brings unique expertise, ensuring we deliver
              tailored solutions with passion and precision.
            </p>
          </div>
          {/* Card Sections */}
          <div className="flex justify-around max-md-[600px]:flex-col max-md-[600px]:items-center max-md-[600px]:gap-8">
            <div className="relative w-[20em] bg-white text-black rounded-[2em]">
              <img
                src={props.founder}
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
                {/* <a href="#">
                  <FontAwesomeIcon icon={faYoutube} />
                </a> */}
                <a href="#">
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
              </div>
            </div>
            <div className="relative w-[20em] bg-white text-black rounded-[2em]">
              <img
                src={props.cto}
                alt="juice"
                className="rounded-tl-[2em] rounded-tr-[2em]"
              />
              <div className="bg-[#F94C30] p-2 text-center rounded-[1.5rem]  absolute left-5 top-[60%] right-5 text-white">
                <h1 className="font-bold text-[20px] ">Gyimah Isaac</h1>
                <p className="font-bold text-[14px]">C.E.O</p>
              </div>
              <div className="flex gap-6 justify-center pt-[5em] pb-8">
                <a href="#">
                  <FontAwesomeIcon icon={faFacebook} />
                </a>
                <a href="#">
                  <FontAwesomeIcon icon={faXTwitter} />
                </a>
                {/* <a href="#">
                  <FontAwesomeIcon icon={faYoutube} />
                </a> */}
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
                <h1 className="font-bold text-[20px] ">Gyimah Emmanuel</h1>
                <p className="font-bold text-[14px]">C.T.O</p>
              </div>
              <div className="flex gap-6 justify-center pt-[5em] pb-8">
                <a href="#">
                  <FontAwesomeIcon icon={faFacebook} />
                </a>
                <a href="#">
                  <FontAwesomeIcon icon={faXTwitter} />
                </a>
                {/* <a href="#">
                  <FontAwesomeIcon icon={faYoutube} />
                </a> */}
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
