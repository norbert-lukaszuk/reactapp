import React, { useState, useEffect } from "react";
import QuoteList from "./components/QuoteList";

const App = () => {
  const [quoteList, setQuoteList] = useState([]);
  const randomQuote = () => {
    fetch("https://quote-garden.herokuapp.com/api/v2/quotes/random")
      // fetch("https://quote-garden.herokuapp.com/api/v2/quotes?page=1&limit=10")
      .then((resp) => resp.json())
      .then((data) => {
        setQuoteList(...quoteList, data);
      });
    console.log(quoteList);
  };
  useEffect(randomQuote, []);
  return (
    <div>
      <button onClick={randomQuote}>Random Quote</button>
      <QuoteList quoteList={quoteList} />
    </div>
  );
};

export default App;
