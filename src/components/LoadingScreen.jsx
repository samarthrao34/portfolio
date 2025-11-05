import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const LoadingScreen = ({ isLoading, setIsLoading }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (isLoading) {
      const timer = setInterval(() => {
        setProgress(prev => {
          if (prev >= 100) {
            clearInterval(timer);
            setTimeout(() => setIsLoading(false), 500);
            return 100;
          }
          return prev + 1;
        });
      }, 30);

      return () => clearInterval(timer);
    }
  }, [isLoading, setIsLoading]);

  if (!isLoading) return null;

  return (
    <motion.div 
      className="loading-screen"
      initial={{ opacity: 1 }}
      animate={{ opacity: isLoading ? 1 : 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="loading-content">
        <motion.div 
          className="loading-logo"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h1>Vipshyana</h1>
          <span>Portfolio</span>
        </motion.div>
        
        <motion.div 
          className="loading-progress"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.3 }}
        />
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          Loading portfolio... {progress}%
        </motion.p>
      </div>
    </motion.div>
  );
};

export default LoadingScreen;