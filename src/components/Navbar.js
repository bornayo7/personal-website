import React, { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from "../Assets/logo.png"; // Ensure this is your personalized logo
import { Link } from "react-router-dom";
import { AiFillGithub, AiOutlineHome, AiOutlineUser, AiOutlineProject, AiOutlineMail } from "react-icons/ai";
import { CgFileDocument } from "react-icons/cg";

function NavBar() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [navColour, setNavColour] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setNavColour(true);
    } else {
      setNavColour(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    
    // Cleanup
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Navbar
      expand="md"
      fixed="top"
      expanded={isExpanded}
      className={navColour ? "sticky navbar" : "navbar"}
      bg="dark"
      variant="dark"
    >
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img src={logo} alt="Yash Baruah Logo" className="img-fluid logo" />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => setIsExpanded(isExpanded ? false : "expanded")}
          className="custom-toggler"
        >
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" onClick={() => setIsExpanded(false)}>
            <Nav.Link as={Link} to="/">
              <AiOutlineHome /> Home
            </Nav.Link>
            <Nav.Link as={Link} to="/about">
              <AiOutlineUser /> About
            </Nav.Link>
            <Nav.Link as={Link} to="/project">
              <AiOutlineProject /> Projects
            </Nav.Link>
            <Nav.Link as={Link} to="/resume">
              <CgFileDocument /> Resume
            </Nav.Link>
            <Nav.Link href="mailto:yashbaruah@hotmail.com">
              <AiOutlineMail /> Contact
            </Nav.Link>
            <Nav.Link href="https://github.com/bornayo7" target="_blank" rel="noopener noreferrer">
              <AiFillGithub /> GitHub
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
