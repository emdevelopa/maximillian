import group30 from "../../assets/Group-30.png";
export default function WWO() {
  return (
    <section className="mt-[4em] mb-[10em]">
      <h1 className="font-bold text-[30px] mb-[2em] text-white text-center">
        What We Offer{" "}
      </h1>
      <div className="flex justify-around items-center">
        <div className="">
          <img src={group30} alt="group30" />
        </div>

        <div className="flex flex-col gap-[2em] text-white">
          <div className="flex items-center gap-4">
            <div className="w-[2em] h-[2em] rounded-[50%] bg-[#5C5C5C]"></div>
            <p>We groom and sell pets a very affordable rate.</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-[2em] h-[2em] rounded-[50%] bg-[#5C5C5C]"></div>
            <p>We sell pets food that suits different breeds of pet.</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-[2em] h-[2em] rounded-[50%] bg-[#5C5C5C]"></div>
            <p>We deal in different breeds of dogs.</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-[2em] h-[2em] rounded-[50%] bg-[#5C5C5C]"></div>
            <p>We offer fast deliver of pets and pets food.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
