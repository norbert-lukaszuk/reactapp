import React, { useState, useEffect } from "react";
import db from "../services/firestore";
import "../index.css";
import SnippTags from "./SnippTags";

function SnippetTable({ userStatus, selectedLanguage }) {
  const [snipps, setSnipps] = useState();

  const getData = () => {
    db()
      .collection(`data/codeNotes/${selectedLanguage}`)
      .get()
      .then((resp) => {
        console.log(resp.docs[0].data().code);
        setSnipps(resp.docs);
      })

      .catch((err) => console.log(err));
  };
  useEffect(getData, [userStatus, selectedLanguage]);
  if (userStatus && snipps) {
    let snippList = snipps.map((snip) => {
      return (
        <div className="snippTable" key={snip.id}>
          <p>{snip.data().lang}</p>
          <p className="snippCode">{snip.data().code}</p>
          <SnippTags tags={snip.data().tags} />
        </div>
      );
    });
    return (
      <div>
        <h2>Im showing snipps</h2>
        {snippList}
      </div>
    );
  } else {
    return <h2>Im not showing snipps</h2>;
  }
}

export default SnippetTable;
