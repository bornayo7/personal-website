import React, { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import logo from "../Assets/logo.png";
import { AiFillGithub, AiOutlineHome, AiOutlineUser, AiOutlineProject } from "react-icons/ai";
import { CgFileDocument } from "react-icons/cg";
import { FiSun, FiMoon } from "react-icons/fi";

function NavBar({ theme = "light", onToggleTheme = () => {} }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [navColour, setNavColour] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setNavColour(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleToggle = () => setIsExpanded((prev) => (prev ? false : "expanded"));
  const closeMenu = () => setIsExpanded(false);
  const isActive = (path) => location.pathname === path;

  return (
    <Navbar
      expand="md"
      fixed="top"
      expanded={isExpanded}
      className={navColour ? "sticky navbar" : "navbar"}
      bg={theme === "dark" ? "dark" : "light"}
      variant={theme === "dark" ? "dark" : "light"}
    >
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img src={logo} alt="Yash Baruah logo" className="img-fluid logo" />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={handleToggle}
          className="custom-toggler"
        >
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse
          id="responsive-navbar-nav"
          className="justify-content-end align-items-md-center gap-md-3"
        >
          <Nav className="align-items-md-center" onClick={closeMenu}>
            <Nav.Link as={Link} to="/" className={isActive("/") ? "active" : ""}>
              <AiOutlineHome /> Home
            </Nav.Link>
            <Nav.Link as={Link} to="/about" className={isActive("/about") ? "active" : ""}>
              <AiOutlineUser /> About
            </Nav.Link>
            <Nav.Link as={Link} to="/project" className={isActive("/project") ? "active" : ""}>
              <AiOutlineProject /> Projects
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/resume"
              className={`resume-link ${isActive("/resume") ? "active" : ""}`}
            >
              <CgFileDocument /> Resume
            </Nav.Link>
            <Nav.Link
              href="https://github.com/bornayo7"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="external-link"
            >
              <AiFillGithub /> GitHub
            </Nav.Link>
          </Nav>
          <button
            type="button"
            className="theme-toggle"
            onClick={onToggleTheme}
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            aria-pressed={theme === "dark"}
          >
            {theme === "dark" ? <FiSun /> : <FiMoon />}
            <span>{theme === "dark" ? "Light" : "Dark"} mode</span>
          </button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
