import React from "react";

import "./Abouts.css";

const About = () => {
  return (
    <>
      <div id="about">
        <h1 className="heading">About</h1>

        <div className="about-container">
          <h2>Our History:</h2>
          <p>
            <i>
              Pics is owned by Pics .In Pvt. Ltd., a leading brand in web
              designing services and e-commerce solutions. Pics .In Pvt. Ltd.,
              is counted for its expertise in web solutions and its top ranking
              business portals. Pure invincible expertise and rich experience
              has raised our spirit to reach ahead from our client's
              expectation. Commendable success rate of other portals managed.{" "}
            </i>
          </p>

          <h2>Our Mission:</h2>
          <p>
            <i>
              Our mission is to touch the horizon where our capabilitess may
              successfully meet with the requirements of our clients, that too
              with ultimate tranparency and cost-effectiveness.{" "}
            </i>
          </p>

          <h2>Our Vision:</h2>

          <p>
            <i>
              To saw the seeds of par-excellence services with customer centric
              approach and reap the trust of worldwide clients.
            </i>
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
