import React from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import "./BookDemo.css";

const BookDemo = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <motion.div
      ref={ref}
      className="book-demo-container"
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <motion.img
        src='footballer.png'
        alt="Tools"
        className="book-left-image"
        initial={{ opacity: 0, x: -50 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.2 }}
      />
      <motion.div
        className="book-content"
        initial={{ opacity: 0, }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <h2 className="book-heading">
          Take the <span className="book-span">first step</span> <br /> to better health
        </h2>
        <button className="book-button">Book A Demo Now</button>
        <p className="book-text">
          It only <span className="book-highlight">takes 2 minutes</span> to complete
        </p>
      </motion.div>
      <motion.img
        src='football.png'
        alt="Doctor"
        className="book-right-image"
        initial={{ opacity: 0, x: 50 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.2 }}
      />
    </motion.div>
  );
};

export default BookDemo;
