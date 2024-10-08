import React, { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import styles from "../styles/BlogPost.module.css";
import blogPosts from "../data/blogs"; // Import the blogPosts array

const BlogPost = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Get the current post ID from the URL or route state
  const { id } = location.state || { id: 1 }; // Default to the first post if no state

  const post = blogPosts.find((post) => post.id === id);

  // Function to go back to the previous page
  const goBack = () => {
    // Save scroll position before going back
    navigate(-1);
  };

  // Restore scroll position when the component is mounted
  useEffect(() => {
    window.scrollTo(0, location.state?.scrollPosition || 0);
  }, [location]);

  return (
    <div className={styles.blogPost}>
      <h1 className={styles.title}>{post?.title}</h1>
      <p className={styles.date}>Posted on: October 8, 2024</p>
      <div
        className={styles.content}
        dangerouslySetInnerHTML={{ __html: post?.content }} // Render the content as HTML
      />
      <button className={styles.backButton} onClick={goBack}>
        Back
      </button>
    </div>
  );
};

export default BlogPost;
