import React, { useContext } from "react";
import { Badge, Button } from "react-bootstrap";
import stylesheet from "./CartButton.module.css";
import CartContext from "../../Store/CartContext";
import { AiOutlineShoppingCart } from "react-icons/ai";
const CartButton = (props) => {
  const cartcontext = useContext(CartContext);

  return (
    <>
      <Button className={stylesheet["cart-button"]} onClick={props.onOpenCart}>
        <AiOutlineShoppingCart />
      </Button>
      <Badge pill bg="#ff3f6c" className={stylesheet["total-item"]}>
        {cartcontext.totalQuantity}
      </Badge>
    </>
  );
};

export default CartButton;