import React, { useState, useEffect } from "react";
import QuotesList from "./components/QuotesList";

/* Using useState hook to write App component as a function not class */
const App = () => {
  const quotes = [
    {
      id: 1,
      author: "Woody Allen",
      quoteText:
        "I have bad reflexes. I was once run over by a car being pushed by two guys.",
    },
    {
      id: 2,
      author: "Woody Allen",
      quoteText:
        "I don't believe in the after life, although I am bringing a change of underwear.",
    },
    {
      id: 3,
      author: "Woody Allen",
      quoteText:
        "I am not afraid of death, I just don't want to be there when it happens.",
    },
  ];
  const [quotesList, setQuotesList] = useState(quotes);

  return (
    <div>
      <QuotesList quotes={quotesList} />
    </div>
  );
};

export default App;
