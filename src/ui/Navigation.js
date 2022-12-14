import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

export function Navigation() {
  return (
    <Container>
      <Navbar bg="white" expand="md">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
            <Nav.Link href="/">Home</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="/#resume">Resume</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="/#map">Map</Nav.Link>
          </Nav>
          {/* <Nav className="m-auto">
            <Nav.Link href="/#contact">Contact</Nav.Link>
          </Nav> */}
        </Navbar.Collapse>
      </Navbar>
    </Container>
  );
}
