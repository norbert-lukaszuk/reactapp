import React from "react";
import todosData from "./components/todoData";
import TodoItem from "./components/TodoItem";
class App extends React.Component{
  state={
      todos: todosData
  }
  handleChange = (id) =>{
    console.log(`Change id ${id}`);
    const newState = this.state.todos.map(todo=>{
      if(todo.id === id){
        return{
          ...todo,
         completed: !todo.completed
        }
      }
      return todo
    })
    console.log(newState);
    this.setState({todos: newState})
  }
  render(){
    const todosArray = this.state.todos.map(todo=>{
      return <TodoItem key={todo.id} text={todo.text} completed={todo.completed} id={todo.id} handleChange={this.handleChange}/>
    })

    return(
      <div className="mainComponent">
        {todosArray}
      </div>
    )
  }
}

export default App;
