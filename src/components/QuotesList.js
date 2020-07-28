import React from "react";
import SignleQuote from "./SingleQuote";

const QuotesList = ({ quotes, listOfQuotes }) => {
  console.log(quotes, listOfQuotes);

  return (
    <div>
      {quotes.map((quote) => {
        return (
          <SignleQuote
            listOfQuotes={listOfQuotes}
            quote={quote}
            key={quote._id}
          />
        );
      })}
    </div>
  );
};

export default QuotesList;
