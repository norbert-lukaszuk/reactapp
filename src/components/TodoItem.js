import React, { Component } from "react";

class TodoItem extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    const { id, text, completed } = this.props;
    this.state.id = id;
    this.state.text = text;
    this.state.completed = completed;
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
      <div className="TodoItem">
        <input
          type="checkbox"
          style={CheckboxStyle}
          checked={this.state.completed}
        />
        <span style={SpanStyle}>{this.state.text}</span>
      </div>
    );
  }
}
export default TodoItem;
