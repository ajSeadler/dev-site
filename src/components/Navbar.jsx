import React, { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import '../styles/Navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const handleScroll = (e) => {
        e.preventDefault();
        const targetId = e.currentTarget.getAttribute("href");
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }

        setIsOpen(false); // Close the menu after selecting an option on mobile
    };

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
                </ul>
            </nav>

            {/* Mobile Navbar */}
            <nav className="mobile-navbar">
                <div className="navbar-brand">AJ<span className="last-name">Seadler</span></div>
                <div className="navbar-hamburger" onClick={toggleMenu}>
                    {isOpen ? <CloseIcon style={{ color: '#ddd' }} /> : <MenuIcon style={{ color: '#ddd' }} />}
                </div>
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
