import React from "react";
import Product from "./Product";

export default function ProductList(props) {
  console.log(props);
  return (
    <section className="content">
      <ul className="product-list">
        {props.products.map((product) => (
          <Product product={product} />
        ))}
      </ul>
    </section>
  );
}
