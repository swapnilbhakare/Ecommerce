import React, { useContext } from "react";
import { Card, Button, Col } from "react-bootstrap";
import stylesheet from "./ProductItem.module.css";
import CartContext from "../../Store/CartContext";

const ProductItem = (props) => {
  const price = `₹ ${props.price.toFixed(2)}`;

  const defalutQty = 1;
  const cartcontext = useContext(CartContext);

  const addItemToCart = (event) => {
    event.preventDefault();

    cartcontext.addProduct({
      ...props,
      quantity: defalutQty,
      id: Math.random().toString(36),
    });
  };

  return (
    <Col style={{ margin: "3rem 0" }}>
      <Card style={{ width: "18rem" }}>
        <div className={stylesheet["image-container"]}>
          <Card.Img
            alt={props.title}
            variant="top"
            src={props.imageUrl}
            className={stylesheet.image}
          />
        </div>
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text className={stylesheet.price}> {price}</Card.Text>
          <Button
            as="input"
            type="submit"
            className={stylesheet.button}
            defaultValue={defalutQty}
            onClick={addItemToCart}
            value="Add to Cart"
            product={props}
            id={props.id}
          ></Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default ProductItem;
