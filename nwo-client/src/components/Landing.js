import React from "react";

import Location from "./Location";

const Landing = () => {
  return (
    <div className="landing-container">
      <div className="splash-container">
        <div id="splash_logo">
          <h1>Come get the</h1>
          <h1>Best Wings in Memphis</h1>
          <img alt="splash logo" src="./images/head_white.png" />
        </div>
        <Location />s{" "}
      </div>
    </div>
  );
};
export default Landing;
