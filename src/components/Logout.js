import React from "react";
import auth from "../services/firebase";

const Logout = () => {
  const handleClick = () =>
    auth()
      .signOut()
      .then((resp) => console.log("user has signout"))
      .catch((err) => console.error(err));

  return (
    <div>
      <button onClick={handleClick}>Logout</button>
    </div>
  );
};
export default Logout;
