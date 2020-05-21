import React from "react";
import TodoItem from "./components/TodoItem";
import Header from "./components/Header";
import Clock from "./components/Clock";
function App() {
  return (
    <div>
      <Header />
      <Clock />
      <ul className="list">
        <li>
          <TodoItem />
        </li>
      </ul>
    </div>
  );
}

export default App;
