import { useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";

import Header from "./Components/Header/Header";
import Cart from "./Components/Cart/Cart";
import CartProvider from "./Store/CartProvider";
import ProductStore from "./Components/ProductStore/ProductStore";
import About from "./Pages/About";
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
          {/* <Route path="/home" element={<Home />} /> */}
          <Route path="/" element={<ProductStore />} />
          <Route path="/about" element={<About />} />
        </>
      </Routes>
    </CartProvider>
  );
}

export default App;
