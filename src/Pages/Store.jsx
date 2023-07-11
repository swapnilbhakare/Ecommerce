import React from "react";
import { productsArr } from "../Components/Products/ProductsData";
import { Container, Row } from "react-bootstrap";
import ProductItem from "../Components/Products/ProductItem";
const Store = (props) => {
  const ProductList = productsArr.map((product) => (
    <ProductItem
      key={product.id}
      id={product.id}
      title={product.title}
      price={product.price}
      imageUrl={product.imageUrl}
    />
  ));

  return (
    <>
      <Container fluid>
        <Row>{ProductList}</Row>
      </Container>
    </>
  );
};

export default Store;
