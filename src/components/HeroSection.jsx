import React from "react";
import Projects from "./Projects";
import { motion } from "framer-motion"; // Import framer-motion
import "../styles/HeroSection.css";

function HeroSection() {
  // Animation Variants
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

  const scrollVariant = {
    hidden: { opacity: 0, y: -10 },
    visible: {
      opacity: 1,
      y: [0, -10, 0], // Smooth up and down movement
      transition: {
        duration: 1.5,
        ease: "easeInOut",
        repeat: Infinity, // Infinite loop for continuous animation
        repeatType: "loop",
      },
    },
  };

  return (
    <>
      <div className="hero-section">
        <div className="text-container-hero">
          <motion.h2
            className="greeting"
            variants={textVariant}
            initial="hidden"
            animate="visible"
            custom={1} // Custom prop for staggered animation
          >
            Welcome! I am
          </motion.h2>
          <motion.h1
            className="name"
            variants={textVariant}
            initial="hidden"
            animate="visible"
            custom={2}
          >
            Anthony Seadler
          </motion.h1>
          <motion.h3
            className="job-title"
            variants={textVariant}
            initial="hidden"
            animate="visible"
            custom={3}
          >
            Full Stack Developer <br /> Network Technician
          </motion.h3>
          <motion.p
            className="description"
            variants={textVariant}
            initial="hidden"
            animate="visible"
            custom={4}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
            suscipit natus voluptates et neque fugiat ipsum aperiam eveniet
            voluptatum officia labore, voluptas ullam, doloribus pariatur eaque
            possimus atque impedit incidunt?
          </motion.p>
        </div>
        <motion.div
          className="image-container"
          variants={imageVariant}
          initial="hidden"
          animate="visible"
        >
          <img src="portrait.jpg" alt="Anthony Seadler" className="profile-image" />
        </motion.div>

        {/* Scroll Indicator */}
        <div
          className="scroll-indicator"
          variants={scrollVariant}
          initial="hidden"
          animate="visible"
        >
          <svg
            className="scroll-arrow"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="white"
            width="30px"
            height="30px"
          >
            <path d="M12 16.5l-6-6h12z" />
          </svg>
          <p className="scroll-text">Scroll Down</p>
        </div>
      </div>

      
    </>
  );
}

export default HeroSection;
