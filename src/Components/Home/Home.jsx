import React from "react";
import Button from "react-bootstrap/Button";
import { Card, Container, Row, Col } from "react-bootstrap";
import ProductItem from "../Products/ProductItem";
const Home = (props) => {
  const productsArr = [
    {
      title: "Colors",
      price: 100,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    },

    {
      title: "Black and white Colors",
      price: 50,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    },

    {
      title: "Yellow and Black Colors",
      price: 70,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
    },

    {
      title: "Blue Color",
      price: 100,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
    },
  ];
  const ProductList = productsArr.map((product) => (
    <ProductItem
      title={product.title}
      price={product.price}
      imageUrl={product.imageUrl}
    />
  ));

  return (
    <>
      <Container className="mt-5">
        <Row>{ProductList}</Row>
      </Container>
    </>
  );
};

export default Home;
