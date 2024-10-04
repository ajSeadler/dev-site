import React, { useState, useEffect } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { FaSun, FaMoon } from 'react-icons/fa'; // For dark/light mode icons
import '../styles/Navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [darkMode, setDarkMode] = useState(true);

    // Toggle mobile menu
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    // Handle smooth scroll to sections
    const handleScroll = (e) => {
        e.preventDefault();
        const targetId = e.currentTarget.getAttribute("href");
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }

        setIsOpen(false); // Close the menu after selecting an option on mobile
    };

    // Toggle dark mode and update the body class
    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    useEffect(() => {
        if (darkMode) {
            document.body.classList.add('dark-mode');
        } else {
            document.body.classList.remove('dark-mode');
        }
    }, [darkMode]);

    return (
        <>
            {/* Desktop Navbar */}
            <nav className="desktop-navbar">
                <div className="navbar-brand">AJ<span className="last-name">Seadler</span></div>
                <ul className="navbar-links">
                    <li><a href="#about" onClick={handleScroll}>About</a></li>
                    <li><a href="#skills" onClick={handleScroll}>Skills</a></li>
                    <li><a href="#projects" onClick={handleScroll}>Projects</a></li>
                    <li><a href="#contact" onClick={handleScroll}>Contact</a></li>
                    <li><a href="#resume" onClick={handleScroll}>Resume</a></li>
                    {/* Add Dark Mode Toggle Button */}
                    <li>
                        <button onClick={toggleDarkMode} className="dark-mode-toggle">
                            {darkMode ? <FaMoon /> : <FaSun />}
                        </button>
                    </li>
                </ul>
            </nav>

            {/* Mobile Navbar */}
            <nav className="mobile-navbar">
                <div className="navbar-brand">AJ<span className="last-name">Seadler</span>
                </div>
                <div className='drk-nav'>
                <div className="navbar-hamburger" onClick={toggleMenu}>
                    {isOpen ? <CloseIcon  /> : <MenuIcon />}
                    
                </div>
                <div className="toggle-container" style={{marginLeft:'10px'}}> {/* Flex container for alignment */}
                    <button onClick={toggleDarkMode} className="dark-mode-toggle mobile-toggle">
                        {darkMode ? <FaMoon /> : <FaSun />}
                    </button>
                </div>
                </div>
                {/* Add Dark Mode Toggle Button in mobile view */}
                
            </nav>

            {/* Mobile Full-Screen Menu */}
            {isOpen && (
                
                <div className="mobile-menu">
                    
                    <ul className="navbar-links">
                        
                        <li><a href="#about" onClick={handleScroll}>About</a></li>
                        <li><a href="#projects" onClick={handleScroll}>Projects</a></li>
                        <li><a href="#skills" onClick={handleScroll}>Skills</a></li>
                        <li><a href="#contact" onClick={handleScroll}>Contact</a></li>
                        <li><a href="#resume" onClick={handleScroll}>Resume</a></li>
                    </ul>
                </div>
            )}
        </>
    );
};

export default Navbar;
