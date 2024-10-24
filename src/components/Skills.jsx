import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import "../styles/Skills.css";

function Skills() {
  const [inView, setInView] = useState(false);
  const [randomFact, setRandomFact] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const skillsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
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
    setLoading(true); // Set loading to true before the fetch
    try {
      const response = await fetch(
        "https://uselessfacts.jsph.pl/random.json?language=en"
      );
      const data = await response.json();
      setRandomFact(data.text); // Set the random fact from the API response
    } catch (error) {
      setRandomFact("Sorry, couldn't fetch a fact right now.");
    } finally {
      setLoading(false); // Reset loading state after fetching
    }
  };

  // Function to handle skill click and show the modal
  const handleSkillClick = () => {
    fetchRandomFact(); // Fetch random fact when a skill is clicked
    setShowModal(true); // Show the modal
  };

  // Close modal
  const closeModal = () => {
    setShowModal(false);
  };

  // Animation variants for the skill bubbles
  const skillVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.6, ease: "easeInOut" },
    }),
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

      {/* Skills List Animation */}
      <motion.div
        className="skills-list"
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
        }}
      >
        {skills.map((skill, index) => (
          <motion.div
            className="skill-bubble"
            key={index}
            variants={skillVariants}
            custom={index}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleSkillClick} // Add click handler
          >
            {skill}
          </motion.div>
        ))}
      </motion.div>

      {/* Modal for displaying the random fact */}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>Random Fact</h2>
            {loading ? (
              <div className="spinner"></div> // Spinner while loading
            ) : (
              <p>{randomFact}</p>
            )}
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
