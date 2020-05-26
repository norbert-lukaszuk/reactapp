import React, { Component } from "react";

class TodoItem extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    const { text, completed } = this.props; //destructuring props to use as variables below

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
          onChange={() => this.props.handleChange(this.props.id)}
          type="checkbox"
          style={CheckboxStyle}
          checked={this.props.completed}
        />
        <span style={SpanStyle}>{text}</span>
      </div>
    );
  }
}
export default TodoItem;
