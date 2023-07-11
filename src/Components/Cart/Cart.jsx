import { Button, Modal } from "react-bootstrap";
import { useContext } from "react";
import CartItem from "./CartItem";
import stylesheet from "./Cart.module.css";
import CartContext from "../../Store/CartContext";
const Cart = (props) => {
  const cartcontext = useContext(CartContext);
  // const cartItemAddHandler = () => {};
  const isCarthaveItems = cartcontext.products.length > 0;

  const cardItemList = cartcontext.products.map((product) => (
    <CartItem
      key={product.id}
      title={product.title}
      price={product.price}
      imageUrl={product.imageUrl}
      quantity={product.quantity}
    />
  ));
  // calulating the total products amount

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
        <Modal.Body>{cardItemList}</Modal.Body>
        <Modal.Footer>
          Total {`₹ ${cartcontext.totalAmount}`}
          <Button className={stylesheet["place-order-btn"]}>Place Order</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Cart;
