import React, { useState } from "react";
import LoginForm from "./components/LoginForm";
import auth from "./services/firebase";
const App = () => {
  const [userStatus, setUserStatus] = useState(true);
  auth.onAuthStateChanged((user) => {
    setUserStatus(user);
  });
  return (
    <div>
      <LoginForm userStatus={userStatus} />
    </div>
  );
};

export default App;
