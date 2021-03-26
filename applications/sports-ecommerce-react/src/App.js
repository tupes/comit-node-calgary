import "./styles/app.css";
import Header from "./Header";
import CategoryFilter from "./CategoryFilter";
import ProductList from "./ProductList";
import Footer from "./Footer";
import staticProducts from "./data/products.json";
import productCategories from "./data/productCategories.json";

let currentCategory = "all";

function App() {
  const handleCategorySelection = (event) => {
    const newCategory = event.target.id;
    console.log(newCategory);
    currentCategory = newCategory;
  };

  const productsToDisplay = staticProducts.filter((product) => {
    return currentCategory === "all" || product.category === currentCategory;
  });

  return (
    <div className="container">
      <Header title="Sports Store!" buttonText="Sign Up" />
      <CategoryFilter
        productCategories={productCategories}
        handleClick={handleCategorySelection}
      />
      <ProductList products={productsToDisplay} />
      <Footer />
    </div>
  );
}

export default App;
