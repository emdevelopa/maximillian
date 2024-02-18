// TestimonialCarousel.js
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const testimonialData = [
  {
    id: 1,
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero...",
    author: "John Smith",
    img: "https://media.istockphoto.com/id/1344317720/photo/closeup-headshot-of-a-beautiful-black-woman.webp?b=1&s=170667a&w=0&k=20&c=2BYQmOnHeLuGJzpBvBjm9bEHjoumeY_xu1K6GvRfI2I=",
    starnumber: 4,
  },
  {
    id: 2,
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero...",
    author: "MIley Cyrus",
    img: "https://media.istockphoto.com/id/1434661751/photo/young-beautiful-and-successful-hispanic-businesswoman-smiling-and-looking-at-camera-female.webp?b=1&s=170667a&w=0&k=20&c=2eSwe1hfQ1ptYHHh6DvyNAk3cGXhxWY33cWb5PHOpQg=",
    starnumber: 5,
  },
  {
    id: 3,
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero...",
    author: "Thomas Walter",
    img: "https://media.istockphoto.com/id/1486149488/photo/portrait-of-a-senior-man-on-a-workout-in-the-public-park.webp?b=1&s=170667a&w=0&k=20&c=FrdiiA7Oytz8HvoCBnV7cxwgQ5vaNv6BJ8GQSnqOj-U=",
    starnumber: 3,
  },
  {
    id: 4,
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero...",
    author: "James Scott",
    img: "https://media.istockphoto.com/id/1181957245/photo/portrait-of-mid-adult-man-at-home.webp?b=1&s=170667a&w=0&k=20&c=-6zo9ixitoxlKQEE4C-hW72BpWmxFoifa87eVV_gNZM=",
    starnumber: 4,
  },
  {
    id: 5,
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero...",
    author: "John Doe",
    img: "https://media.istockphoto.com/id/1304581885/photo/portrait-of-young-woman-smiling.webp?b=1&s=170667a&w=0&k=20&c=_WaNgLqeJHEGbxbkxLxjJwxbuOQfps2t07jqLFwVcAQ=",
    starnumber: 4,
  },

  // Add more testimonial data as needed
];

const StarRating = ({ starnumber }) => {
  const stars = Array.from({ length: starnumber }, (_, index) => (
    <span key={index} role="img" aria-label="star">
      <FontAwesomeIcon icon={faStar} color="#F94C30" size="sm" spacing="" />
    </span>
  ));

  return <div className="flex">{stars}</div>;
};

const TestimonialCarousel = () => {
  const settings = {
    infinite: true,
    speed: 200,
    slidesToShow: 3,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          arrows: false,
        },
      },
    ],
  };
  return (
    <div className="container  mt-10">
      <div className="text-center mb-[4em] text-white">
        <h1 className="font-bold text-[45px] m-auto ">
          Testimonial
        </h1>
      </div>
      <Slider {...settings}>
        {testimonialData.map((testimonial) => (
          <div key={testimonial.id} className="p-8">
            <div className="bg-white p-6 rounded-md shadow-md">
              <img
                src={testimonial.img}
                alt={testimonial.author}
                className="rounded-[50%] w-[4em] h-[4em] object-cover absolute top-[0]"
              />
              {/* <p className="text-lg font-semibold mb-2">{`Testimonial ${testimonial.id}`}</p> */}
              <p className="mt-[2em] text-[#747DA1]">{testimonial.content}</p>
              <hr className="my-[1em]" />
              <div className="flex justify-between items-center mt-[2em]">
                <p className="text-[#111111] text-[18px] font-semibold">{`${testimonial.author}`}</p>
                <StarRating starnumber={testimonial.starnumber} />
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TestimonialCarousel;
