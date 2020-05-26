import React from "react";

function TodoItem(props) {
  return (
    <div>
      <p onClick={() => props.handleClick(props.id)}>{props.text}</p>
    </div>
  );
}

export default TodoItem;
