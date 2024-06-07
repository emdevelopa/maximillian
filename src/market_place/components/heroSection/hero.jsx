import React from "react";

const HeroSection = () => {
  return (
    <section className="flex gap-4 text-white items-center">
      <div className="flex flex-col gap-[3em] mt-[12em]">
        <h1 className="font-bold text-[44px]">
          GET A BEAUTIFUL PET <br/> FOR YOURSELF TODAY.
        </h1>
        <p>
          Get a pet from us today and discover a new companion. <br /> We sell at a
          very affordable rate. Reach out today
        </p>
        <div className="flex gap-[4em]">
          <button className="py-[1em] px-10 rounded-xl font-bold bg-[#ff2727]">
            EXPLORE
          </button>
          <button className="py-[1em] px-10 rounded-xl font-bold bg-[#ff2727]">
            PURCHASE
          </button>
        </div>
      </div>
      <div className="w-1/2 bg-zinc-400 h-[28em]"></div>
    </section>
  );
};

export default HeroSection;
