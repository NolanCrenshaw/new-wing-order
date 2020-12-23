import React from "react";
import { motion } from "framer-motion";

const Infobar = () => {
  return (
    <div className="infobar-container">
      <div className="infobar_logo-container">
        <img
          id="infobar_logo"
          alt="logo"
          src="./images/text_logo_white.png"
        ></img>
      </div>
      <span>info@newwingorder.com | 901.747.8893 </span>
      <ul>
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
      </ul>
    </div>
  );
};

export default Infobar;
