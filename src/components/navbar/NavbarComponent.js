import { React, useState } from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import "./navbar.css";

const NavbarComponent = () => {
  //change nav
  const [color, setColor] = useState(true);

  const changeColor = () => {
    if (window.scrollY <= 0) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  window.addEventListener("scroll", changeColor, true);

  return (
    <div>
      <Navbar
        className={color ? "navbarComp" : "navbarScrolled"}
        fixed="top"
        expand="lg"
      >
        <Container>
          <Navbar.Brand href="#home">Murat Can Yüksel</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavbarComponent;
