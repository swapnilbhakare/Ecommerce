import { Modal } from "react-bootstrap";
import { useState } from "react";

const Cart = (props) => {
  return (
    <>
      <Modal
        fullscreen="lg-down"
        show={props.openCart}
        onHide={props.onHindeCart}
      >
        <Modal.Header closeButton>
          <Modal.Title>Cart</Modal.Title>
        </Modal.Header>
        <Modal.Body></Modal.Body>
      </Modal>
    </>
  );
};

//
export default Cart;
