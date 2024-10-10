import React, { useEffect, useState } from "react";

const HeroData = () => {
  const data = [
    { photo: "src/assets/h1.png", text: "Photographer : Charles Ebbets - Lunch Atop a Skyscraper"
 },

    { photo: "src/assets/h2.png", text: "Photographer : Robert Capa - The Falling Soldier, Córdoba front" },

    { photo: "src/assets/h3.png", text: "Photographer : Malcolm Browne - Burning Monk, South Vietnam" },

    { photo: "src/assets/h4.png", text: "Photographer : Eddie Adams - Saigon Execution" },

    { photo: "src/assets/h5.png", text: "Photographer : John Filo - The image subject of the anti-war protests at Kent State." },
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
          <div className={` ${slider === i ? "" : "hidden"} ` } key={i}>
            <div className="slide" >
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
