'use client'
import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const SimpleSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    focusOnSelect: false,
    arrow:true,
    autoplay: true,
    autoplaySpeed: 1500,
  };

  return (
    <div>
      <Slider {...settings}>
        <div>
          <img src="/lola1.jpg" alt="Slide 1" width={"100%"} height={"400px"} style={{objectFit:"contain"}}/>
        </div>
        <div>
          <img src="/lola4.jpg" alt="Slide 2"  width={"100%"} height={"400px"}  style={{objectFit:"contain"}}/>
        </div>
        <div>
          <img src="/lola5.jpg" alt="Slide 3"  width={"100%"} height={"400px"}  style={{objectFit:"contain"}}/>
        </div>
      </Slider>
    </div>
  );
}

export default SimpleSlider;
