import React from "react";

const AwardsData = (props) => {
  return (
    <>
      <div className="awards-main">
        <h2>{props.title}</h2>
        <div className="awards-data">
          <div className="left">
            <div className="photographer-info">
              <p>Category :</p> <p>{props.category}</p>
            </div>
            <div className="photographer-info">
              <p>Name of Photographer :</p> <p>{props.name}</p>
            </div>
            <div className="photographer-info">
              <p>Studios :</p> <p>{props.studios}</p>
            </div>
            <div className="photographer-info">
              <p>Date of Photograph :</p> <p>{props.date}</p>
            </div>
            <div className="photographer-info">
              <p>Place :</p> <p>{props.place}</p>
            </div>

            <p>{props.description}</p>
          </div>

          <div className="right">
            <img src={props.picture} alt="" />
            <p>&copy; {props.photographer}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AwardsData;
