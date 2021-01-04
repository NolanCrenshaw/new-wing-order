import React from "react";
import { motion } from "framer-motion";

const QuickMenu = ({ modalControl }) => {
  return (
    <div className="quickmenu-container" id="quickmenu">
      <div className="brush_wing--bg" />
      <div className="quickmenu_wings">
        <span>Wings</span>
      </div>
      Hello Worlds
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
