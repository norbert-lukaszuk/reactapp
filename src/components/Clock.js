import React from "react";

function Clock() {
  const date = new Date();
  const hours = date.getHours();
  const minuts = date.getMinutes();
  const sec = date.getSeconds();

  function showTime() {
    return (
      <h3>
        {hours}:{minuts}:{sec}
      </h3>
    );
  }
  console.log(showTime());
  return <div>{setInterval(showTime, 1000)}</div>;
}
export default Clock;
