import React from "react";

export default function QuoteAuthor({ author }) {
  function handleClick() {
    const arr = author.split(" ");
    console.log(arr);
    // gap between name and last name must have "%20" http sign for space
    let authorString = arr.join("%20");
    // let authorString = "Bill%20Gates";

    fetch(
      `https://quote-garden.herokuapp.com/api/v2/authors/${authorString}?page=1&limit=10`
    )
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data.quotes);
      });
  }
  return <p onClick={handleClick}>{author}</p>;
}
