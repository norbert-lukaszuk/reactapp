import React, { useState } from "react";

export default function QuoteAuthor({
  author,
  listOfQuotes,
  isShow,
  showAuthor,
}) {
  const [show, setShow] = useState(true);
  function handleClick() {
    const arr = author.split(" ");
    console.log(arr);
    // gap between name and last name must have "%20" http sign for space
    let authorString = arr.join("%20");
    fetch(
      `https://quote-garden.herokuapp.com/api/v2/authors/${authorString}?page=1&limit=10`
    )
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data.quotes);
        listOfQuotes(data.quotes);
        // setShow(false);
        // isShow(false);
        showAuthor(false);
      });
    console.log(show);
  }

  return (
    <p style={{ color: "orange", display: show }} onClick={handleClick}>
      {author}
    </p>
  );
}
