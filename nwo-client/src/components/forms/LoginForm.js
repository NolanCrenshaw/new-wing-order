import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { BASE_URL } from "../../config";

const content = {
  inputs: [
    {
      label: "Username",
      name: "username",
      type: "text",
    },
    {
      label: "Password",
      name: "password",
      type: "password",
    },
  ],
};

const schema = yup.object().shape({
  username: yup.string().required().min(4).max(30),
  password: yup.string().required().min(6).max(25),
});

const LoginForm = ({ setLoginAttempt }) => {
  const [loginError, setLoginError] = useState("");

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

  useEffect(() => {
    const loginUser = async () => {
      const res = await fetch(`${BASE_URL}/api/auth/login`, {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(submittedData),
      });
      if (!res.ok) {
        setLoginError("Login Failed");
      } else {
        const json = await res.json();
        window.localStorage.setItem("auth_token", json.auth_token);
        setLoginError("");
        setLoginAttempt();
      }
    };
    if (submittedData.username !== undefined) {
      loginUser();
    }
  }, [submittedData]);

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
        <span>{loginError}</span>
        <button id="login_button" type="submit">
          Log In
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
