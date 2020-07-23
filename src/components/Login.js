import React from "react";
import auth from "../services/firebase";
const Login = () => {
  const handleClick = () =>
    auth()
      .signInWithEmailAndPassword("cool_norbi@wp.pl", "3xodus")
      .then((resp) => console.log("user signed in"))
      .catch((err) => console.error(err));

  return (
    <div>
      <button onClick={handleClick}>Login</button>
    </div>
  );
};
export default Login;
