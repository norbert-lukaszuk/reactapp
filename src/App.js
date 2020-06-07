import React from "react";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      FirstName: "",
      LastName: "",
      Age: "",
      Description: "",
    };
  }
  handleChange = (e) => {
    const { name, value } = e.target; // destructure properties name & value before asigne them to state
    console.log(name, value);
    this.setState({ [name]: value }); //input name attribute must be the same as key in state object
  };
  render() {
    return (
      <form>
        <input
          type="text"
          value={this.state.FirstName} //this way we always know the state & input are in sync
          name="FirstName" // this way we can handle few inputs using just one handle function
          placeholder="First Name"
          onChange={this.handleChange}
        />
        <br />
        <input
          type="text"
          value={this.state.LastName}
          name="LastName"
          placeholder="Last Name"
          onChange={this.handleChange}
        />
        <input
          type="number"
          value={this.state.Age}
          name="Age"
          placeholder="Age"
          onChange={this.handleChange}
        />

        <h4>
          First Name: {this.state.FirstName} <br /> Last Name:{" "}
          {this.state.LastName} <br /> Age: {this.state.Age}
        </h4>
        <textarea
          name="description"
          onChange={this.handleChange}
          value={this.state.Description}
        />
      </form>
    );
  }
}

export default App;
