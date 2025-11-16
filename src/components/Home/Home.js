import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FiDownloadCloud, FiMail } from "react-icons/fi";
import homeLogo from "../../Assets/laptop.png";
import Type from "./Type";
import ProjectCard from "../Projects/ProjectCards";
import projectsData from "../Projects/projectData";
import Techstack from "../About/Techstack";
import Toolstack from "../About/Toolstack";

const quickFacts = [
  { title: "Location", value: "Southlake, TX" },
  { title: "Focus", value: "AI / ML / Full-stack" },
  { title: "Education", value: "UT Dallas CS" },
];

const featuredProjects = projectsData.slice(0, 2);

function Home() {
  return (
    <>
      <section className="hero-section" id="home">
        <Container>
          <Row className="align-items-center g-5">
            <Col lg={7} className="hero-text">
              <p className="eyebrow">Computer Science Student · UT Dallas</p>
              <h1 className="hero-title">
                Hi, I'm <span className="imp-text-color">Yash Baruah</span>
              </h1>
              <div className="typewriter-wrap">
                <Type />
              </div>
              <p className="hero-copy">
                I'm a Computer Science student concentrating on Artificial Intelligence and Machine
                Learning. I spend most of my time training models, experimenting with data pipelines,
                and building the full-stack tooling that helps me evaluate those experiments.
              </p>
              <div className="cta-group">
                <Button as={Link} to="/resume" variant="primary" className="cta-btn">
                  <FiDownloadCloud /> Resume
                </Button>
                <Button
                  variant="outline-light"
                  href="mailto:yashbaruah@hotmail.com"
                  className="cta-btn"
                >
                  <FiMail /> Let's talk
                </Button>
              </div>
              <div className="hero-stats">
                {quickFacts.map((fact) => (
                  <div key={fact.title} className="stat-pill">
                    <p className="stat-label">{fact.title}</p>
                    <p className="stat-value">{fact.value}</p>
                  </div>
                ))}
              </div>
            </Col>
            <Col lg={5}>
              <div className="hero-visual card-surface">
                <img src={homeLogo} alt="Working on a laptop" className="img-fluid" />
                <div className="hero-visual-note">
                  <p>Focusing on ML coursework, CNN research sprints, and campus data projects.</p>
                  <p>Also building React/Node apps so I can deploy my experiments end-to-end.</p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="featured-section" id="featured-projects">
        <Container>
          <p className="section-eyebrow">Featured Projects</p>
          <h2 className="section-heading">AI, data, and full-stack builds</h2>
          <p className="section-description">
            A quick look at the projects I'm actively iterating on—each combines ML experimentation
            with practical engineering so I can share results with classmates and mentors.
          </p>
          <Row className="g-4">
            {featuredProjects.map((project) => (
              <Col md={6} key={project.title}>
                <ProjectCard {...project} />
              </Col>
            ))}
          </Row>
          <div className="cta-group mt-4">
            <Button as={Link} to="/project" variant="outline-light" className="cta-btn">
              Explore all projects
            </Button>
          </div>
        </Container>
      </section>
      <section className="skills-section" id="skills">
        <Container>
          <p className="section-eyebrow">Skills & Tools</p>
          <h2 className="section-heading">Stacks supporting my ML work</h2>
          <p className="section-description">
            Comfort in both model training (Python, TensorFlow, PyTorch) and the full-stack delivery
            layer (React, Node.js, databases) lets me push experiments from notebooks into products
            others can use.
          </p>
          <Row className="g-4">
            <Col md={6}>
              <div className="skill-panel card-surface">
                <h3>Professional Skillset</h3>
                <p>Languages and frameworks I reach for when building ML prototypes.</p>
                <Techstack />
              </div>
            </Col>
            <Col md={6}>
              <div className="skill-panel card-surface">
                <h3>Tools I use</h3>
                <p>Platforms that keep experiment tracking and iteration fast.</p>
                <Toolstack />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Home;
