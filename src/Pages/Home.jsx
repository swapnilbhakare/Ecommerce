import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import ProductItem from "../Components/Products/ProductItem";
const Home = (props) => {
  const [products, setProducts] = useState();

  useEffect(() => {
    fetchProducts();
  }, []);
  async function fetchProducts() {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response?.json();
    setProducts(data);
  }

  const ProductList = products?.map((product) => (
    <ProductItem product={product} />
  ));

  return (
    <>
      <Container className="mt-4">
        <Row>{ProductList}</Row>
      </Container>
    </>
  );
};

export default Home;
