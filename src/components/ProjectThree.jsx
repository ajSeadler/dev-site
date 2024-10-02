import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import "../styles/Projects.css";

function ProjectThree() {
  const [inView, setInView] = useState(false);
  const projectRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );
    if (projectRef.current) observer.observe(projectRef.current);
    return () => {
      if (projectRef.current) observer.unobserve(projectRef.current);
    };
  }, []);

  return (
    <div className="project-two-section" ref={projectRef}>
      
      <motion.div
        className="second-project-info-card"
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 1 }}
      >
        <h2 className="project-title">Skate Tracker</h2>
        <p className="project-description">
    This full-stack application, developed using <span className="highlight">PostgreSQL</span>, <span className="highlight">Express</span>, <span className="highlight">Node.js</span>, <span className="highlight">React</span>, and <span className="highlight">CSS</span>, allows users to sign up and create profiles where they can add tricks from a central tricks database. Users can track their progress, marking tricks as either mastered or still learning, earning points for mastering tricks and keeping a detailed record of all their activities. Users may also set personalized goals with target dates.
</p>

        <a href="https://discostrangermusic.com" className="project-link" target="_blank" rel="noopener noreferrer">
          View Source Code
        </a>
      </motion.div>

      <div className="image-container-projects second-project-images">
        <motion.div
          className="project-wrapper"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 1.5 }}
        >
          <div className="second-project-image">
            <img src="/tricks.png" alt="Disco Stranger Site" />
          </div>
        </motion.div>

        <motion.div
          className="project-wrapper"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 1.5 }}
        >
          <div className="second-project-image">
            <img src="/prof.png" alt="Booking" />
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default ProjectThree;
