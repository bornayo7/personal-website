import React from "react";

const experience = [
  {
    role: "AI Software Automation Co-op",
    org: "Nokia",
    meta: "May – Aug 2026 · Dallas, TX",
    points: [
      "Evaluated the LLM/RAG assistant built into Nokia's optical network-management platform across 100+ use cases, and wrote the release feedback report for R&D: 20+ evidence-backed defect tickets and 50+ roadmap proposals.",
      "Built LLM evaluation suites with 1,000+ tests covering regression, instruction adherence, retrieval grounding, and adversarial safety, scored against baselines to measure the impact of a model upgrade.",
      "Traced most failures of an LLM planning assistant to a single root cause, then proposed and prototyped a Skills-based approach that shaped the requirements spec for the product's next versions.",
    ],
    tags: ["LLM Evaluation", "RAG", "Adversarial Testing", "Root-Cause Analysis"],
  },
  {
    role: "Software Engineering Intern",
    org: "Mashfrog",
    meta: "May – Aug 2025 · Remote",
    points: [
      "Designed, tested, and deployed 20+ RPA and generative AI workflows that automated core business processes, saving teams 30+ hours of manual work a week and speeding up task completion by up to 400%.",
      "Developed an automation bot validated to 98% accuracy across 2,000+ test cases, cutting manual errors and hardening exception handling.",
      "Built custom Angular and TypeScript UI components delivered to 5+ customers and used by over 100 workers.",
    ],
    tags: ["RPA", "Generative AI", "Angular", "TypeScript"],
  },
];

function Experience() {
  return (
    <div className="timeline">
      {experience.map((job) => (
        <div className="timeline-item" key={job.org}>
          <div className="timeline-header">
            <h3 className="timeline-role">
              {job.role} <span className="timeline-org">@ {job.org}</span>
            </h3>
            <span className="timeline-meta">{job.meta}</span>
          </div>
          <ul className="timeline-points">
            {job.points.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
          <div className="timeline-tags">
            {job.tags.map((tag) => (
              <span className="tag-pill" key={tag}>
                {tag}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Experience;
