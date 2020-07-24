import React, { useState } from "react";
import GetQuote from "./components/GetQuote";

/* Using useState hook to write App component as a function not class */
const App = () => {
  return (
    <div>
      <GetQuote />
    </div>
  );
};

export default App;
