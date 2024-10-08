import React from "react";
import HeroSection from "./HeroSection";
import Projects from "./Projects";
import Skills from "./Skills";
import Contact from "./Contact";
import About from "./About";

function Home() {
  return (
    <div>
      <HeroSection />
      <Skills />
      <Projects />
      <About />
      <Contact />
    </div>
  );
}

export default Home;
