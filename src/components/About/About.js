import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Aboutcard from "./AboutCard";
import Techstack from "./Techstack";
import Toolstack from "./Toolstack";

function About() {
  return (
    <section className="about-page">
      <Container>
        <Row className="align-items-center g-5">
          <Col lg={6} className="about-page-text">
            <p className="section-eyebrow">About</p>
            <h1 className="section-heading">
              Know who <span className="imp-text-color">I'm</span>
            </h1>
            <p className="section-description">
              I'm pursuing a B.S. in Computer Science at the University of Texas at Dallas with a
              concentration in Artificial Intelligence and Machine Learning. My coursework and
              personal research revolve around building models, curating datasets, running
              experiments, and packaging those learnings inside approachable tools.
            </p>
            <p className="section-description">
              Outside of lectures you'll find me collaborating with AI/ML clubs, refining my own data
              projects, and teaching peers how to reason about metrics, infrastructure, and shipping
              prototypes responsibly.
            </p>
          </Col>
          <Col lg={6}>
            <Aboutcard />
          </Col>
        </Row>

        <Row className="g-4 mt-4">
          <Col md={6}>
            <div className="skill-panel card-surface">
              <h3>Professional Skillset</h3>
              <Techstack />
            </div>
          </Col>
          <Col md={6}>
            <div className="skill-panel card-surface">
              <h3>Tools I use</h3>
              <Toolstack />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default About;
