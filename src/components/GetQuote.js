import React, { useState, useEffect } from "react";

const GetQuote = (props) => {
  const [quote, setQuote] = useState("");

  const handleClick = () => {
    fetch("https://quote-garden.herokuapp.com/api/v2/quotes/random")
      .then((resp) => resp.json())
      .then((data) => setQuote(data.quote));
    let Author = props.getAuthor(quote.quoteAuthor);
  };

  useEffect(handleClick, []);
  return (
    <div>
      <button onClick={handleClick}>Randome quote</button>
      <p>{quote.quoteText}</p>
    </div>
  );
};
export default GetQuote;
