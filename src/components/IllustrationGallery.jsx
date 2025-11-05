import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import '../styles/IllustrationGallery.css';

const IllustrationGallery = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [illustrations, setIllustrations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState(null);

  const categories = [
    { id: 'all', name: 'All', folder: 'all' },
    { id: 'illustration', name: 'Illustrations', folder: 'Illustration' },
    { id: 'design', name: 'Design', folder: 'Design' },
    { id: 'background', name: 'Backgrounds', folder: 'Background' },
    { id: 'mws', name: 'MWS Project', folder: 'MWS' },
    { id: 'roughs', name: 'Roughs & Sketches', folder: 'Roughs' },
    { id: 'bubbuls', name: 'Bubbuls', folder: 'Bubbuls' },
    { id: 'traditional', name: 'Traditional Art', folder: 'Traditional Art' },
    { id: 'wip', name: 'WIP', folder: 'WIP' }
  ];

  useEffect(() => {
    loadIllustrations();
  }, []);

  const loadIllustrations = () => {
    console.log('Loading illustrations...');
    
    // Illustration images
    const illustrationImages = [
      '11.jpg', 'as.jpg', 'char des.jpg', 'character .jpg', 'color prt.jpg',
      'DTIYS.jpg', 'grl w flwr.jpg', 'grl w flwr2.jpg', 'heeta.jpg', 'ii.jpg', 'illustration.jpg',
      'IMG-20251002-WA0014.jpg', 'IMG-20251002-WA0015.jpg', 'IMG-20251002-WA0018.jpg',
      'IMG-20251002-WA0019.jpg', 'IMG-20251002-WA0025.jpg', 'IMG-20251002-WA0026.jpg',
      'IMG-20251030-WA0017.jpg', 'IMG-20251030-WA0018.jpg',
      'IMG-20251030-WA0019.jpg', 'IMG-20251030-WA0020.jpg', 'IMG-20251030-WA0021.jpg',
      'IMG-20251030-WA0024.jpg', 'IMG-20251030-WA0027.jpg', 'IMG-20251030-WA0030.jpg',
      'IMG-20251030-WA0032.jpg', 'IMG-20251030-WA0033.jpg', 'IMG-20251030-WA0034.jpg',
      'IMG-20251030-WA0035.jpg', 'IMG-20251030-WA0037.jpg', 'IMG-20251103-WA0006.jpg',
      'IMG-20251103-WA0007.jpg', 'kpop.jpg', 'oldman.jpg', 'pomm.jpg', 'pp.jpg', 'witch.jpg',
      'WhatsApp Image 2025-08-05 at 22.46.14_583e1099.jpg'
    ].map(name => ({ path: `/VIP/Illustration/${name}`, category: 'illustration', name }));

    // Design images
    const designImages = [
      'blrn.png', 'genie.png', 'PA - 1.png', 'trvl.png'
    ].map(name => ({ path: `/VIP/Design/${name}`, category: 'design', name }));

    // Background images
    const backgroundImages = [
      'bg red.jpg', 'bg.jpg', 'bg3.jpg', 'bg4.jpg', 'city.jpg',
      'mansion.jpg', 'paint house.jpg', 'pom.jpg'
    ].map(name => ({ path: `/VIP/Background/${name}`, category: 'background', name }));

    // MWS Project images
    const mwsImages = [
      'bg1.jpg', 'bg2.jpg', 'bg3.jpg', 'faceoff.jpg', 'mwsdes.jpg',
      'sheriff_s cabin 2.jpg', 'sheriff_s cabin rough.jpg', 'sheriff_s cabin.jpg',
      'storage area.jpg', 'WhatsApp Image 2025-03-28 at 14.38.48.jpeg',
      'WhatsApp Image 2025-03-28 at 14.38.49.jpeg'
    ].map(name => ({ path: `/VIP/MWS/${name}`, category: 'mws', name }));

    // Roughs & Sketches images
    const roughsImages = [
      'bg shelter 1 rough.jpg', 'bg shelter 2 rough.jpg', 'bg shelter 3 rough.jpg',
      'BG1 rough 1st.jpg', 'BG1 rough 2+.jpg.jpg', 'BG1 rough 2nd.jpg',
      'BG1 rough 2nd.jpg.jpg', 'BG1 rough 3.jpg.jpg', 'BG1 rough 4.jpg.jpg',
      'character rough.jpg', 'character rough2.jpg', 'dgm bg.jpg', 'donut guy 1.jpg',
      'duckSHEET.jpg', 'expression sheet txt.jpg', 'expression sheet.jpg',
      'IMG-20251002-WA0023.jpg', 'IMG-20251030-WA0031.jpg', 'IMG-20251030-WA0042.jpg',
      'sh 303 airport.jpg'
    ].map(name => ({ path: `/VIP/Roughs/${name}`, category: 'roughs', name }));

    // Character Sheets images (moved to Roughs folder, so we skip this)
    const sheetsImages = [];

    // Bubbuls images
    const bubbulsImages = [
      'bubbuls 4.jpg', 'bubbuls rain.jpg', 'hardsg.jpg', 'IMG-20251030-WA0023.jpg'
    ].map(name => ({ path: `/VIP/Bubbuls/${name}`, category: 'bubbuls', name }));

    // Traditional Art images
    const traditionalImages = [
      '24.jpg', '25.jpg', '26.jpg', '27.jpg', '28.jpg', '29.jpg'
    ].map(name => ({ path: `/VIP/Traditional Art/${name}`, category: 'traditional', name }));

    // WIP images (only JPG/JPEG files, excluding videos)
    const wipImages = [
      '1c6e2bb9-9e9b-4907-93b9-12c55a861105.jpg', '20250515_124955.jpg', '20250515_125025.jpg',
      '20250827_212944.jpg', '20250827_212951.jpg', '20250906_212238.jpg', '20250906_212946.jpg',
      '20250906_220456.jpg', '20250909_214910.jpg', '20250916_144045.jpg',
      '319e21c5-7baf-43a9-a2dc-57ffac122f18.jpg', '932dba08-9273-4978-a2f3-75ba9e6be450.jpg',
      'b797d82c-bafd-4237-8dcd-50201b733b19.jpg', 'b847a0b3-dccc-4884-a0eb-f20fad3a654f.jpg',
      'chatgpt-1759073303753.jpg', 'IMG-20250515-WA0031.jpeg', 'IMG-20250515-WA0039.jpeg',
      'IMG-20250904-WA0022.jpg', 'IMG-20250909-WA0016.jpeg', 'IMG-20250914-WA0032.jpeg',
      'IMG-20250914-WA0040.jpeg', 'IMG-20250920-WA0011.jpeg', 'IMG-20250920-WA0013.jpeg',
      'IMG-20250920-WA0015.jpeg', 'IMG-20250920-WA0019.jpeg', 'IMG-20250920-WA0021.jpeg',
      'IMG-20250920-WA0023.jpeg'
    ].map(name => ({ path: `/VIP/WIP/${name}`, category: 'wip', name }));

    const allImages = [
      ...illustrationImages,
      ...designImages,
      ...backgroundImages,
      ...mwsImages,
      ...roughsImages,
      ...sheetsImages,
      ...bubbulsImages,
      ...traditionalImages,
      ...wipImages
    ];

    console.log(`Total images loaded: ${allImages.length}`);
    console.log('Categories breakdown:', {
      illustration: illustrationImages.length,
      design: designImages.length,
      background: backgroundImages.length,
      mws: mwsImages.length,
      roughs: roughsImages.length,
      sheets: sheetsImages.length,
      bubbuls: bubbulsImages.length,
      traditional: traditionalImages.length,
      wip: wipImages.length
    });

    setIllustrations(allImages);
    setLoading(false);
  };

  const filteredIllustrations = activeCategory === 'all' 
    ? illustrations 
    : illustrations.filter(img => img.category === activeCategory);

  const openImageModal = (image) => {
    setSelectedImage(image);
  };

  const closeImageModal = () => {
    setSelectedImage(null);
  };

  return (
    <section className="illustration-gallery" id="illustrations">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="section-header"
        >
          <h2 className="section-title">Illustrations</h2>
          <p className="section-subtitle">
            A collection of visual stories, characters, and worlds
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div 
          className="category-filter"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          {categories.map(category => (
            <motion.button
              key={category.id}
              className={`filter-btn ${activeCategory === category.id ? 'active' : ''}`}
              onClick={() => setActiveCategory(category.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category.name}
            </motion.button>
          ))}
        </motion.div>

        {/* Gallery Grid */}
        <AnimatePresence mode="wait">
          <motion.div 
            className="gallery-grid"
            key={activeCategory}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {loading ? (
              <div className="loading-state">
                <p>Loading illustrations...</p>
              </div>
            ) : filteredIllustrations.length > 0 ? (
              filteredIllustrations.map((img, index) => (
                <motion.div
                  key={img.path}
                  className="gallery-item"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ scale: 1.02, y: -5 }}
                  onClick={() => openImageModal(img)}
                  style={{ cursor: 'pointer' }}
                >
                  <div className="image-wrapper">
                    <img 
                      src={img.path} 
                      alt={img.name}
                      loading="lazy"
                      onError={(e) => {
                        console.error('Failed to load image:', img.path);
                        e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="400"%3E%3Crect fill="%23f0f0f0" width="400" height="400"/%3E%3Ctext fill="%23999" x="50%25" y="50%25" text-anchor="middle" dy=".3em"%3EImage not found%3C/text%3E%3C/svg%3E';
                      }}
                      onLoad={() => console.log('Loaded:', img.path)}
                    />
                    <div className="image-overlay">
                      <span className="view-icon">🔍</span>
                    </div>
                  </div>
                </motion.div>
              ))
            ) : (
              <div className="empty-state">
                <p>No illustrations found in this category yet.</p>
                <p className="empty-hint">Add images to the VIP/Illustrations folders to see them here!</p>
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        {/* Image Modal */}
        {selectedImage && (
          <motion.div
            className="image-modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeImageModal}
          >
            <motion.div
              className="modal-content-image"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button className="modal-close" onClick={closeImageModal}>×</button>
              <img
                src={selectedImage.path}
                alt={selectedImage.name}
                className="modal-full-image"
              />
              <div className="modal-image-info">
                <h3>{selectedImage.name}</h3>
                <p className="modal-category">{selectedImage.category}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default IllustrationGallery;
