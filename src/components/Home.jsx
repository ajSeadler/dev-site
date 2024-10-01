import React from "react";
import HeroSection from "./HeroSection";
import Projects from "./Projects"; 
import Skills from "./Skills";// Make sure the path is correct

function Home() {
  return (
    <div>
      <HeroSection />
      <Skills />
      <Projects />
    </div>
  );
}

export default Home;
