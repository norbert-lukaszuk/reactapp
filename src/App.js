import React, { useState, useEffect } from "react";
import GetQuote from "./components/GetQuote";
import GetQuotesList from "./components/GetQuotesList";

/* Using useState hook to write App component as a function not class */
const App = () => {
  const [author, setAuthor] = useState("");
  const getAuthor = (author) => {
    setAuthor(author);
  };

  return (
    <div>
      <GetQuote getAuthor={getAuthor} />
      <p>{author}</p>
      <GetQuotesList author={author} />
    </div>
  );
};

export default App;
