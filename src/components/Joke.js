import React, { Component } from "react";
import { render } from "@testing-library/react";

const Joke = (props) => {
  return (
    <div>
      <h4>{props.joke}</h4>
    </div>
  );
};

export default Joke;
