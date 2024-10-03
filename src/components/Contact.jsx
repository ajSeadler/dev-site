import React, { useState } from "react";
import { motion } from "framer-motion";
import "../styles/Contact.css";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";
import emailjs from "emailjs-com";
import LoadingSpinner from "./LoadingSpinner";

function Contact() {
  const [formData, setFormData] = useState({
    from_name: "",
    email_id: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false); // New state for sending indicator

  // Handle input change for all form fields
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate input fields
    if (!formData.from_name || !formData.email_id || !formData.message) {
      alert("Please fill in all fields!");
      return;
    }

    setIsSending(true); // Set sending state to true

    // Use emailjs to send the form data
    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,  // Your service ID
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID, // Your template ID
        e.target,                                   // The form element
        import.meta.env.VITE_EMAILJS_USER_ID      // Your public API key
      )
      .then(
        (result) => {
          console.log("Email sent successfully:", result.text);
          setSubmitted(true);
          setTimeout(() => {
            setSubmitted(false);
            setIsSending(false); // Reset sending state
          }, 3000);
          setFormData({
            from_name: "",
            email_id: "",
            message: "",
          });
        },
        (error) => {
          console.error("Email sending failed:", error.text);
          setIsSending(false); // Reset sending state in case of error
        }
      );
  };

  return (
    <div className="contact-section" id="contact">
      <motion.div
        className="contact-header"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1>Contact Me</h1>
        <p>
          Let’s collaborate or connect! Fill out the form or reach me via the
          following platforms.
        </p>
      </motion.div>

      <motion.div
        className="contact-form-container"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <input
              type="text"
              name="from_name"
              placeholder="Your Name"
              value={formData.from_name}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              name="email_id"
              placeholder="Your Email"
              value={formData.email_id}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleInputChange}
              required
            />
          </div>
          <motion.button
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="submit-button"
          >
            {isSending ? <LoadingSpinner /> : submitted ? "Message Sent!" : "Send Message"}
          </motion.button>
        </form>
      </motion.div>

      <motion.div
        className="contact-info"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="info-item">
          <FaEnvelope className="icon" />
          <span>anthonyseadler@gmail.com</span>
        </div>

        <div className="social-icons">
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
        </div>
      </motion.div>
    </div>
  );
}

export default Contact;
