import React from 'react';
import { motion } from 'framer-motion';

const Envelope = ({ onOpen }) => {
  return (
    <motion.div 
      className="envelope-overlay"
      exit={{ opacity: 0, y: -100, transition: { duration: 0.8, ease: "easeInOut" } }}
    >
      <div className="envelope-container">
        <motion.div 
          className="envelope-card"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          whileHover={{ y: -5 }}
          onClick={onOpen}
        >
          <div className="envelope-wax-seal">
            <span>❤</span>
          </div>
          
          <div className="envelope-content">
            <h2 className="envelope-for">For Isha.</h2>
            <div className="envelope-line"></div>
            <p className="envelope-hint">click to open</p>
          </div>
          
          {/* Decorative stamp */}
          <div className="envelope-stamp">
            <span>PASSED</span>
            <small>love & longing</small>
          </div>
        </motion.div>
        
        <motion.div 
          className="envelope-bg-text"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.05 }}
          transition={{ delay: 1 }}
        >
          {Array(20).fill("isha. ").map((t, i) => <span key={i}>{t}</span>)}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Envelope;
