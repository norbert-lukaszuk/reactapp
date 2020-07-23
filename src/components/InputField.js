import React, { useState } from "react";

const InputField = () => {
  const [text, setText] = useState("");
  setText((prevText) => (prevText = text));
  const logText = () => console.log(text);
  return (
    <div>
      <label htmlFor="textInput">Type something</label>
      <input onChange={logText} type="text" id="textInput" />
    </div>
  );
};
export default InputField;
