import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LeetCodeIcon from "@mui/icons-material/Code";
import Clock from "react-clock";
import "react-clock/dist/Clock.css";
import "../styles/WidgetGrid.css";

const WidgetGrid = () => {
  const [userInfo, setUserInfo] = useState({
    name: "",
    followers: 0,
    public_repos: 0,
    stars: 0,
  });
  const [loading, setLoading] = useState(true);
  const [currentTime, setCurrentTime] = useState(new Date());

  // Update time every second
  useEffect(() => {
    const intervalId = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    const fetchGitHubData = async () => {
      try {
        const profileResponse = await fetch(
          "https://api.github.com/users/ajSeadler"
        );
        const profileData = await profileResponse.json();

        const reposResponse = await fetch(profileData.repos_url);
        const reposData = await reposResponse.json();
        const totalStars = reposData.reduce(
          (acc, repo) => acc + repo.stargazers_count,
          0
        );

        setUserInfo({
          name: profileData.name,
          followers: profileData.followers,
          public_repos: profileData.public_repos,
          stars: totalStars,
        });
      } catch (error) {
        console.error("Error fetching GitHub data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchGitHubData();
  }, []);

  // Animation Variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 2 } },
    hover: { scale: 1.05, transition: { duration: 2 } },
  };

  const rotateIn = {
    hidden: { opacity: 0, rotate: -10 },
    visible: { opacity: 1, rotate: 0, transition: { duration: 2 } },
    hover: { scale: 1.1, rotate: 5, transition: { duration: 2 } },
  };

  return (
    <div className="widget-section">
      <div className="widget-grid">
        <motion.div
          className="widget-container"
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          whileHover="hover"
        >
          <motion.div
            className="github-commits"
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            whileHover="hover"
          >
            <div className="icon-container">
              <GitHubIcon style={{ fontSize: 40 }} />
            </div>
            {loading || userInfo.followers === 0 ? (
              <div className="overlay">
                <p>No data found at the moment</p>
              </div>
            ) : (
              <a
                href="https://github.com/ajSeadler"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="github-text">
                  <p>Followers: {userInfo.followers}</p>
                  <p>Repositories: {userInfo.public_repos}</p>
                  <p style={{ fontSize: ".7rem" }}>
                    (Click here to view the source code for all my repositories)
                  </p>
                </div>
              </a>
            )}
          </motion.div>
          <motion.div
            className="vertical-widget"
            variants={rotateIn}
            initial="hidden"
            animate="visible"
            whileHover="hover"
          >
            <a
              href="https://linkedin.com/in/anthony-seadler"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedInIcon style={{ fontSize: 40, color: "#fff" }} />
              <p className="small-text" style={{ fontSize: ".7rem" }}>
                (A glimpse into my professional history)
              </p>
            </a>
          </motion.div>

          <div className="widget-group">
            <motion.div
              className="instagram-widget"
              variants={rotateIn}
              initial="hidden"
              animate="visible"
              whileHover="hover"
            >
              <h4 style={{ color: "#333" }}>
                Located in
                <br /> CST Time Zone
              </h4>
              <Clock value={currentTime} size={60} renderNumbers={false} />
            </motion.div>
            <motion.div
              className="spotify-widget"
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              whileHover="hover"
            >
              <a
                href="https://open.spotify.com/user/1296837920?si=e9628d1eaa4d484e" // Replace with your Spotify profile URL
                target="_blank"
                rel="noopener noreferrer"
                className="spotify-link"
              >
                <img
                  src="/spotify-icon.svg" // Update with the correct path to spotify.png
                  alt="Spotify Logo"
                  className="spotify-logo"
                />
                <div className="spotify-widget-text">
                  <h4>Spotify</h4>
                  <p>(to check out my playlists)</p>
                </div>
              </a>
            </motion.div>

            <motion.div
              className="medium-widget leetcode-widget"
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              whileHover="hover"
            >
              <a
                href="https://leetcode.com/u/aj_seadler"
                target="_blank"
                rel="noopener noreferrer"
                className="leetcode-link"
              >
                <LeetCodeIcon style={{ fontSize: 30, color: "orange" }} />
                <div className="medium-widget-text">
                  <h4>LeetCode</h4>
                  <p>(for when I want to practice)</p>
                </div>
              </a>
            </motion.div>

            {/* Discogs Widget Card */}
            <motion.div
              className="other-widget"
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              whileHover="hover"
            >
              <a
                href="https://www.discogs.com/user/Masterofdoom"
                target="_blank"
                rel="noopener noreferrer"
                className="discogs-link"
              >
                <img
                  src="/discogs.svg" // Update the path to your discogs.svg
                  alt="Discogs Logo"
                  className="svg-white"
                  style={{
                    width: 30,
                    height: 30,
                    marginRight: 8,
                    color: "#fff",
                  }} // Style as needed
                />
                <div className="discogs-widget-text">
                  <h4>Discogs</h4>
                  <p>(catalog of my vinyl collection)</p>
                </div>
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default WidgetGrid;
