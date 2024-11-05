import HeroSection from "./HeroSection";
import Projects from "./Projects";
import Skills from "./Skills";
import Contact from "./Contact";
import About from "./About";
import WidgetGrid from "./WidgetGrid";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home">
      <HeroSection />
      <WidgetGrid />

      <Skills />
      <Projects />
      <About />
      <Contact />
    </div>
  );
}

export default Home;
