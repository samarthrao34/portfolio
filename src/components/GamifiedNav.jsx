import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const GamifiedNav = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [points, setPoints] = useState(0);
  const [showPoints, setShowPoints] = useState(false);

  // Track scroll position to highlight active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'gallery', 'sketch', 'timeline', 'resume', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Add points when navigating to a new section
  useEffect(() => {
    const handleSectionChange = () => {
      setPoints(prev => prev + 10);
      setShowPoints(true);
      setTimeout(() => setShowPoints(false), 2000);
    };

    // We'll simulate this for now
    handleSectionChange();
  }, [activeSection]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
      setActiveSection(sectionId);
    }
  };

  return (
    <>
      {/* Points Notification */}
      {showPoints && (
        <motion.div 
          className="points-notification"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
        >
          +10 Points!
        </motion.div>
      )}

      {/* Gamified Navigation */}
      <motion.nav 
        className="gamified-nav"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        <div className="nav-content">
          <div className="points-display">
            <span className="points-label">Points:</span>
            <span className="points-value">{points}</span>
          </div>
          
          <ul className="nav-items">
            <li>
              <motion.button
                className={activeSection === 'home' ? 'active' : ''}
                onClick={() => scrollToSection('home')}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <span className="nav-icon">🏠</span>
                <span className="nav-text">Home</span>
              </motion.button>
            </li>
            <li>
              <motion.button
                className={activeSection === 'about' ? 'active' : ''}
                onClick={() => scrollToSection('about')}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <span className="nav-icon">👤</span>
                <span className="nav-text">About</span>
              </motion.button>
            </li>
            <li>
              <motion.button
                className={activeSection === 'gallery' ? 'active' : ''}
                onClick={() => scrollToSection('gallery')}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <span className="nav-icon">🎨</span>
                <span className="nav-text">Gallery</span>
              </motion.button>
            </li>
            <li>
              <motion.button
                className={activeSection === 'sketch' ? 'active' : ''}
                onClick={() => scrollToSection('sketch')}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <span className="nav-icon">✏️</span>
                <span className="nav-text">Sketch</span>
              </motion.button>
            </li>
            <li>
              <motion.button
                className={activeSection === 'timeline' ? 'active' : ''}
                onClick={() => scrollToSection('timeline')}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <span className="nav-icon">📅</span>
                <span className="nav-text">Timeline</span>
              </motion.button>
            </li>
            <li>
              <motion.button
                className={activeSection === 'resume' ? 'active' : ''}
                onClick={() => scrollToSection('resume')}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <span className="nav-icon">📄</span>
                <span className="nav-text">Resume</span>
              </motion.button>
            </li>
            <li>
              <motion.button
                className={activeSection === 'contact' ? 'active' : ''}
                onClick={() => scrollToSection('contact')}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <span className="nav-icon">📧</span>
                <span className="nav-text">Contact</span>
              </motion.button>
            </li>
          </ul>
        </div>
      </motion.nav>
    </>
  );
};

export default GamifiedNav;