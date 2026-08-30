import React from "react";
import {
  FiBookOpen,
  FiAward,
  FiCheckCircle,
  FiMap,
  FiMonitor,
  FiUsers,
  FiZap,
} from "react-icons/fi";

const coursework = [
  "Machine Learning",
  "Artificial Intelligence",
  "Data Structures & Algorithms",
  "Advanced Algorithm Design",
  "Database Systems",
  "Software Engineering",
  "Probability & Statistics",
  "Linear Algebra",
];

function About() {
  return (
    <section className="section" id="about">
      <div className="wrap">
        <p className="section-label">About</p>
        <h1 className="section-title">A bit about me</h1>
        <div className="about-grid">
          <div className="about-prose">
            <p>
              I'm Yash, a computer science senior at the University of Texas at Dallas,
              graduating in December 2026. I've been the kid who takes gadgets apart for as long
              as I can remember; CS just turned that habit into something I could get graded on.
            </p>
            <p>
              My last two summers had a theme: <strong>making AI you can trust</strong>. At
              Nokia, I evaluated the LLM assistant inside their optical network-management
              platform. I built evaluation suites of 1,000+ tests, traced failures to root
              causes, and wrote the release feedback report that went to R&D. At Mashfrog, I
              shipped RPA and generative AI workflows that saved teams 30+ hours of manual work a
              week. I've come to like the unglamorous side of AI: proving whether it works.
            </p>
            <p>
              Outside of internships, most of my favorite building has happened at hackathons
              with friends: ToyotaTinder at HackUTD 2025, CometPark the year before, and
              VisionTranslate at HackSMU, which I'm still improving today. I also worked as an
              assistant manager at Kumon, which taught me more about explaining hard things
              simply than any class has.
            </p>
          </div>
          <div className="about-cards icon-rotate">
            <div className="info-card">
              <h3 className="info-card-title">
                <FiBookOpen /> Education
              </h3>
              <p className="info-card-sub">
                B.S. Computer Science, University of Texas at Dallas
              </p>
              <p className="info-card-meta">Expected Dec 2026 · Richardson, TX</p>
              <div className="skill-chips">
                {coursework.map((course) => (
                  <span className="skill-chip" key={course}>
                    {course}
                  </span>
                ))}
              </div>
            </div>
            <div className="info-card">
              <h3 className="info-card-title">
                <FiAward /> Certifications
              </h3>
              <ul className="icon-list checks">
                <li>
                  <FiCheckCircle /> AWS Certified Cloud Practitioner
                </li>
                <li>
                  <FiCheckCircle /> Databricks Fundamentals Accreditation
                </li>
              </ul>
            </div>
            <div className="info-card">
              <h3 className="info-card-title">
                <FiZap /> Off the clock
              </h3>
              <ul className="icon-list">
                <li>
                  <FiMap /> Road trips and capturing moments along the way
                </li>
                <li>
                  <FiMonitor /> Gaming nights with friends
                </li>
                <li>
                  <FiUsers /> Teaching (the Kumon years left a mark)
                </li>
                <li>
                  <FiZap /> Trying new AI tools the week they drop
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
