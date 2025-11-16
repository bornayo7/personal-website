import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import projectsData from "./projectData";

function Projects() {
  return (
    <section className="project-section" id="projects">
      <Container>
        <p className="section-eyebrow">Projects</p>
        <h1 className="section-heading">
          Model work & <span className="imp-text-color">systems</span>
        </h1>
        <p className="section-description">
          From ToyotaTinder's swipeable car recommendations to AI music genre classification and
          CometPark's analytics dashboard, these are the projects backing my latest resume.
        </p>
        <Row className="g-4">
          {projectsData.map((project) => (
            <Col md={6} lg={6} key={project.title}>
              <ProjectCard {...project} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default Projects;
