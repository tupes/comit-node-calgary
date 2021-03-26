import React from "react";

export default function Product(props) {
  const { product } = props;

  return (
    <li key={product.name}>
      <img src={product.imageUrl} alt="" height="50px" width="50px" />
      <h2>{product.name}</h2>
      <span>${product.price}</span>
      <p>{product.description}</p>
      <button>Add To Cart</button>
    </li>
  );
}
