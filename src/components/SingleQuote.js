import React from "react";
import QuoteAuthor from "./QuoteAuthor";
const SingleQuote = ({ quote, listOfQuotes }) => {
  console.log(quote, listOfQuotes);

  return (
    <div>
      <p>{quote.quoteText}</p>
      <QuoteAuthor listOfQuotes={listOfQuotes} author={quote.quoteAuthor} />
    </div>
  );
};
export default SingleQuote;
