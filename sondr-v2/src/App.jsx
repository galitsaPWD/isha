import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { poems } from './data/poems';
import Nav from './components/Nav';
import Hero from './components/Hero';
import PoemsGrid from './components/PoemsGrid';
import About from './components/About';
import PoemModal from './components/PoemModal';
import AmbientPlayer from './components/AmbientPlayer';
import SecretMessageModal from './components/SecretMessageModal';

import Envelope from './components/Envelope';

function App() {
  const [currentView, setCurrentView] = useState('home');
  const [isEnvelopeOpened, setIsEnvelopeOpened] = useState(false);
  const [isBlushActive, setIsBlushActive] = useState(false);
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('isha-theme') || 'day';
    }
    return 'day';
  });
  const [selectedPoemId, setSelectedPoemId] = useState(null);
  const [isSecretOpen, setIsSecretOpen] = useState(false);

  useEffect(() => {
    let activeTheme = theme;
    if (isBlushActive) activeTheme = 'blush';
    
    document.body.className = activeTheme !== 'day' ? `theme-${activeTheme}` : '';
    // We don't persist blush mode to localStorage as it's an easter egg
    if (!isBlushActive) {
      localStorage.setItem('isha-theme', theme);
    }
  }, [theme, isBlushActive]);

  const toggleTheme = () => setTheme(prev => prev === 'day' ? 'night' : 'day');
  
  const openRandomPoem = () => {
    const randomPoem = poems[Math.floor(Math.random() * poems.length)];
    setCurrentView('poems');
    setSelectedPoemId(randomPoem.id);
  };

  return (
    <div className="app-shell">
      <AnimatePresence>
        {!isEnvelopeOpened && (
          <Envelope onOpen={() => setIsEnvelopeOpened(true)} />
        )}
      </AnimatePresence>
      <Nav 
        currentView={currentView} 
        setCurrentView={setCurrentView} 
        theme={theme} 
        toggleTheme={toggleTheme}
        openRandomPoem={openRandomPoem}
        setIsBlushActive={setIsBlushActive}
      />

      <main className="content-area">
        <AnimatePresence mode="wait">
          {currentView === 'home' && (
            <motion.div
              key="home"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              <Hero 
                onBrowse={() => setCurrentView('poems')} 
                setIsBlushActive={setIsBlushActive}
                isBlushActive={isBlushActive}
                onOpenSecret={() => setIsSecretOpen(true)}
              />
            </motion.div>
          )}

          {currentView === 'poems' && (
            <motion.div
              key="poems"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
            >
              <PoemsGrid poems={poems} onPoemClick={setSelectedPoemId} />
            </motion.div>
          )}

          {currentView === 'about' && (
            <motion.div
              key="about"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.02 }}
              transition={{ duration: 0.4 }}
            >
              <About setCurrentView={setCurrentView} />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      <PoemModal 
        poem={poems.find(p => p.id === selectedPoemId)} 
        onClose={() => setSelectedPoemId(null)} 
      />

      <SecretMessageModal 
        isOpen={isSecretOpen} 
        onClose={() => setIsSecretOpen(false)} 
      />

      <AmbientPlayer />

      {/* Background Layers */}
      <div className="ambient-glow"></div>
      <div className="blush-overlay"></div>
      
      {/* Decorative Elements */}
      <div id="cursorAura" className="cursor-aura"></div>
    </div>
  );
}

export default App;
