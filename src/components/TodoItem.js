import React from "react";

function TodoItem() {
  const SpanStyle = {
    color: "green",
    fontSize: "1.5rem",
    paddingLeft: "15px",
  };
  const CheckboxStyle = {
    width: "20px",
    height: "20px",
  };
  return (
    <div>
      <input type="checkbox" style={CheckboxStyle} />
      <span style={SpanStyle}>Buy milk</span>
    </div>
  );
}

export default TodoItem;
