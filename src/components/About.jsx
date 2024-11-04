import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FaBriefcase } from "react-icons/fa";
import aboutStyles from "../styles/About.module.css";

const About = () => {
  const [activeTab, setActiveTab] = useState("about");

  // Ref for in view animations
  const aboutRef = useRef(null);
  const isInView = useInView(aboutRef, { once: true });

  // Handlers to switch between tabs
  const switchTab = (tab) => {
    setActiveTab(tab);
  };

  const animationVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className={aboutStyles.profilePage}>
      {/* Profile Info */}
      <div className={aboutStyles.profileInfo}>
        {/* Profile Picture */}
        <motion.div
          className={aboutStyles.profilePictureContainer}
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <img
            src="/portrait.jpg"
            alt="Profile"
            className={aboutStyles.profilePicture}
          />
        </motion.div>

        {/* Name and Bio */}
        <div className={aboutStyles.profileDetails}>
          <h1 className={aboutStyles.profileName}>Anthony Seadler</h1>
          <p className={aboutStyles.profileBio}>
            Fullstack Developer | Network Enthusiast | Musician
          </p>
        </div>
      </div>

      {/* Navigation Bar */}
      <div className={aboutStyles.navBar}>
        <ul className={aboutStyles.navLinks}>
          <li
            className={activeTab === "about" ? aboutStyles.active : ""}
            onClick={() => switchTab("about")}
          >
            <FaBriefcase style={{ marginRight: "8px" }} />
            About
          </li>
        </ul>
      </div>

      {/* Content based on active tab */}
      <div className={aboutStyles.aboutSection}>
        {activeTab === "about" && (
          <>
            <motion.div
              className={aboutStyles.infoBlock}
              ref={aboutRef}
              variants={animationVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              transition={{ duration: 0.6 }}
            >
              <h3 className={aboutStyles.infoTitle}>Work and Education</h3>

              <div className={aboutStyles.educationItem}>
                <h4 className={aboutStyles.institution}>
                  Southern Nazarene University
                </h4>
                <p className={aboutStyles.degree}>
                  Bachelors of Science in Cybersecurity (Expected Graduation:
                  December 2026)
                </p>
                <p className={aboutStyles.location}>Bethany, Oklahoma</p>
              </div>

              <div className={aboutStyles.educationItem}>
                <h4 className={aboutStyles.institution}>
                  Fullstack Academy (University of Oklahoma)
                </h4>
                <p className={aboutStyles.degree}>
                  Full Stack Immersive Web Development Boot Camp | June 2023 -
                  December 2023
                </p>
                <p className={aboutStyles.location}>
                  Online, Partnered with University of Oklahoma
                </p>
              </div>

              <div className={aboutStyles.educationItem}>
                <h4 className={aboutStyles.institution}>
                  University of Louisville
                </h4>
                <p className={aboutStyles.degree}>
                  60 Credit Hours in Communications (2015-2017)
                </p>
                <p className={aboutStyles.location}>Louisville, Kentucky</p>
              </div>
            </motion.div>

            <motion.div
              className={aboutStyles.infoBlock}
              ref={aboutRef}
              variants={animationVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              transition={{ duration: 0.6 }}
            >
              <h3>Location</h3>
              <p>Lives in Oklahoma City, OK</p>
              <p>From Louisville, KY</p>
            </motion.div>

            <motion.div
              className={aboutStyles.infoBlock}
              ref={aboutRef}
              variants={animationVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              transition={{ duration: 0.6 }}
            >
              <h3>Contact Information</h3>
              <p>
                <FontAwesomeIcon
                  icon={faEnvelope}
                  style={{ color: "#ff496c" }}
                />{" "}
                anthonyseadler@gmail.com
              </p>
              <p>
                <a
                  href="https://github.com/ajSeadler"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: "none" }}
                >
                  <FontAwesomeIcon
                    icon={faGithub}
                    style={{ color: "#ff496c" }}
                  />{" "}
                  GitHub
                </a>
              </p>
              <p>
                <a
                  href="https://www.linkedin.com/in/anthony-seadler"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: "none" }}
                >
                  <FontAwesomeIcon
                    icon={faLinkedin}
                    style={{ color: "#ff496c" }}
                  />{" "}
                  LinkedIn
                </a>
              </p>
            </motion.div>
          </>
        )}
      </div>
    </div>
  );
};

export default About;
