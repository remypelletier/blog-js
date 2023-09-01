"use client";

import { useState } from "react";
import { login } from "../../core/handleAuth";

const Page = () => {
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");

  const handleChange = (e: any) => {
    if (e.target.name === "password") setPasswordValue(e.target.value);
    if (e.target.name === "login") setEmailValue(e.target.value);
  };

  const handleSubmit = () => {
    login({ id: emailValue, password: passwordValue });
  };

  return (
    <div>
      <label htmlFor="email">Email</label>
      <input
        value={emailValue}
        onChange={handleChange}
        type="email"
        name="email"
        id="email"
      />
      <label htmlFor="password">Password</label>
      <input
        onChange={handleChange}
        type="text"
        name="password"
        id="password"
        value={passwordValue}
      />
      <button onClick={handleSubmit}>Login</button>
    </div>
  );
};

export default Page;
