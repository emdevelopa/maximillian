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
    <div className="carousel-container relative">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            {index === images.length - 1 ? ( // Check if it's the last image
              <a href="#" target="_blank" rel="noopener noreferrer">
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
          <br /><br />
      <p className="text-center absolute bottom-4 left-0 right-0">
        DECEMBER 16, 2023
      </p>
    </div>
  );
};

export default Carousel;
