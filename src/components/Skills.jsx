import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import "../styles/Skills.css";

function Skills() {
  const [inView, setInView] = useState(false);
  const skillsRef = useRef(null);

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
    "JavaScript", "React.js", "Node.js", "Express.js",
    "HTML5 & CSS3", "PostgreSQL", "MongoDB", 
    "Git & GitHub", "RESTful APIs", "Responsive Design",
    "Framer Motion", "CI/CD"
  ];

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
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {skill}
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export default Skills;
