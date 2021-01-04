import React, { useEffect, useState } from "react";

import Menu from "./Menu";
import Admin from "./Admin";
import Login from "./Login";

const Modal = ({ content }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = window.localStorage.getItem("auth_token");
  }, []);

  if (content === "menu") {
    return <Menu />;
  } else if (content === "admin" && !isLoggedIn) {
    return <Login />;
  } else if (content === "admin" && isLoggedIn) {
    return <Admin />;
  } else {
    return <div>Hello Worlds</div>;
  }
};

export default Modal;
