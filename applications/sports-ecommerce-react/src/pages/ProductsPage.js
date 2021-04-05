import React from "react";
import CategoryFilter from "../CategoryFilter";
import ProductList from "../ProductList";

export default function ProductsPage(props) {
  return (
    <>
      <CategoryFilter
        productCategories={props.productCategories}
        currentCategory={props.currentCategory}
        handleCategorySelection={props.handleCategorySelection}
      />
      <ProductList products={props.products} />
    </>
  );
}
