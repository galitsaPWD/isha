import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const AmbientPlayer = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="ambient-player-wrapper">
      {/* Player Content: Absolutely positioned to prevent layout jumps */}
      <motion.div 
        className="player-content"
        initial={false}
        animate={isExpanded 
          ? { opacity: 1, y: 0, scale: 1, filter: 'blur(0px)', visibility: 'visible' }
          : { opacity: 0, y: 20, scale: 0.95, filter: 'blur(10px)', visibility: 'hidden' }
        }
        transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
        style={{ 
          position: 'absolute',
          bottom: '100%',
          right: 0,
          pointerEvents: isExpanded ? 'auto' : 'none',
          marginBottom: '1rem' // Fixed gap
        }}
      >
        <div className="player-header-bar">
          <span className="player-header-label">isha's playlist.</span>
          <button 
            className="player-close-btn"
            onClick={() => setIsExpanded(false)}
            aria-label="Close player"
          >
            <span className="close-icon-actual"></span>
          </button>
        </div>

        <div style={{ touchAction: 'manipulation' }}>
          <iframe 
            src="https://open.spotify.com/embed/playlist/5QUKkBr9tec9pSwLuA32iN?utm_source=generator&theme=0" 
            width="100%" 
            height="352" 
            frameBorder="0" 
            allowFullScreen="" 
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            style={{ display: 'block' }}
          ></iframe>
        </div>

        <p className="player-login-hint">tip: log in to spotify on chrome to hear the full songs here. 🌹</p>
      </motion.div>

      {/* Pill: Stays perfectly still while player blooms above it */}
      <AnimatePresence mode="wait">
        {!isExpanded && (
          <motion.button 
            className="player-toggle"
            onClick={() => setIsExpanded(true)}
            title="isha's playlist"
            key="pill"
            initial={{ opacity: 0, scale: 0.85, filter: 'blur(6px)' }}
            animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
            exit={{ opacity: 0, scale: 0.85, filter: 'blur(6px)' }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="icon-wrapper">
              <span className="pulse-icon"></span>
            </div>
            <span className="player-label">isha's playlist</span>
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AmbientPlayer;
