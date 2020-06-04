import React, { Component } from "react";
import TodoItem from "./components/TodoItem";
import Input from "./components/Input";

class App extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: false,
      todos: [],
    };
  }

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
    this.setState({ isLoading: true });
    console.log("Component mounted");
    fetch("https://jsonplaceholder.typicode.com/users/1/todos")
      .then((resp) => resp.json())
      .then((data) => {
        this.setState({ isLoading: false, todos: data }, () =>
          console.log(this.state)
        );
      });
  }
  componentDidUpdate(prevProps, prevState) {
    console.log(prevState);
    // localStorage.setItem("todosData", JSON.stringify(this.state.todos));
  }
  render() {
    const todos = this.state.isLoading
      ? "Loading..."
      : this.state.todos.map((todo) => {
          return (
            <TodoItem
              key={todo.id}
              id={todo.id}
              text={todo.title}
              completed={todo.completed}
              handleChange={this.handleChange}
              handleClick={this.handleClick}
            />
          );
        });
    return (
      <div className="appComponent">
        <h2 style={{ textAlign: "center", fontSize: "2em" }}>Todo list</h2>
        <div>{todos}</div>
        {/* {todosArray} */}
        {/* {ApiTodos} */}
        <Input addTodo={this.addTodo} todos={this.state.todos} />
      </div>
    );
  }
}

export default App;
