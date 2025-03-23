import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './Container.css';

function Container() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <motion.div 
            className="container"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
        >
            {/* Navbar with a Hamburger Menu for Mobile */}
            <div className="menu-bar">
                <h2>OFCK TV</h2>
                <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
                    ☰
                </button>
            </div>

            {/* Links Section (Visible on Desktop, Toggle on Mobile) */}
            <div className={`container-links ${menuOpen ? "open" : ""}`}>
                <a href="#a">HIGHLIGHTS 10MN</a>
                <a href="#a">MATCHES</a>
                <a href="#a">THIS IS PARIS</a>
                <a href="#a">TRAINING</a>
            </div>

            {/* Main Content Section */}
            <motion.div 
                className="container-grid"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
            >
                <motion.img 
                    className='im' 
                    src='f (7).jpg' 
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                />

                {/* Right Text Content */}
                <motion.div 
                    className="container-content"
                    initial={{ x: 50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                >
                    <p className="container-category">
                        <span className="red-text">FIRST TEAM</span> <span>|</span> March 6th 2025
                    </p>
                    <h1 className="container-heading">
                        Pre-match live from the Parc des Princes at 19:50 CET
                    </h1>
                </motion.div>
            </motion.div>

            <motion.div 
                className="grid-section-1"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
            >
            </motion.div>
        </motion.div>
    );
}

export default Container;
