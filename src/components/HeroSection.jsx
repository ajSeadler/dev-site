import React from "react";
import { motion } from "framer-motion";
import "../styles/HeroSection.css";

function HeroSection() {
  // Animation Variants for the greeting
  const textVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6, ease: "easeInOut" },
    }),
  };

  // Terminal-like typing effect for greeting only
  const terminalText = "Hii! My name is:";
  const [displayedText, setDisplayedText] = React.useState(""); // Initialize state

  React.useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < terminalText.length) {
        setDisplayedText((prev) => prev + terminalText.charAt(index)); // Use charAt to get the specific character
        index++;
      } else {
        clearInterval(interval);
      }
    }, 100); // Adjust typing speed (in ms)

    return () => clearInterval(interval); // Clean up on unmount
  }, []); // Dependency array ensures effect runs only once

  return (
    <div className="hero-section" id="about">
      <div className="text-container-hero">
        <motion.h2
          className="greeting"
          initial="hidden"
          animate="visible"
          variants={textVariant}
          custom={1} // Custom prop for staggered animation
        >
          {displayedText} {/* Display animated text */}
          <span className="blinking-cursor"></span> {/* Blinking cursor */}
        </motion.h2>
        <motion.h1
          className="name"
          initial="hidden"
          animate="visible"
          variants={textVariant}
          custom={2} // Custom prop for staggered animation
        >
          Anthony Seadler
        </motion.h1>
        <motion.h3
          className="job-title"
          initial="hidden"
          animate="visible"
          variants={textVariant}
          custom={3} // Custom prop for staggered animation
        >
          Full Stack Developer <br /> Oklahoma City, OK
        </motion.h3>
        <motion.p
          className="description"
          initial="hidden"
          animate="visible"
          variants={textVariant}
          custom={4}
        >
          Passionate developer specializing in modern web
          technologies/practices. Here you will find a bit more information
          about me and the skills I possess. I work with tools like PostgreSQL
          and Express.js to create reliable backends, while also focusing on
          building clean and intuitive front-end experiences.
        </motion.p>

        {/* Fancy Resume Button */}
        <div className="button-group">
          <motion.a
            href="/resume.pdf"
            className="resume-button"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1, duration: 1 }}
          >
            Resume
          </motion.a>
          <motion.a
            href="https://github.com/ajSeadler" // Replace with your GitHub link
            className="resume-button"
            target="_blank"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.2, duration: 1 }}
          >
            GitHub
          </motion.a>
          <motion.a
            href="https://linkedin.com/in/anthony-seadler" // Replace with your LinkedIn link
            className="resume-button"
            target="_blank"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.4, duration: 1 }}
          >
            LinkedIn
          </motion.a>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
