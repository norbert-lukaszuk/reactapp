import React, { Component } from "react";
import { render } from "@testing-library/react";

class Input extends Component {
  state = {
    id: "",
    title: "",
    completed: false,
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addTodo(this.state);
    this.setState({ title: "" });
    localStorage.setItem("todoData", JSON.stringify(this.props.todos));
    console.log(this.props.todos);
  };
  handleInput = (e) => {
    this.setState({
      title: e.target.value,
    });
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit} className="inputForm">
          <input
            type="text"
            onChange={this.handleInput}
            value={this.state.title}
          />
          <button type="submit">Add todo</button>
        </form>
      </div>
    );
  }
}
export default Input;
