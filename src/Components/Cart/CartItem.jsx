import React, { useContext } from "react";
import stylesheet from "./CartItem.module.css";
import { Card, Button, Row, Col, Form } from "react-bootstrap";
import CartContext from "../../Store/CartContext";
import { hover } from "@testing-library/user-event/dist/hover";
const CartItem = (props) => {
  useContext(CartContext);
  const price = `₹ ${props.price.toFixed(2)}`;

  return (
    <>
      <Card style={{ width: "100%" }}>
        <Row>
          <Col sm={4}>
            <Card.Img
              variant="top"
              style={{ height: "100%", width: "150px" }}
              src={props.imageUrl}
            />
          </Col>
          <Col sm={8}>
            <Card.Body className="d-flex justify-content-between align-items-start">
              <Card.Title>{props.title}</Card.Title>
              <>
                <Card.Text> {price}</Card.Text>
                {/* <Button variant="danger">-</Button> */}
                <Form>
                  <Form.Control
                    type="number"
                    min="1"
                    max="10"
                    id={`quantity-${props.id}`}
                    value={props.quantity}
                  />
                </Form>

                {/* <Button variant="danger">+</Button> */}
              </>

              <Button className={stylesheet["remove-item-btn"]}>Remove</Button>
            </Card.Body>
          </Col>
        </Row>
      </Card>
    </>
  );
};

export default CartItem;
