import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center g-3">
          <Col md={4}>
            <div className="footer-branding">
              <p className="footer-title">Yash Baruah</p>
              <p className="footer-copy">CS student focused on AI/ML modeling, data work, and full-stack support.</p>
            </div>
          </Col>
          <Col md={4} className="text-md-center">
            <div className="footer-links">
              <Link to="/">Home</Link>
              <Link to="/project">Projects</Link>
              <Link to="/resume">Resume</Link>
            </div>
          </Col>
          <Col md={4} className="text-md-end">
            <p className="footer-copy">© {year} YB · All rights reserved</p>
            <div className="footer-socials">
              <a
                href="https://github.com/bornayo7"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <AiFillGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/yashbaruah/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn />
              </a>
              <a
                href="https://www.instagram.com/yash.baruah"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <AiFillInstagram />
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
