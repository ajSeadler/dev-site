import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { FaGlobe } from "react-icons/fa";
import "../styles/Projects.css";

function ProjectOne() {
  const [inView, setInView] = useState(false);
  const projectRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Trigger animation only the first time it comes into view
        if (entry.isIntersecting && !inView) {
          setInView(true);
        }
      },
      { threshold: 0.1 }
    );

    if (projectRef.current) observer.observe(projectRef.current);
    return () => {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      if (projectRef.current) observer.unobserve(projectRef.current);
    };
  }, [inView]); // Add inView as a dependency

  return (
    <div className="project-one-section" ref={projectRef}>
      {/* <div className="main-title-container">
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
      </div> */}
      <motion.div
        className="project-info-card"
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 1 }}
      >
        <h2 className="project-title">Circle of Fifths Viewer</h2>
        <p className="project-description">
          The Circle of Fifths Viewer is a web application I developed to help
          users visualize and understand the relationships between musical keys.
          This interactive tool features an intuitive interface that allows
          users to explore the Circle of Fifths, view chord progressions within
          the key they choose, and easily transpose music between different
          keys. Built with <span className="highlight">JavaScript</span>,{" "}
          <span className="highlight">React</span>, and{" "}
          <span className="highlight">CSS</span>, this project showcases my
          skills in front-end development, object-oriented programming, and my
          passion for music theory.
        </p>
        <a
          href="https://circleoffifthsviewer.com"
          className="project-link"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          View Site
          <FaGlobe
            style={{
              marginLeft: "8px",
              fontSize: "1.5rem", // Adjust size as needed
              verticalAlign: "middle",
            }}
          />
        </a>
      </motion.div>

      <div className="image-container-projects">
        <motion.div
          className="project-wrapper"
          initial={{ opacity: 0, y: -50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
          transition={{ duration: 1.5 }}
        >
          <div className="project-image">
            <img src="/2.png" alt="Home Page" />
          </div>
          <div className="text-container-projects">
            <h3 className="project-subtitle">Easy Navigation</h3>
            <p className="project-text">
              The homepage offers a simple and intuitive layout, allowing users
              to quickly explore the Circle of Fifths and access features.
            </p>
          </div>
        </motion.div>

        <motion.div
          className="project-wrapper"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 1.5 }}
        >
          <div className="project-image">
            <img src="/3.png" alt="Scale Selection" />
          </div>
          <div className="text-container-projects">
            <h3 className="project-subtitle">
              Circle of Fifths & Scale Selection
            </h3>
            <p className="project-text">
              Users can interact with the Circle of Fifths chart to select a key
              and corresponding scale, providing an educational tool for
              exploring music theory.
            </p>
          </div>
        </motion.div>
        <motion.div
          className="project-wrapper"
          initial={{ opacity: 0, y: -50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
          transition={{ duration: 1.5 }}
        >
          <div className="project-image">
            <img src="/4.png" alt="Scale Display" />
          </div>
          <div className="text-container-projects">
            <h3 className="project-subtitle">Chord & Interval Display</h3>
            <p className="project-text">
              Based on the selected key and scale, the app displays chords and
              intervals, giving users a detailed breakdown of musical
              components.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default ProjectOne;
