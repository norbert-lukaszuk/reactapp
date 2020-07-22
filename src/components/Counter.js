import React, { useState } from "react";

function Counter({ start, increment }) {
  const [count, setCount] = useState(start);

  function handleClickPlus() {
    setCount((prevCount) => prevCount + increment);
  }
  function handleClickMinus() {
    setCount((prevCount) => prevCount - increment);
  }
  return (
    <div className="countingComponent">
      <h1 className="mainHeader">{count}</h1>
      <button onClick={handleClickPlus} className="buttonPlus">
        Count +{increment}
      </button>
      <button onClick={handleClickMinus} className="buttonPlus">
        Count -{increment}
      </button>
    </div>
  );
}

export default Counter;
