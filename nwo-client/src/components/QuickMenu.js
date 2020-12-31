import React from "react";

const QuickMenu = ({ expand }) => {
  return (
    <div className="quickmenu-container" id="quickmenu">
      <div className="brush_wing--bg" />
      Hello Worlds
      <div id="expand_button" onClick={expand}>
        Button
      </div>
    </div>
  );
};

export default QuickMenu;
