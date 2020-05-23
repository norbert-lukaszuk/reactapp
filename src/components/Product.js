import React from "react";

function Product(props) {
  return (
    <div style={}>
      <p>Product name: {props.name}</p>
      <p>Product price: {props.price} $</p>
      <p>Description: {props.description}</p>
      <hr />
    </div>
  );
}
export default Product;
