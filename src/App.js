import React, { useState } from "react";
/* Using useState hook to write App component as a function not class */
const App = () => {
  const [count, setCount] = useState(0);
  // count is actual state setCount is function to update the state
  const handleClickPlus = () => setCount(count + 1);

  const handleClickMinus = () => setCount(count - 1);

  return (
    <div className="countingComponent" style={{ width: "25vw" }}>
      <h1 className="mainHeader">{count}</h1>
      <button onClick={handleClickPlus} className="buttonPlus">
        Count +
      </button>
      <button onClick={handleClickMinus} className="buttonPlus">
        Count -
      </button>
    </div>
  );
};

export default App;
