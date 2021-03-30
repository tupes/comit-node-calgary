import React from "react";
import Product from "./Product";

export default function ProductList(props) {
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
