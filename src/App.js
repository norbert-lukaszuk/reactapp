import React, { useState, useEffect } from "react";
import LoginForm from "./components/LoginForm";
import auth from "./services/firebase";
import SnippetTable from "./components/SnippetTable";
import "./index.css";
import LanguageSelect from "./components/LanguageSelect";
const App = () => {
  const [userStatus, setUserStatus] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("HTML");
  const getLanguage = (language) => {
    setSelectedLanguage(language);
  };
  auth().onAuthStateChanged((user) => {
    setUserStatus(user);
  });
  console.log(selectedLanguage);

  return (
    <div className="App">
      <LoginForm userStatus={userStatus} />
      <LanguageSelect getLanguage={getLanguage} />
      <SnippetTable
        selectedLanguage={selectedLanguage}
        userStatus={userStatus}
      />
    </div>
  );
};

export default App;
