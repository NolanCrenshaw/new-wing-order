import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { BASE_URL } from "../../config";

const content = {
  inputs: [
    {
      label: "Email",
      name: "email",
      type: "email",
    },
    {
      label: "Password",
      name: "password",
      type: "password",
    },
  ],
};

const schema = yup.object().shape({
  email: yup.string().required().max(30).email(),
  password: yup.string().required().min(6).max(25),
});

const LoginForm = ({ setLoginAttempt, loginAttempt }) => {
  // Data State
  const [submittedData, setSubmittedData] = useState({});

  // React Hook Form Ctrl w/ Yup Validation
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data, e) => {
    e.preventDefault();
    setSubmittedData(data);
    e.target.reset();
  };

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
        setLoginAttempt(loginAttempt++);
      }
    }
  };

  return (
    <div className="login_form-container">
      <h1>Admin Login</h1>
      <form className="login_form" onSubmit={handleSubmit(onSubmit)}>
        {content.inputs.map((input, key) => {
          return (
            <div className="form_element" key={key}>
              <div>
                <label>{input.label}</label>
                <p>{errors[input.name]?.message}</p>
              </div>
              <input
                name={input.name}
                type={input.type}
                ref={register}
                placeholder={input.label}
              />
            </div>
          );
        })}
        {/* <input
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
        /> */}
        <button id="login_button" type="submit">
          Log In
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
