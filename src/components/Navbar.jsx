import React, { useState } from 'react';
import '../styles/Navbar.css'; // Ensure to create this CSS file for styling

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false); // State to manage mobile menu visibility

    const toggleMenu = () => {
        setIsOpen(!isOpen); // Toggle the menu open/close state
    };

    return (
        <>
            {/* Desktop Navbar */}
            <nav className="navbar desktop-navbar">
                <div className="navbar-brand">AJ<span className='last-name'>Seadler</span></div>
                <ul className="navbar-links">
                    <li><a href="#about">About</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#skills">Skills</a></li>
                    <li><a href="#contact">Contact</a></li>
                    <li><a href="#resume">Resume</a></li>
                </ul>
            </nav>

            {/* Mobile Navbar */}
            <nav className="navbar mobile-navbar">
            <div className="navbar-brand">AJ<span className='last-name'>Seadler</span></div>
                <div className="navbar-hamburger" onClick={toggleMenu}>
                    <div className={`bar ${isOpen ? 'active' : ''}`}></div>
                    <div className={`bar ${isOpen ? 'active' : ''}`}></div>
                    <div className={`bar ${isOpen ? 'active' : ''}`}></div>
                </div>
                {isOpen && (
                    <ul className="navbar-links">
                        <li><a href="#about">About</a></li>
                        <li><a href="#projects">Projects</a></li>
                        <li><a href="#skills">Skills</a></li>
                        <li><a href="#contact">Contact</a></li>
                        <li><a href="#resume">Resume</a></li>
                    </ul>
                )}
            </nav>
        </>
    );
};

export default Navbar;
