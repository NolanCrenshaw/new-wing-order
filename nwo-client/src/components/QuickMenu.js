import React from "react";
import { motion } from "framer-motion";

const QuickMenu = ({ modalControl }) => {
  return (
    <div className="quickmenu-container" id="quickmenu">
      <div className="brush_wing--bg" />
      <div className="quickmenu_wings scrim">
        <h1>Wings</h1>
        <p>
          Wings are available Traditional or Boneless, and come seasoned or
          sauces with your choice of flavor (one flavor per six wings).
        </p>
        <ul>
          <h3>Six Piece - $9</h3>
          <h3>Twelve Piece - $15</h3>
          <h3>Eighteen Piece - $21</h3>
        </ul>
      </div>
      <div className="quickmenu_other scrim">
        <h1>Other Favorites</h1>
        <ul>
          <h3>Hot Wing Nachos</h3>
          <h3>Smokehouse Loaded Fries</h3>
          <h3>Avocado Taco (Vegan)</h3>
          <h3>Buffalo Chicken Taco</h3>
          <h3>Memphis Buffalo Chicken Sliders</h3>
        </ul>
        <p></p>
      </div>
      <motion.button
        whileHover={{ scale: 1.2 }}
        id="full_menu_button"
        onClick={() => modalControl("menu")}
      >
        Full Menu
      </motion.button>
    </div>
  );
};

export default QuickMenu;
