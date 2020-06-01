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
  addTodo = (todo) => {
    // we got here passed state obj from Input component
    let id = Math.random() * 1000; // adding new id
    todo.id = id;
    todo.completed = false; //new todo is not completed
    let newTodos = [...this.state.todos, todo];
    console.log(todo, newTodos);
    this.setState({ todos: newTodos });
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
        <Input addTodo={this.addTodo} />
      </div>
    );
  }
}

export default App;
