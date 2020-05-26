import React, { Component } from "react";
import TodoItem from "./components/TodoItem";
import Header from "./components/Header";
import todosData from "./components/todosData";
class App extends Component {
  constructor() {
    super();
    this.state = {
      todos: todosData, //state.todos = [{},{},{}...] we can use map method
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(id) {
    console.log(`Id = ${id}`);
  }
  render() {
    const TodosArray = this.state.todos.map((e) => (
      <TodoItem
        key={e.id}
        id={e.id}
        text={e.text}
        completed={e.completed}
        handleChange={this.handleChange}
      />
    ));

    return (
      <div className="wraper">
        <Header />
        <div className="list">{TodosArray}</div>
      </div>
    );
  }
}
export default App;
