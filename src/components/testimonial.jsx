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
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    appendDots: (dots) => (
        <div style={{ bottom: "-30px" }}>
        <ul className="slick-dots" style={{ margin: "0" }}>
          {dots}
        </ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        style={{
          width: "10px",
          height: "10px",
        //   backgroundColor: "#6B7280", // Change the color to your desired color
          borderRadius: "50%",
          display: "inline-block",
          margin: "0 5px",
        }}
      />
    ),
  };
  return (
    <div className="container mx-auto mt-10">
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
