import { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import axios from "axios";

import Header from "./Header";
import ProductsPage from "./pages/ProductsPage";
import LoginPage from "./pages/LoginPage";
import Footer from "./Footer";
import productCategories from "./data/productCategories.json";

function App() {
  const [currentCategory, setCurrentCategory] = useState(null);
  const [products, setProducts] = useState([]);
  const [token, setToken] = useState(null);

  useEffect(() => {
    console.log("Starting useEffect");
    const fetchProducts = async () => {
      const response = await axios.get("http://localhost:3100/api/products");
      console.log(response);
      setProducts(response.data);
    };
    fetchProducts();
  }, []);

  const handleCategorySelection = (event) => {
    const newCategory = event.target.id;
    console.log(`newCategory: ${newCategory}`);
    setCurrentCategory(newCategory);
  };

  const handleUpdateToken = (token) => {
    setToken(token);
  };

  const productsToDisplay = currentCategory
    ? products.filter((product) => product.category === currentCategory)
    : products;

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
          <Route
            path="/login"
            render={() => <LoginPage handleUpdateToken={handleUpdateToken} />}
          />
        </Switch>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
