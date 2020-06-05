import React from "react";
import Joke from "./components/Joke";
import Trump from "./components/Trump";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      jokes: {},
      trumps: {},
    };
  }
  handleClickJoke = () => {
    fetch("http://api.icndb.com/jokes/random")
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data);
        this.setState({ jokes: data.value }, () =>
          console.log(this.state.jokes.joke)
        );
      });
  };
  handleClickTrump = () => {
    fetch("https://tronalddump.io/random/quote")
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data.value);
        this.setState({ trumps: data }, () => console.log(this.state));
      });
  };
  componentDidMount() {
    console.log("Component did mount");
    fetch("http://api.icndb.com/jokes/random")
      .then((resp) => resp.json())
      .then((data) => {
        // console.log(data);
        this.setState({ jokes: data.value }, () =>
          console.log(this.state.jokes.joke)
        );
      });
    fetch("https://tronalddump.io/random/quote")
      .then((resp) => resp.json())
      .then((data) => {
        this.setState({ trumps: data }, () =>
          console.log(this.state.trumps.value)
        );
      });
  }
  render() {
    return (
      <div className="mainComponent">
        <Joke joke={this.state.jokes.joke} />
        <button onClick={() => this.handleClickJoke()}>Generate Chuck</button>
        <Trump trump={this.state.trumps.value} />
        <button onClick={() => this.handleClickTrump()}>Generate Trump</button>
      </div>
    );
  }
}

export default App;
