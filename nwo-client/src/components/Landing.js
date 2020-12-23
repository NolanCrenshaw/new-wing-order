import React from "react";

import Location from "./Location";

const Landing = () => {
  return (
    <div className="landing-container">
      <div className="splash-container">
        <div id="splash_logo">
          <img alt="splash logo" src="./images/head_white.png" />
        </div>
        <Location />
        {/* <div id="splash_picture">
          <h1>Come Visit for the Best Wings in Memphis</h1>
          <div>
            <img src="./images/truck_slice_01.jpg" />
          </div>
        </div> */}
      </div>
    </div>
  );
};
export default Landing;
