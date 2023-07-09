import { useState } from "react";
import "./App.css";

import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Cart from "./Components/Cart/Cart";

function App() {
  const [openCart, setOpenCart] = useState(false);

  const openCartHandler = () => {
    setOpenCart(true);
  };
  const hideCardHandler = () => {
    setOpenCart(false);
  };

  return (
    <>
      {openCart && <Cart openCart={openCart} onHindeCart={hideCardHandler} />}
      <Header onOpenCart={openCartHandler} />

      <Home />
    </>
  );
}

export default App;
