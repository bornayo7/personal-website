import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { GITHUB_URL, LINKEDIN_URL, EMAIL_URL } from "../data/links";

function SocialLinks() {
  return (
    <div className="icon-link-row">
      <a
        href={GITHUB_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub"
        className="icon-link"
      >
        <AiFillGithub />
      </a>
      <a
        href={LINKEDIN_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
        className="icon-link"
      >
        <FaLinkedinIn />
      </a>
      <a href={EMAIL_URL} aria-label="Email" className="icon-link">
        <FiMail />
      </a>
    </div>
  );
}

export default SocialLinks;
