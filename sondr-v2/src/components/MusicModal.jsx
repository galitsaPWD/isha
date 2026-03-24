import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const MusicModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="modal-overlay" onClick={onClose}>
        <motion.div 
          className="music-modal"
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 30 }}
          onClick={(e) => e.stopPropagation()}
        >
          <button className="modal-close" onClick={onClose} aria-label="Close modal"></button>
          
          <header className="music-modal-header">
            <h2 className="modal-title">isha's playlist.</h2>
            <p className="modal-meta">music to read by.</p>
            <p className="login-hint">tip: log in to spotify on chrome to hear the full songs here. 🌹</p>
          </header>
          
          <div className="music-content">
            <iframe 
              style={{ borderRadius: "12px" }}
              src="https://open.spotify.com/embed/playlist/5QUKkBr9tec9pSwLuA32iN?utm_source=generator&theme=0" 
              width="100%" 
              height="352" 
              frameBorder="0" 
              allowFullScreen="" 
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
              loading="lazy"
            ></iframe>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default MusicModal;
