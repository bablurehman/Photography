import React from "react";

import "./Heros.css";
import HeroData from "./HeroData";


const Hero = () => {
  return (
    <div id="hero">
      <h1 className="heading">Popular Photography</h1>
      <div className="hero-main">
        <div className="description">
          <p>
            Some list of photographs considered the most important in surveys
            where authoritative sources review the history of the medium not
            limited by time period. These images may be referred to as the most
            important, most iconic, or most influential—but they are all
            considered key images in the history of photography
          </p>
        </div>

<HeroData/>

        {/* <HeroData 
        text="Photographer : Charles Ebbets - Lunch Atop a Skyscraper"
        photo={h_1}
        />
        <HeroData 
        text="Photographer : Robert Capa - The Falling Soldier, Córdoba front"
        photo={h_2}
        />
        <HeroData 
        text="Photographer : Malcolm Browne - Burning Monk, South Vietnam"
        photo={h_3}
        />
        <HeroData 
        text="Photographer : Eddie Adams - Saigon Execution"
        photo={h_4}
        />
        <HeroData 
        text="Photographer : John Filo - The image subject of the anti-war protests at Kent State"
        photo={h_5}
        /> */}
      </div>
    </div>
  );
};

export default Hero;
