import { useState, useEffect, useMemo } from "react";
import "../styles/HeroSection.css";

function HeroSection() {
  const [displayedTitle, setDisplayedTitle] = useState("");
  const [titleIndex, setTitleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  // Stable array of job titles using useMemo
  const jobTitles = useMemo(
    () => [
      "Full Stack Developer",
      "Network Enthusiast",
      "Musician",
      "All things tech",
    ],
    []
  );

  useEffect(() => {
    const typingSpeed = isDeleting ? 50 : 100;
    const pauseTime = 1000; // Pause after typing out a full title

    const handleTyping = () => {
      const currentTitle = jobTitles[titleIndex];

      if (!isDeleting && charIndex < currentTitle.length) {
        // Typing out the title
        setDisplayedTitle(currentTitle.slice(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);
      } else if (isDeleting && charIndex > 0) {
        // Backspacing the title
        setDisplayedTitle(currentTitle.slice(0, charIndex - 1));
        setCharIndex((prev) => prev - 1);
      } else if (!isDeleting && charIndex === currentTitle.length) {
        // Pause before starting to delete
        setTimeout(() => setIsDeleting(true), pauseTime);
      } else if (isDeleting && charIndex === 0) {
        // Move to the next title after deleting
        setIsDeleting(false);
        setTitleIndex((prev) => (prev + 1) % jobTitles.length);
      }
    };

    const typingInterval = setInterval(handleTyping, typingSpeed);

    return () => clearInterval(typingInterval);
  }, [charIndex, isDeleting, jobTitles, titleIndex]);

  return (
    <div className="hero-section" id="about">
      <h1 className="name">Anthony Seadler</h1>
      <h2 className="job-title">
        {displayedTitle}
        <span className="blinking-cursor"></span>
      </h2>
    </div>
  );
}

export default HeroSection;
