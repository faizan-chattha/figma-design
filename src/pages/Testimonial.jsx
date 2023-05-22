import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonialData = [
  {
    id: 1,
    avatar: "https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp",
    name: "Anna Deynah",
    role: "UX Designer",
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eos id officiis hic tenetur quae quaerat ad velit ab hic tenetur.",
    rating: 5,
  },
  {
    id: 2,
    avatar: "https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(2).jpg",
    name: "John Doe",
    role: "Web Developer",
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eos id officiis hic tenetur quae quaerat ad velit ab hic tenetur.",
    rating: 4,
  },
  {
    id: 3,
    avatar: "https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(3).jpg",
    name: "Jane Smith",
    role: "Graphic Designer",
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eos id officiis hic tenetur quae quaerat ad velit ab hic tenetur.",
    rating: 5,
  },
  {
    id: 1,
    avatar: "https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp",
    name: "Anna Deynah",
    role: "UX Designer",
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eos id officiis hic tenetur quae quaerat ad velit ab hic tenetur.",
    rating: 5,
  },
  {
    id: 2,
    avatar: "https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(2).jpg",
    name: "John Doe",
    role: "Web Developer",
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eos id officiis hic tenetur quae quaerat ad velit ab hic tenetur.",
    rating: 4,
  },
  {
    id: 3,
    avatar: "https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(3).jpg",
    name: "Jane Smith",
    role: "Graphic Designer",
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eos id officiis hic tenetur quae quaerat ad velit ab hic tenetur.",
    rating: 5,
  },
];

const Testimonial = ({ testimonial, isActive, isPrev, isNext }) => {
  const cardClasses = `card testimonial-card ${
    isActive ? "active" : isPrev || isNext ? "blur" : ""
  }`;

  return (
    <div className="mt-8">
      <div className="row">
        <div className={cardClasses}>
          <div className="card-body testimonial-card-radius testimonial-card-text  ">
            <p className="card-text testimonial-card-text ">{testimonial.comment}</p>
            <h5 className="card-title">{testimonial.name}</h5>
            <ul className="list-inline">
              {Array.from({ length: testimonial.rating }).map((_, i) => (
                <li className="list-inline-item" key={i}>
                  <i className="fas fa-star fa-sm"></i>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

const TestimonialSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSlideChange = (index) => {
    setActiveIndex(index);
  };

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0px",
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
    afterChange: handleSlideChange,
  };

  return (
    <div className="mt-8">
      <div className="col-md-12 text-center testimonial-section">
        <h1 className="testimonial-section-name ">Testimonial</h1>
        <Slider {...sliderSettings}>
          {testimonialData.map((testimonial, index) => (
            <div className="col-md-4" key={testimonial.id}>
              <Testimonial
                testimonial={testimonial}
                isActive={index === activeIndex}
                isPrev={index === activeIndex - 1}
                isNext={index === activeIndex + 1}
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default TestimonialSlider;
