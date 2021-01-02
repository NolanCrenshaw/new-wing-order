import React from "react";

import Menu from "./Menu";
import Admin from "./Admin";

const Modal = ({ content }) => {
  if (content === "menu") {
    return <Menu />;
  } else if (content === "admin") {
    return <Admin />;
  } else {
    return <div>Hello Worlds</div>;
  }
};

export default Modal;
