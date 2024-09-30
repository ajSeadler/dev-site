import React from "react";
import "../styles/Projects.css"; // Ensure to create this CSS file

function Projects() {
  return (
    <div className="projects-section">
      <div className="main-title-container">
    <h1 className="main-title">Projects</h1>
  </div>
      <div className="project-info-card">
        <h2 className="project-title">Circle of Fifths Viewer</h2>
        <p className="project-description">
        The Circle of Fifths Viewer is a web application I developed to help users visualize and understand the relationships between musical keys. This interactive tool features an intuitive interface that allows users to explore the Circle of Fifths, view chord progressions within the key they choose, and easily transpose music between different keys. Built with <span className="highlight">JavaScript</span>, <span className="highlight">React</span>, and <span className="highlight">CSS</span>, this project showcases my skills in front-end development, object oriented programming, and my passion for music theory.
        </p>
        <a href="https://circleoffifthsviewer.com" className="project-link" target="_blank" rel="noopener noreferrer">View Site</a>

      </div>
      <div className="image-container-projects">
        {/* First Image */}
        <div className="project-wrapper">
          <div className="project-image">
            <img src="/2.png" alt="Home Page" />
          </div>
          <div className="text-container-projects">
            <h3 className="project-subtitle">Easy Navigation</h3>
            <p className="project-text">
            The homepage offers a simple and intuitive layout, allowing users to quickly explore the Circle of Fifths and access features.
            </p>
          </div>
        </div>

        {/* Second Image */}
        <div className="project-wrapper">
          <div className="project-image">
            <img src="/3.png" alt="Scale Selection" />
          </div>
          <div className="text-container-projects">
            <h3 className="project-subtitle">Circle of Fifths & Scale Selection</h3>
            <p className="project-text">
            Users can interact with the Circle of Fifths chart to select a key and corresponding scale, providing an educational tool for exploring music theory.
            </p>
          </div>
        </div>

        {/* Third Image */}
        <div className="project-wrapper">
          <div className="project-image">
            <img src="/4.png" alt="Scale Display" />
          </div>
          <div className="text-container-projects">
            <h3 className="project-subtitle">Chord & Interval Display</h3>
            <p className="project-text">
            Based on the selected key and scale, the app displays chords and intervals, giving users a detailed breakdown of musical components.
            </p>
          </div>
        </div>
      </div>

      
    </div>
  );
}

export default Projects;
