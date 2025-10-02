import React from "react";
import { FaGithub, FaEnvelope, FaLinkedin } from "react-icons/fa";
import "./style.css"

const SocialMediaButtons = () => {
  return (
    <div className = "socialMediaIcons">
      <a
        href="https://github.com/bonnichen"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub />
      </a>
      <a
        href="https://www.linkedin.com/in/bonnie-chen-/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedin />
      </a>
      <a href="mailto:chenbonnie.bc@gmail.com">
        <FaEnvelope />
      </a>
    </div>
  );
};

export default SocialMediaButtons;
