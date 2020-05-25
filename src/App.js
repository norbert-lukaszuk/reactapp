import React, { Component } from "react";
// example of using state to change rendered compononets values
class App extends Component {
  constructor() {
    super();
    this.state = {
      isLoggedIn: false,
    };
  }
  render() {
    let status;
    let style = {
      fontSize: "1em",
    };
    if (this.state.isLoggedIn) {
      status = "login";
      style.color = "green";
    } else {
      status = "logout";
      style.color = "crimson";
    }
    return (
      <h2 style={{ backgroundColor: "gray" }}>
        User is <span style={style}>{status}</span>
      </h2>
    );
  }
}

export default App;
