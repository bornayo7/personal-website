import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function ProjectCards({ imgPath, title, description, ghLink, demoLink, tags = [] }) {
  return (
    <Card className="project-card-view card-surface">
      <div className="project-image-wrapper">
        <Card.Img variant="top" src={imgPath} alt={title} />
      </div>
      <Card.Body>
        <div className="project-card-heading">
          <Card.Title>{title}</Card.Title>
        </div>
        {tags.length > 0 && (
          <div className="project-tags">
            {tags.map((tag) => (
              <span key={`${title}-${tag}`} className="tag-pill">
                {tag}
              </span>
            ))}
          </div>
        )}
        <Card.Text>{description}</Card.Text>
        <div className="project-card-actions">
          {ghLink && (
            <Button variant="primary" href={ghLink} target="_blank" rel="noopener noreferrer">
              <BsGithub /> GitHub
            </Button>
          )}
          {demoLink && (
            <Button
              variant="outline-light"
              href={demoLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <CgWebsite /> Demo
            </Button>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}

export default ProjectCards;
