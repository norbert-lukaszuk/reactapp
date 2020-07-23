import React, { useState } from "react";

function Checkbox() {
  const [checked, setChecked] = useState(false);
  const handleClick = () => {
    setChecked((prevChecked) => !prevChecked);
  };
  return (
    <div>
      <input onChange={handleClick} type="checkbox" checked={checked} />
    </div>
  );
}
export default Checkbox;
