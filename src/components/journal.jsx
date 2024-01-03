import Carousel from "./Carousel";

export default function Journal(props) {
  return (
    <>
      <div className=" text-white pt-[6em]">
        <div className="flex items-center flex-col gap-4 mb-12">
          <h1 className="text-[36px] font-bold">Maximillian Journal</h1>
          <p className="text-center w-1/2">
            Our favorite stories about self development and opportunities for
            you to get involved in protecting your experience.
          </p>
        </div>
        <div className="px-[8em] flex justify-between max-md-[600px]:flex-col">
          {/* <div className="flex flex-col items-center gap-4"> */}
          <Carousel images={props.images} />

          {/* </div> */}
          {/* <div className="flex flex-col items-center gap-4">
            <div className="w-[30em] h-[20em] bg-blue-500"></div>
            <p>MAY 30, 2017</p>
            <h1 className="font-bold text-[24px]">An Unforgettable</h1>
            <p className="text-center mt-4 ">
              If you have one day to visit Yosemite National Park <br /> and you
              want to make the most out of it.
            </p>
          </div>
          <div className="flex flex-col items-center gap-4">
            <div className="w-[30em] h-[20em] bg-blue-500"></div>
            <p>MAY 30, 2017</p>
            <h1 className="font-bold text-[24px]">An Unforgettable</h1>
            <p className="text-center mt-4 ">
              If you have one day to visit Yosemite National Park <br /> and you
              want to make the most out of it.
            </p>
          </div> */}
          <div className="flex flex-col items-center gap-4">
            <a href="#">
              <div className="w-[30em] h-[20em] bg-blue-500"></div>
            </a>
            <p>MAY 30, 2017</p>
            <h1 className="font-bold text-[24px]">An Unforgettable</h1>
            <p className="text-center mt-4 ">
              If you have one day to visit Yosemite National Park <br /> and you
              want to make the most out of it.
            </p>
          </div>
        </div>

        {/* <p className="text-center text-[14px] text-blue-600">ALL POSTS &gt;</p> */}
      </div>
    </>
  );
}
