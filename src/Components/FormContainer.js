import React from "react";
import FormComponent from "./FormComponent";

class Form extends React.Component {
  constructor() {
    super();

    this.state = {
      FirstName: "",
      LastName: "",
      Age: "",
      Gender: "Female",
      Destination: "",
      VeganDiet: "",
      LactoseFreeDiet: "",
      KosherDiet: "",
    };
  }
  handleChange = (e) => {
    const { name, type, value } = e.target;
    this.setState({
      [name]: value,
    });
  };
  render() {
    return <FormComponent handleChange={this.handleChange} {...this.state} />;
  }
}
export default Form;
