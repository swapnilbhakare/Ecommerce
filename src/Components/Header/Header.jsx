import React, { useContext, useState } from "react";
import { Container, Navbar, Nav, Button } from "react-bootstrap";
import { FiLogOut } from "react-icons/fi";
import CartButton from "./CartButton";
import { NavLink } from "react-router-dom";
import AuthContext from "../../Store/AuthContext";

const Header = (props) => {
  const authcontext = useContext(AuthContext);
  const isLoggedIn = authcontext.isLoggedIn;
  const logoutHandler = () => {
    authcontext.logout();
  };
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
          <div className="d-flex w-auto mb-3 ">
            <CartButton onOpenCart={props.onOpenCart} />
          </div>
          {authcontext.isLoggedIn && (
            <Button
              style={{
                fontSize: "1.3rem",
                marginLeft: "0.50rem",
                backgroundColor: "transparent",
                border: "none",
              }}
              className="d-flex w-auto mb-3 "
              onClick={logoutHandler}
            >
              <FiLogOut style={{ color: "#ff3f6c" }} />
            </Button>
          )}
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
