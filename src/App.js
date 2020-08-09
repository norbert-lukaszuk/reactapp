import React, { useState } from "react";
import LoginForm from "./components/LoginForm";
import auth from "./services/firebase";
import SnippetTable from "./components/SnippetTable";
import "./index.css";
import LanguageSelect from "./components/LanguageSelect";
import AddPopup from "./components/AddPopup";
const App = () => {
  const [userStatus, setUserStatus] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("HTML");
  const [showPopup, setShowPopup] = useState(false);
  console.log(showPopup);
  const getLanguage = (language) => {
    setSelectedLanguage(language);
  };
  auth().onAuthStateChanged((user) => {
    setUserStatus(user);
  });
  const getShowPopup = (show) => {
    setShowPopup(!show);
  };
  return (
    <div className="App">
      <AddPopup
        showPopup={showPopup}
        getShowPopup={getShowPopup}
        userStatus={userStatus}
      />
      <button onClick={() => setShowPopup(!showPopup)}>Add snipp</button>
      <LoginForm userStatus={userStatus} />
      <LanguageSelect getLanguage={getLanguage} userStatus={userStatus} />
      <SnippetTable
        selectedLanguage={selectedLanguage}
        userStatus={userStatus}
      />
    </div>
  );
};

export default App;
