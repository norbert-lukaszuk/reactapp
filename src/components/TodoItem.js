import React from "react";
import { createPortal } from "react-dom";

function TodoItem(props) {
  return (
    <div>
      <input
        type="checkbox"
        checked={props.completed}
        onChange={() => props.handleClick(props.id)}
      />
      <span
        style={
          props.completed
            ? { color: "gray", textDecoration: "line-through" }
            : { color: "green" }
        }
      >
        {props.text}
      </span>
    </div>
  );
}

export default TodoItem;
