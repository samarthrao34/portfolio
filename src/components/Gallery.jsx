import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Gallery = () => {
  const [items, setItems] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedItem, setSelectedItem] = useState(null);
  const observerRef = useRef(null);

  useEffect(() => {
    fetch('/animation/manifest.json')
      .then((res) => res.json())
      .then((data) => {
        const mapped = data.map((entry, idx) => ({
          id: idx + 1,
          title: entry.filename,
          type: entry.type,
          src: entry.path,
          // simple thumbnail: use itself for images; placeholder for videos
          thumbnail: entry.type === 'image' ? entry.path : '/placeholders/placeholder-video-1.jpg',
          description: entry.type === 'image' ? 'Image from animation collection' : 'Video from animation collection',
        }));
        setItems(mapped);
      })
      .catch(() => setItems([]));
  }, []);

  useEffect(() => {
    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const video = entry.target;
        if (entry.isIntersecting) {
          if (video.dataset.src && !video.src) {
            video.src = video.dataset.src;
          }
          video.setAttribute('preload', 'metadata');
        }
      });
    }, { rootMargin: '200px' });

    return () => {
      if (observerRef.current) observerRef.current.disconnect();
    };
  }, []);

  useEffect(() => {
    const videos = document.querySelectorAll('.artwork-thumbnail video[data-src]');
    videos.forEach((v) => observerRef.current && observerRef.current.observe(v));
    return () => {
      videos.forEach((v) => observerRef.current && observerRef.current.unobserve(v));
    };
  }, [items]);

  const categories = ["All", "Images", "Videos"];

  const filtered = items.filter((it) => {
    if (selectedCategory === 'All') return true;
    if (selectedCategory === 'Images') return it.type === 'image';
    if (selectedCategory === 'Videos') return it.type === 'video';
    return true;
  });

  const openModal = (item) => {
    setSelectedItem(item);
  };

  const closeModal = () => {
    setSelectedItem(null);
  };

  // Close on Escape key when modal is open
  useEffect(() => {
    if (!selectedItem) return;
    const onKey = (e) => {
      if (e.key === 'Escape') {
        closeModal();
      }
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [selectedItem]);

  return (
    <section id="gallery" className="gallery-section">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Artwork Gallery
        </motion.h2>
        
        <motion.div 
          className="category-filter"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {categories.map((category) => (
            <button
              key={category}
              className={selectedCategory === category ? 'active' : ''}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </motion.div>
        
        <motion.div 
          className="artwork-grid"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {filtered.map((art) => (
            <motion.div
              key={art.id}
              className="artwork-card"
              whileHover={{ y: -10, scale: 1.03 }}
              transition={{ type: "spring", stiffness: 300 }}
              onClick={() => openModal(art)}
            >
              <div className="artwork-thumbnail">
                {art.type === 'image' ? (
                  <img src={art.thumbnail} alt={art.title} loading="lazy" decoding="async" />
                ) : (
                  <video controls={false} poster={art.thumbnail} data-src={art.src} muted playsInline />
                )}
              </div>
              <div className="artwork-info">
                <h3>{art.title}</h3>
                <span className="category-tag">{art.type === 'image' ? 'Image' : 'Video'}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
      
      {/* Modal for artwork detail */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div 
            className="artwork-modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
            role="dialog"
            aria-modal="true"
          >
            <motion.div 
              className="modal-content"
              initial={{ scale: 0.8, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.8, y: 50 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button className="close-button" onClick={closeModal}>×</button>
              <div className="modal-media">
                {selectedItem.type === 'image' ? (
                  <img src={selectedItem.src} alt={selectedItem.title} />
                ) : (
                  <video src={selectedItem.src} controls playsInline />
                )}
              </div>
              <div className="modal-info">
                <h3>{selectedItem.title}</h3>
                <span className="category-tag">{selectedItem.type === 'image' ? 'Image' : 'Video'}</span>
                <p>{selectedItem.description}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;