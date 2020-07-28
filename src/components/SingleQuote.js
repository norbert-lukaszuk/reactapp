import React from "react";

const SingleQuote = ({ quote }) => {
  console.log(quote);

  return (
    <div>
      <p>{quote.quoteText}</p>
    </div>
  );
};
export default SingleQuote;
