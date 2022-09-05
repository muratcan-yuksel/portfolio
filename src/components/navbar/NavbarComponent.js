import { React, useState } from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import "./navbar.css";

const NavbarComponent = () => {
  //change nav
  const [color, setColor] = useState(true);

  const changeColor = () => {
    if (window.scrollY <= 60) {
      setColor(true);
      console.log("true");
      console.log(window.scrollY);
    } else {
      setColor(false);
      console.log("false");
      console.log(window.scrollY);
    }
  };

  function foo(event) {
    console.log("foo is here");
  }

  window.addEventListener("scroll", changeColor, true);

  // window.addEventListener(
  //   "scroll",
  //   function (event) {
  //     console.log("scroll");
  //   },
  //   true
  // );

  return (
    <div>
      <Navbar
        className={color ? "navbarComp" : "navbarScrolled"}
        fixed="top"
        expand="lg"
      >
        <Container>
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavbarComponent;
