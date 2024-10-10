import React from "react";
import { ExploreData } from "./ExploreData";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./ExploreMore.css";

const ExploreMore = () => {
  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
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
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div id="explore-more">
        <h2 className="sub-title">Wildlife Photographer of the Year</h2>

        <div className="description">
          <p>
            Sriram Murali and Vishnu Gopal, two photographers from India, won
            awards under different categories in Wildlife Photographer of the
            Year 2023.
            <br />
            The prestigious Wildlife Photographer of the Year competition is
            hosted each year by the Natural History Museum. People from across
            the world submit their incredible photographs that show the world of
            wild animals in a whole new light.
          </p>
        </div>

        <Slider {...settings}>
          {ExploreData.map((explore, i) => (
            <section className="explore-more-container" key={i}>
              <p> {explore.text} </p>
              <img src={explore.image} alt="" />
            </section>
          ))}
        </Slider>
      </div>
    </>
  );
};

export default ExploreMore;
