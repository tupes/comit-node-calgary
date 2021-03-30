import { useState } from "react";

import Header from "./Header";
import CategoryFilter from "./CategoryFilter";
import ProductList from "./ProductList";
import Footer from "./Footer";
import staticProducts from "./data/products.json";
import productCategories from "./data/productCategories.json";

function App() {
  const [currentCategory, setCurrentCategory] = useState(null);

  const handleCategorySelection = (event) => {
    const newCategory = event.target.id;
    console.log(`newCategory: ${newCategory}`);
    setCurrentCategory(newCategory);
  };

  const productsToDisplay = currentCategory
    ? staticProducts.filter((product) => product.category === currentCategory)
    : staticProducts;

  return (
    <div className="container">
      <Header title="Sports Store!" buttonText="Sign Up" />
      <CategoryFilter
        productCategories={productCategories}
        currentCategory={currentCategory}
        handleCategorySelection={handleCategorySelection}
      />
      <ProductList products={productsToDisplay} />
      <Footer />
    </div>
  );
}

export default App;
