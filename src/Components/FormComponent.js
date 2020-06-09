import React from "react";

function FormComponent(props) {
  return (
    <div className="FormComponent">
      <form className="form">
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
        <h4>Choose destination</h4>
        <select name="Destination" onChange={props.handleChange}>
          <option>---Choose destination---</option>
          <option value="Norway">Norway</option>
          <option value="Mexico">Mexico</option>
          <option value="Japan">Japan</option>
          <option value="Hawai">Hawai</option>
        </select>

        {/* __________________________________________________________ */}
        <h2>Entered information</h2>
        <h3>
          Your name: {props.FirstName} {props.LastName}{" "}
        </h3>
        <h3>Your age: {props.Age}</h3>
        <h3>Gender: {props.Gender}</h3>
        <h3>Destination: {props.Destination}</h3>
      </form>
    </div>
  );
}

export default FormComponent;
