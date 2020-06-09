import React from "react";

function FormComponent(props) {
  return (
    <div className="FormComponent">
      <label htmlFor="FirstName">First Name: </label>
      <input
        type="text"
        name="FirstName"
        value={props.FirstName}
        onChange={props.handleChange}
      />
      <label htmlFor="LastName">Last Name: </label>
      <input
        type="text"
        name="LastName"
        value={props.LastName}
        onChange={props.handleChange}
      />
      <label htmlFor="Age">Age</label>
      <input
        type="number"
        name="Age"
        value={props.Age}
        onChange={props.handleChange}
      />
      <h2>Entered information</h2>
      <h3>
        Your name: {props.FirstName} {props.LastName}{" "}
      </h3>
      <h3>Your age: {props.Age}</h3>
    </div>
  );
}

export default FormComponent;
