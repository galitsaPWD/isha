import React from 'react';
import { motion } from 'framer-motion';
import PoemCard from './PoemCard';

const PoemsGrid = ({ poems, onPoemClick }) => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <section className="poems-section">
      <header className="poems-header container">
        <h2 className="view-title">the collection.</h2>
        <p className="view-description">fragments of felt moments, scattered across time.</p>
      </header>

      <motion.div 
        className="poems-grid container"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {poems.map((poem, index) => (
          <PoemCard 
            key={poem.id} 
            poem={poem} 
            index={index}
            onClick={() => onPoemClick(poem.id)} 
          />
        ))}
      </motion.div>
    </section>
  );
};

export default PoemsGrid;
