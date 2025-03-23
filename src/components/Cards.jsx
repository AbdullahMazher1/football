import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './Cards.css';

function Cards() {
    const [ref1, inView1] = useInView({ threshold: 0.3, triggerOnce: true });
    const [ref2, inView2] = useInView({ threshold: 0.3, triggerOnce: true });

    const fadeInUp = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
    };

    return (
        <div className='cards'>
            {/* First Card */}
            <motion.div
                ref={ref1}
                className='current-card'
                initial="hidden"
                animate={inView1 ? "visible" : "hidden"}
                variants={fadeInUp}
            >
                <div
                    className="im-container"
                    style={{
                        backgroundImage: `url("/f (1).jpg")`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        width: "550px",
                        height: "350px"
                    }}
                ></div>

                <div className='card-bottom'>
                    <p className='red-1'>FIRST TEAM</p>
                    <p>March 6th 2025</p>
                </div>
                <h2 className='head-1'>Line up: Paris Liverpool</h2>
            </motion.div>

            {/* Second Card */}
            <motion.div
                ref={ref2}
                className='current-card'
                initial="hidden"
                animate={inView2 ? "visible" : "hidden"}
                variants={fadeInUp}
            >
                <div
                    className="im-container"
                    style={{
                        backgroundImage: `url("/f (2).jpg")`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        width: "550px",
                        height: "350px"
                    }}
                ></div>
                <div className='card-bottom'>
                    <p className='red-1'>FIRST TEAM</p>
                    <p>March 6th 2025</p>
                </div>
                <h2 className='head-1'>Quiz: Test your knowledge before Paris Vs Liverpool</h2>
            </motion.div>

            {/* Right Side Content */}
            <motion.div
                className='cards-right'
                initial="hidden"
                animate="visible"
                variants={fadeInUp}
            >
                <div className='right-current'>
                    <h3 className='head-2'>Live Text: Paris Liverpool</h3>
                    <button className='btn'>Live</button>
                </div>
                <hr className='line-2'></hr>
                <div className='right-current'>
                    <h3 className='head-2'>Live Text: Paris Liverpool</h3>
                    <button className='btn'>Live</button>
                </div>
                <hr className='line-2'></hr>
                <div className='right-current-1'>
                    <h4 className='head-2'>Pree Match Live from the pac dev com</h4>
                    <div className='card-bottom-1'>
                        <p className='red-1'>FIRST TEAM</p>
                        <p className='hours'>9 hours ago</p>
                    </div>
                </div>
                <hr className='line-2'></hr>
                <div className='right-current-1'>
                    <h4 className='head-2'>Pree Match Live from the pac dev com</h4>
                    <div className='card-bottom-1'>
                        <p className='red-1'>FIRST TEAM</p>
                        <p className='hours'>12 hours ago</p>
                    </div>
                </div>
                <hr></hr>
            </motion.div>
        </div>
    );
}

export default Cards;
