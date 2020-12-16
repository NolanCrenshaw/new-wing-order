import React from "react";
import { motion } from "framer-motion";

import Location from "./Location";
import Star from "./svg_library/Star";
import Store from "./Store";

const Landing = () => {
  return (
    <div className="landing-container">
      <div className="splash-container">
        <motion.div
          id="full_body_logo"
          initial={{ opacity: 0, scale: 8, rotate: 90 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 2 }}
        >
          <img
            src="https://nwobucky.s3.us-east-2.amazonaws.com/nwo_images/NWO_Body+Full+Logo_Full+Color.png"
            style={{ zIndex: 4 }}
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0, rotate: 190 }}
          animate={{ opacity: 1, scale: 1, rotate: -190, x: 300, y: 300 }}
          transition={{
            duration: 1,
            delay: 1.5,
            repeat: 1,
            repeatType: "reverse",
          }}
        >
          <Star />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0, rotate: 200 }}
          animate={{ opacity: 1, scale: 1, rotate: -200, x: -300, y: -300 }}
          transition={{
            duration: 1,
            delay: 1.5,
            repeat: 1,
            repeatType: "reverse",
          }}
        >
          <Star />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0, rotate: -300 }}
          animate={{ opacity: 1, scale: 1, rotate: 300, x: 100, y: -300 }}
          transition={{
            duration: 1,
            delay: 1.5,
            repeat: 1,
            repeatType: "reverse",
          }}
        >
          <Star />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0, rotate: 500 }}
          animate={{ opacity: 1, scale: 1, rotate: -500, x: -200, y: 250 }}
          transition={{
            duration: 1,
            delay: 1.5,
            repeat: 1,
            repeatType: "reverse",
          }}
        >
          <Star />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0, rotate: -250 }}
          animate={{ opacity: 1, scale: 1, rotate: 250, x: 100, y: 100 }}
          transition={{
            duration: 1,
            delay: 1.5,
            repeat: 1,
            repeatType: "reverse",
          }}
        >
          <Star />
        </motion.div>
      </div>
      <Location />
    </div>
  );
};
export default Landing;
