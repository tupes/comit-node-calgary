import { useState } from "react";

import Header from "./Header";
import CategoryFilter from "./CategoryFilter";
import ProductList from "./ProductList";
import Footer from "./Footer";
import staticProducts from "./data/products.json";
import productCategories from "./data/productCategories.json";

function App() {
  // const productsToDisplay = staticProducts.filter((product) => {
  //   return !currentCategory || product.category === currentCategory;
  // });
  const productsToDisplay = staticProducts;

  return (
    <div className="container">
      <Header title="Sports Store!" buttonText="Sign Up" />
      <CategoryFilter productCategories={productCategories} />
      <ProductList products={productsToDisplay} />
      <Footer />
    </div>
  );
}

export default App;
