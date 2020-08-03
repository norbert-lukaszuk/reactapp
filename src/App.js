import React, { useState, useEffect } from "react";
import QuoteList from "./components/QuoteList";

const App = () => {
  return (
    <div>
      <button>Randome Quote</button>
      <QuoteList />
    </div>
  );
};

export default App;
