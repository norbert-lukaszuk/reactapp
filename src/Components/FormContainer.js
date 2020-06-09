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
      VeganDiet: false,
      LactoseFreeDiet: false,
      KosherDiet: false,
    };
  }
  handleChange = (e) => {
    const { checked, name, type, value } = e.target;
    type === "checkbox"
      ? this.setState({ [name]: checked })
      : this.setState({
          [name]: value,
        });
  };
  render() {
    return <FormComponent handleChange={this.handleChange} {...this.state} />;
  }
}
export default Form;
