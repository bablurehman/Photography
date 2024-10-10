import React, { useState } from "react";

import "./Awardss.css";
import AwardsData from "./AwardsData";

import ipa_1 from "../../assets/ipa1.jpg";
import ipa_2 from "../../assets/ipa2.jpg";
import ipa_3 from "../../assets/ipa3.jpg";

const Awardss = () => {
  const [change, setChange] = useState("first");

  const handleChange = (e) => {
    setChange(e.target.value);
  };

  return (
    <>
      <div id="awards">
        <h1 className="heading">Awards</h1>

        <h2 className="sub-title">
          " The Internaitonal Photography Awards or IPA "
        </h2>

        <p className="description">
          The International Photography Awards is an annual award that chooses
          three photographers as winners who will then get the opportunity to
          show off their work in a New York City exhbit, which will take place
          before the Lucie Awards Gala, a yearly event that honors
          photographers's greatest achievements
        </p>

        <div className="awards-container">
          <div className="select">
            <p>International Photography Awards</p>

            <select
              name="awards"
              id="data"
              value={change}
              onChange={(e) => handleChange(e)}
            >
              <option value={"first"}>Year 2023</option>
              <option value={"second"}>Year 2022</option>
              <option value={"third"}>Year 2021</option>
            </select>
          </div>

          {change === "first" && (
            <AwardsData
              title="Awards of the year 2023"
              category="Professional Analog / Portrait"
              name="Edgar Martins"
              studios="The Moth House"
              date="November 2022"
              place="1st Place, Portrait"
              description="Produced in Libya and North Africa, my work uses as a jumping off point a speculative investigation into the death & disappearance of my close friend, photojournalist Anton Hammerl, during the 2011 Libyan war"
              picture={ipa_1}
              photographer="Edgar Martins, United Kingdom"
            />
          )}
          {change === "second" && (
            <AwardsData
              title="Awards of the year 2022"
              name="Nigel Harniman"
              category="Professional Advertising, Automotive"
              studios="Nigel Harniman Photographer"
              date="September 2021"
              place="1st Place, Automotive"
              description="Film and stills project shot in Spain on an infinity pool for Bentley's pinnacle luxury model - the Flying Spur Mulliner."
              picture={ipa_2}
              photographer="Nigel Harniman, United Kingdom"
            />
          )}

          {change === "third" && (
            <div>
              <AwardsData
                title="Awards of the year 2021"
                name="Dmitriy Ryabov"
                category="Professional Analog / Fine Art"
                studios="Dmitriy Ryabov"
                date="November 2020"
                place="1st Place, Fine Art"
                description="Kodak T-max 400 Pro, analog effects only."
                picture={ipa_3}
                photographer="Dmitriy Ryabov, Russian Federation"
              />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Awardss;
