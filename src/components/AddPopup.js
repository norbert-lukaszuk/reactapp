import React from "react";
import "../index.css";
import AddSnippetForm from "./AddSnippetForm";
function AddPopup({ showPopup, getShowPopup, userStatus }) {
  // const [show, setShow] = useState(showPopup);
  const handleClick = (e) => {
    if (e.target.className === "addPopup") {
      getShowPopup(showPopup);
    }
  };

  if (showPopup)
    return (
      <div onClick={handleClick} className="addPopup">
        <button onClick={() => getShowPopup(showPopup)}>Close</button>
        <h2>Add new code snippet</h2>
        <AddSnippetForm userStatus={userStatus} />;
      </div>
    );
  else {
    return null;
  }
}

export default AddPopup;
