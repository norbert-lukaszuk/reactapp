import React, { Component } from "react";
import todosData from "./components/todoData";
import TodoItem from "./components/TodoItem";
class App extends Component {
  state = {
    todos: todosData,
  };
  handleChange = (id) => {
    const newTodos = this.state.todos.map((todo) => {
      if (todo.id === id) {
        // console.log(todo);
        return {
          ...todo,
          completed: !todo.completed,
        };
      }
      return todo;
    });
    console.log(newTodos);
    this.setState({ todos: newTodos });
  };
  render() {
    const todosArray = this.state.todos.map((todo) => {
      return (
        <TodoItem
          key={todo.id}
          id={todo.id}
          text={todo.text}
          completed={todo.completed}
          handleChange={this.handleChange}
        />
      );
    });
    return <div>{todosArray}</div>;
  }
}

export default App;
