import "./styles/app.css";
import Header from "./Header";
import CategoryFilter from "./CategoryFilter";
import ProductList from "./ProductList";
import Footer from "./Footer";
import staticProducts from "./data/products.json";

function App() {
  return (
    <>
      <Header title="Sports Store!" buttonText="Sign Up" />
      <CategoryFilter />
      <ProductList products={staticProducts} message={"Hi class"} />
      <Footer />
    </>
  );
}

export default App;
