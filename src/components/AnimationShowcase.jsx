import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import '../styles/AnimationShowcase.css';

const AnimationShowcase = () => {
  const [animations, setAnimations] = useState([]);
  const [selectedAnimation, setSelectedAnimation] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadAnimations();
  }, []);

  const loadAnimations = () => {
    // Load animations from VIP/Animations folder
    const animationList = [
      'and yess!.mp4', 'anm1.mp4', 'blob.mp4', 'bouncing shapes.mp4', 'bubbuls rain.mp4',
      'car-crashing.mp4', 'cat.mp4', 'dog.mp4', 'Expression+ (1).mp4', 'eye+roll.mp4',
      'fire.mp4', 'float.mp4', 'jump+up.mp4', 'jumping ball.mp4', 'manshion.mp4',
      'pompom.mp4', 'shocking.mp4', 'Sit.mp4', 'sprite+a+nm.mp4', 'switch.mp4', 'text.mp4',
      'VID-20251002-WA0006.mp4', 'VID-20251030-WA0001.mp4', 'VID-20251030-WA0002.mp4',
      'VID-20251030-WA0003.mp4', 'VID-20251030-WA0004.mp4', 'VID-20251103-WA0008.mp4',
      'VID-20251103-WA0009.mp4', 'VID-20251103-WA0010.mp4', 'VID_20250416_225221_078.mp4'
    ].map(name => ({
      path: `/VIP/Animations/${name}`,
      name: name.replace('.mp4', ''),
      thumbnail: `/VIP/Animations/${name}`
    }));

    setAnimations(animationList);
    setLoading(false);
  };

  const openModal = (animation) => {
    setSelectedAnimation(animation);
  };

  const closeModal = () => {
    setSelectedAnimation(null);
  };

  return (
    <section className="animation-showcase" id="animations">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="section-header"
        >
          <h2 className="section-title">Animation Reel</h2>
          <p className="section-subtitle">
            Character animations, motion studies, and animated stories
          </p>
        </motion.div>

        {/* Animation Grid */}
        <div className="animation-grid">
          {loading ? (
            <div className="loading-state">
              <p>Loading animations...</p>
            </div>
          ) : animations.length > 0 ? (
            animations.map((animation, index) => (
              <motion.div
                key={animation.path}
                className="animation-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.03, y: -5 }}
                onClick={() => openModal(animation)}
              >
                <div 
                  className="animation-preview"
                  onMouseEnter={(e) => {
                    const video = e.currentTarget.querySelector('video');
                    if (video && window.innerWidth > 768) video.play();
                  }}
                  onMouseLeave={(e) => {
                    const video = e.currentTarget.querySelector('video');
                    if (video && window.innerWidth > 768) {
                      video.pause();
                      video.currentTime = 0;
                    }
                  }}
                  onTouchStart={(e) => {
                    const video = e.currentTarget.querySelector('video');
                    if (video && video.paused) {
                      video.play();
                    }
                  }}
                >
                  <video
                    src={animation.path}
                    className="preview-video"
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    poster={animation.thumbnail}
                  />
                  <div className="play-overlay">
                    <span className="play-icon">▶</span>
                  </div>
                </div>
              </motion.div>
            ))
          ) : (
            <div className="empty-state">
              <p>No animations found yet.</p>
              <p className="empty-hint">Add MP4 files to the VIP/Animations folder to see them here!</p>
            </div>
          )}
        </div>

        {/* Modal for full-screen video */}
        {selectedAnimation && (
          <motion.div
            className="animation-modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <motion.div
              className="modal-content"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button className="modal-close" onClick={closeModal}>×</button>
              <video
                src={selectedAnimation.path}
                controls
                autoPlay
                className="modal-video"
              />
              <h3 className="modal-title">{selectedAnimation.name}</h3>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default AnimationShowcase;
