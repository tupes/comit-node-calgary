import { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./Header";
import ProductsPage from "./pages/ProductsPage";
import LoginPage from "./pages/LoginPage";
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
    <Router>
      <div className="container">
        <Header />

        <Switch>
          <Route
            path="/"
            exact
            render={() => (
              <ProductsPage
                currentCategory={currentCategory}
                productCategories={productCategories}
                handleCategorySelection={handleCategorySelection}
                products={productsToDisplay}
              />
            )}
          />
          <Route path="/login" component={LoginPage} />
        </Switch>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
