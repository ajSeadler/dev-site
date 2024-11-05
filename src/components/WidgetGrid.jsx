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
            <div className="github-text">
              <p>Followers: {userInfo.followers}</p>
              <p>Repositories: {userInfo.public_repos}</p>
            </div>
          )}
        </motion.div>

        <motion.div
          className="widget-container"
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          whileHover="hover"
        >
          <motion.div
            className="vertical-widget"
            variants={rotateIn}
            initial="hidden"
            animate="visible"
            whileHover="hover"
          >
            <a href="https://linkedin.com/in/anthony-seadler" target="_blank">
              <LinkedInIcon style={{ fontSize: 40 }} />
              <p className="small-text" style={{ fontSize: ".7rem" }}>
                A glimpse into my professional journey.
              </p>
            </a>
          </motion.div>

          <div className="widget-group">
            <motion.div
              className="reddit-widget"
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              whileHover="hover"
            >
              Reddit
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
                  <p>LeetCode</p>
                </div>
              </a>
            </motion.div>

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
              className="daily-dev"
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              whileHover="hover"
            >
              <a
                href="https://app.daily.dev/ajseadler"
                target="_blank"
                rel="noopener noreferrer"
                className="daily-dev-link"
              >
                <img
                  src="https://api.daily.dev/devcards/v2/1XOC8szlXqhgjoCq7kMgi.png?r=jbe&type=wide"
                  style={{ width: "100%", height: "100%", cursor: "pointer" }}
                  alt="Aj Seadler's Dev Card"
                  loading="lazy"
                />
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default WidgetGrid;
