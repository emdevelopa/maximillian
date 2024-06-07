import React from "react";

const HeroSection = () => {
  return (
    <section className="flex gap-4">
      <div className="flex flex-col gap-8">
        <h1 className="font-bold text-[34px]">
          GET A BEAUTIFUL PET FOR YOURSELF TODAY.
        </h1>
        <p>
          Get a pet from us today and discover a new companion. We sell at a
          very affordable rate. Reach out today
        </p>
        <div>
          <button className="p-[4em] font-bold">EXPLORE</button>
          <button>PURCHASE</button>
        </div>
      </div>
      <div className="w-1/2"></div>
    </section>
  );
};

export default HeroSection;
