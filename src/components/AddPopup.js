import React, { useState } from "react";
import "../index.css";
import AddSnippetForm from "./AddSnippetForm";
function AddPopup({ showPopup, getShowPopup }) {
  // const [show, setShow] = useState(showPopup);
  if (showPopup)
    return (
      <div className="addPopup">
        <button onClick={() => getShowPopup(showPopup)}>Close</button>
        <h2>Add new code snippet</h2>
        <AddSnippetForm />;
      </div>
    );
  else {
    return null;
  }
}

export default AddPopup;
