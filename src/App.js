import { useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";

import Header from "./Components/Header/Header";
import Cart from "./Components/Cart/Cart";
import CartProvider from "./Store/CartProvider";
import Store from "./Pages/Store";
import About from "./Pages/About";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import Product from "./Pages/Product";
import Authentication from "./Components/Auth/Authentication";

function App() {
  const [openCart, setOpenCart] = useState(false);

  const openCartHandler = () => {
    setOpenCart(true);
  };
  const hideCardHandler = () => {
    setOpenCart(false);
  };

  return (
    <CartProvider>
      <Header onOpenCart={openCartHandler} />
      {openCart && <Cart openCart={openCart} onHindeCart={hideCardHandler} />}

      <Routes>
        <>
          <Route path="/" element={<Home />} />
          <Route path="/store" element={<Store />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/product/:productId" element={<Product />} />
          <Route path="/auth" element={<Authentication />} />
        </>
      </Routes>
    </CartProvider>
  );
}

export default App;
