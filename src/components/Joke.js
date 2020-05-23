import React from "react";
function Joke(props) {
  const style = {
    fontSize: "1.5rem",
    padding: "15px",
    margin: 0,
  };
  return (
    <div className="jokeComponent">
      <p
        className="jokeQuestion"
        style={{
          display: props.question
            ? "block"
            : "none" /* dont show empty question only punchLine*/,
        }}
      >
        q: {props.question}
      </p>
      <p style={style}>a: {props.punchLine}</p>
    </div>
  );
}

export default Joke;
