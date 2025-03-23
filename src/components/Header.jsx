import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./Header.css";
import { FiArrowRight } from "react-icons/fi";

const headerVariants = {
  hidden: { opacity: 0, y: -50 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } },
};

const titleVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0, transition: { duration: 1, ease: "easeOut" } },
};

const dateVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 1, ease: "easeOut" } },
};

const imageVariants = {
  hidden: { x: -50, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 1, ease: "easeOut" } },
  hover: { transform: "translateZ(50px)" }
};

const Header = () => {
  const fullText = "Paris-Liverpool: A classic match";
  const [typedText, setTypedText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < fullText.length) {
      const interval = setTimeout(() => {
        setTypedText(fullText.slice(0, index + 1));
        setIndex(index + 1);
      }, 100); 

      return () => clearTimeout(interval);
    }
  }, [index]);

  return (
    <div className="header">
      <div className="header-left">
        <motion.div
          className="image-container"
          initial="hidden"
          animate="visible"
          whileHover="hover"
          variants={imageVariants}
        >
          <img className="image-header" src="header (2).jpg" alt="header" />
        </motion.div>
      </div>
      <div className="header-right">
        <motion.div className="header-up" initial="hidden" animate="visible" variants={headerVariants}>
          <motion.p className="red" initial="hidden" animate="visible" variants={titleVariants}>FIRST TEAM</motion.p>
          <motion.h1 className="head" initial="hidden" animate="visible" variants={titleVariants}>
            {typedText}
            <span className="cursor">|</span>
          </motion.h1>
          <p className="para-white">Watch the pre-match live on PSG TV this March Wednesday 5th at 19:50 CET from the Parc des Prince.</p>
          <FiArrowRight
            size={20}
            style={{ color: "white", transform: "scaleX(2)", strokeWidth: 0.7 }}
          />
        </motion.div>

        <motion.div className="header-bottom" initial="hidden" animate="visible" variants={dateVariants}>
          <div className="header-bottom-inner">
            <div className="header-inner-left">
              <div className="inner-left-first">
                <img src="logo.png" className="header-logo" alt="logo" />
                <h4>PARIS <br /> LIVERPOOL</h4>
              </div>
              <div className="inner-left-next">
                <p className="date">06 MARCH - 01:00 . UEFA CHAMPIONS LEAGUE</p>
              </div>
            </div>
            <div className="header-inner-right">
              <div className="inner-right-up">
                <p className="date-1">
                  00 <span className="time">D</span> 12 <span className="time">H</span> 30 <span className="time">M</span> 12 <span className="time">S</span>
                </p>
              </div>
              <div className="inner-right-down">
                <button className="tickets-btn">View Tickets Info</button>
                <hr className="header-line" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Header;
