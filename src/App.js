import React, { useState, useEffect } from "react";
import LoginForm from "./components/LoginForm";
import auth from "./services/firebase";
const App = () => {
  const [userStatus, setUserStatus] = useState(false);
  auth().onAuthStateChanged((user) => {
    setUserStatus(user);
    console.log(user);
  });
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <LoginForm handleSubmit={handleSubmit} userStatus={userStatus} />
    </div>
  );
};

export default App;
