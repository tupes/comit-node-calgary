import React from "react";

export default function ProductList(props) {
  console.log(props);
  return (
    <section>
      <ul>
        {props.products.map((product) => {
          return (
            <li>
              <img src={product.imageUrl} alt="" height="50px" width="50px" />
              <h2>{product.name}</h2>
              <span>${product.price}</span>
              <p>{product.description}</p>
              <button>Add To Cart</button>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
