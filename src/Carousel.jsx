// Carousel.js
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Carousel.css";

const Carousel = ({ images }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="carousel-container">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <img
              src={image}
              alt={`slide-${index}`}
              className="carousel-image"
            />
          </div>
        ))}
      </Slider>
      <h1 className="font-bold text-center text-[24px]">
        If you really want to change your life follow @maximilliansolutions.
      </h1>
    </div>
  );
};

export default Carousel;
