import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const SecretNote = ({ message, triggerBlush, isBlushActive }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="secret-note-wrapper"
      onMouseEnter={() => {
        setIsHovered(true);
        if (triggerBlush) triggerBlush(true);
      }}
      onMouseLeave={() => {
        setIsHovered(false);
        if (triggerBlush) triggerBlush(false);
      }}
    >
      <div className="secret-trigger">
        <span className="sparkle">✨</span>
      </div>

      <AnimatePresence>
        {isHovered && (
          <motion.div 
            className="secret-message"
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 10 }}
          >
            <div className="secret-message-inner">
              <p>{message}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SecretNote;
