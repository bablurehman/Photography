import React from "react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import {TrendingData} from './TrendingData';

import "./Trendings.css";





const Trendings = () => {
  var settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    centerPadding: "20px",

    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          // dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          // initialSlide: 2,
        },
      },
    ],
  };


  return (
    <>
      <div id="trending">
        <h1 className="heading">Photos of the week</h1>

<div className="description">
        <p>There are many different photography of the weeks, here are some weekly digital photographs for photography enthusiasts and beginners, where you can take a idea to be a photohrahers in your passionate fields of the photography where you can featured in some competition to be shortlisted

</p>
</div>

          <Slider {...settings}>
            {TrendingData.map((slides, index) => (
            <section className="trending-container" key={index}>
                <img src={slides.image} alt="" />
                  
                   <p> <span>{slides.no}</span> {slides.text}</p>
              </section>
            ))}
          </Slider>
      </div>
    </>
  );
};

export default Trendings;
