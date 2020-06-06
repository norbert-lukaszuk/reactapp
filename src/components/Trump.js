import React from "react";

const Trump = (props) => {
  console.log(props.fact);
  return (
    <div>
      <h4>{props.fact.text}</h4>
    </div>
  );
};
export default Trump;
