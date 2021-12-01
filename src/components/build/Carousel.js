import React from "react";
import Slider from "react-slick";
import "./Carousel.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import shmontobox from "../../Shmontobox.jpg";

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings}>
      <div>
        <img src={shmontobox} alt="slider-slide" />
      </div>
      <div>
        <img src={shmontobox} alt="slider-slide" />
      </div>
      <div>
        <img src={shmontobox} alt="slider-slide" />
      </div>
      <div>
        <img src={shmontobox} alt="slider-slide" />
      </div>
      <div>
        <img src={shmontobox} alt="slider-slide" />
      </div>
      <div>
        <img src={shmontobox} alt="slider-slide" />
      </div>
    </Slider>
  );
};

export default Carousel;
