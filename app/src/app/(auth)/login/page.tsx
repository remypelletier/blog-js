"use client";

import { useState } from "react";
import axios from "axios";

const login = () => {
  const [emailFormValue, setEmailFormValue] = useState("");
  const [passwordFormValue, setPasswordFormValue] = useState("");

  const handleChange = (e: any) => {
    if (e.target.name === "email") setEmailFormValue(e.target.value);
    if (e.target.name === "password") setPasswordFormValue(e.target.value);
  };

  const handleSubmit = () => {
    console.log(`email: ${emailFormValue}`);
    console.log(`password: ${passwordFormValue}`);
    // axios
    //   .post("localhost:3001/auth/login", {
    //     email: emailFormValue,
    //     password: passwordFormValue,
    //   })
    //   .then((response) => {
    //     console.log(response);
    //     const accessToken = response.data.access_token;
    //     if (accessToken) document.cookie = `blogjsjwt=${accessToken}`;
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
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

export default login;
