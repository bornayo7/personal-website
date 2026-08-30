import React from "react";
import ProjectCard from "./ProjectCards";
import projectsData from "./projectData";

function Projects() {
  return (
    <section className="section" id="projects">
      <div className="wrap">
        <p className="section-label">Projects</p>
        <h1 className="section-title">Things I've built</h1>
        <p className="section-intro">
          Hackathon builds, club projects, and tools I made because I wanted them to exist. Most
          have a repo you can poke through, and a few are still live.
        </p>
        <div className="project-grid">
          {projectsData.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
