import React, { useEffect, useState } from "react";

import h_1 from '../../assets/h1.png'
import h_2 from '../../assets/h2.png'
import h_3 from '../../assets/h3.png'
import h_4 from '../../assets/h4.png'
import h_5 from '../../assets/h5.png'

const HeroData = () => {
  const data = [
    {
      photo: h_1,
      text: "Photographer : Charles Ebbets - Lunch Atop a Skyscraper",
    },
    {
      photo: h_2,
      text: "Photographer : Robert Capa - The Falling Soldier, Córdoba front",
    },

    {
      photo: h_3,
      text: "Photographer : Malcolm Browne - Burning Monk, South Vietnam",
    },

    {
      photo: h_4,
      text: "Photographer : Eddie Adams - Saigon Execution",
    },

    {
      photo: h_5,
      text: "Photographer : John Filo - The image subject of the anti-war protests at Kent State.",
    },
  ];

  const [slider, setSlider] = useState(0);

  useEffect(() => {
    const slideClear = setInterval(() => {
      setSlider(slider === data.length - 1 ? 0 : slider + 1);
    }, 2500);

    return () => clearInterval(slideClear);
  }, [slider]);

  return (
    <>
      <div className="herodata">
        {data.map((datas, i) => (
          <div className={` ${slider === i ? "" : "hidden"} `} key={i}>
            <div className="slide">
              <img src={datas.photo} alt="image" />
              <p>{datas.text}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default HeroData;
