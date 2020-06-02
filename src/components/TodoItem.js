import React, { Component } from "react";

class TodoItem extends Component {
  render() {
    return (
      <div className="todoItem">
        <input
          type="checkbox"
          checked={this.props.completed}
          onChange={() => this.props.handleChange(this.props.id)}
        />
        <span
          className="todoText"
          style={
            this.props.completed
              ? { textDecoration: "line-through", color: "gray" }
              : { textDecoration: "none" }
          }
          onClick={() => this.props.handleClick(this.props.id)}
        >
          {this.props.text}
        </span>
        <hr />
      </div>
    );
  }
}

export default TodoItem;
