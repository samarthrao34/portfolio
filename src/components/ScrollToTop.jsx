import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import '../styles/ScrollToTop.css';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentSection, setCurrentSection] = useState('hero');

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    const detectSection = () => {
      const sections = [
        { id: 'home', name: 'hero' },
        { id: 'illustrations', name: 'illustrations' },
        { id: 'animations', name: 'animations' },
        { id: 'process', name: 'process' },
        { id: 'about', name: 'about' },
        { id: 'contact', name: 'contact' }
      ];

      const scrollPosition = window.pageYOffset + window.innerHeight / 2;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i].id);
        if (section && section.offsetTop <= scrollPosition) {
          setCurrentSection(sections[i].name);
          break;
        }
      }
    };

    const handleScroll = () => {
      toggleVisibility();
      detectSection();
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          className={`scroll-to-top scroll-to-top--${currentSection}`}
          onClick={scrollToTop}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={{ duration: 0.3 }}
        >
          <span className="arrow">↑</span>
          <span className="emoji">✨</span>
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTop;
