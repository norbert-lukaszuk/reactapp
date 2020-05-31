import React from "react";
import todosData from "./components/todoData";
import TodoItem from "./components/TodoItem";
import Input from "./components/InputComponent";
class App extends React.Component {
  state = {
    todos: todosData,
  };
  handleChange = (id) => {
    console.log(`Change id ${id}`);
    const newState = this.state.todos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          completed: !todo.completed,
        };
      }
      return todo;
    });
    console.log(newState);
    this.setState({ todos: newState });
  };
  handleInput = (e) => {
    console.log(e.target.value);
    let input = e.target.value;
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.setState((prevState) => {
      console.log(prevState.todos.length);
      prevState.todos.push({
        id: 6,
        text: "Test todo",
        completed: false,
      });
    });
    console.log(this.state.todos);
  };
  render() {
    const todosArray = this.state.todos.map((todo) => {
      return (
        <TodoItem
          key={todo.id}
          text={todo.text}
          completed={todo.completed}
          id={todo.id}
          handleChange={this.handleChange}
        />
      );
    });

    return (
      <div className="mainComponent">
        <h2 style={{ textAlign: "center" }}>Todo list</h2>
        {todosArray}
        <form id="Form" onSubmit={() => this.handleSubmit}>
          <input onChange={() => this.handleInput} type="text" />
        </form>
      </div>
    );
  }
}

export default App;
