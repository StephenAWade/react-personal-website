import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import "./App.css";
import { NavButtons } from "./NavButtons";

export function Navigation(){
    const buttons = [
        {
          link: "/#about",
          type: "About",
        },
        {
          link: "/#Resume",
          type: "Events",
        },
        {
          link: "/#map",
          type: "Map",
        },
        {
          link: "/contact",
          type: "Contact",
        },
      ];

     return (
        <>
          <Navbar expand="lg">
            <Container fluid className="navbar-spacing">
              <Navbar.Brand href="/">
                <p id="website-icon-upper">GLOBIS</p>
                <p id="website-icon-lower">BOOKSTORE</p>
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                  {buttons.map((button) => (
                    <NavButtons button={button} key={button.type} />
                  ))}
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </>
      );
}