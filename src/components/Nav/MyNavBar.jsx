import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "./Nav.styles.css"

export const MyNavBar = () => {
  return (
    // //<!-- Navigation -->
    // <nav className="bg-indigo-900 h-auto">
    // <header className="flex flex-1 flex-wrap sm:items-stretch md:items-center justify-between bg-gray-800 mx-auto px-2 sm:px-2 lg:px-8  bg-gray-800 sm:py-4 lg:py-8 xl:py-4">
    //   <h1 className="flex flex-wrap  items-center text-white hover:text-indigo-600 md:text-base lg:text-2xl ">Kashay Arbelo</h1>
    //   <ul className="flex flex-wrap  sm:ml-6 bg-gray-800  justify-items-stretch">
    //       <li className="flex space-x-4 items-center">
    //           <a className="bg-gray-900 text-white hover:text-indigo-600 mx-4 px-3 py-2 rounded-md text-sm md:text-base lg:text-2xl font-medium items-center  noDecoration" href="#about-me">About Me</a>
    //       </li>
    //       <li className="flex space-x-4 items-center">
    //           <a className="bg-gray-900 text-white hover:text-indigo-600 mx-4 px-3 py-2 rounded-md text-sm md:text-base lg:text-2xl font-medium items-center"  href="#work">Work</a>
    //       </li>
    //       <li className="flex space-x-4 items-center">
    //           <a className="bg-gray-900 text-white hover:text-indigo-600 mx-4 px-3 py-2 rounded-md text-sm md:text-base lg:text-2xl font-medium items-center"  href="#contact-me">Contact Me</a>
    //       </li>
    //       <li className="flex space-x-4 items-center">
    //           <a className="bg-gray-900 text-white hover:text-indigo-600 mx-4 px-3 py-2 rounded-md text-sm md:text-base lg:text-2xl font-medium items-center"  href="https://www.linkedin.com/in/kashay-arbelo-11b83a1b9/">Resume</a>
    //       </li>
    //   </ul>
    
    // </header>
    // </nav>
    
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