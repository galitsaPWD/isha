import { motion } from 'framer-motion';
import SecretNote from './SecretNote';

const Hero = ({ onBrowse, setIsBlushActive, isBlushActive, onOpenSecret }) => {
  return (
    <section className="hero">
      <div className="container hero-container">
        <div className="hero-content">
          <motion.div 
            className="hero-badge"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            est. 2026 — poetry & prose
          </motion.div>
          
          <motion.h1 
            className="hero-title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            isha.
          </motion.h1>
          
          <motion.p 
            className="hero-subtitle"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            a quiet documentation of moments, captured and curated. <br/>
            for the only one who makes the world feel this vivid.
          </motion.p>
          
          <motion.div 
            className="hero-actions"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <button className="primary-btn" onClick={onBrowse}>
              read poems
            </button>
          </motion.div>
        </div>

        <motion.div 
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1.2, delay: 0.3 }}
        >
          <div className="scrapbook-note">
            <div className="note-pin"></div>
            <p className="note-text">
              "i wrote these in the quiet hours <br/>
              when the world went silent <br/>
              and the heart spoke loudest."
            </p>
            <span className="note-signature">— wana</span>
          </div>
          
          {/* Clickable Fragment -> Opens Secret Letter */}
          <motion.div 
            className="scrapbook-fragment"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            onClick={onOpenSecret}
            style={{ cursor: 'pointer' }}
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.95 }}
          >
            <p>si oa</p>
          </motion.div>
        </motion.div>

        {/* Decorative Secret Box (where emoji was) */}
        <div className="secret-fragment-box" style={{ position: 'absolute', top: '12%', right: '8%' }}>
          <div className="fragment-outline"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
