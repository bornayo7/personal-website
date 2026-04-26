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
            <h1 className="section-heading">Get to Know Me</h1>
            <p className="section-description">
              I'm working toward a B.S. in Computer Science at the University of Texas at Dallas (Dec.
              2026) and usually split my week between AI/ML electives, systems programming labs, and
              club projects. Those classes keep my fundamentals steady while giving me excuses to
              tinker with new automation ideas after hours.
            </p>
            <p className="section-description">
              This upcoming summer I'll be joining Nokia in the AI SW Automation Co-op role, where
              I'll be researching how AI can be applied to fiber optics while building on
              the automation and AI-focused engineering work I want to keep pursuing. My earlier
              experience at Mashfrog gave me hands-on exposure to RPA bots, Angular H5 components, and
              ION data flows, and back on campus I'm iterating on ToyotaTinder, an AI music genre
              classifier, and CometPark so I keep stretching my ML, design, and product instincts
              between internships.
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
