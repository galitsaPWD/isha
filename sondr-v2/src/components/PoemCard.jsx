import React from 'react';
import { motion } from 'framer-motion';

const PoemCard = ({ poem, index, onClick }) => {
  // Creating a random-ish tilt for the scrapbook feel
  const tilt = (index % 3 - 1) * 2; 

  const item = {
    hidden: { 
      opacity: 0, 
      y: 20, 
      scale: 0.95,
      rotate: tilt,
      zIndex: 1,
      boxShadow: "0 10px 28px rgba(0, 0, 0, 0.12)",
      borderColor: "rgba(210, 157, 120, 0.35)"
    },
    show: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      rotate: tilt,
      zIndex: 1,
      boxShadow: "0 10px 28px rgba(0, 0, 0, 0.12)",
      borderColor: "rgba(210, 157, 120, 0.35)"
    }
  };

  return (
    <motion.article 
      className="poem-card"
      variants={item}
      whileHover={{ 
        scale: 1.02, 
        rotate: tilt + 1,
        y: -12,
        zIndex: 10,
        boxShadow: "0 22px 55px rgba(122, 60, 31, 0.25)",
        borderColor: "var(--accent)"
      }}
      whileTap={{ scale: 0.98, y: -4 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      onClick={onClick}
    >
      <div className="card-texture"></div>
      <h3 className="poem-card__title">{poem.title}</h3>
      <div className="poem-card__meta">
        <span className="meta-tag">{poem.meta}</span>
      </div>
      <p className="poem-card__firstline">"{poem.firstLine}..."</p>
      
      <div className="card-decoration">
        <div className="tape"></div>
      </div>
    </motion.article>
  );
};

export default PoemCard;
