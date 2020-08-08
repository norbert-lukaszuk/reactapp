import React, { useState, useEffect } from "react";
import LoginForm from "./components/LoginForm";
import auth from "./services/firebase";
import SnippetTable from "./components/SnippetTable";
const App = () => {
  const [userStatus, setUserStatus] = useState(false);
  auth().onAuthStateChanged((user) => {
    setUserStatus(user);
  });

  return (
    <div>
      <LoginForm userStatus={userStatus} />
      <SnippetTable userStatus={userStatus} />
    </div>
  );
};

export default App;
