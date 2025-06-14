import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar.jsx";
import Footer from "./components/Footer.jsx";
import ProductCategory from "./pages/ProductCategory.jsx";
import About from "./pages/About.jsx";
import Product from "./pages/Products.jsx";
import Home from "./pages/Home.jsx";
import Cart from "./pages/Cart.jsx";
import LoginSignUp from "./pages/LoginSignUp.jsx";
import ValueDeals from "./pages/ValueDeals.jsx";
import ProsuppsProduct from "./pages/ProsuppsProduct.jsx";
import TrunativeProduct from "./pages/TrunativeProduct.jsx";
import BpiProduct from "./pages/BpiProduct.jsx";
import proteinBanner from "./Assets/images/naturalteinBanner.png";
import creatineBanner from "./Assets/images/creatine-banner.png";
import vitaminsBanner from "./Assets/images/vitaminSupplements.png";
import prosuppsBanner from "./Assets/images/prosuppsBanner.png";
import bpiBanner from "./Assets/images/bpiBanner.png";
import trunativeBanner from "./Assets/images/trunativeBanner.png";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/proteins"
            element={
              <ProductCategory banner={proteinBanner} category="protein" />
            }
          />
          <Route
            path="/vitamins"
            element={
              <ProductCategory banner={vitaminsBanner} category="vitamin" />
            }
          />
          <Route
            path="/deals"
            element={<ValueDeals banner={creatineBanner} category="deals" />}
          />
          <Route path="/about" element={<About />} />
          <Route path="/product/:productId" element={<Product />} />

          <Route path="/bpi" element={<BpiProduct banner={bpiBanner} />} />
          <Route
            path="/trunative"
            element={<TrunativeProduct banner={trunativeBanner} />}
          />
          <Route
            path="/prosupps"
            element={<ProsuppsProduct banner={prosuppsBanner} />}
          />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<LoginSignUp />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
