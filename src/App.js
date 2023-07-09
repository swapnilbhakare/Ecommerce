import { useState } from "react";
import "./App.css";

import Header from "./Components/Header/Header";
import ProductStore from "./Components/ProductStore/ProductStore";
import Cart from "./Components/Cart/Cart";
import CartProvider from "./Store/CartProvider";
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
      {openCart && <Cart openCart={openCart} onHindeCart={hideCardHandler} />}
      <Header onOpenCart={openCartHandler} />

      <ProductStore />
    </CartProvider>
  );
}

export default App;
