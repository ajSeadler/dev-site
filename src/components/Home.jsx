import React from "react";
import HeroSection from "./HeroSection";
import Projects from "./Projects"; 
import Skills from "./Skills";
import Contact from "./Contact";

function Home() {
  return (
    <div>
      <HeroSection />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default Home;
