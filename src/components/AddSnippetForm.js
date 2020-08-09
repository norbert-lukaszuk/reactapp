import React, { useState, useEffect } from "react";
import LanguageSelect from "./LanguageSelect";
import db from "../services/firestore";

function AddSnippetForm() {
  const [selectedLanguage, setSelectedLanguage] = useState(null);
  const [codeText, setCodeText] = useState("");
  const [hashtags, setHashtags] = useState([]);
  const [rawHashtags, setRawHastags] = useState("");
  const [snippetObject, setSnippetObject] = useState({});
  console.log(hashtags);
  console.log(snippetObject);
  const setHashtagArray = () => {
    let string = rawHashtags;
    let arr = string.split(" ");
    setHashtags(arr);
  };
  useEffect(setHashtagArray, [rawHashtags]);
  const getLanguage = (language) => {
    setSelectedLanguage(language);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    db()
      .collection(`data/codeNotes/${selectedLanguage}`)
      .add({
        code: codeText,
        lang: selectedLanguage,
        tags: hashtags,
      })
      .then((resp) => console.log(resp))
      .catch((err) => console.log(err));
  };
  const handleHashTags = (e) => {
    setRawHastags(e.target.value);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <LanguageSelect getLanguage={getLanguage} />
        <textarea
          id="codeText"
          cols="30"
          rows="10"
          onChange={(e) => setCodeText(e.target.value)}
          value={codeText}
        ></textarea>
        <input
          type="text"
          onChange={handleHashTags}
          placeholder="#hashtags"
          value={rawHashtags}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default AddSnippetForm;
