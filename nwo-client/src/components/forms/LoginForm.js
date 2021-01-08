import React, { useState } from "react";
import { BASE_URL } from "../../config";

const LoginForm = ({ setIsLoggedIn }) => {
  // State
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // Handlers
  const handleUsername = (e) => setUsername(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);

  // Function
  const logInUser = async (e) => {
    e.preventDefault();
    const res = await fetch(`${BASE_URL}/api/auth/login`, {
      method: "POST",
      mode: "cors",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: `${username}`,
        password: `${password}`,
      }),
    });
    if (!res.ok) {
      // -- TODO -- Error Handling
      console.log("login res failure", res.status);
    } else {
      // <"auth_token"> Storage
      const json = await res.json();
      if (json.auth_token !== undefined) {
        window.localStorage.setItem("auth_token", json.auth_token);
        setIsLoggedIn(true);
      }
    }
  };

  return (
    <div className="login_form-container">
      <form className="login_form" onSubmit={logInUser}>
        <input
          id="login_username"
          name="username"
          type="text"
          value={username}
          onChange={handleUsername}
          placeholder="Username"
        />
        <input
          id="login_password"
          name="password"
          type="password"
          value={password}
          onChange={handlePassword}
          placeholder="Password"
        />
        <button id="login_button" type="submit">
          Log In
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
