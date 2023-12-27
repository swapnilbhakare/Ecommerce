import React, { useContext } from "react";
import stylesheet from "./CartItem.module.css";
import { Card, Button, Row, Col, Form } from "react-bootstrap";
import CartContext from "../../Store/CartContext";

const CartItem = (props) => {
  const { updateQuantity } = useContext(CartContext);

  const handleQuantityChange = (event) => {
    const newQuantity = +event.target.value;
    updateQuantity(props.id, newQuantity);
  };

  const price = `₹ ${props.price.toFixed(2)}`;

  return (
    <Card style={{ width: "100%" }} className={stylesheet["cart-item-card"]}>
      <Row>
        <Col xs={6} md={4}>
          <Card.Img
            variant="top"
            style={{
              height: "150px",
              width: "150px",
              objectFit: "contain",
            }}
            src={props.image}
          />
        </Col>
        <Col xs={6} md={8}>
          <Card.Body className={stylesheet["cart-item-body"]}>
            <div>
              <Card.Title>{props.title}</Card.Title>
              <Card.Text>{price}</Card.Text>
            </div>
            <div className="d-flex justify-content-between align-items-center">
              <Form>
                <Form.Control
                  type="number"
                  min="1"
                  max="10"
                  id={`quantity-${props.id}`}
                  value={props.quantity}
                  onChange={handleQuantityChange}
                />
              </Form>
              <Button
                className={stylesheet["remove-item-btn"]}
                onClick={props.onRemove}
              >
                Remove
              </Button>
            </div>
          </Card.Body>
        </Col>
      </Row>
    </Card>
  );
};

export default CartItem;
