import React from "react";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      FirstName: "",
      LastName: "",
      Age: "",
    };
  }
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    return (
      <form>
        <input
          type="text"
          name="FirstName"
          placeholder="First Name"
          onChange={this.handleChange}
        />
        <br />
        <input
          type="text"
          name="LastName"
          placeholder="Last Name"
          onChange={this.handleChange}
        />
        <input
          type="number"
          name="Age"
          placeholder="Age"
          onChange={this.handleChange}
        />

        <h4>
          First Name: {this.state.FirstName} <br /> Last Name:{" "}
          {this.state.LastName} <br /> Age: {this.state.Age}
        </h4>
      </form>
    );
  }
}

export default App;
