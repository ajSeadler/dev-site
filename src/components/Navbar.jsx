import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';  // Importing motion from framer-motion
import '../styles/Navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [introComplete, setIntroComplete] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIntroComplete(true);
        }, ); // 2-second intro animation duration

        return () => clearTimeout(timer);
    }, []);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    // Animation Variants for the Circle Morph and Lines
    const circleVariant = {
        hidden: { scale: 0 },
        visible: { scale: 1, transition: { duration: 1, ease: 'easeInOut' } },
        morph: {
            scaleX: 8,
            scaleY: 0.5,
            transition: { duration: .5, ease: 'easeInOut' },
        },
    };

    const lineVariant = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, width: "100%", transition: { duration: 1, ease: "easeInOut" } },
    };

    const navbarVariant = {
        hidden: { opacity: 0, y: -50 },
        visible: { opacity: 1, y: 0, transition: { delay: .5, duration: 0.5 } }
    };

    return (
        <>
            {/* Circle to Lines Animation */}
            {!introComplete && (
                <div className="intro-animation">
                    <motion.div
                        className="circle"
                        variants={circleVariant}
                        initial="hidden"
                        animate="morph"
                    />
                </div>
            )}

            {/* Navbar */}
            {introComplete && (
                <>
                    {/* Desktop Navbar */}
                    <motion.nav
                        className="navbar desktop-navbar"
                        variants={navbarVariant}
                        initial="hidden"
                        animate="visible"
                    >
                        <div className="navbar-brand">AJ<span className='last-name'>Seadler</span></div>
                        <ul className="navbar-links">
                            <li><a href="#about">About</a></li>
                            <li><a href="#projects">Projects</a></li>
                            <li><a href="#skills">Skills</a></li>
                            <li><a href="#contact">Contact</a></li>
                            <li><a href="#resume">Resume</a></li>
                        </ul>
                    </motion.nav>

                    {/* Mobile Navbar */}
                    <motion.nav
                        className="navbar mobile-navbar"
                        variants={navbarVariant}
                        initial="hidden"
                        animate="visible"
                    >
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
                    </motion.nav>
                </>
            )}
        </>
    );
};

export default Navbar;