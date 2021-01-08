import React, { useEffect, useState } from "react";

import Menu from "./Menu";
import Admin from "./Admin";
import Login from "./Login";

const Modal = ({ content }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const tokenCheck = () => {
    const token = window.localStorage.getItem("auth_token");
    token
      ? setIsLoggedIn(true)
      : console.log("token check fired, token value is false");
  };

  useEffect(() => {
    tokenCheck();
  }, []);

  if (content === "menu") {
    return <Menu />;
  } else if (content === "admin" && !isLoggedIn) {
    return <Login setIsLoggedIn={setIsLoggedIn} />;
  } else if (content === "admin" && isLoggedIn) {
    return <Admin />;
  } else {
    return <div>Hello Worlds</div>;
  }
};

export default Modal;
