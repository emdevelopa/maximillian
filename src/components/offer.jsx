export default function WhatWeOffer() {
  return (
    <section className="text-white p-[6em] ">
      <div className="text-center mb-[4em]">
        <h1 className="font-bold text-[45px] m-auto w-[50%]">
          Best Services We Can Offer For You !
        </h1>
      </div>
      <section className="flex justify-between flex-wrap ">
        <div className="border relative border-gray-400 rounded-[2em] w-[16em] p-[2em]">
          <div className="bg-[#F94C30] absolute top-[-10%] rounded-[1em] h-[4em] w-[4em]"></div>
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
        <div className="border relative border-gray-400 rounded-[2em] w-[16em] p-[2em]">
          <div className="bg-[#1D274E] absolute top-[-10%] rounded-[1em] h-[4em] w-[4em]"></div>
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
        <div className="border relative border-gray-400 rounded-[2em] w-[16em] p-[2em]">
          <div className="bg-[#F94C30] absolute top-[-10%] rounded-[1em] h-[4em] w-[4em]"></div>
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
        <div className="border relative border-gray-400 rounded-[2em] w-[16em] p-[2em]">
          <div className="bg-[#1D274E] absolute top-[-10%] rounded-[1em] h-[4em] w-[4em]"></div>
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
