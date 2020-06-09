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
      <h3>Gender: </h3>
      <label htmlFor="Gander">
        Female
        <input
          type="radio"
          name="Gender"
          value="Female"
          checked={props.Gender === "Female"}
          onChange={props.handleChange}
        />
      </label>
      <label htmlFor="Gander">
        Male
        <input
          type="radio"
          name="Gender"
          value="Male"
          checked={props.Gender === "Male"}
          onChange={props.handleChange}
        />
      </label>
      {/* __________________________________________________________ */}
      <h2>Entered information</h2>
      <h3>
        Your name: {props.FirstName} {props.LastName}{" "}
      </h3>
      <h3>Your age: {props.Age}</h3>
    </div>
  );
}

export default FormComponent;
