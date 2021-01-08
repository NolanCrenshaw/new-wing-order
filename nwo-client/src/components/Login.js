import React from "react";

import LoginForm from "./forms/LoginForm";

const Login = ({ setIsLoggedIn }) => {
  return (
    <div className="login-container">
      <LoginForm setIsLoggedIn={setIsLoggedIn} />
    </div>
  );
};

export default Login;
