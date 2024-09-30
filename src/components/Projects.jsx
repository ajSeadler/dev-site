import React from "react";
import "../styles/Projects.css"; // Ensure to create this CSS file

function Projects() {
  return (
    <div className="projects-section">
      <h1 className="main-title">My Projects</h1>
      <div className="project-info-card">
        <h2 className="project-title">Circle of Fifths Viewer</h2>
        <p className="project-description">
        The Circle of Fifths Viewer is a web application I developed to help users visualize and understand the relationships between musical keys. This interactive tool features an intuitive interface that allows users to explore the Circle of Fifths, view chord progressions within the key they choose, and easily transpose music between different keys. Built with <span className="highlight">JavaScript</span>, <span className="highlight">React</span>, and <span className="highlight">CSS</span>, this project showcases my skills in front-end development and my passion for music theory.
        </p>
        <a href="#more-info" className="project-link">View More</a>
      </div>
      <div className="image-container-projects">
        {/* First Project */}
        <div className="project-wrapper">
          <div className="project-image">
            <img src="/2.png" alt="Project Screenshot 1" />
          </div>
          <div className="text-container-projects">
            <h3 className="project-subtitle">Project Overview</h3>
            <p className="project-text">
              A brief overview of the project, highlighting its main features and technologies used.
            </p>
          </div>
        </div>

        {/* Second Project */}
        <div className="project-wrapper">
          <div className="project-image">
            <img src="/3.png" alt="Project Screenshot 2" />
          </div>
          <div className="text-container">
            <h3 className="project-subtitle">Key Features</h3>
            <p className="project-text">
              Discuss key features of the project that make it stand out, including integrations and usability.
            </p>
          </div>
        </div>

        {/* Third Project */}
        <div className="project-wrapper">
          <div className="project-image">
            <img src="/4.png" alt="Project Screenshot 3" />
          </div>
          <div className="text-container">
            <h3 className="project-subtitle">Additional Information</h3>
            <p className="project-text">
              Further insights about the project, such as challenges faced and lessons learned.
            </p>
          </div>
        </div>
      </div>

      
    </div>
  );
}

export default Projects;
