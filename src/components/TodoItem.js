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
        <span>{this.props.text}</span>
      </div>
    );
  }
}

export default TodoItem;
