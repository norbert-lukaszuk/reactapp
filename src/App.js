import React from "react";
import TodoItem from "./components/TodoItem";
import Header from "./components/Header";
function App() {
  return (
    <div>
      <Header />
      <ul className="list">
        <li>
          <TodoItem />
        </li>
      </ul>
    </div>
  );
}

export default App;
