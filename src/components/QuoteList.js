import React, { useState } from "react";
import "../index.css";
export default function QouteList({
  quoteList,
  authorClick,
  hideAuthor,
  fetchAuthorQuotes,
}) {
  let quotes = [];
  const [showAuthor, setShowAuthor] = useState(false);
  const handleClick = (e) => {
    // authorClick(e.target.textContent);
    authorClick(!showAuthor);
    let author = e.target.textContent;
    const authorArr = author.split(" ");
    const authorJoin = authorArr.join("%20");
    console.log(authorJoin);
    fetch(
      `https://quote-garden.herokuapp.com/api/v2/authors/${authorJoin}?page=1&limit=10`
    )
      .then((resp) => resp.json())
      .then((data) => fetchAuthorQuotes(data.quotes));
  };
  if (quoteList && hideAuthor === false) {
    console.log(quoteList);
    quotes = quoteList.map((quote) => {
      return (
        <div key={quote._id}>
          <p className="singleQuote">{quote.quoteText}</p>
          <p
            onClick={handleClick}
            style={{ color: "orange", cursor: "pointer" }}
          >
            {quote.quoteAuthor}
          </p>
        </div>
      );
    });
  } else if (quoteList && hideAuthor === true) {
    console.log("author hide");
    quotes = quoteList.map((quote) => {
      return (
        <div key={quote._id}>
          <p className="singleQuote">{quote.quoteText}</p>
        </div>
      );
    });
  }

  return <div>{quotes}</div>;
}
