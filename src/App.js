import React, { Component } from "react";
import todosData from "./components/todoData";
import TodoItem from "./components/TodoItem";
import Input from "./components/Input";

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
  addTodo = (todo) => {
    todo.id = Math.random() * 1000;
    let newTodos = [...this.state.todos, todo];
    this.setState({ todos: newTodos });
    console.log(newTodos);
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
    return (
      <div className="appComponent">
        {todosArray}
        <Input addTodo={this.addTodo} />
      </div>
    );
  }
}

export default App;
