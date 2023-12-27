import React, { useState, useEffect } from "react";
import { Row, Col, Card, Image, Container } from "react-bootstrap";
import { Magnifier, GlassMagnifier } from "react-image-magnifiers";
import { useParams } from "react-router-dom";
import AddToCart from "../Components/Products/AddToCart";

const Product = () => {
  const { productId } = useParams();
  const [selectedProduct, setSelectedProduct] = useState({});
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProduct();
  }, []);

  async function fetchProduct() {
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response?.json();
      setProducts(data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  }

  useEffect(() => {
    const matchingProduct = products.find(
      (product) => product.id === Number(productId)
    );
    if (matchingProduct) {
      setSelectedProduct(matchingProduct);
    }
  }, [productId, products]);
  console.log(selectedProduct.rating);
  return (
    <>
      <Container style={{ marginTop: "30px" }}>
        <Row>
          <Col md="6">
            <Card style={{ border: "none" }}>
              <div style={{ paddingLeft: "75px" }}>
                <Magnifier
                  imageSrc={selectedProduct.image}
                  imageAlt={selectedProduct.title}
                  dragToMove={false}
                  mouseActivation="hover"
                  cursorStyle="crosshair"
                  interactionSettings={{
                    magnifyButtonEnabled: false,
                  }}
                  style={{ width: "80%", height: "100%" }}
                >
                  <GlassMagnifier
                    magnifierSize="50%"
                    magnifierBorderSize={1}
                    magnifierBorderColor="#ff3f6c"
                  />
                </Magnifier>
              </div>
              <Card.Body>
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <Image
                    src={selectedProduct.image}
                    style={{
                      width: "10%",
                      height: "auto",
                      margin: "10px",
                      border: "2px solid #007bff",
                    }}
                  />
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col md="6">
            <div>
              <div className="d-flex flex-column justify-content-between">
                <h2 style={{ fontSize: "3rem", marginBottom: "2rem" }}>
                  {selectedProduct.title}
                </h2>
                <h5>Description</h5>
                <p>{selectedProduct.description}</p>
                <AddToCart id={selectedProduct.id} item={selectedProduct} />
              </div>

              <div>
                <h4>Ratings & Reviews</h4>
                <p>
                  {selectedProduct?.rating?.rate} Ratings &{" "}
                  {selectedProduct?.rating?.count} Reviews
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Product;
