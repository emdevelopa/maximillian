// Carousel.js
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../css/Carousel.css";

const Carousel = ({ images }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="carousel-container relative">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            {index === images.length - 1 ? ( // Check if it's the last image
              <a
                href="https://www.instagram.com/maximillian_solutions?igsh=NGU3bmMwNXdndDM1&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={image}
                  alt={`slide-${index}`}
                  className="carousel-image"
                />
              </a>
            ) : (
              <img
                src={image}
                alt={`slide-${index}`}
                className="carousel-image"
              />
            )}
          </div>
        ))}
      </Slider>
      {/* <br /> */}
      {/* <br /> */}
      <div className="text-center">
        <p className="text-center ">DECEMBER 16, 2023</p>
        <h1 className=" my-4 text-[24px]">
          If you really want to change your life follow &nbsp;
          <a
            href="https://www.instagram.com/maximillian_solutions?igsh=NGU3bmMwNXdndDM1&utm_source=qr"
            className="underline text-blue-600"
          >
            @maximilliansolutions
          </a>
        </h1>
        {/* <p className="text-center my-4 ">
          If you have one day to visit Yosemite National Park <br /> and you
          want to make the most out of it.
        </p> */}
      </div>
    </div>
  );
};

export default Carousel;
