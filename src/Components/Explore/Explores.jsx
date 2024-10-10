import React from "react";

import "./Explores.css";
import ExploresData from "./ExploresData";

import swpa_1 from "../../assets/swpa2.png";
import swpa_2 from "../../assets/swpa1.png";
import swpa_3 from "../../assets/swpa3.png";

const Explore = () => {
  return (
    <>
      <div id="explore">
        <h1 className="heading">Explore More</h1>

          <h2 className="sub-title">" Sony World Photography Awards or SWPA"</h2>

          <p className="description">
            The Sony World Photography Awards, is an annual
            award which is given to contemporary photographers from all over the
            world. It is open to all photographers, of all levels, and for free.
            In other words, both professionals and non-professionals and even
            students are eligible to receive an award.
          </p>

          <div className="explore-data">
            <ExploresData
              text=" Liam Man, United Kingdom - SWPA 2024"
              picture={swpa_3}
            />

            <ExploresData
              text=" Dinorah Graue Obscura, Mexico - SWPA 2023"
              picture={swpa_2}
            />

            <ExploresData
              text=" Scott Wilson, United Kingdom - SWPA 2022"
              picture={swpa_1}
            />
          </div>
      </div>
    </>
  );
};

export default Explore;
