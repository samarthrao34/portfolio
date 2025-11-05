import React from 'react';
import { motion } from 'framer-motion';

const Resume = () => {
  return (
    <section id="resume" className="resume-section">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Resume
        </motion.h2>
        
        <motion.div 
          className="resume-content"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="resume-header">
            <div className="personal-info">
              <h1>Vipshyana</h1>
              <p>B.Tech Computer Science & Engineering Student</p>
              <p>Ashoka Institute of Technology & Management, Varanasi</p>
            </div>
            
            <div className="contact-summary">
              <p>Email: vipshyana1127@gmail.com</p>
              <p>Phone: +91 XXXXXXXXXX</p>
              <p>Location: Varanasi, Uttar Pradesh, India</p>
            </div>
          </div>
          
          <div className="resume-body">
            <div className="resume-column">
              <div className="resume-section-block">
                <h3>Education</h3>
                <div className="education-item">
                  <h4>B.Tech in Computer Science & Engineering</h4>
                  <p className="institution">Ashoka Institute of Technology & Management, Varanasi</p>
                  <p className="duration">2022 - 2026</p>
                  <p>Current CGPA: 8.5/10</p>
                </div>
                
                <div className="education-item">
                  <h4>Higher Secondary Education (12th Grade)</h4>
                  <p className="institution">XYZ Public School, Varanasi</p>
                  <p className="duration">2020 - 2022</p>
                  <p>Percentage: 92%</p>
                </div>
              </div>
              
              <div className="resume-section-block">
                <h3>Technical Skills</h3>
                <div className="skills-category">
                  <h4>Animation & Design Software</h4>
                  <ul>
                    <li>Blender 3D</li>
                    <li>Adobe After Effects</li>
                    <li>Adobe Photoshop</li>
                    <li>Adobe Illustrator</li>
                    <li>Toon Boom Harmony</li>
                  </ul>
                </div>
                
                <div className="skills-category">
                  <h4>Programming & Web Technologies</h4>
                  <ul>
                    <li>HTML/CSS/JavaScript</li>
                    <li>React.js</li>
                    <li>Python</li>
                    <li>Java</li>
                    <li>WebGL/Three.js</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="resume-column">
              <div className="resume-section-block">
                <h3>Projects & Portfolio</h3>
                <div className="project-item">
                  <h4>Interactive 3D Character Animation</h4>
                  <p className="duration">2024</p>
                  <p>Created a fully rigged 3D character with realistic movements using Blender and implemented interactive controls using Three.js.</p>
                </div>
                
                <div className="project-item">
                  <h4>Motion Graphics Showreel</h4>
                  <p className="duration">2023</p>
                  <p>Developed a 2-minute motion graphics reel showcasing typography animation, visual effects, and compositing techniques.</p>
                </div>
                
                <div className="project-item">
                  <h4>Digital Illustration Series</h4>
                  <p className="duration">2023</p>
                  <p>Created a collection of 15 digital paintings exploring themes of mythology and nature using Procreate and Photoshop.</p>
                </div>
              </div>
              
              <div className="resume-section-block">
                <h3>Achievements & Exhibitions</h3>
                <div className="achievement-item">
                  <h4>College Annual Art Exhibition Winner</h4>
                  <p className="duration">2024</p>
                  <p>Won first prize for the "Best Digital Artwork" category for my piece "Cosmic Dance".</p>
                </div>
                
                <div className="achievement-item">
                  <h4>Online Animation Challenge Participant</h4>
                  <p className="duration">2023</p>
                  <p>Participated in the #30DaysOfAnimation challenge, creating one animation piece daily for a month.</p>
                </div>
              </div>
            </div>
          </div>
          
          <motion.div 
            className="download-resume"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <a href="/Resume_Vipshyana.pdf" download className="download-button">
              Download Full Resume (PDF)
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Resume;