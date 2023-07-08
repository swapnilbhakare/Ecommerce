import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import stylesheet from "./Header.module.css";
import { AiOutlineShoppingCart } from "react-icons/ai";
const Header = () => {
  return (
    <>
      <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#" className="b">
            ilanoS
          </Navbar.Brand>
          <Nav className="me-auto ">
            <Nav.Link href="#">Home</Nav.Link>
            <Nav.Link href="#">Store</Nav.Link>
            <Nav.Link href="#">About</Nav.Link>
          </Nav>
          <div className="d-flex w-auto mb-3">
            <Button className={stylesheet["cart-button"]}>
              <AiOutlineShoppingCart />
            </Button>
            <span>0</span>
          </div>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
