import React, { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import { AiFillGithub } from "react-icons/ai";
import { FiSun, FiMoon } from "react-icons/fi";
import logo from "../Assets/logo.png";
import { GITHUB_URL } from "../data/links";

function NavBar({ theme = "light", onToggleTheme = () => {} }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
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
      className={scrolled ? "navbar scrolled" : "navbar"}
    >
      <Container>
        <Navbar.Brand as={Link} to="/" className="brand" onClick={closeMenu}>
          <img src={logo} alt="Yash Baruah" />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={handleToggle}
          className="custom-toggler"
        >
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
          <Nav onClick={closeMenu}>
            <Nav.Link as={Link} to="/" className={isActive("/") ? "active" : ""}>
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/about" className={isActive("/about") ? "active" : ""}>
              About
            </Nav.Link>
            <Nav.Link as={Link} to="/project" className={isActive("/project") ? "active" : ""}>
              Projects
            </Nav.Link>
            <Nav.Link href={GITHUB_URL} target="_blank" rel="noopener noreferrer">
              <AiFillGithub style={{ marginRight: 6, marginBottom: 2 }} />
              GitHub
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/resume"
              className={`resume-link ${isActive("/resume") ? "active" : ""}`}
            >
              Resume
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
          </button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
