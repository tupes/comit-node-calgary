import React from "react";

export default function CategoryFilter(props) {
  const { productCategories, handleClick } = props;

  return (
    <nav className="side-menu">
      <ul className="product-categories">
        {productCategories.map((category) => {
          return (
            <li>
              <button id={category} onClick={handleClick}>
                {category}
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
