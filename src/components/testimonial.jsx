// TestimonialCarousel.js
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonialData = [
  {
    id: 1,
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero...",
    author: "John Doe",
  },
  {
    id: 2,
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero...",
    author: "John Doe",
  },
  {
    id: 3,
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero...",
    author: "John Doe",
  },
  {
    id: 4,
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero...",
    author: "John Doe",
  },
  {
    id: 5,
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero...",
    author: "John Doe",
  },

  // Add more testimonial data as needed
];

const TestimonialCarousel = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
  };
  return (
    <div className="container mx-auto mt-10">
      <div className="text-center mb-[4em]">
        <h1 className="font-bold text-[45px] m-auto w-[50%]">
          Best Services We Can Offer For You !
        </h1>
      </div>
      <Slider {...settings}>
        {testimonialData.map((testimonial) => (
          <div key={testimonial.id} className="p-4">
            <div className="bg-white p-6 rounded-md shadow-md">
              <p className="text-lg font-semibold mb-2">{`Testimonial ${testimonial.id}`}</p>
              <p>{testimonial.content}</p>
              <p className="text-gray-500 mt-4">{`- ${testimonial.author}`}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TestimonialCarousel;
