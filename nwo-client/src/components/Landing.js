import React from "react";
import { motion } from "framer-motion";

import Location from "./Location";

const Landing = () => {
  return (
    <div className="landing-container">
      <div className="splash-container">
        <motion.img
          id="full_body_logo"
          initial={{ opacity: 0, scale: 5, y: 0, rotate: 20 }}
          animate={{ opacity: 1, scale: 1, y: 50, rotate: 0 }}
          transition={{ duration: 2 }}
          src="https://nwobucky.s3.us-east-2.amazonaws.com/nwo_images/NWO_Body+Full+Logo_Full+Color.png"
        />
      </div>
      <Location />
    </div>
  );
};
export default Landing;
