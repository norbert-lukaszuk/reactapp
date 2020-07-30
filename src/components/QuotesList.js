import React from "react";
import SignleQuote from "./SingleQuote";
import { useState } from "react";

const QuotesList = ({ quotes, listOfQuotes }) => {
  console.log(quotes, listOfQuotes);
  const [isAuthor, setIsAuthor] = useState(true);
  function showAuthor(author) {
    setIsAuthor(author);
  }
  return (
    <div>
      {quotes.map((quote) => {
        return (
          <div>
            <SignleQuote
              isAuthor={isAuthor}
              showAuthor={showAuthor}
              listOfQuotes={listOfQuotes}
              quote={quote}
              key={quote._id}
            />
          </div>
        );
      })}
    </div>
  );
};

export default QuotesList;
