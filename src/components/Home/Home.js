import React from "react";
import { Link } from "react-router-dom";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { FiMail, FiArrowRight } from "react-icons/fi";
import Type from "./Type";
import Terminal from "./Terminal";
import Experience from "../Experience";
import Skills from "../Skills";
import ProjectCard from "../Projects/ProjectCards";
import projectsData from "../Projects/projectData";
import SocialLinks from "../SocialLinks";
import { GITHUB_URL, LINKEDIN_URL, EMAIL, EMAIL_URL } from "../../data/links";

const featuredProjects = projectsData.slice(0, 3);

function Home() {
  return (
    <>
      <section className="hero">
        <div className="wrap hero-grid">
          <div className="hero-text">
            <p className="hero-eyebrow">Dallas–Fort Worth, TX · CS @ UT Dallas</p>
            <h1 className="hero-title">
              Hi, I'm <span className="gradient-text">Yash</span>.
            </h1>
            <div className="typewriter-wrap">
              <Type />
            </div>
            <p className="hero-copy">
              I'm a computer science senior at UT Dallas, graduating this December. This past
              summer I was at Nokia stress-testing the LLM assistant built into their optical
              network platform; the summer before, I automated business processes as a software
              engineering intern at Mashfrog. In between, I build things like a Chrome extension
              that translates the text inside images on any webpage.
            </p>
            <div className="cta-group">
              <Link to="/resume" className="btn-solid">
                View my resume
              </Link>
              <SocialLinks />
            </div>
            <div className="hero-facts">
              <span className="fact-chip">prev: Nokia · Mashfrog</span>
              <span className="fact-chip">AWS Certified Cloud Practitioner</span>
              <span className="fact-chip">HackUTD × HackSMU builder</span>
            </div>
          </div>
          <Terminal />
        </div>
      </section>

      <section className="section" id="experience">
        <div className="wrap">
          <p className="section-label">01 · Experience</p>
          <h2 className="section-title">Where I've worked</h2>
          <p className="section-intro">
            Two summers of internships so far: one testing AI systems the careful way, one
            building automation that people actually use every day.
          </p>
          <Experience />
        </div>
      </section>

      <section className="section" id="featured-projects">
        <div className="wrap">
          <p className="section-label">02 · Projects</p>
          <h2 className="section-title">Things I've built</h2>
          <p className="section-intro">
            Mostly hackathon projects that outlived the hackathon. These are the three I'd show
            you first.
          </p>
          <div className="project-grid">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
          <div className="section-footer-cta">
            <Link to="/project" className="btn-ghost">
              See all projects <FiArrowRight />
            </Link>
          </div>
        </div>
      </section>

      <section className="section" id="skills">
        <div className="wrap">
          <p className="section-label">03 · Skills</p>
          <h2 className="section-title">What I work with</h2>
          <p className="section-intro">
            Most of this comes from coursework, internships, and too many late-night builds.
            Heaviest on Python, TypeScript, and the AI tooling around LLMs.
          </p>
          <Skills />
        </div>
      </section>

      <section className="section" id="contact">
        <div className="wrap">
          <div className="contact-panel">
            <p className="section-label">04 · Contact</p>
            <h2 className="section-title">Say hi</h2>
            <p>
              I graduate in December 2026 and I'm always up for talking about AI evaluation,
              hackathons, or whatever you're building. If you're hiring, or just want to trade
              project ideas, my inbox is open.
            </p>
            <div className="cta-group">
              <a href={EMAIL_URL} className="btn-solid">
                <FiMail /> {EMAIL}
              </a>
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost"
              >
                <FaLinkedinIn /> LinkedIn
              </a>
              <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" className="btn-ghost">
                <AiFillGithub /> GitHub
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
