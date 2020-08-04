import React, { useState, useEffect } from "react";
import QuoteList from "./components/QuoteList";

const App = () => {
  const quotes = [
    {
      id: 1,
      quoteText:
        "Stereotypes lose their power when the world is found to be more complex than the stereotype would suggest. When we learn that individuals do not fit the group stereotype, then it begins to fall apart.",
      quoteAuthor: "Ed Koch",
    },
    {
      id: 2,
      quoteText: "We should weep for men at their birth, not at their death.",
      quoteAuthor: "Charles de Montesquieu",
    },
  ];
  const [quoteList, setQuoteList] = useState(quotes);
  // const randomQuote = () => {
  //   fetch("https://quote-garden.herokuapp.com/api/v2/quotes/random")
  //     // fetch("https://quote-garden.herokuapp.com/api/v2/quotes?page=1&limit=10")
  //     .then((resp) => resp.json())
  //     .then((data) => {
  //       setQuoteList(...quoteList, data);
  //     });
  //   console.log(quoteList);
  // };
  // useEffect(randomQuote, []);
  return (
    <div>
      <button>Random Quote</button>
      <QuoteList quoteList={quoteList} />
    </div>
  );
};

export default App;
