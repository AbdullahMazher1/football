import React from 'react';
import './Banner2.css';

function Banner2({ image }) {
  const defaultImage = '/club-2.jpg';

  return (
    <div
      className="banner"
      style={{
        height: '500px',
        backgroundImage: `url(${image || defaultImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        filter: 'sepia(60%) contrast(90%) brightness(80%)',
        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)',
        fontSize: '2rem',
        fontWeight: 'bold'
      }}
    >
    </div>
  );
}

export default Banner2;
