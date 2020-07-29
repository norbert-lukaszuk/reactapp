import React, { useState, useEffect } from "react";
import QuotesList from "./components/QuotesList";

/* Using useState hook to write App component as a function not class */
const App = () => {
  const randomQuote = () => {
    fetch("https://quote-garden.herokuapp.com/api/v2/quotes/random")
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data.quote);
        setQuotesList([data.quote]);
      });
  };
  const listOfQuotes = (list) => {
    setQuotesList(list);
  };
  const [quotesList, setQuotesList] = useState([]);
  useEffect(randomQuote, []);
  return (
    <div>
      <button onClick={randomQuote}>Random</button>
      <QuotesList listOfQuotes={listOfQuotes} quotes={quotesList} />
    </div>
  );
};

export default App;
