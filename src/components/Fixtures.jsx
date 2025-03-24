import React from 'react';
import { motion } from 'framer-motion';
import './Fixtures.css';

function Fixtures() {
    const fadeInUp = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
    };

    const slideDownUp = {
        hidden: { opacity: 0, y: -20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut', delay: 0.5 } }
    };

    return (
        <motion.div 
            className="fixtures"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }} // Triggers at 30% visibility
        >
            <motion.h1 className='main-head' variants={fadeInUp}>
                FIXTURES
            </motion.h1>
            
            <div className='fixtures-grid'>
                {[...Array(4)].map((_, index) => (
                    <motion.div 
                        key={index} 
                        className='current-fixture'
                        variants={fadeInUp}
                    >
                        <p className='red'>FIRST TEAM</p>
                        <p className='fixture-date'>THURSDAY 6th MAR</p>
                        <img alt='logo' src='logo.png' className='fixture-logo' />
                        <p className='fixture-text'>PARIS <span className='fixture-red'>VS</span> LIVERPOOL</p>
                        
                        <div className='fixture-small-grid'>
                            <motion.div className='fixture-small-current-1'>
                                <p className='num'>0</p>
                            </motion.div>
                            <motion.div 
                                className='fixture-small-current-2'
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.3 }}
                                variants={slideDownUp}
                            >
                                <p>1</p>
                            </motion.div>
                        </div>

                        <button className="fixture-btn">View Tickets Info</button>
                        <hr className="header-line" />
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
}

export default Fixtures;
