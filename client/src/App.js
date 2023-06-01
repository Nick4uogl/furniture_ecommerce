import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import About from "./components/about/About.jsx";
import Main from "./components/Main";
import ProductsPage from "./components/products_page/ProductsPage";
import ProductPage from "./components/product_page/ProductPage";
import Cart from "./components/cart/Cart";
import SuccessPage from "./components/success_page/SuccessPage";
import CanceledPage from "./components/canceled_page/CanceledPage";

function App() {
  return (
    <div className="main-page">
      <Header />
      <div className="main">
        <Routes>
          <Route path="/furniture" element={<Main />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="furniture/:productId" element={<ProductPage />} />
          <Route path="furniture/cart" element={<Cart />} />
          <Route path="/success" element={<SuccessPage />} />
          <Route path="/canceled" element={<CanceledPage />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
