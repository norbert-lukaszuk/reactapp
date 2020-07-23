import React, { useState } from "react";
import Counter from "./components/Counter";
import Joke from "./components/Joke";
import Checkbox from "./components/Checkbox";
import Login from "./components/Login";
import Logout from "./components/Logout";
import CheckUser from "./components/CheckUser";
import InputField from "./components/InputField";
/* Using useState hook to write App component as a function not class */
const App = () => {
  return (
    <div>
      <Counter start={0} increment={25} />
      <Counter start={0} increment={3} />
      <Joke />
      <Checkbox />
      <Checkbox />
      <Checkbox />
      <InputField />
      <CheckUser />
      <Login />
      <Logout />
    </div>
  );
};

export default App;
