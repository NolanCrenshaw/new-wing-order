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

const LoginForm = ({ setLoginAttempt, loginAttempt }) => {
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
      const token = window.localStorage.getItem("auth_token");
      const res = await fetch(`${BASE_URL}/api/auth/login`, {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(submittedData),
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
        <button id="login_button" type="submit">
          Log In
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
