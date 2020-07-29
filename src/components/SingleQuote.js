import React, { useState } from "react";
import QuoteAuthor from "./QuoteAuthor";
const SingleQuote = ({ quote, listOfQuotes }) => {
  console.log(quote, listOfQuotes);
  const [show, setShow] = useState(true);
  function isShow(show) {
    setShow(show);
    console.log(show);
  }
  if (show) {
    return (
      <div>
        <p>{quote.quoteText}</p>
        <QuoteAuthor
          isShow={isShow}
          listOfQuotes={listOfQuotes}
          author={quote.quoteAuthor}
        />
      </div>
    );
  } else {
    return (
      <div>
        <p>{quote.quoteText}</p>
        {/* <QuoteAuthor listOfQuotes={listOfQuotes} author={quote.quoteAuthor} /> */}
      </div>
    );
  }
};
export default SingleQuote;
