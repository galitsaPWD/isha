import React, { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const SecretMessageModal = ({ isOpen, onClose }) => {
  const contentRef = useRef(null);

  // Close when clicking outside the letter
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (contentRef.current && !contentRef.current.contains(e.target)) {
        onClose();
      }
    };
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen, onClose]);

  // Lock body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  const messageText = `zup siraulo, if ur reading this well, i've already told u the old poetry website bout u, trust me its been months that i've wanted to tell u bout that, pero i just dont have the courage ig. anyways this website still is the same but much better coz i've given it much more time than the one before. so yeah, hope we're still u know, friends? idk lmao T_T i just wanted tell that dito lang me kahit andiyan lang u jk shet wala ko kabalo hambalon ko. okay so yan siya dito lang me lagi just on the sidelines, quietly supporting u — hopefully u dont get cringed out by this. and if u need someone to talk to or just be with — just hit me up, as long as im not busy i'll make time. so un, check lang? safe a`;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          className="secret-modal-overlay"
          initial={{ opacity: 0, backdropFilter: 'blur(0px)' }}
          animate={{ opacity: 1, backdropFilter: 'blur(8px)' }}
          exit={{ opacity: 0, backdropFilter: 'blur(0px)' }}
          transition={{ duration: 0.5 }}
        >
          <motion.button 
            className="modal-close" 
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            aria-label="Close letter"
          >
            <span className="close-icon-actual"></span>
          </motion.button>

          <motion.div 
            className="secret-letter-container"
            ref={contentRef}
            initial={{ 
              opacity: 0, 
              y: 60, 
              rotateX: 45, // Folded effect
              scale: 0.9 
            }}
            animate={{ 
              opacity: 1, 
              y: 0, 
              rotateX: 0,
              scale: 1 
            }}
            exit={{ 
              opacity: 0, 
              y: 40, 
              rotateX: -20,
              scale: 0.95 
            }}
            transition={{ 
              type: "spring", 
              stiffness: 200, 
              damping: 25, 
              mass: 1 
            }}
          >
            <div className="secret-letter-paper">
              {/* Decorative tape up top */}
              <div className="washi-tape letter-tape"></div>
              
              <div className="letter-content">
                <p className="letter-body">{messageText}</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SecretMessageModal;
