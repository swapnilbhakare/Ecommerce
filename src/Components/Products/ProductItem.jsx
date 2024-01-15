import React from "react";
import { Card, Col } from "react-bootstrap";
import stylesheet from "./ProductItem.module.css";
import AddToCart from "./AddToCart";
import { Link } from "react-router-dom";

const ProductItem = ({ product }) => {
  const price = `$ ${Number(product.price.toFixed(2))}`;

  return (
    <Col xs={12} sm={6} md={4} lg={3} xl={3} style={{ margin: "1rem 0" }}>
      <Link to={`/product/${product.id}`} style={{ textDecoration: "none" }}>
        <Card style={{ width: "100%", height: "350px" }}>
          <div className={stylesheet["image-container"]}>
            <Card.Img
              alt={product.title}
              variant="top"
              src={product.image}
              className={stylesheet.image}
            />
          </div>
          <Card.Body>
            <Card.Title>{product.title}</Card.Title>
            <Card.Text className={stylesheet.price}> {price}</Card.Text>
            {/* <AddToCart id={product.id} item={product} /> */}
          </Card.Body>
        </Card>
      </Link>
    </Col>
  );
};

export default ProductItem;
