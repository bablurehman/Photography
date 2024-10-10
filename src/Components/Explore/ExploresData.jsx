import React from "react";


const InternationalData = (props) => {
  return (

<>

    <div className="info-cont">

      <div className="info-data">

        <p>&copy;{props.text}</p>
        <img src={props.picture} alt="" />
      </div>
    </div>
</>

  );
};

export default InternationalData;
