import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg"; // Update with your avatar image if available
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";


function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="imp-text-color"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I have a profound passion for programming and continuously strive to
              expand my knowledge and skills in the field. 🤖
              <br />
              <br />I am proficient in languages like
              <i>
                <b className="imp-text-color"> Java, Python, and C++. </b>
              </i>
              <br />
              <br />
              My areas of interest include developing innovative &nbsp;
              <i>
                <b className="imp-text-color">Web Technologies and AI/ML Products </b> and
                exploring areas related to{" "}
                <b className="imp-text-color">
                  Machine Learning and Data Science.
                </b>
              </i>
              <br />
              <br />
              Whenever possible, I apply my passion for developing products
              with <b className="imp-text-color">React.js</b> and
              <i>
                <b className="imp-text-color">
                  {" "}
                  Modern JavaScript Libraries and Frameworks
                </b>
              </i>
              &nbsp; like
              <i>
                <b className="imp-text-color"> Node.js and Next.js</b>
              </i>
              , and integrate them with powerful backend technologies.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="imp-text-color">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/bornayo7"
                  className="icon-colour home-social-icons"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/yashbaruah/"
                  className="icon-colour home-social-icons"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/yash.baruah"
                  className="icon-colour home-social-icons"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                >
                  <AiFillInstagram />
                </a>
              </li>
              {/* Add more social links here if needed */}
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
