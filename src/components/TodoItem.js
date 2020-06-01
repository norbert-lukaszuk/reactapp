import React, { Component } from "react";

class TodoItem extends Component {
  render() {
    return (
      <div>
        <input
          type="checkbox"
          checked={this.props.completed}
          onChange={() => this.props.handleChange(this.props.id)}
        />
        <span
          style={
            this.props.completed
              ? { textDecoration: "line-through", color: "gray" }
              : { textDecoration: "none" }
          }
        >
          {this.props.text}
        </span>
        <hr />
      </div>
    );
  }
}

export default TodoItem;
