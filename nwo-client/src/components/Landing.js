import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

import Location from "./Location";

const Landing = () => {
  const logoControl = useAnimation();

  const animationSequence = async () => {
    await logoControl.start({
      opacity: 1,
      scale: 1.5,
      rotate: 0,
      transition: { duration: 2 },
    });
    await logoControl.start({
      opacity: 0,
      x: -1500,
      transition: { duration: 1.5, delay: 0.5 },
    });
  };

  useEffect(() => {
    animationSequence();
  }, []);

  return (
    <div className="landing-container">
      <div className="splash-container">
        <motion.div
          id="full_body_logo"
          initial={{ opacity: 0, scale: 8, rotate: 90 }}
          animate={logoControl}
        >
          <img
            src="https://nwobucky.s3.us-east-2.amazonaws.com/nwo_images/NWO_Body+Full+Logo_Full+Color.png"
            style={{ zIndex: 4 }}
          />
        </motion.div>
        <motion.div
          id="splash_box"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 3 }}
        >
          <img src="./images/truck_slice_01.jpg" />
        </motion.div>
      </div>
      <Location />
    </div>
  );
};
export default Landing;
