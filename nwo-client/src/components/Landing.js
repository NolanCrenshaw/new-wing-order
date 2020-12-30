import React, { useState, useEffect } from "react";

import Navbar from "./Navbar";

const Landing = () => {
  // scroll effect setup
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="landing-container">
      <Navbar />
      <div className="landing-bg">
        <div id="elipse01" />
        <div id="elipse02" />
      </div>
      <div className="landing-textbox"></div>
      {/* <div className="brush_wing--bg"></div> */}
    </div>
  );
};
export default Landing;
