import React from "react";
import QuoteAuthor from "./QuoteAuthor";
const SingleQuote = ({ quote }) => {
  console.log(quote);

  return (
    <div>
      <p>{quote.quoteText}</p>
      <QuoteAuthor author={quote.quoteAuthor} />
    </div>
  );
};
export default SingleQuote;
