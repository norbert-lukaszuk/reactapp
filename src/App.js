import React, { Component } from "react";
import TodoItem from "./components/TodoItem";
import Input from "./components/Input";

class App extends Component {
  state = {
    todos: JSON.parse(localStorage.getItem("todosData")),
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
    this.setState(
      {
        todos: newTodos,
      } /* () =>
      localStorage.setItem("todosData", JSON.stringify(this.state.todos)) */
    );
  };
  handleClick = (id) => {
    const newTodos = this.state.todos.filter((todo) => {
      if (todo.id === id && todo.completed === true) {
        return todo.id !== id;
      }
      return todo;
    });
    console.log(newTodos);
    this.setState({ todos: newTodos });
  };
  addTodo = (todo) => {
    todo.id = Math.floor(Math.random() * 1000);
    let newTodos = [...this.state.todos, todo];
    this.setState(
      {
        todos: newTodos,
      } /* , () => {
      localStorage.setItem("todosData", JSON.stringify(this.state.todos));
    } */
    );
  };
  componentDidMount() {
    console.log("Component mounted");
  }
  componentDidUpdate(prevProps, prevState) {
    console.log(prevState);
    localStorage.setItem("todosData", JSON.stringify(this.state.todos));
  }
  render() {
    const todosArray = this.state.todos.map((todo) => {
      return (
        <TodoItem
          key={todo.id}
          id={todo.id}
          text={todo.text}
          completed={todo.completed}
          handleChange={this.handleChange}
          handleClick={this.handleClick}
        />
      );
    });
    return (
      <div className="appComponent">
        <h2 style={{ textAlign: "center", fontSize: "2em" }}>Todo list</h2>
        {todosArray}
        <Input addTodo={this.addTodo} todos={this.state.todos} />
      </div>
    );
  }
}

export default App;
