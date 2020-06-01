import React, { Component } from "react";

class Input extends Component {
  state = {
    text: "",
  };
  handleInput = (e) => {
    // onChange setState in input
    this.setState({
      text: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addTodo(this.state);
    this.setState({ text: "" }); // set this to reset form input
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            onChange={this.handleInput}
            type="text"
            value={this.state.text} // after submit sets value of the input to empty
          />
          {/*handleInput sends text to state above*/}
          <button type="submit">Add todo</button>
        </form>
      </div>
    );
  }
}
export default Input;
