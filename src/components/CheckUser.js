import React, { useEffect } from "react";
import auth from "../services/firebase";
const CheckUser = () => {
  const check = () => {
    return auth().onAuthStateChanged((user) =>
      user ? console.log("user in") : console.log("user out")
    );
  };
  useEffect(() => check(), []);

  return null;
};
export default CheckUser;
