import React, { useState } from "react";
import { queryByPlaceholderText } from "@testing-library/react";

export default function QouteList({ quoteList }) {
  let quotes = [];
  const handleClick = () => {};
  if (quoteList) {
    console.log(quoteList);
    quotes = quoteList.map((quote) => {
      return (
        <div key={quote.id}>
          <p>{quote.quoteText}</p>
          <p onClick={handleClick} style={{ color: "orange" }}>
            {quote.quoteAuthor}
          </p>
        </div>
      );
    });
  }
  return <div>{quotes}</div>;
}
