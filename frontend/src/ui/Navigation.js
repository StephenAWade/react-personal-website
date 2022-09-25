import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

export function Navigation() {
  return (
    <Navbar bg="white" expand="md">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="m-auto">
            <Nav.Link href="/#about">About</Nav.Link>
          </Nav>
          <Nav className="m-auto">
            <Nav.Link href="/#resume">Resume</Nav.Link>
          </Nav>
          <Nav className="m-auto">
            <Nav.Link href="/#map">Map</Nav.Link>
          </Nav>
          <Nav className="m-auto">
            <Nav.Link href="/#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
    </Navbar>
  );
}
