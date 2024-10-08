import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom"; // Import Link for routing
import styles from "../styles/About.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FaBriefcase, FaPen, FaStar } from "react-icons/fa";

const About = () => {
  const [activeTab, setActiveTab] = useState("about");

  // Handlers to switch between tabs
  const switchTab = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className={styles.profilePage}>
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
          <li
            className={activeTab === "blog" ? styles.active : ""}
            onClick={() => switchTab("blog")}
          >
            <FaPen style={{ marginRight: "8px" }} />
            Blog
          </li>
          {/* <li
            className={activeTab === "favorite-articles" ? styles.active : ""}
            onClick={() => switchTab("favorite-articles")}
          >
            <FaStar style={{ marginRight: "8px" }} />
            Favorite Articles
          </li> */}
        </ul>
      </div>

      {/* Content based on active tab */}
      <div className={styles.aboutSection}>
        {activeTab === "about" && (
          <>
            <div className={styles.infoBlock}>
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
            </div>

            <div className={styles.infoBlock}>
              <h3>Location</h3>
              <p>Lives in Oklahoma City, OK</p>
              <p>From Louisville, KY</p>
            </div>
            <div className={styles.infoBlock}>
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
            </div>
          </>
        )}

        {activeTab === "blog" && (
          <>
            {/* Blog Post 1 */}
            <div className={styles.blogPost}>
              <h3 className={styles.blogTitle}>
                My Journey into Fullstack Development: From Novice to Tech
                Enthusiast
              </h3>
              <p className={styles.blogExcerpt}>
                My journey into fullstack development has been a rollercoaster
                of learning new technologies, tackling challenges, and
                continuously improving my skills. In this post, I’ll share my
                experience as I transitioned into the tech field and how I
                navigate the learning curve of fullstack development.
              </p>
              <a href="/blog/1" className={styles.readMore}>
                Read More
              </a>
            </div>
          </>
        )}

        {activeTab === "favorite-articles" && (
          <>
            <h2 className={styles.sectionTitle}>Favorite Articles</h2>
            <p>
              These are some of my favorite articles on topics such as
              development, technology, and more:
            </p>
            <ul>
              <li>
                <a href="https://example.com/article1">
                  How to Build a Fullstack App
                </a>
              </li>
              <li>
                <a href="https://example.com/article2">
                  The Future of AI in Web Development
                </a>
              </li>
              <li>
                <a href="https://example.com/article3">Why Learn TypeScript</a>
              </li>
            </ul>
          </>
        )}
      </div>
    </div>
  );
};

export default About;
