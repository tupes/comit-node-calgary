import React from "react";
import Product from "./Product";

export default function ProductList(props) {
  const { products } = props;

  return (
    <section className="content">
      <ul className="product-list">
        {products.map((product) => (
          <Product product={product} />
        ))}
      </ul>
    </section>
  );
}
