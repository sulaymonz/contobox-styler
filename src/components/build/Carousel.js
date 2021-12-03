import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Slick.scss";

const Carousel = (props) => {
  return (
    <Slider infinite speed={400} {...props.settings}>
      {props.children}
    </Slider>
  );
};

export default Carousel;
