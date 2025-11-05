import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <motion.div 
            className="footer-info"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3>Vipshyana</h3>
            <p>B.Tech CSE Student | Animation & Digital Illustration Artist</p>
          </motion.div>
          
          <motion.div 
            className="footer-links"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#gallery">Gallery</a></li>
              <li><a href="#contact">Contact</a></li>
              <li><a href="#resume">Resume</a></li>
            </ul>
          </motion.div>
          
          <motion.div 
            className="social-media"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <a href="#" aria-label="Instagram">Instagram</a>
            <a href="#" aria-label="Behance">Behance</a>
            <a href="#" aria-label="LinkedIn">LinkedIn</a>
            <a href="#" aria-label="ArtStation">ArtStation</a>
          </motion.div>
        </div>
        
        <motion.div 
          className="copyright"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <p>&copy; {new Date().getFullYear()} Vipshyana. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;