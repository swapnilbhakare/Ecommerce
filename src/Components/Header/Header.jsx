import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import CartButton from "./CartButton";
import { NavLink } from "react-router-dom";

const Header = (props) => {
  return (
    <>
      <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#" className="b">
            The Generics
          </Navbar.Brand>
          <Nav className="me-auto ">
            <NavLink to="/home" className="nav-link" style={{ color: "white" }}>
              Home
            </NavLink>
            <NavLink to="/" className="nav-link" style={{ color: "white" }}>
              Store
            </NavLink>
            <NavLink
              to="/about"
              className="nav-link"
              style={{ color: "white" }}
            >
              About
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
