import { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import axios from "axios";

import Header from "./Header";
import Footer from "./Footer";
import ProductsPage from "./pages/ProductsPage";
import Login from "./pages/Login";

import productCategories from "./data/productCategories.json";

function App() {
  const [currentCategory, setCurrentCategory] = useState(null);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await axios.get("http://localhost:3100/api/products");
      setProducts(response.data);
    };
    fetchProducts();
  }, []);

  const handleCategorySelection = (event) => {
    const newCategory = event.target.id;
    console.log(`newCategory: ${newCategory}`);
    setCurrentCategory(newCategory);
  };

  console.log(
    `Fetching products from server at ${new Date().toLocaleTimeString()}`
  );

  const productsToDisplay = currentCategory
    ? products.filter((product) => product.category === currentCategory)
    : products;

  return (
    <Router>
      <div className="container">
        <Header title="Sports Store!" buttonText="Sign Up" />

        <Switch>
          <Route
            path="/products"
            render={() => (
              <ProductsPage
                productCategories={productCategories}
                currentCategory={currentCategory}
                handleCategorySelection={handleCategorySelection}
                products={productsToDisplay}
              />
            )}
          ></Route>
          <Route path="/login" component={Login}></Route>
          <Redirect to="/products" />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
