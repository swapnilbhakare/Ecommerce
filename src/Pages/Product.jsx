import React, { useState } from "react";
import { Row, Col, Card, Image, Button, Container } from "react-bootstrap";
import { productsData } from "./../Components/Products/ProductsData";
import { Magnifier, GlassMagnifier } from "react-image-magnifiers";
import { useParams } from "react-router-dom";
const Product = (props) => {
  const { productId } = useParams();

  const [selectedProduct, setSelectedProduct] = useState(
    productsData.find((item) => item.id === productId) || { imageUrl: [] }
  );
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const selectImageHandler = (index) => {
    setSelectedProduct({
      ...selectedProduct,
      imageUrl: [selectedProduct.altImages[index]],
    });
    setSelectedImageIndex(index);
  };
  const moveImageHandler = (step) => {
    const newIndex = selectedImageIndex + step;
    if (newIndex >= 0 && newIndex < selectedProduct.altImages.length) {
      selectImageHandler(newIndex);
    }
  };

  return (
    <>
      <Container style={{ marginTop: "30px" }}>
        <Row>
          <Col md="6">
            <Card style={{ border: "none" }}>
              <div style={{ paddingLeft: "75px" }}>
                <Magnifier
                  imageSrc={selectedProduct.imageUrl}
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
                  {selectedProduct.altImages &&
                    selectedProduct.altImages.map((imageUrl, index) => (
                      <Image
                        src={imageUrl}
                        style={{
                          width: "10%",
                          height: "auto",
                          margin: "10px",
                          border:
                            selectedImageIndex === index
                              ? "2px solid #007bff"
                              : "2px solid transparent",
                        }}
                        key={index}
                        onClick={() => selectImageHandler(index)}
                      />
                    ))}
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col md="6">
            <div>
              {selectedProduct && selectedProduct.title && (
                <h2 style={{ fontSize: "3rem", marginBottom: "4rem" }}>
                  {selectedProduct.title}
                </h2>
              )}

              <div>
                <h4>Ratings & Reviews</h4>
                {selectedProduct.reviews &&
                  selectedProduct.reviews.map((review, index) => (
                    <div key={index}>
                      <p>
                        {review.rating} starts - {review.comment}
                      </p>
                    </div>
                  ))}
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Product;
