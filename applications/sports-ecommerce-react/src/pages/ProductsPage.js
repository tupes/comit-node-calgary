import React from "react";
import CategoryFilter from "../CategoryFilter";
import ProductList from "../ProductList";

export default function ProductsPage(props) {
  const {
    productCategories,
    currentCategory,
    handleCategorySelection,
    products,
  } = props;
  return (
    <>
      <CategoryFilter
        productCategories={productCategories}
        currentCategory={currentCategory}
        handleCategorySelection={handleCategorySelection}
      />
      <ProductList products={products} />
    </>
  );
}
