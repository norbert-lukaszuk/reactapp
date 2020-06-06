import React from "react";
import Joke from "./components/Joke";
import Trump from "./components/Trump";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      facts: {},
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
  handleClickFact = () => {
    fetch("https://uselessfacts.jsph.pl/random.json?language=en")
      .then((resp) => resp.json())
      .then((data) => {
        this.setState({ facts: data }, () =>
          console.log(this.state.facts.text)
        );
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
    fetch("https://uselessfacts.jsph.pl/random.json?language=en")
      .then((resp) => resp.json())
      .then((data) => {
        this.setState({ facts: data }, () =>
          console.log(this.state.facts.text)
        );
      });
  }
  render() {
    return (
      <div className="mainComponent">
        <Joke joke={this.state.jokes.joke} />
        <button onClick={() => this.handleClickJoke()}>Generate Chuck</button>
        <Trump fact={this.state.facts} />
        <button onClick={() => this.handleClickFact()}>Generate Fact</button>
      </div>
    );
  }
}

export default App;
