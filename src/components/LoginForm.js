import React from "react";
import auth from "../services/firebase";

function LoginForm({ userStatus, handleSubmit }) {
  return (
    <form onSubmit={handleSubmit}>
      <input type="email" id="userEmail" placeholder="Your email" />
      <input type="password" id="userPassword" placeholder="Enter password" />
    </form>
  );
}

export default LoginForm;
