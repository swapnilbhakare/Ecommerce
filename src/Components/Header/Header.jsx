import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import CartButton from "./CartButton";
import { NavLink } from "react-router-dom";

const Header = (props) => {
  return (
    <>
      <Navbar
        className="bg-body-tertiary"
        style={{ boxSshadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px" }}
      >
        <Container>
          <Navbar.Brand href="#" className="b">
            The Generics
          </Navbar.Brand>
          <Nav className="me-auto ">
            <NavLink to="/home" className="nav-link">
              Home
            </NavLink>
            <NavLink to="/" className="nav-link">
              Store
            </NavLink>
            <NavLink to="/about" className="nav-link">
              About
            </NavLink>
            <NavLink to="/contact" className="nav-link">
              Contact Us
            </NavLink>
          </Nav>
          <div className="d-flex w-auto mb-3">
            <CartButton onOpenCart={props.onOpenCart} />
          </div>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
