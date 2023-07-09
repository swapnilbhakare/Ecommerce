import React, { useState } from "react";
import CartContext from "./CartContext";

const CartProvider = (props) => {
  const [products, setProducts] = useState([]);
  // adding product in cart
  const addProductToCardHandler = (product) => {
    let cartProducts = [...products];
    let isProductPresent = false;

    cartProducts.forEach((item) => {
      if (product.id === item.id) {
        isProductPresent = true;
        item.quantity = Number(product.quantity) + Number(product.quantity);
      }
    });
    if (isProductPresent) {
      setProducts(...cartProducts);
    } else {
      setProducts((prevProducts) => {
        return [...prevProducts, product];
      });
    }
  };
  const removeProductToCardHandler = () => {};
  const cartContext = {
    products: products,
    addProduct: addProductToCardHandler,
    removeProduct: removeProductToCardHandler,
    totalAmount: products.length,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
