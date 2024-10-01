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

  const imageVariant = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { delay: 1.5, duration: 0.8, ease: "easeInOut" },
    },
  };

  // Terminal-like typing effect for greeting only
  const terminalText = "Weelcome! My name is:";
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
    }, 50); // Adjust typing speed (in ms)

    return () => clearInterval(interval); // Clean up on unmount
  }, []); // Dependency array ensures effect runs only once

  return (
    <div className="hero-section">
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
          Full Stack Developer <br /> Network Technician
        </motion.h3>
        <motion.p
          className="description"
          initial="hidden"
          animate="visible"
          variants={textVariant}
          custom={4} // Custom prop for staggered animation
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse suscipit natus voluptates et neque fugiat ipsum aperiam eveniet voluptatum officia labore, voluptas ullam, doloribus pariatur eaque possimus atque impedit incidunt?
        </motion.p>
      </div>
      <motion.div
        className="image-container"
        variants={imageVariant}
        initial="hidden"
        animate="visible"
      >
        <div className="glow"></div>
        <img src="portrait.jpg" alt="Anthony Seadler" className="profile-image" />
      </motion.div>
    </div>
  );
}

export default HeroSection;
