import React, { useContext } from "react";
import { Button } from "react-bootstrap";
import stylesheet from "./AddToCart.module.css";
import CartContext from "../../Store/CartContext";

const AddToCart = (props) => {
  const defalutQty = 1;
  const cartcontext = useContext(CartContext);

  const addItemToCart = (event) => {
    event.preventDefault();

    const cartItem = {
      ...props.item,
      quantity: defalutQty,
      id: props.id,
    };

    cartcontext.addProduct(cartItem);
  };
  return (
    <div>
      <Button
        as="input"
        type="submit"
        className={stylesheet.button}
        defaultValue={defalutQty}
        onClick={addItemToCart}
        value="Add to Cart"
        product={props}
        id={"amount_" + props.id}
      ></Button>
    </div>
  );
};

export default AddToCart;
