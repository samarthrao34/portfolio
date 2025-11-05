import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const SketchOfTheDay = () => {
  // Sample sketch data - in a real app, this could be dynamically loaded
  const [sketches] = useState([
    {
      id: 1,
      title: "Morning Coffee Sketch",
      date: "2025-10-30",
      image: "/placeholder-sketch-1.jpg",
      description: "Quick morning sketch inspired by the steam rising from my coffee cup."
    },
    {
      id: 2,
      title: "Urban Landscape",
      date: "2025-10-29",
      image: "/placeholder-sketch-2.jpg",
      description: "View from my hostel window capturing the essence of city life."
    },
    {
      id: 3,
      title: "Nature Study",
      date: "2025-10-28",
      image: "/placeholder-sketch-3.jpg",
      description: "Botanical study of local flora during my evening walk."
    }
  ]);

  const [currentSketchIndex, setCurrentSketchIndex] = useState(0);
  const [isRotating, setIsRotating] = useState(false);

  // Auto-rotate sketches every 10 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIsRotating(true);
      setTimeout(() => {
        setCurrentSketchIndex(prev => (prev + 1) % sketches.length);
        setIsRotating(false);
      }, 500);
    }, 10000);

    return () => clearInterval(interval);
  }, [sketches.length]);

  const nextSketch = () => {
    setIsRotating(true);
    setTimeout(() => {
      setCurrentSketchIndex(prev => (prev + 1) % sketches.length);
      setIsRotating(false);
    }, 500);
  };

  const prevSketch = () => {
    setIsRotating(true);
    setTimeout(() => {
      setCurrentSketchIndex(prev => (prev - 1 + sketches.length) % sketches.length);
      setIsRotating(false);
    }, 500);
  };

  const currentSketch = sketches[currentSketchIndex];

  return (
    <section className="sketch-section">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Sketch of the Day
        </motion.h2>
        
        <div className="sketch-container">
          <motion.button 
            className="nav-button prev"
            onClick={prevSketch}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            &#8249;
          </motion.button>
          
          <motion.div 
            className="sketch-display"
            animate={{ rotateY: isRotating ? 360 : 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <div className="sketch-image">
              <img src={currentSketch.image} alt={currentSketch.title} />
            </div>
            <div className="sketch-info">
              <h3>{currentSketch.title}</h3>
              <p className="date">{currentSketch.date}</p>
              <p className="description">{currentSketch.description}</p>
            </div>
          </motion.div>
          
          <motion.button 
            className="nav-button next"
            onClick={nextSketch}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            &#8250;
          </motion.button>
        </div>
        
        <div className="sketch-indicators">
          {sketches.map((_, index) => (
            <button
              key={index}
              className={`indicator ${index === currentSketchIndex ? 'active' : ''}`}
              onClick={() => {
                setIsRotating(true);
                setTimeout(() => {
                  setCurrentSketchIndex(index);
                  setIsRotating(false);
                }, 500);
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SketchOfTheDay;