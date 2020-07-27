import React, { useState, useEffect } from "react";
import QuotesList from "./QuotesList";
const GetQuotesList = (props) => {
  const [quotes, setQuotes] = useState(null);
  const handleAuthorClick = () => {
    // const arr = e.target.textContent.split(" ");
    const arr = props.author.split(" ");
    console.log(arr);
    // gap between name and last name must have "%20" http sign for space
    let authorString = arr.join("%20");
    // let authorString = "Bill%20Gates";

    fetch(
      `https://quote-garden.herokuapp.com/api/v2/authors/${authorString}?page=1&limit=10`
    )
      .then((resp) => resp.json())
      .then((data) => {
        setQuotes(data.quotes);
        console.log(quotes);
      });
  };
  return (
    <div>
      <button onClick={handleAuthorClick}>{props.author}</button>
      <QuotesList quotes={quotes} />
    </div>
  );
};
export default GetQuotesList;
