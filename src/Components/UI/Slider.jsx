import React from "react";
import Slider from "react-slick";

const AutoPlay = ({ content = [] }) => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 5000,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };

  return (
    <div>
      <Slider {...settings}>
        {content.map((item, i) => (
          <item.children key={i} />
        ))}
      </Slider>
    </div>
  );
};

export default AutoPlay;
