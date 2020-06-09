import React, { Component } from "react";

/**
 * Challenge: Wire up the partially-finished travel form so that it works!
 * Remember to use the concept of controlled forms
 * https://reactjs.org/docs/forms.html
 *
 * All information should be populating the text below the form in real-time
 * as you're filling it out
 *
 * This exercise is adapted from the V School curriculum on vanilla JS forms:
 * https://coursework.vschool.io/travel-form/
 *
 * All of our challenges and learning resources are open for the public
 * to play around with and learn from at https://coursework.vschool.io
 */

class App extends Component {
  constructor() {
    super();
    this.state = {
      FirstName: "",
      LastName: "",
      Age: "",
      Gender: "",
      Location: "",
      VeganDiet: false,
      GluttenFreeDiet: false,
      KosherDiet: false,
    };
  }
  handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    type === "checkbox"
      ? this.setState({
          [name]: checked,
        })
      : this.setState({ [name]: value });
  };
  render() {
    return (
      <main>
        <form>
          <input
            placeholder="First Name"
            name="FirstName"
            onChange={this.handleChange}
            value={this.state.FirstName}
          />
          <br />
          <input
            placeholder="Last Name"
            name="LastName"
            onChange={this.handleChange}
            value={this.state.LastName}
          />
          <br />
          <input
            placeholder="Age"
            name="Age"
            onChange={this.handleChange}
            value={this.state.Age}
          />
          <br />
          {/* Create radio buttons for gender here */}
          <label htmlFor="Gender">Male </label>
          <input
            type="radio"
            name="Gender"
            value="male"
            checked={this.state.Gender === "male"}
            onChange={this.handleChange}
          />
          <label htmlFor="Gender">Female </label>
          <input
            type="radio"
            name="Gender"
            value="female"
            checked={this.state.Gender === "female"}
            onChange={this.handleChange}
          />
          <br />
          <label>Choose your location: </label>
          <select name="Location" onChange={this.handleChange}>
            <option value="Poland">Poland</option>
            <option value="England">England</option>
            <option value="Mexico">Mexico</option>
            <option value="Sweden">Sweden</option>
          </select>
          {/* Create select box for location here */}
          <br />

          {/* Create check boxes for dietary restrictions here */}
          <br />
          <label htmlFor="VeganDiet">
            Vegan
            <input
              name="VeganDiet"
              type="checkbox"
              checked={this.state.VeganDiet}
              onChange={this.handleChange}
            />
          </label>
          <br />
          <label htmlFor="GluttenFreeDiet">
            Gluten-free
            <input
              name="GluttenFreeDiet"
              type="checkbox"
              checked={this.state.GluttenFreeDiet}
              onChange={this.handleChange}
            />
          </label>
          <br />
          <label htmlFor="KosherDiet">
            Kosher
            <input
              name="KosherDiet"
              type="checkbox"
              checked={this.state.KosherDiet}
              onChange={this.handleChange}
            />
          </label>
          <br />
          <button>Submit</button>
        </form>
        <hr />
        <h2>Entered information:</h2>
        <p>
          Your name: {this.state.FirstName} {this.state.LastName}
        </p>
        <p>Your age: {this.state.Age}</p>
        <p>Your gender: {this.state.Gender}</p>
        <p>
          Your destination: {this.state.Location ? this.state.Location : ""}
        </p>
        <p>
          Your dietary restrictions:
          {this.state.VeganDiet ? "Vegan" : ""}{" "}
          {this.state.GluttenFreeDiet ? "Glutten-free" : ""}{" "}
          {this.state.KosherDiet ? "Kosher" : ""}{" "}
        </p>
      </main>
    );
  }
}

export default App;
