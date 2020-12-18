import React from "react";

import Location from "./Location";

const Landing = () => {
  return (
    <div className="landing-container">
      <div className="splash-container">
        <h1>Memphis' Best Wings</h1>
        <div id="splash_box">
          <img src="./images/truck_slice_01.jpg" />
        </div>
      </div>
      <Location />
    </div>
  );
};
export default Landing;
