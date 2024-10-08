import React from "react";
import styles from "../styles/About.module.css"; // Assuming you're using CSS modules

const Blog = () => {
  return (
    <div className={styles.blogSection}>
      <h2 className={styles.sectionTitle}>Blog</h2>

      {/* Blog Post 1 */}
      <div className={styles.blogPost}>
        <h3 className={styles.blogTitle}>
          My Journey into Fullstack Development: From Novice to Tech Enthusiast
        </h3>
        <p className={styles.blogExcerpt}>
          My journey into fullstack development has been a rollercoaster of
          learning new technologies, tackling challenges, and continuously
          improving my skills. In this post, I’ll share my experience as I
          transitioned into the tech field and how I navigated the learning
          curve of fullstack development.
        </p>
        <a href="/blog/1" className={styles.readMore}>
          Read More
        </a>
      </div>
    </div>
  );
};

export default Blog;
