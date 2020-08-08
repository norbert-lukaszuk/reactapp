import React from "react";
import { v4 as uuid } from "uuid";
import "../index.css";
function SnippTags({ tags }) {
  let tagList = tags.map((tag) => {
    return <span key={uuid()}>#{tag} </span>;
  });
  return <div className="tagList">{tagList}</div>;
}

export default SnippTags;
