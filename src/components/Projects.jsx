import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion"; // Import necessary hooks
import "../styles/Projects.css"; // Ensure to create this CSS file

function Projects() {
  // State to track visibility
  const [inView, setInView] = useState(false);
  const projectsRef = useRef(null);

  // Intersection Observer to detect when the projects section is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        } else {
          setInView(false);
        }
      },
      { threshold: 0.1 } // Trigger when 10% of the component is in view
    );

    if (projectsRef.current) {
      observer.observe(projectsRef.current);
    }

    return () => {
      if (projectsRef.current) {
        observer.unobserve(projectsRef.current);
      }
    };
  }, []);

  return (
    <div id="projects" className="projects-section" ref={projectsRef}>
      {/* First Project */}
      <div className="main-title-container">
        <motion.div
          className="line"
          initial={{ width: 0 }}
          animate={inView ? { width: "100%" } : { width: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
        <motion.h1
          className="main-title"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 1 }}
        >
          Projects
        </motion.h1>
        <motion.div
          className="line"
          initial={{ width: 0 }}
          animate={inView ? { width: "100%" } : { width: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
      </div>

      <motion.div
        className="project-info-card"
        initial={{ opacity: 0, y: 50 }} // Start hidden and below
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 1 }} // Increased transition duration
      >
        <h2 className="project-title">Circle of Fifths Viewer</h2>
        <p className="project-description">
          The Circle of Fifths Viewer is a web application I developed to help users visualize and understand the relationships between musical keys. This interactive tool features an intuitive interface that allows users to explore the Circle of Fifths, view chord progressions within the key they choose, and easily transpose music between different keys. Built with{" "}
          <span className="highlight">JavaScript</span>,{" "}
          <span className="highlight">React</span>, and{" "}
          <span className="highlight">CSS</span>, this project showcases my skills in front-end development, object-oriented programming, and my passion for music theory.
        </p>
        <a href="https://circleoffifthsviewer.com" className="project-link" target="_blank" rel="noopener noreferrer">
          View Site
        </a>
      </motion.div>

      <div className="image-container-projects">
        {/* First Image */}
        <motion.div
          className="project-wrapper"
          initial={{ opacity: 0, y: -50 }} // Start hidden and from above
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
          transition={{ duration: 1.5 }} // Increased transition duration
        >
          <div className="project-image">
            <img src="/2.png" alt="Home Page" />
          </div>
          <div className="text-container-projects">
            <h3 className="project-subtitle">Easy Navigation</h3>
            <p className="project-text">
              The homepage offers a simple and intuitive layout, allowing users to quickly explore the Circle of Fifths and access features.
            </p>
          </div>
        </motion.div>

        {/* Second Image */}
        <motion.div
          className="project-wrapper"
          initial={{ opacity: 0, y: 50 }} // Start hidden and from below
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 1.5 }} // Increased transition duration
        >
          <div className="project-image">
            <img src="/3.png" alt="Scale Selection" />
          </div>
          <div className="text-container-projects">
            <h3 className="project-subtitle">Circle of Fifths & Scale Selection</h3>
            <p className="project-text">
              Users can interact with the Circle of Fifths chart to select a key and corresponding scale, providing an educational tool for exploring music theory.
            </p>
          </div>
        </motion.div>

        {/* Third Image */}
        <motion.div
          className="project-wrapper"
          initial={{ opacity: 0, y: -50 }} // Start hidden and from above
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
          transition={{ duration: 1.5 }} // Increased transition duration
        >
          <div className="project-image">
            <img src="/4.png" alt="Scale Display" />
          </div>
          <div className="text-container-projects">
            <h3 className="project-subtitle">Chord & Interval Display</h3>
            <p className="project-text">
              Based on the selected key and scale, the app displays chords and intervals, giving users a detailed breakdown of musical components.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Second Project */}

<motion.div
  className="second-project-info-card"
  initial={{ opacity: 0, y: 50 }} // Start hidden and below
  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
  transition={{ duration: 1 }} // Increased transition duration
>
  <h2 className="project-title">Disco Stranger</h2>
  <p className="project-description">
    The website is the official platform for my band, Disco Stranger, featuring a vibrant parallax design with a merch section and a booking form. Built with <span className="highlight">JavaScript</span>, <span className="highlight">React</span>, and <span className="highlight">CSS</span>, venues can easily send us gig requests through the website, while fans can explore our latest releases and browse merchandise directly from the site.
  </p>
  <a href="https://discostrangermusic.com" className="project-link" target="_blank" rel="noopener noreferrer">
    View Site
  </a>
</motion.div>

{/* Disco Stranger Images Side by Side */}
<div className="image-container-projects second-project-images">
  <motion.div
    className="project-wrapper"
    initial={{ opacity: 0, y: 30 }} // Start hidden and below
    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
    transition={{ duration: 1.5 }} // Increased transition duration
  >
    <div className="second-project-image">
      <img src="/disco-stranger-site.png" alt="Disco Stranger Site" />
    </div>
  </motion.div>

  {/* Add second image here */}
  <motion.div
    className="project-wrapper"
    initial={{ opacity: 0, y: 30 }} // Start hidden and below
    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
    transition={{ duration: 1.5 }} // Increased transition duration
  >
    <div className="second-project-image">
      <img src="/booking.png" alt="Booking" />
    </div>
  </motion.div>
</div>

      </div>
  );
}

export default Projects;
