import React, { Component } from "react";
import TodoItem from "./components/TodoItem";
import Header from "./components/Header";
import todosData from "./components/todosData";
class App extends Component {
  render() {
    const TodosArray = todosData.map((e) => (
      <TodoItem key={e.id} text={e.text} completed={e.completed} />
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
