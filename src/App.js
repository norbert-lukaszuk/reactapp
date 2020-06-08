import React from "react";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      FirstName: "",
      LastName: "",
      Age: "",
      Description: "",
      isChecked: true,
    };
  }
  handleChange = (e) => {
    const { name, value, type, checked } = e.target; // destructure properties name & value before asigne them to state
    console.log(name, value, checked);
    type === "checkbox"
      ? this.setState({ [name]: checked })
      : this.setState({ [name]: value }); //input name attribute must be the same as key in state object
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
        <p>{this.state.Description}</p>
        <textarea
          name="Description"
          onChange={this.handleChange}
          value={this.state.Description}
        />
        <br />
        <label htmlFor="isChecked">checkbox</label>
        <input
          type="checkbox"
          name="isChecked"
          id="isChecked"
          checked={this.state.isChecked}
          onChange={this.handleChange}
        />
      </form>
    );
  }
}

export default App;
