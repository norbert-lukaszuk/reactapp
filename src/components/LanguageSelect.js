import React from "react";

function LanguageSelect({ getLanguage, userStatus }) {
  const handleClick = (e) => {
    getLanguage(e.target.value);
  };
  if (userStatus) {
    return (
      <div className="languageSelect">
        <button onClick={handleClick} value="CSS">
          CSS
        </button>
        <button onClick={handleClick} value="HTML">
          HTML
        </button>
        <button onClick={handleClick} value="JavaScript">
          JavaScript
        </button>
      </div>
    );
  } else {
    return null;
  }
}

export default LanguageSelect;
