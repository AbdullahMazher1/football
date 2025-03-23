import React from 'react';
import { motion } from 'framer-motion';
import './Discover.css';

const Discover = () => {
  const items = [
    {
      id: 1,
      image: '/f (1).jpg', 
      overlayText: 'My Paris Saint-Germain',
      title: 'My Paris Saint-Germain',
      description: 'Show your support for Paris Saint-Germain by becoming an official member of the club with the MyParis Saint-Germain program.',
      buttonText: 'DISCOVER',
    },
    {
      id: 2,
      image: '/f (2).jpg',
      overlayText: 'FOR COMMUNITIES',
      title: 'Foundation',
      description: 'Paris Saint-Germain Foundation develops educational and sports programs in France and abroad, which use sport and its values as a lever for learning, self-development, and solidarity.',
      buttonText: 'LEARN MORE',
    },
    {
      id: 3,
      image: '/f (3).jpg',
      overlayText: 'CARTE BLANCHE',
      title: 'Carte Blanche',
      description: 'Discover Paris Saint-Germain from another angle!',
      buttonText: 'DISCOVER',
    },
  ];

  return (
    <motion.div 
      className='discover'
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      {/* Title Animation */}
      <motion.h1 
        className='main-head'
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0, transition: { duration: 0.6 } }}
        viewport={{ once: true }}
      >
        DISCOVER
      </motion.h1>

      <div className='discover-grid'>
        {items.map((item, index) => (
          <motion.div 
            key={item.id} 
            className='discover-card'
            initial={{ opacity: 0, y: 50}}
            whileInView={{ opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, delay: index * 0.3 } }}
            viewport={{ once: true }}
          >
            <div className='discover-image-wrapper'>
              <motion.img 
                src={item.image} 
                alt={item.title} 
                className='discover-image'
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1, scale: 1, transition: { duration: 0.6 } }}
                viewport={{ once: true }}
              />
              <motion.div 
                className='discover-overlay'
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.4 } }}
                viewport={{ once: true }}
              >
                <h2 className='discover-overlay-text'>{item.overlayText}</h2>
              </motion.div>
            </div>

            <motion.div 
              className='discover-content'
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.8 } }}
              viewport={{ once: true }}
            >
              <h3 className='discover-title'>{item.title}</h3>
              <p className='discover-description'>{item.description}</p>

              <motion.button 
                className='discover-button'
                whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
              >
                {item.buttonText}
              </motion.button>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Discover;
