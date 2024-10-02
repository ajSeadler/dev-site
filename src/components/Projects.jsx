import React from "react";
import ProjectOne from "./ProjectOne";
import ProjectTwo from "./ProjectTwo";
import ProjectThree from "./ProjectThree";
import "../styles/Projects.css";

function Projects() {
  return (
    <div id="projects" className="projects-section">
      <ProjectOne />
      <ProjectThree />
      <ProjectTwo />
    </div>
  );
}

export default Projects;
