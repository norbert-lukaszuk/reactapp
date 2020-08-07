import React from "react";
import auth from "../services/firebase";

function LoginForm({ userStatus }) {
  if (userStatus) {
    return (
      <div>
        <p>User in</p>
      </div>
    );
  } else {
    return (
      <div>
        <p>User out</p>
      </div>
    );
  }
}

export default LoginForm;
