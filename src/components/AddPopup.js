import React, { useState } from "react";
import "../index.css";
function AddPopup({ showPopup }) {
  const [show, setShow] = useState(showPopup);
  if (show)
    return (
      <div className="addPopup">
        <button onClick={() => setShow(!show)}>Close</button>
        <h2>Im popup!</h2>
      </div>
    );
  else {
    return null;
  }
}

export default AddPopup;
