import React, { useState } from "react";

export default function CategoryFilter(props) {
  const { productCategories } = props;

  const [currentCategory, setCurrentCategory] = useState(null);

  const handleCategorySelection = (event) => {
    const newCategory = event.target.id;
    setCurrentCategory(newCategory);
  };

  return (
    <nav className="side-menu">
      <ul className="product-categories">
        {console.log("\n")}
        {productCategories.map((category) => {
          console.log(
            `Does ${category} match current category ${currentCategory}`
          );
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
