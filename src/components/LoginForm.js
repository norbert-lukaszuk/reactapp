import React, { useState } from "react";
import auth from "../services/firebase";

function LoginForm({ userStatus }) {
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  console.log(userEmail, userPassword);
  const resetLoginForm = () => {
    setUserPassword("");
    setUserEmail("");
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    auth()
      .signInWithEmailAndPassword(userEmail, userPassword)
      .catch((err) => console.log(err));
    resetLoginForm();
  };
  if (!userStatus) {
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            id="userEmail"
            placeholder="Your email"
            onChange={(e) => setUserEmail(e.target.value)}
            value={userEmail}
          />
          <input
            type="password"
            id="userPassword"
            placeholder="Enter password"
            onChange={(e) => setUserPassword(e.target.value)}
            value={userPassword}
          />
          <button type="submit">Login</button>
        </form>
      </div>
    );
  } else {
    return <button onClick={(e) => auth().signOut()}>Sign Out</button>;
  }
}

export default LoginForm;
