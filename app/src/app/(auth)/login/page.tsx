"use client";

import { useState } from "react";
import { login } from "@/lib/auth";

const Login = () => {
  const [emailFormValue, setEmailFormValue] = useState("");
  const [passwordFormValue, setPasswordFormValue] = useState("");

  const handleChange = (e: any) => {
    if (e.target.name === "email") setEmailFormValue(e.target.value);
    if (e.target.name === "password") setPasswordFormValue(e.target.value);
  };

  const handleSubmit = () => {
    console.log(`email: ${emailFormValue}`);
    console.log(`password: ${passwordFormValue}`);
    fetch(`/api/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: emailFormValue,
        password: passwordFormValue,
      }),
    }).then((res) => {
      console.log(res);
    });
  };

  return (
    <div>
      <label htmlFor="email">email</label>
      <input
        value={emailFormValue}
        onChange={handleChange}
        type="email"
        name="email"
        id="email"
      />
      <label htmlFor="password">password</label>
      <input
        value={passwordFormValue}
        onChange={handleChange}
        type="password"
        name="password"
        id="password"
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default Login;
