import React from "react";
import { BsGithub } from "react-icons/bs";
import { FiExternalLink } from "react-icons/fi";

function ProjectCards({
  imgPath,
  title,
  description,
  ghLink,
  demoLink,
  tags = [],
  imageClassName = "",
}) {
  return (
    <article className="project-card">
      <div className="project-image">
        <img src={imgPath} alt={title} className={imageClassName} />
      </div>
      <div className="project-body">
        <div className="project-title-row">
          <h3 className="project-title">{title}</h3>
          <div className="project-links">
            {ghLink && (
              <a
                href={ghLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${title} on GitHub`}
                title="GitHub"
              >
                <BsGithub />
              </a>
            )}
            {demoLink && (
              <a
                href={demoLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${title} live demo`}
                title="Live demo"
              >
                <FiExternalLink />
              </a>
            )}
          </div>
        </div>
        <p className="project-desc">{description}</p>
        <div className="project-tags">
          {tags.map((tag) => (
            <span key={`${title}-${tag}`} className="tag-pill">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}

export default ProjectCards;
