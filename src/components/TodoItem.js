import React from "react";

function TodoItem(props) {
  return (
    <div>
      <input
        type="checkbox"
        checked={props.completed}
        onChange={() => props.handleClick(props.id)}
      />
      <span onClick={() => props.handleClick(props.id)}>{props.text}</span>
    </div>
  );
}

export default TodoItem;
