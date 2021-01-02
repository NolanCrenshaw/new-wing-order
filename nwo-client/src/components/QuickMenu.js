import React from "react";

const QuickMenu = ({ modalControl }) => {
  return (
    <div className="quickmenu-container" id="quickmenu">
      <div className="brush_wing--bg" />
      Hello Worlds
      <div id="expand_button" onClick={() => modalControl("menu")}>
        Button
      </div>
    </div>
  );
};

export default QuickMenu;
