import React, { useState } from 'react';
import { motion } from 'framer-motion';

const ProjectTimeline = () => {
  const [projects] = useState([
    {
      id: 1,
      title: "Character Design Portfolio",
      date: "March 2025",
      description: "Completed a comprehensive collection of character designs exploring different genres and styles.",
      image: "/placeholder-timeline-1.jpg",
      category: "Character Design"
    },
    {
      id: 2,
      title: "Motion Graphics Course",
      date: "January 2025",
      description: "Finished advanced course in motion graphics and visual effects with Adobe After Effects.",
      image: "/placeholder-timeline-2.jpg",
      category: "Education"
    },
    {
      id: 3,
      title: "First Animation Short",
      date: "November 2024",
      description: "Released my first 30-second animation short showcasing basic principles of animation.",
      image: "/placeholder-timeline-3.jpg",
      category: "Animation"
    },
    {
      id: 4,
      title: "Digital Illustration Series",
      date: "August 2024",
      description: "Created a series of 10 digital illustrations exploring themes of mythology and nature.",
      image: "/placeholder-timeline-4.jpg",
      category: "Illustration"
    },
    {
      id: 5,
      title: "Web Development Workshop",
      date: "June 2024",
      description: "Attended intensive workshop on modern web development technologies including React and Three.js.",
      image: "/placeholder-timeline-5.jpg",
      category: "Education"
    }
  ]);

  const [activeProject, setActiveProject] = useState(null);

  return (
    <section className="timeline-section">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Project Timeline
        </motion.h2>
        
        <div className="timeline">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className={`timeline-item ${activeProject === project.id ? 'active' : ''}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => setActiveProject(activeProject === project.id ? null : project.id)}
            >
              <div className="timeline-marker">
                <div className="marker"></div>
              </div>
              
              <div className="timeline-content">
                <div className="timeline-date">
                  <span>{project.date}</span>
                </div>
                
                <div className="timeline-card">
                  <h3>{project.title}</h3>
                  <span className="category-tag">{project.category}</span>
                  {activeProject === project.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="project-detail"
                    >
                      <img src={project.image} alt={project.title} />
                      <p>{project.description}</p>
                    </motion.div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectTimeline;