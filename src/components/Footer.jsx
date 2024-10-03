import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope, FaInstagram } from "react-icons/fa";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      

      <div className="footer-bottom">
      <p>Made with ❤️ in Oklahoma City</p>
        <p>&copy; {new Date().getFullYear()} Anthony Seadler. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
