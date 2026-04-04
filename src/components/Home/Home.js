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
  { title: "Status", value: "UT Dallas CS '26 Student" },
  { title: "Upcoming Role", value: "AI SWE Intern - Nokia" },
  { title: "Location", value: "Southlake, TX" },
  { title: "Focus", value: "AI/ML & full-stack" },
];

const featuredProjects = projectsData.slice(0, 2);

function Home() {
  return (
    <>
      <section className="hero-section" id="home">
        <Container>
          <Row className="align-items-center g-5">
            <Col lg={7} className="hero-text">
              <p className="eyebrow">UT Dallas CS '26 - AI/ML builder</p>
              <h1 className="hero-title">Hi, I'm Yash Baruah</h1>
              <div className="typewriter-wrap">
                <Type />
              </div>
              <p className="hero-copy">
                I'm a UT Dallas Computer Science student focused on AI-first automation builds and
                full-stack prototypes that apply ML in practical ways. This upcoming summer, I'll be
                joining Nokia as an AI SWE Intern, where I'll be
                researching how AI can be applied to fiber optics and exploring automation-focused
                engineering on optics production. Outside internships, I build
                projects like ToyotaTinder and music genre classifiers to keep sharpening my ML,
                data, and front-end skills.
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
                  <p>Some of my current goals:</p>
                  <ul>
                    <li>
                      Deepen my foundations in algorithms, data structures, and math for machine
                      learning.
                    </li>
                    <li>
                      Build and deploy end-to-end AI and ML projects that solve real problems, not
                      just class assignments.
                    </li>
                    <li>
                      Develop strong software engineering habits such as version control, testing,
                      and clean code for ML systems.
                    </li>
                  </ul>
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
            ToyotaTinder, AI Music Genre Classifier, and CometPark are where I test-drive new stacks,
            tighten Framer Motion or TensorFlow workflows, and prove that prototypes can make it into
            production demos.
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
            Blending Java/Python/C++ fundamentals with frameworks like Next.js, Angular, Remix, and
            TensorFlow lets me deliver everything from RPA bots to AWS-hosted inference dashboards.
          </p>
          <Row className="g-4">
            <Col md={6}>
              <div className="skill-panel card-surface">
                <h3>Languages & Frameworks</h3>
                <p>Stacks used across internships, HackUTD, and my coursework.</p>
                <Techstack />
              </div>
            </Col>
            <Col md={6}>
              <div className="skill-panel card-surface">
                <h3>Cloud, Platforms & Ops</h3>
                <p>Infra used for deployments, automation, and collaboration.</p>
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
