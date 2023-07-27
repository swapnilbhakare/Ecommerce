import React from "react";
const CartContext = React.createContext({
  products: [],
  totalAmount: 0,
  addProduct: (item) => {},
  removeProduct: (id) => {},
  updateProduct: (id, quantity) => {},
});

export default CartContext;
