import React from "react";
import products from "./components/vschoolProducts";
import Product from "./components/Product";
const ProductsArray = products.map((product) => (
  <Product
    name={product.name}
    price={product.price}
    description={product.description}
    key={product.id}
  />
));
console.log("products", products);

function App() {
  return (
    <div>
      <h1 className="mainHeader">Hello from React</h1>
      {ProductsArray}
    </div>
  );
}

export default App;
