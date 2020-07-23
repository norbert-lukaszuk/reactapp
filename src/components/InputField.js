import React, { useState, useEffect } from "react";
import auth from "../services/firebase";

const InputField = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const logUsername = (e) => setUsername(e.target.value);
  const logPassword = (e) => setPassword(e.target.value);

  const resetForm = () => {
    setUsername("");
    setPassword("");
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    auth()
      .signInWithEmailAndPassword(username, password)
      .catch((err) => console.error(err));
    resetForm();
  };

  return (
    <form id="loginForm" onSubmit={handleSubmit}>
      <input
        type="text"
        onChange={logUsername}
        placeholder="Username"
        value={username}
      />
      <input
        type="password"
        onChange={logPassword}
        placeholder="Password"
        value={password}
      />
      <br />
      <button type="submit">Login</button>
      <p>
        {username} <br />
        {password}
      </p>
    </form>
  );
};
export default InputField;
