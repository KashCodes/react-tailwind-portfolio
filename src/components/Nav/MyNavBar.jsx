import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "./Nav.styles.css"

export const MyNavBar = () => {
  return (
    
      <>
        <Navbar
          fixed="top"
          collapseOnSelect
          expand="md"
          // bg='dark'
          variant="dark"
          className="animate-navbar nav-theme justify-content-between"
        >
          <Navbar.Brand href="#home">
          <span className="flex flex-wrap  items-center text-white hover:text-indigo-600 text-base lg:text-3xl m-1 rock-salt-cursive">Kashay Arbelo</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto text-white hover:text-indigo-600">
              {/* -------------------------------------------------------- */}
              {/* Links for navigation to different parts of the portfolio */}
              {/* -------------------------------------------------------- */}
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#skills">Skills</Nav.Link>
              <Nav.Link href="#experience">Experience</Nav.Link>
              <Nav.Link href="#projects">Projects</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </>

  );
}

export default MyNavBar;