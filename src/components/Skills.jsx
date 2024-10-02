import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import "../styles/Skills.css";

function Skills() {
  const [inView, setInView] = useState(false);
  const [showModal, setShowModal] = useState(false);  // State to show/hide modal
  const [randomFact, setRandomFact] = useState("");   // State to store the random fact
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

  // Skills list
  const skills = [
    "JavaScript", "React.js", "Node.js", "Express.js",
    "HTML5 & CSS3", "PostgreSQL", "MongoDB", 
    "Git & GitHub", "RESTful APIs", "Responsive Design",
    "Framer Motion", "CI/CD"
  ];

  // Random position for skill bubbles
  const getRandomPosition = () => {
    return {
      x: `${Math.random() * 200 - 100}%`,  // Random X position between -100% and 100%
      y: `${Math.random() * 200 - 100}%`,  // Random Y position between -100% and 100%
      scale: Math.random() * 0.5 + 0.8,     // Random scale between 0.8 and 1.3
      opacity: Math.random() * 0.5 + 0.5   // Random opacity between 0.5 and 1
    };
  };

  // Function to fetch a random fact
  const fetchRandomFact = async () => {
    try {
      const response = await fetch('https://uselessfacts.jsph.pl/random.json?language=en');
      const data = await response.json();
      setRandomFact(data.text);  // Set the random fact from the API response
    } catch (error) {
      setRandomFact("Sorry, couldn't fetch a fact right now.");
    }
  };

  // Function to handle skill click and show the modal
  const handleSkillClick = () => {
    fetchRandomFact();  // Fetch random fact when a skill is clicked
    setShowModal(true);  // Show the modal
  };

  // Close modal
  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div id="skills" className="skills-section" ref={skillsRef}>
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
          Skills
        </motion.h1>
        <motion.div
          className="line"
          initial={{ width: 0 }}
          animate={inView ? { width: "100%" } : { width: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
      </div>

      <motion.div
        className="skills-list"
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 1 }}
      >
        {skills.map((skill, index) => (
          <motion.div
            className="skill-bubble"
            key={index}
            onClick={handleSkillClick}
            initial={{
              opacity: 0,
              scale: 0.8,
              x: `${Math.random() * 200 - 100}%`,
              y: `${Math.random() * 200 - 100}%`
            }}
            animate={inView ? { opacity: 1, scale: 1, x: 0, y: 0 } : { opacity: 0, scale: 0.8, x: `${Math.random() * 200 - 100}%`, y: `${Math.random() * 200 - 100}%` }}
            transition={{
              opacity: { duration: 0.5 },
              scale: { type: "spring", stiffness: 150, damping: 20 },
              x: { type: "spring", stiffness: 80, damping: 20 },
              y: { type: "spring", stiffness: 80, damping: 20 },
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {skill}
          </motion.div>
        ))}
      </motion.div>

      {/* Modal for displaying the random fact */}
      {showModal && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2>Random Fact</h2>
            <p>{randomFact}</p>
            <button className="close-modal-btn" onClick={closeModal}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Skills;
