import React from 'react';
import { motion } from 'framer-motion';

const Nav = ({ currentView, setCurrentView, theme, toggleTheme, openRandomPoem, openMusic, setIsBlushActive }) => {
  return (
    <header className="site-header">
      <div className="container header-container">
        <motion.div 
          className="brand"
          whileHover={{ scale: 1.05 }}
          onClick={() => setCurrentView('home')}
          onMouseEnter={() => setIsBlushActive(true)}
          onMouseLeave={() => setIsBlushActive(false)}
        >
          <span className="brand-text">isha.</span>
          <motion.span 
            className="brand-mark"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            *
          </motion.span>
        </motion.div>

        <nav className="nav">
          <button 
            className={`nav-link ${currentView === 'home' ? 'is-active' : ''}`}
            onClick={() => setCurrentView('home')}
          >
            home
          </button>
          <button 
            className={`nav-link ${currentView === 'poems' ? 'is-active' : ''}`}
            onClick={() => setCurrentView('poems')}
          >
            poems
          </button>
          <button 
            className={`nav-link ${currentView === 'about' ? 'is-active' : ''}`}
            onClick={() => setCurrentView('about')}
          >
            about
          </button>
        </nav>

        <div className="header-actions">
          <button className="action-btn" title="Random Poem" onClick={openRandomPoem}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M16 3h5v5" />
              <path d="M4 20L21 3" />
              <path d="M21 16v5h-5" />
              <path d="M15 15l6 6" />
              <path d="M4 4l5 5" />
            </svg>
          </button>
          <button className="action-btn" title="Toggle Theme" onClick={toggleTheme}>
            {theme === 'day' ? (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </svg>
            ) : (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="5" />
                <path d="M12 1v2m0 18v2M4.22 4.22l1.42 1.42m12.72 12.72l1.42 1.42M1 12h2m18 0h2M4.22 19.78l1.42-1.42M17.66 6.34l1.42-1.42" />
              </svg>
            )}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Nav;
