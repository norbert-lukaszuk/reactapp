import React from "react";
import TodoItem from "./components/TodoItem";

class App extends React.Component {
  state = {
    todos: [
      { text: "Buy milk", id: 1 },
      { text: "Wash car", id: 2 },
      { text: "Code app", id: 3 },
    ],
  };
  handleClick = (id) => {
    return console.log("Click", id);
  };
  render() {
    const todos = this.state.todos.map((todo) => (
      <TodoItem
        handleClick={this.handleClick}
        text={todo.text}
        key={todo.id}
        id={todo.id}
      />
    ));
    return (
      <div>
        <h2 className="mainHeader">Todo list</h2>
        {todos}
      </div>
    );
  }
}
export default App;
