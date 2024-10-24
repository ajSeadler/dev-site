import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import "../styles/Skills.css";
import LoadingSpinner from "./LoadingSpinner"; // Adjust the import path according to your project structure

function Skills() {
  const [inView, setInView] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [randomFact, setRandomFact] = useState("");
  const [loading, setLoading] = useState(false);
  const skillsRef = useRef(null);

  // Intersection observer logic for animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => {
      if (skillsRef.current) {
        observer.unobserve(skillsRef.current);
      }
    };
  }, []);

  const skills = [
    "JavaScript",
    "React.js",
    "Node.js",
    "Express.js",
    "HTML5 & CSS3",
    "PostgreSQL",
    "MongoDB",
    "Python",
    "Git & GitHub",
    "RESTful APIs",
    "Responsive Design",
    "CI/CD",
  ];

  // Function to fetch a random fact
  const fetchRandomFact = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        "https://uselessfacts.jsph.pl/random.json?language=en"
      );
      const data = await response.json();
      setRandomFact(data.text);
    } catch (error) {
      setRandomFact("Sorry, couldn't fetch a fact right now.");
    } finally {
      setLoading(false);
    }
  };

  const handleSkillClick = () => {
    fetchRandomFact();
    setShowModal(true);
  };

  const closeModal = () => setShowModal(false);

  return (
    <div id="skills" className="skills-section" ref={skillsRef}>
      <motion.div
        className="main-title-container"
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.6 }} // Simpler easing and duration
      >
        <h1 className="main-title">Skills</h1>
      </motion.div>

      <motion.div
        className="skills-list"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.6 }} // Simplified animation
      >
        {skills.map((skill, index) => (
          <motion.div
            className="skill-bubble"
            key={index}
            onClick={handleSkillClick}
            whileHover={{ scale: 1.05 }} // Hover effect only
            whileTap={{ scale: 0.95 }} // Simple tap effect
          >
            {skill}
          </motion.div>
        ))}
      </motion.div>

      {showModal && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2>Random Fact</h2>
            {loading && <LoadingSpinner />}
            <p>{randomFact}</p>
            <button className="close-modal-btn" onClick={closeModal}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Skills;
