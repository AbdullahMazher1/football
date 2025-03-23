import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import './GridSection.css';

const articles = [
  { id: 1, category: 'ÉQUIPE PREMIÈRE', date: 'March 5th 2025', title: 'Bernard Lama and Raí look back on their clash with Liverpool!', image: '/f (2).jpg' },
  { id: 2, category: 'ÉQUIPE PREMIÈRE', date: 'March 5th 2025', title: 'Raí: "It will get pretty emotional watching this match"', image: '/f (3).jpg' },
  { id: 3, category: 'ÉQUIPE PREMIÈRE', date: 'March 5th 2025', title: 'Bernard Lama: "A very high-intensity match"', image: '/f (4).jpg' },
  { id: 4, category: 'HANDBALL', date: 'March 5th 2025', title: 'Preview: Quarter-finals in their sights - Pelister-Paris', image: '/f (5).jpg' },
  { id: 5, category: 'FIRST TEAM', date: 'March 5th 2025', title: 'Key numbers: Paris-Liverpool', image: '/f (6).jpg' },
  { id: 6, category: 'ÉQUIPE PREMIÈRE', date: 'March 5th 2025', title: 'Best of matchday eve: Paris Saint-Germain - Liverpool', image: '/f (7).jpg' },
  { id: 7, category: 'FIRST TEAM', date: 'March 5th 2025', title: "Marquinhos: 'I'm committed to helping build that collective identity'", image: '/f (8).jpg' },
  { id: 8, category: 'FIRST TEAM', date: 'March 5th 2025', title: 'On and off the pitch, Marquinhos on Marquinhos!', image: '/f (9).jpg' },
];

function GridSection() {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div className="grid-section" ref={ref}>
      {articles.map((article, index) => (
        <motion.div
          key={article.id}
          className="grid-item"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isVisible ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <img src={article.image} alt={article.title} className="article-image" />
          <p className="category">
            <span className="category-text">{article.category}</span>
            <span className="separator"> | </span>
            <span className="date">{article.date}</span>
          </p>
          <h3 className="article-title">{article.title}</h3>
        </motion.div>
      ))}
    </div>
  );
}

export default GridSection;
