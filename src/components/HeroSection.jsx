import React from "react";
import Projects from "./Projects";
import "../styles/HeroSection.css";

function HeroSection() {
  return (
    <>
    <div className="hero-section">
      <div className="text-container-hero">
        <h2 className="greeting">Welcome! I am</h2>
        <h1 className="name">Anthony Seadler</h1>
        <h3 className="job-title">
          Full Stack Web Developer <br /> Network Technician
        </h3>
        <p className="description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse suscipit natus voluptates et neque fugiat ipsum aperiam eveniet voluptatum officia labore, voluptas ullam, doloribus pariatur eaque possimus atque impedit incidunt?
        </p>
      </div>
      <div className="image-container">
        <img src="portrait.jpg" alt="Your Name" className="profile-image" />
      </div>
      <div className="scroll-indicator">
      <svg
        className="scroll-arrow"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="white" // Change the color if needed
        width="30px"
        height="30px"
      >
        <path d="M12 16.5l-6-6h12z" />
      </svg>
      <p className="scroll-text">Scroll Down</p>
    </div>
      </div>
      
      <Projects />
    
    </>
  );
}

export default HeroSection;
