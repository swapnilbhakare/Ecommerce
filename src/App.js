import { Suspense, useState,lazy,useContext } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";

import Header from "./Components/Header/Header";
import Cart from "./Components/Cart/Cart";
import CartProvider from "./Store/CartProvider";

import Authentication from "./Components/Auth/Authentication";
import AuthContext from "./Store/AuthContext";

const Home = lazy(()=> import('./Pages/Home'));
const About = lazy(()=> import('./Pages/About'));
const Store = lazy(()=> import('./Pages/Store'));
const Product = lazy(()=> import('./Pages/Product'));
const Contact = lazy(()=> import('./Pages/Contact'));



function App() {
  const authcontext = useContext(AuthContext)
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
      <Suspense fallback={<div>Loading...</div>}>
      {openCart && <Cart openCart={openCart} onHindeCart={hideCardHandler} />}

      <Routes>
        <>
          {authcontext.isLoggedIn && (
           <>
            <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/store" element={<Store />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/product/:productId" element={<Product />} />
  
          </>
          )}
      {!authcontext.isLoggedIn &&(
        <>
        <Route path="/" element={<Authentication />} />
         <Route path="/home" element={<Authentication />} />
         <Route path="/store" element={<Authentication />} />
         <Route path="/about" element={<Authentication />} />
         <Route path="/contact" element={<Authentication />} />
         <Route path="/auth" element={<Authentication />} />
        
        </>
          )}
           </>
      </Routes>
      </Suspense>
    </CartProvider>
  );
}

export default App;

