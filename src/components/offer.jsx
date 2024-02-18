
import {
  faChartSimple,
  faDigitalTachograph,
  faLaptop,
  faLaptopCode,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function WhatWeOffer() {
  return (
    <section className="text-white p-[4em] max-md-[600px]:p-[1em]">
      <div className="text-center mb-[4em]">
        <h1 className="font-bold text-[45px] m-auto w-[50%]  max-md-[600px]:w-full max-md-[600px]:text-center max-md-[600px]:text-[34px] max-md-[600px]:leading-[1.2em]">
          Best Services We Can Offer For You !
        </h1>
      </div>
      <section className="flex justify-between flex-wrap max-md-[600px]:gap-[4em] max-md-[600px]:justify-center">
        <div className="border relative border-gray-400 rounded-[2em] w-[18em] p-[2em] max-md-[600px]:w-full">
          <div className="bg-[#F94C30] absolute top-[-10%] rounded-[1em] h-[4em] w-[4em] flex items-center justify-center">
            <FontAwesomeIcon icon={faLaptopCode} size="2xl" />
          </div>
          <div className="flex justify-end">
            <h1 className="text-[40px] font-bold">01.</h1>
          </div>
          <h2 className="font-bold text-[22px] mb-6">
            Custom Software Development
          </h2>
          <p>
            Tailored solutions to address your unique business needs, enhancing
            operational efficiency and effectiveness.
          </p>
        </div>
        <div className="border relative border-gray-400 rounded-[2em] w-[18em] p-[2em] max-md-[600px]:w-full">
          <div className="bg-[#1D274E] absolute top-[-10%] rounded-[1em] h-[4em] w-[4em] flex items-center justify-center">
            <FontAwesomeIcon icon={faChartSimple} size="2xl" />
          </div>
          <div className="flex justify-end">
            <h1 className="text-[40px] font-bold">02.</h1>
          </div>
          <h2 className="font-bold text-[22px] mb-6">
            Data Analytics and Business Intelligence
          </h2>
          <p>
            Extracting actionable insights from your data to drive informed
            decision-making and strategic planning.
          </p>
        </div>
        <div className="border relative border-gray-400 rounded-[2em] w-[18em] p-[2em] max-md-[600px]:w-full">
          <div className="bg-[#F94C30] absolute top-[-10%] rounded-[1em] h-[4em] w-[4em] flex items-center justify-center">
            <FontAwesomeIcon icon={faLaptop} size="2xl" />
          </div>
          <div className="flex justify-end">
            <h1 className="text-[40px] font-bold">03.</h1>
          </div>
          <h2 className="font-bold text-[22px] mb-6">
            Cybersecurity Solutions
          </h2>
          <p>
            Robust measures to protect your digital assets, ensuring the
            confidentiality and integrity of sensitive information.
          </p>
        </div>
        <div className="border relative border-gray-400 rounded-[2em] w-[18em] p-[2em] max-md-[600px]:w-full">
          <div className="bg-[#1D274E] absolute top-[-10%] rounded-[1em] h-[4em] w-[4em] flex items-center justify-center">
            <FontAwesomeIcon icon={faDigitalTachograph} size="2xl" />
          </div>
          <div className="flex justify-end">
            <h1 className="text-[40px] font-bold">04.</h1>
          </div>
          <h2 className="font-bold text-[22px] mb-6">
            Digital Transformation Consulting
          </h2>
          <p>
            Strategic guidance to navigate the digital landscape, optimizing
            processes and leveraging technology for sustainable growth.
          </p>
        </div>
      </section>
      <div className="flex justify-center mt-[4em]">
        <button className="p-[1em] rounded-[4em] bg-[#F94C30]">
          MORE SERVICES
        </button>
      </div>
    </section>
  );
}
