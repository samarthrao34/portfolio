import React from 'react';
import { motion } from 'framer-motion';
import '../styles/About.css';

const About = ({ featuredImageSrc = null, featuredImageAlt = 'Vipshyana Upadhyay' }) => {
  const handleDownloadCV = () => {
    // Create a link to download Resume
    const link = document.createElement('a');
    link.href = '/cv/Resume_Vipshyana.pdf'; // Resume in public/cv folder
    link.download = 'Resume_Vipshyana.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="about" className="about-section">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle cozy-tagline">
            ☕ Welcome to my cozy corner of creativity
          </p>
        </motion.div>
        
        <div className="about-content">
          <motion.div 
            className="profile-section"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="profile-image-container">
              {featuredImageSrc && (
                <img src={featuredImageSrc} alt={featuredImageAlt} className="profile-image" />
              )}
              <div className="profile-decoration">
                <span className="deco-element">✨</span>
                <span className="deco-element">🎨</span>
                <span className="deco-element">🌟</span>
              </div>
            </div>
            
            <div className="profile-name">
              <h3 className="artist-name">Vipshyana Upadhyay</h3>
              <p className="artist-title">Animator & Illustrator</p>
            </div>
          </motion.div>
          
          <motion.div 
            className="bio-section"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="artist-statement">
              <h3 className="statement-title">My Story</h3>
              <p className="warm-intro">
                Hi there! I'm Vipshyana, and I believe every frame tells a story. ✨
              </p>
              <p>
                I'm an animator and illustrator who loves creating warm, imaginative worlds that 
                feel like a cozy embrace. Whether it's bringing quirky characters to life through 
                animation or painting dreamy illustrations, I pour my heart into every creative piece.
              </p>
              <p>
                My work is all about capturing those little moments of magic—the kind that makes 
                you smile, think, or feel something special. I draw inspiration from everyday life, 
                nature, whimsical stories, and the endless possibilities of imagination.
              </p>
              <p className="personal-touch">
                When I'm not animating or drawing, you'll find me sipping tea, doodling in my 
                sketchbook, or getting lost in animated films. Let's create something beautiful together! 🌸
              </p>
            </div>
            
            <div className="skills-section">
              <h3 className="skills-title">What I Bring to the Table</h3>
              
              <div className="skills-grid">
                <div className="skill-category">
                  <h4 className="category-title">
                    <span className="category-icon">🎨</span>
                    Software Skills
                  </h4>
                  <ul className="skill-list">
                    <li>Adobe Portfolio / Canva </li>
                    <li>Photoshop / Illustrator</li>
                    <li>Procreate / Clip Studio Paint</li>
                   
                    <li>Krita</li>
                  </ul>
                </div>
                
                <div className="skill-category">
                  <h4 className="category-title">
                    <span className="category-icon">✨</span>
                    Creative Skills
                  </h4>
                  <ul className="skill-list">
                    <li>2D Character Animation</li>
                    <li>Digital Illustration</li>
                    <li>Storyboarding</li>
                    <li>Character Design</li>
                    <li>Visual Storytelling</li>
                    <li>Color Theory & Composition</li>
                  </ul>
                </div>
                
                <div className="skill-category">
                  <h4 className="category-title">
                    <span className="category-icon">💫</span>
                    Soft Skills
                  </h4>
                  <ul className="skill-list">
                    <li>Creative Problem Solving</li>
                    <li>Attention to Detail</li>
                    <li>Time Management</li>
                    <li>Collaboration & Teamwork</li>
                    <li>Adaptability</li>
                    <li>Continuous Learning</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Download Resume Button */}
            <motion.div 
              className="cv-download-section"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <motion.button
                className="cv-download-btn"
                onClick={handleDownloadCV}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="btn-icon">📄</span>
                <span className="btn-text">Download My Resume</span>
              </motion.button>
              <p className="cv-hint">Get a detailed overview of my experience and skills</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;