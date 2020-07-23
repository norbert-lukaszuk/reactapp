import React from "react";
import auth from "../services/firebase";
const CheckUser = () => {
  const check = () => {
    return auth().onAuthStateChanged((user) =>
      user ? console.log("user in") : console.log("user out")
    );
  };

  return (
    <div>
      <button onClick={check}>Check User</button>
    </div>
  );
};
export default CheckUser;
