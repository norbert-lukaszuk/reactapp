import React, { useState, useEffect } from "react";
import GetQuote from "./components/GetQuote";

/* Using useState hook to write App component as a function not class */
const App = () => {
  const getQuotes = (quotes) => {
    console.log(quotes);
  };

  return (
    <div>
      <GetQuote getQuotes={getQuotes} />
    </div>
  );
};

export default App;
