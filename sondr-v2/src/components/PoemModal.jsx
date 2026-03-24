import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const PoemModal = ({ poem, onClose }) => {
  if (!poem) return null;

  return (
    <AnimatePresence>
      <div className="modal-overlay" onClick={onClose}>
        <motion.div 
          className="poem-modal"
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 30 }}
          onClick={(e) => e.stopPropagation()}
        >
          <button className="modal-close" onClick={onClose} aria-label="Close modal"></button>
          
          <div className="modal-scroll-area">
            <header className="modal-header">
              <span className="modal-meta">{poem.meta}</span>
              <h2 className="modal-title">{poem.title}</h2>
            </header>
            
            <div className="modal-body">
              {poem.body.split('\n').map((line, i) => (
                <p key={i}>{line || '\u00A0'}</p>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default PoemModal;
