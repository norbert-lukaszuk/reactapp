import React from "react";

function LanguageSelect({ getLanguage }) {
  const handleClick = (e) => {
    getLanguage(e.target.value);
  };
  return (
    <div>
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
}

export default LanguageSelect;
