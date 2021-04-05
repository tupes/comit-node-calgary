import React from "react";

export default function CategoryFilter(props) {
  const { productCategories, currentCategory, handleCategorySelection } = props;
  return (
    <nav className="side-menu">
      <p>{currentCategory}</p>
      <ul className="product-categories">
        {console.log("\n")}
        {productCategories.map((category) => {
          return (
            <li>
              <button
                id={category}
                onClick={handleCategorySelection}
                className={
                  category === currentCategory ? "selected-category" : ""
                }
              >
                {category}
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
