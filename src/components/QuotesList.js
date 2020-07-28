import React from "react";
import SignleQuote from "./SingleQuote";

const QuotesList = ({ quotes }) => {
  console.log(quotes);

  return (
    <div>
      {quotes.map((quote) => {
        return <SignleQuote quote={quote} key={quote.id} />;
      })}
    </div>
  );
};

export default QuotesList;
