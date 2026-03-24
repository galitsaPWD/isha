import React from 'react';
import { motion } from 'framer-motion';

const About = ({ setCurrentView }) => {
  return (
    <section className="about-section container">
      <motion.div 
        className="about-paper"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <button className="modal-close" onClick={() => setCurrentView('home')} aria-label="Return home"></button>

        {/* Scrapbook Elements */}
        <motion.div className="polaroid p1" drag dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}>
          <div className="washi-tape"></div>
          <div className="polaroid-frame">
            <div className="polaroid-img-container">
              <img src="/isha/photo1.jpg" alt="" onError={(e) => e.target.style.display = 'none'} />
              <div className="polaroid-placeholder-text">photo 1</div>
            </div>
            <div className="polaroid-caption">captured moments.</div>
          </div>
        </motion.div>

        <motion.div className="polaroid p2" drag dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}>
          <div className="washi-tape wt-alt"></div>
          <div className="polaroid-frame">
            <div className="polaroid-img-container">
              <img src="/isha/photo2.jpg" alt="" onError={(e) => e.target.style.display = 'none'} />
              <div className="polaroid-placeholder-text">photo 2</div>
            </div>
            <div className="polaroid-caption">vivid memories.</div>
          </div>
        </motion.div>

        <motion.h2 
          className="about-title"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          why i write.
        </motion.h2>
        
        <div className="about-content">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            this space was created for you, isha. <br/>
            every word in these pages is a documentation of the moments 
            where the world felt too big and my heart felt too loud.
          </motion.p>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="staggered-text"
          >
            i wrote these fragments so they never fade. <br/>
            i wrote them for the version of us that found peace in the quiet.
          </motion.p>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            every line is a confession. every poem is a place i've stayed with you.
          </motion.p>
        </div>

        <motion.div 
          className="about-signature"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          with love, <br/>
          wana.
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;
