import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import "../styles/Projects.css";

function ProjectTwo() {
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
        <h2 className="project-title">Disco Stranger</h2>
        <p className="project-description">
    The website is the official platform for my band, Disco Stranger, featuring a vibrant parallax design with a merch section and a booking form. Built with <span className="highlight">JavaScript</span>, <span className="highlight">React</span>, and <span className="highlight">CSS</span>, venues can easily send us gig requests through the website, while fans can explore our latest releases and browse merchandise directly from the site.
  </p>
        <a href="https://discostrangermusic.com" className="project-link" target="_blank" rel="noopener noreferrer">
          View Site
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
            <img src="/disco-stranger-site.png" alt="Disco Stranger Site" />
          </div>
          <div className="text-container-projects" style={{width:'100%', marginTop:'5%'}}>
  <h3 className="project-subtitle">Dynamic and Engaging Homepage</h3>
  <p className="project-text">The homepage captivates visitors with its vibrant parallax design, providing easy access to the band's latest releases, upcoming gigs, and merchandise, all in one intuitive layout.</p>
</div>
        </motion.div>

        <motion.div
          className="project-wrapper"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 1.5 }}
        >
          <div className="second-project-image">
            <img src="/booking.png" alt="Booking" />
          </div>
          <div className="text-container-projects" style={{width:'100%', marginTop:'5%'}}>
  <h3 className="project-subtitle">Streamlined Booking System</h3>
  <p className="project-text">The streamlined booking system allows venues to easily submit gig requests through a straightforward form, making it simple for event organizers to get in touch with the band.</p>
</div>
        </motion.div>
      </div>
    </div>
  );
}

export default ProjectTwo;
