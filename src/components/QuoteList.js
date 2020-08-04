import React, { useState } from "react";
import { queryByPlaceholderText } from "@testing-library/react";

export default function QouteList({ quoteList }) {
  let quotes = [];
  if (quoteList) {
    console.log(quoteList);
    // quotes = quoteList.map((quote) => {
    //   return <p key={quote._id}>{quote.quoteText}</p>;
    // });
    // console.log(quotes);
    // quotes = quoteList.quoteText;
  }
  return <div>{quotes}</div>;
}
