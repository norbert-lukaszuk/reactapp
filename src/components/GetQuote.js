import React, { useState, useEffect } from "react";

const GetQuote = (props) => {
  const [quote, setQuote] = useState("");
  const [quotes, setQuotes] = useState(null);

  const handleClick = () => {
    fetch("https://quote-garden.herokuapp.com/api/v2/quotes/random")
      .then((resp) => resp.json())
      .then((data) => setQuote(data.quote));
  };
  const handleAuthorClick = (e) => {
    const arr = e.target.textContent.split(" ");
    console.log(arr);
    // gap between name and last name must have "%20" http sign for space
    let authorString = arr.join("%20");

    fetch(
      `https://quote-garden.herokuapp.com/api/v2/authors/${authorString}?page=1&limit=10`
    )
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data.quotes);
        const arr = data.quotes;
        setQuotes(arr);
        console.log(quotes);
      });
  };
  // useEffect(handleClick, []);

  return (
    <div>
      <button onClick={handleClick}>Randome quote</button>
      <p>{quote.quoteText}</p>
      <p onClick={handleAuthorClick}>{quote.quoteAuthor}</p>
    </div>
  );
};
export default GetQuote;
