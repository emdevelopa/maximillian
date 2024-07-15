import { useState } from "react";

export default function PC() {
  const [activeButton, setActiveButton] = useState(0);

  const buttons = ["Dogs", "Cats", "Rabbits", "Birds"];

  return (
    <section className="mt-[4em] mb-[10em] text-white">
      <h1 className="font-bold text-[30px] mb-[2em] text-white text-center">
        Pets Collections{" "}
      </h1>
      <div className="flex justify-around items-center">
        {buttons.map((label, index) => (
          <button
            key={index}
            className={`border border-[#BE3144] py-[1em] px-[4em] font-bold rounded-lg hover:bg-[#ff5575] ${
              activeButton === index ? "bg-[#BE3144]" : ""
            }`}
            onClick={() => setActiveButton(index)}
          >
            {label}
          </button>
        ))}
      </div>
    </section>
  );
}
