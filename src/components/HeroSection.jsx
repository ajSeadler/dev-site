import React from "react";
import "../styles/HeroSection.css"; // Make sure to create this CSS file

function HeroSection() {
  return (
    <div className="hero-section">
      <div className="text-container">
        <h2 className="greeting">Hello, I'm</h2>
        <h1 className="name">Your Name</h1>
        <h3 className="job-title">Your Job Title</h3>
        <p className="description">
          A brief description about you. Talk about your skills, interests, or
          what you do.
        </p>
      </div>
      <div className="image-container">
        <img src="portrait.jpg" alt="Your Name" className="profile-image" />
      </div>
    </div>
  );
}

export default HeroSection;
