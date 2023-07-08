import React from "react";
import { Card, Button, Col } from "react-bootstrap";
import stylesheet from "./ProductItem.module.css";
const ProductItem = (props) => {
  return (
    <Col style={{ margin: "2px" }}>
      <Card style={{ width: "18rem" }}>
        <div className={stylesheet["image-container"]}>
          <Card.Img
            variant="top"
            src={props.imageUrl}
            className={stylesheet.image}
          />
        </div>
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text className={stylesheet.price}>$ {props.price}</Card.Text>
          <Button className={stylesheet.button}>Add to Cart</Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default ProductItem;
