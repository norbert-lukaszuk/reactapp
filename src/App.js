import React from "react";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }
  handleClickPlus = () => {
    this.setState((prevState) => {
      return { count: prevState.count + 1 };
    });
  };
  handleClickMinus = () => {
    this.setState((prevState) => {
      return { count: prevState.count - 1 };
    });
  };
  render() {
    return (
      <div className="countingComponent" style={{ width: "25vw" }}>
        <h1 className="mainHeader">{this.state.count}</h1>
        <button onClick={this.handleClickPlus} className="buttonPlus">
          Count +
        </button>
        <button onClick={this.handleClickMinus} className="buttonPlus">
          Count -
        </button>
      </div>
    );
  }
}

export default App;
