import React, { useState } from "react";
import db from "../services/firestore";

function SnippetTable({ userStatus }) {
  const [snipps, setSnipps] = useState();
  // console.log(snipps);
  if (userStatus) {
    db()
      .collection("data/codeNotes/JavaScript")
      .get()
      .then((resp) => {
        setSnipps(resp.docs);
        console.log(snipps);
      })
      .catch((err) => console.log(err));
    return (
      <div>
        <h2>Im showing snipps</h2>
      </div>
    );
  } else {
    return <h2>Im not showing snipps</h2>;
  }
}

export default SnippetTable;
