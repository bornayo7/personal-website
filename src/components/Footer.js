import React from "react";
import { Link } from "react-router-dom";
import logo from "../Assets/logo.png";
import SocialLinks from "./SocialLinks";
import { REPO_URL } from "../data/links";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer-grid">
          <div className="footer-left">
            <img src={logo} alt="Yash Baruah" className="footer-logo" />
            <p>CS senior at UT Dallas, building AI-flavored software.</p>
          </div>
          <div className="footer-links">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/project">Projects</Link>
            <Link to="/resume">Resume</Link>
          </div>
          <SocialLinks />
        </div>
        <div className="footer-bottom">
          <span>© {year} Yash Baruah</span>
          <span>
            Built with React ·{" "}
            <a href={REPO_URL} target="_blank" rel="noopener noreferrer">
              source on GitHub
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
