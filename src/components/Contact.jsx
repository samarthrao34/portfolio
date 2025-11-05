import React from 'react';
import { motion } from 'framer-motion';
import '../styles/Contact.css';

const Contact = () => {
  const socialLinks = [
    { name: 'Email', icon: '📧', url: 'https://mail.google.com/mail/?view=cm&fs=1&to=vipshyana1127@gmail.com', display: 'vipshyana1127@gmail.com', color: '#EA4335' },
    { name: 'Instagram', icon: '📸', url: 'https://www.instagram.com/pompom_sketches25', display: '@vipshyanaupadhyay', color: '#E4405F' },
    { name: 'LinkedIn', icon: '💼', url: 'https://www.linkedin.com/in/vipshyana-5-vip/', display: 'vipshyanaupadhyay', color: '#0077B5' },
    { name: 'YouTube', icon: '🎥', url: 'https://www.youtube.com/@cutieclouds', display: '@vipshyanaupadhyay', color: '#FF0000' },
    { name: 'Behance', icon: '🖌️', url: 'https://www.behance.net/gallery/236036379/Designs', display: '@vipshyanaupadhyay', color: '#1769FF' }
  ];

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <motion.div className="section-header" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <h2 className="section-title">Let's Connect!</h2>
          <p className="section-subtitle cozy-tagline"> I'd love to hear from you</p>
        </motion.div>
        <motion.div className="contact-content" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}>
          <div className="cta-message">
            <motion.div className="cta-box" whileHover={{ scale: 1.02 }}>
              <h3 className="cta-title"> Let's Create Something Amazing</h3>
              <p className="cta-text">Whether you have a project in mind, want to collaborate, or just want to say hi—I'm always excited to connect with fellow creatives and potential clients!</p>
              <p className="cta-text warm">Drop me a message through any of the channels below, and I'll get back to you as soon as possible. Let's bring your ideas to life! </p>
            </motion.div>
          </div>
          <div className="social-links-grid">
            {socialLinks.map((social, index) => (
              <motion.a key={social.name} href={social.url} target="_blank" rel="noopener noreferrer" className="social-card" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} whileHover={{ y: -8, scale: 1.03 }} style={{ '--accent-color': social.color }}>
                <div className="social-icon">{social.icon}</div>
                <div className="social-info">
                  <h4 className="social-name">{social.name}</h4>
                  <p className="social-handle">{social.display}</p>
                </div>
                <div className="social-arrow"></div>
              </motion.a>
            ))}
          </div>
          <motion.div className="quick-contact" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.6 }}>
            <div className="quick-contact-item">
              <span className="contact-icon"></span>
              <div className="contact-details"><h4>Location</h4><p>Varanasi, India</p></div>
            </div>
            <div className="quick-contact-item">
              <span className="contact-icon"></span>
              <div className="contact-details"><h4>Response Time</h4><p>Usually within 24-48 hours</p></div>
            </div>
            <div className="quick-contact-item">
              <span className="contact-icon"></span>
              <div className="contact-details"><h4>Availability</h4><p>Open for commissions & collaborations</p></div>
            </div>
          </motion.div>
          <motion.div className="email-cta" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.8 }}>
            <p className="email-text">Prefer email?</p>
            <motion.a href="https://mail.google.com/mail/?view=cm&fs=1&to=vipshyana1127@gmail.com" target="_blank" rel="noopener noreferrer" className="email-button" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <span className="email-icon">📧</span><span>Send me an email</span>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
