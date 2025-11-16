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
              Get to <span className="imp-text-color">Know Me</span>
            </h1>
            <p className="section-description">
              I'm pursuing a B.S. in Computer Science at the University of Texas at Dallas (Dec. 2026)
              and split my time between AI/ML electives, systems programming labs, and club projects.
              Those classes keep my fundamentals sharp while I experiment with ways to make automation
              feel less like a buzzword and more like a teammate.
            </p>
            <p className="section-description">
              This past summer I interned as an Assistant Software Engineer at Mashfrog, turning Infor
              OS ideas into RPA bots, Angular H5 components, and ION data flows for ERP teams. Back on
              campus I'm iterating on ToyotaTinder, an AI music genre classifier, and CometPark so I
              can keep stretching my ML, design, and product instincts between internships.
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
