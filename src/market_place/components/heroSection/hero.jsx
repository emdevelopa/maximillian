import React from "react";

const HeroSection = () => {
  return (
    <section className="flex gap-8 text-white items-center max-md-[400px]:flex-col ">
      <div className="flex flex-col w-1/2 max-md-[400px]:w-full max-md-[400px]:mt-[2em] gap-[3em] mt-[12em] mb-8 ">
        <h1 className="font-bold text-[44px] max-md-[400px]:text-[28px]">
          GET A BEAUTIFUL PET <br /> FOR YOURSELF TODAY. AND WATCH TEEN WOLF
        </h1>
        <p>
          Get a pet from us today and discover a new companion. <br /> We sell
          at a very affordable rate. Reach out today
        </p>
        <div className="flex gap-[4em] max-md-[400px]:gap-[1em]">
          <button className="py-[1em] px-10 rounded-xl font-bold bg-[#ff2727]">
            EXPLORE
          </button>
          <button className="py-[1em] px-10 rounded-xl font-bold bg-[#ff2727]">
            PURCHASE
          </button>
        </div>
      </div>
      <div className="w-1/2 bg-zinc-400 h-[36em] max-md-[400px]:w-full max-md-[400px]:h-[22em]"></div>
    </section>
  );
};

export default HeroSection;
