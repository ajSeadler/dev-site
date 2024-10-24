import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import "../styles/Skills.css";

function Skills() {
  const [inView, setInView] = useState(false);
  const skillsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true); // Set inView to true once the section is in view
          observer.disconnect(); // Stop observing after entering the view
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
        {/* Line animation above and below the title */}
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
        animate={inView ? "visible" : "hidden"} // Trigger visibility based on inView state
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
            custom={index} // Staggering effect for each skill bubble
            whileHover={{ scale: 1.05 }} // Hover effect
            whileTap={{ scale: 0.95 }} // Tap effect
          >
            {skill}
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export default Skills;
