import React, { useState } from "react";
import { motion, useInView } from "framer-motion";
import { Link } from "react-router-dom"; // Import Link for routing
import styles from "../styles/About.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FaBriefcase, FaPen } from "react-icons/fa";
import { useRef } from "react";

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
    <div className={styles.profilePage}>
      {/* <div className={styles.coverPhotoContainer}>
        <motion.img
          src="/colorado.JPG"
          alt="Cover Photo"
          className={styles.coverPhoto}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        />
      </div> */}
      {/* Profile Info */}
      <div className={styles.profileInfo}>
        {/* Profile Picture */}
        <motion.div
          className={styles.profilePictureContainer}
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <img
            src="/portrait.jpg"
            alt="Profile"
            className={styles.profilePicture}
          />
        </motion.div>

        {/* Name and Bio */}
        <div className={styles.profileDetails}>
          <h1 className={styles.profileName}>Anthony Seadler</h1>
          <p className={styles.profileBio}>
            Fullstack Developer | Network Enthusiast | Musician
          </p>
        </div>
      </div>

      {/* Navigation Bar */}
      <div className={styles.navBar}>
        <ul className={styles.navLinks}>
          <li
            className={activeTab === "about" ? styles.active : ""}
            onClick={() => switchTab("about")}
          >
            <FaBriefcase style={{ marginRight: "8px" }} />
            About
          </li>
          {/* <li
            className={activeTab === "blog" ? styles.active : ""}
            onClick={() => switchTab("blog")}
          >
            <FaPen style={{ marginRight: "8px" }} />
            Blog
          </li> */}
        </ul>
      </div>

      {/* Content based on active tab */}
      <div className={styles.aboutSection}>
        {activeTab === "about" && (
          <>
            <motion.div
              className={styles.infoBlock}
              ref={aboutRef}
              variants={animationVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              transition={{ duration: 0.6 }}
            >
              <h3 className={styles.infoTitle}>Work and Education</h3>

              <div className={styles.educationItem}>
                <h4 className={styles.institution}>
                  Southern Nazarene University
                </h4>
                <p className={styles.degree}>
                  Bachelor's of Science in Cybersecurity (Expected Graduation:
                  December 2026)
                </p>
                <p className={styles.location}>Bethany, Oklahoma</p>
              </div>

              <div className={styles.educationItem}>
                <h4 className={styles.institution}>
                  Fullstack Academy (University of Oklahoma)
                </h4>
                <p className={styles.degree}>
                  Full Stack Immersive Web Development Boot Camp | June 2023 -
                  December 2023
                </p>
                <p className={styles.location}>
                  Online, Partnered with University of Oklahoma
                </p>
              </div>

              <div className={styles.educationItem}>
                <h4 className={styles.institution}>University of Louisville</h4>
                <p className={styles.degree}>
                  60 Credit Hours in Communications (2015-2017)
                </p>
                <p className={styles.location}>Louisville, Kentucky</p>
              </div>
            </motion.div>

            <motion.div
              className={styles.infoBlock}
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
              className={styles.infoBlock}
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

        {activeTab === "blog" && (
          <motion.div
            className={styles.blogPost}
            variants={animationVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{ duration: 0.6 }}
          >
            <h3 className={styles.blogTitle}>
              My Journey into Fullstack Development: From Novice to Tech
              Enthusiast
            </h3>
            <p className={styles.blogExcerpt}>
              My journey into fullstack development has been a rollercoaster of
              learning new technologies, tackling challenges, and continuously
              improving my skills. In this post, I’ll share my experience as I
              transitioned into the tech field and how I navigate the learning
              curve of fullstack development.
            </p>
            <a href="/blog/1" className={styles.readMore}>
              Read More
            </a>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default About;
