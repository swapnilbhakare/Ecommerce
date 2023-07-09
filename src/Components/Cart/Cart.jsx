import { Button, Modal } from "react-bootstrap";
import { useState } from "react";
import CartItem from "./CartItem";
import stylesheet from "./Cart.module.css";
const Cart = (props) => {
  const cartElements = [
    {
      title: "Colors",

      price: 100,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",

      quantity: 2,
    },

    {
      title: "Black and white Colors",

      price: 50,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",

      quantity: 3,
    },

    {
      title: "Yellow and Black Colors",

      price: 70,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",

      quantity: 1,
    },
  ];

  const cardItemLIst = cartElements.map((cart) => (
    <CartItem
      title={cart.title}
      price={cart.price}
      imageUrl={cart.imageUrl}
      quantity={cart.quantity}
    />
  ));

  return (
    <>
      <Modal
        fullscreen="xxl-down"
        show={props.openCart}
        onHide={props.onHindeCart}
        size="lg"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
          <Modal.Title>Cart</Modal.Title>
        </Modal.Header>
        <Modal.Body>{cardItemLIst}</Modal.Body>
        <Modal.Footer>
          Total 0
          <Button className={stylesheet["place-order-btn"]}>Place Order</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Cart;
