import React, { useState } from "react";

const GetQuote = () => {
  const [quote, setQuote] = useState("");
  setQuote(
    fetch("https://quote-garden.herokuapp.com/api/v2/quotes/random")
      .then((resp) => resp.json())
      .then((quote) => quote.quote.quoteText)
  );
  return (
    <div>
      <p>{quote}</p>
    </div>
  );
};
export default GetQuote;
