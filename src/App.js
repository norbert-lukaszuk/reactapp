import React from "react";
import TodoItem from "./components/TodoItem";

class App extends React.Component {
  state = {
    todos: [
      { text: "Buy milk", completed: true, id: 1 },
      { text: "Wash car", completed: false, id: 2 },
      { text: "Code app", completed: true, id: 3 },
    ],
  };
  handleClick = (id) => {
    const newTodos = this.state.todos.map((e) => {
      if (e.id === id) {
        return {
          ...e, //spred object from the array
          completed: !e.completed, //modify value of completed
          newValue: "I've been add", // add new value for example
        };
      }
      return e;
    });
    console.log(newTodos);
    this.setState({ todos: newTodos });
  };
  render() {
    const todos = this.state.todos.map((todo) => (
      <TodoItem
        handleClick={this.handleClick}
        text={todo.text}
        key={todo.id}
        completed={todo.completed}
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
