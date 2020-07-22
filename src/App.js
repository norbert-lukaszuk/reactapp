import React, { useState } from "react";
import Counter from "./components/Counter";
import Joke from "./components/Joke";
import Checkbox from "./components/Checkbox";
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
    </div>
  );
};

export default App;
