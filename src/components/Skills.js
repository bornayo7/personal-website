import React from "react";
import { FiCode, FiCpu, FiLayers, FiCloud } from "react-icons/fi";

const skillGroups = [
  {
    title: "Languages",
    icon: <FiCode />,
    skills: ["Python", "Java", "C++", "JavaScript", "TypeScript", "SQL", "HTML/CSS"],
  },
  {
    title: "AI & ML",
    icon: <FiCpu />,
    skills: [
      "LLM Evaluation",
      "RAG & Retrieval Validation",
      "Adversarial & Safety Testing",
      "Prompt Engineering",
      "TensorFlow",
      "OCR Pipelines",
      "Google Gemini",
    ],
  },
  {
    title: "Frameworks & Tools",
    icon: <FiLayers />,
    skills: [
      "React",
      "Next.js",
      "Remix",
      "Angular",
      "Node.js",
      "FastAPI",
      "WebSockets",
      "MongoDB",
      "Git",
      "Linux",
    ],
  },
  {
    title: "Cloud & Automation",
    icon: <FiCloud />,
    skills: ["AWS Lambda", "AWS S3", "Google Cloud Vision", "RPA", "REST APIs"],
  },
];

function Skills() {
  return (
    <div className="skills-grid icon-rotate">
      {skillGroups.map((group) => (
        <div className="info-card" key={group.title}>
          <h3 className="info-card-title">
            {group.icon}
            {group.title}
          </h3>
          <div className="skill-chips">
            {group.skills.map((skill) => (
              <span className="skill-chip" key={skill}>
                {skill}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Skills;
