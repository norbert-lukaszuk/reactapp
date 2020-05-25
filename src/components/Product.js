import React from "react";

class Product extends React.Component {
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
