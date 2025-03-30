import React from 'react';
import { motion } from 'framer-motion';
import './VisionStory.css';

function VisionStory() {
    return (
        <motion.div 
            className='vision-story'
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
        >
            <motion.h2 
                className='head-pages'
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
            >
                Vision Statement
            </motion.h2>
            <motion.p 
                className='pages-para'
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
            >
                At OFCK TV Football Club, our vision is to create a thriving football community that embodies passion, dedication, and excellence on and off the field. We strive to develop skilled athletes, foster teamwork, and inspire the next generation through the love of the game.
                Our goal is to become a symbol of sportsmanship and success, providing a platform where talent meets opportunity. Through innovation, hard work, and an unwavering commitment to growth, we aim to compete at the highest levels while maintaining the values of respect, integrity, and unity.
                Beyond the game, OFCK TV FC is dedicated to engaging with fans, creating memorable experiences, and using football as a force for positive change in our community. Together, we play, we rise, and we inspire.
            </motion.p>
        </motion.div>
    );
}

export default VisionStory;