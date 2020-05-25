import React, { Component } from "react"; // import Component to not type it below

class Product extends Component {
  render() {
    return (
      <div style={{ padding: "20px" }}>
        <p>Product name: {this.props.name}</p>
        <p>Product price: {this.props.price} $</p>
        <p>Description: {this.props.description}</p>
        <hr />
      </div>
    );
  }
}

export default Product;
