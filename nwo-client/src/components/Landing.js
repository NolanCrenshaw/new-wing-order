import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { HashLink } from "react-router-hash-link";

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
    <div className="landing-container" id="landing">
      {/* <Navbar /> */}
      <div className="landing-bg">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8, duration: 1 }}
          id="elipse01"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8, duration: 1 }}
          id="elipse02"
        />
      </div>
      <div className="landing_glass-panel">
        <Navbar />
        <div className="landing-textbox">
          <h1>Memphis' Best Food Truck</h1>
          <h3>Award-Winning Wings & Southern Grub</h3>
        </div>
        <div className="landing-socialbox">
          <HashLink className="hash_link" smooth to="#location">
            <motion.button whileHover={{ scale: 1.2 }}>
              Find the Truck!
            </motion.button>
          </HashLink>
          <ul>
            <div className="socialbox-divider" />
            <motion.li whileHover={{ scale: 1.2 }}>
              <a href="https://www.facebook.com/NewWingOrder/">
                <img src="https://img.icons8.com/material-outlined/48/000000/facebook.png" />
              </a>
            </motion.li>
            <motion.li whileHover={{ scale: 1.2 }}>
              <a href="https://www.instagram.com/newwingorder/">
                <img src="https://img.icons8.com/material-outlined/48/000000/instagram-new--v1.png" />
              </a>
            </motion.li>
            <motion.li whileHover={{ scale: 1.2 }}>
              <a href="https://twitter.com/newwingorder">
                <img src="https://img.icons8.com/material-outlined/48/000000/twitter.png" />
              </a>
            </motion.li>
            <motion.li whileHover={{ scale: 1.2 }}>
              <a href="https://www.youtube.com/channel/UCsJxqotVF1LuhOGeC5YfKpw">
                <img src="https://img.icons8.com/material-outlined/48/000000/youtube--v1.png" />
              </a>
            </motion.li>
            <div className="socialbox-divider" />
          </ul>
          <span>info@newwingorder.com | 901.747.8893 </span>
        </div>
        <div
          className="bird-container"
          style={{ transform: `translateY(-${offsetY * 0.35}px)` }}
        >
          <img
            id="full_bird_logo"
            alt="bird logo"
            src="https://nwobucky.s3.us-east-2.amazonaws.com/NWO_Body+Full+Logo_Full+Color.png"
          />
        </div>
      </div>
      {/* <div
        id="elipse03"
        style={{ transform: `translateX(${offsetY * 0.2}px)` }}
      >
        <div id="elipse04" />
      </div>
      <div className="little-truck-backdrop" />
      <img
        id="little_truck"
        alt="little truck"
        src="https://nwobucky.s3.us-east-2.amazonaws.com/nwo_images/little_truck.png"
        style={{ transform: `translateX(-${offsetY * 1}px)` }}
      /> */}
    </div>
  );
};
export default Landing;
