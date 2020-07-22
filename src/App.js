import React, { useState } from "react";
import Counter from "./components/Counter";
import Joke from "./components/Joke";
/* Using useState hook to write App component as a function not class */
const App = () => {
  return (
    <>
      <Counter start={0} increment={25} />
      <Counter start={0} increment={3} />
      <Joke />
    </>
  );
};

export default App;
