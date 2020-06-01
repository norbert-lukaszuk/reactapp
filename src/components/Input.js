import React, { Component } from "react";
import { render } from "@testing-library/react";

class Input extends Component {
  state = {
    id: "",
    text: "",
    completed: false,
  };

  render() {
    return (
      <div>
        <input type="text" />
        <button type="submit">Add todo</button>
      </div>
    );
  }
}
