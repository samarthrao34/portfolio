import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import '../styles/ProcessLearning.css';

const ProcessLearning = () => {
  const [processItems, setProcessItems] = useState([]);
  const [activeTab, setActiveTab] = useState('breakdowns');
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    loadProcessContent();
  }, []);

  const loadProcessContent = () => {
    // Roughs - Storyboards
    const roughsItems = [
      'bg shelter 1 rough.jpg', 'bg shelter 2 rough.jpg', 'bg shelter 3 rough.jpg',
      'BG1 rough 1st.jpg', 'BG1 rough 2+.jpg.jpg', 'BG1 rough 2nd.jpg',
      'BG1 rough 2nd.jpg.jpg', 'BG1 rough 3.jpg.jpg', 'BG1 rough 4.jpg.jpg',
      'character rough.jpg', 'character rough2.jpg', 'dgm bg.jpg', 'donut guy 1.jpg',
      'IMG-20251002-WA0023.jpg', 'IMG-20251030-WA0031.jpg', 'sh 303 airport.jpg'
    ].map(name => ({ 
      path: `/VIP/Roughs/${name}`, 
      type: 'breakdown', 
      category: 'Storyboards', 
      name 
    }));

    // WIP - Work in Progress (images only)
    const wipItems = [
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
    ].map(name => ({ 
      path: `/VIP/WIP/${name}`, 
      type: 'breakdown', 
      category: 'WIP', 
      name 
    }));

    // WIP - Videos as timelapse
    const wipVideos = [
      '20250621_220005.mp4', '20250916_215029.mp4', '20250917_194500.mp4', 
      '20250917_210806.mp4', '20251004_221624.mp4', '20251004_230936.mp4',
      '20251025_204619.mp4', '20251025_204732.mp4', '20251030_150506.mp4',
      'VID-20250620-WA0018.mp4', 'VID-20251004-WA0062.mp4',
      
    ].map(name => ({ 
      path: `/VIP/WIP/${name}`, 
      type: 'timelapse', 
      category: 'Time-lapse', 
      name 
    }));

    // Sheets - Character Sheets (located in Roughs folder)
    const sheetsItems = [
      'duckSHEET.jpg', 'expression sheet txt.jpg', 'expression sheet.jpg', 'IMG-20251030-WA0042.jpg'
    ].map(name => ({ 
      path: `/VIP/Roughs/${name}`, 
      type: 'breakdown', 
      category: 'Character Sheets', 
      name 
    }));

    // MWS - Case Studies
    const mwsItems = [
      'bg1.jpg', 'bg2.jpg', 'bg3.jpg', 'faceoff.jpg', 'mwsdes.jpg',
      'sheriff_s cabin 2.jpg', 'sheriff_s cabin rough.jpg', 'sheriff_s cabin.jpg',
      'storage area.jpg', 'WhatsApp Image 2025-03-28 at 14.38.48.jpeg',
      'WhatsApp Image 2025-03-28 at 14.38.49.jpeg'
    ].map(name => ({ 
      path: `/VIP/MWS/${name}`, 
      type: 'case-study', 
      category: 'Case Studies', 
      name 
    }));

    // MWS - Case Study video (located in Roughs folder)
    const mwsVideo = { 
      path: '/VIP/Roughs/mrs strtbrd.mp4', 
      type: 'case-study', 
      category: 'Case Studies', 
      name: 'mrs strtbrd.mp4' 
    };

    const items = [
      ...roughsItems,
      ...wipItems,
      ...wipVideos,
      ...sheetsItems,
      ...mwsItems,
      mwsVideo
    ];

    console.log('Process & Learning items loaded:', items.length);
    console.log('Breakdown items:', items.filter(i => i.type === 'breakdown').length);
    console.log('Case study items:', items.filter(i => i.type === 'case-study').length);
    console.log('Timelapse items:', items.filter(i => i.type === 'timelapse').length);
    console.log('Sample WIP paths:', items.filter(i => i.path.includes('WIP')).slice(0, 3).map(i => i.path));

    setProcessItems(items);
  };

  const tabs = [
    { id: 'breakdowns', label: 'Step-by-Step', emoji: '📝' },
    { id: 'case-study', label: 'Case Studies', emoji: '🔍' },
    { id: 'timelapse', label: 'Behind the Scenes', emoji: '🎬' }
  ];

  const filteredItems = processItems.filter(item => item.type === activeTab);

  const openModal = (item) => {
    setSelectedItem(item);
  };

  const closeModal = () => {
    setSelectedItem(null);
  };

  return (
    <section className="process-learning" id="process">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="section-header"
        >
          <h2 className="section-title">Process & Learning</h2>
          <p className="section-subtitle">
            Behind every finished piece is a journey of exploration, iteration, and growth
          </p>
        </motion.div>

        {/* Tabs */}
        <div className="process-tabs">
          {tabs.map(tab => (
            <motion.button
              key={tab.id}
              className={`tab-btn ${activeTab === tab.id ? 'active' : ''}`}
              onClick={() => setActiveTab(tab.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="tab-emoji">{tab.emoji}</span>
              <span className="tab-label">{tab.label}</span>
            </motion.button>
          ))}
        </div>

        {/* Content Grid */}
        <motion.div 
          className="process-grid"
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          {filteredItems.length > 0 ? (
            filteredItems.map((item, index) => (
              <motion.div
                key={item.path}
                className="process-card"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ y: -8 }}
                onClick={() => openModal(item)}
                style={{ cursor: 'pointer' }}
              >
                <div className="card-content">
                  {item.type === 'timelapse' ? (
                    <video
                      src={item.path}
                      className="process-video"
                      muted
                      playsInline
                      preload="metadata"
                      onMouseEnter={(e) => e.target.play()}
                      onMouseLeave={(e) => {
                        e.target.pause();
                        e.target.currentTime = 0;
                      }}
                    />
                  ) : (
                    <img
                      src={item.path}
                      alt={item.name}
                      className="process-image"
                      loading="lazy"
                    />
                  )}
                  <div className="card-overlay">
                    <span className="view-icon">👁️</span>
                  </div>
                </div>
              </motion.div>
            ))
          ) : (
            <div className="empty-state">
              <p>No {activeTab} content available yet.</p>
              <p className="empty-hint">
                Add files to VIP/{activeTab === 'timelapse' ? 'Time-lapse' : activeTab === 'case-study' ? 'MWS' : 'Roughs, WIP, or Sheets'} folders!
              </p>
            </div>
          )}
        </motion.div>

        {/* Learning Notes Section */}
        <motion.div
          className="learning-notes"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <div className="notes-card">
            <h3 className="notes-title">✨ My Creative Process</h3>
            <div className="notes-content">
              <div className="note-item">
                <span className="note-number">1</span>
                <div>
                  <h4>Sketch & Explore</h4>
                  <p>Starting with rough thumbnails and loose sketches to find the right composition and feel</p>
                </div>
              </div>
              <div className="note-item">
                <span className="note-number">2</span>
                <div>
                  <h4>Refine & Iterate</h4>
                  <p>Building on the foundation, adding details, and experimenting with different approaches</p>
                </div>
              </div>
              <div className="note-item">
                <span className="note-number">3</span>
                <div>
                  <h4>Polish & Finish</h4>
                  <p>Final touches, color adjustments, and bringing everything together cohesively</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Modal for full-screen view */}
        {selectedItem && (
          <motion.div
            className="process-modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <motion.div
              className="modal-content-process"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button className="modal-close" onClick={closeModal}>×</button>
              {selectedItem.type === 'timelapse' ? (
                <video
                  src={selectedItem.path}
                  className="modal-full-video"
                  controls
                  autoPlay
                />
              ) : (
                <img
                  src={selectedItem.path}
                  alt={selectedItem.name}
                  className="modal-full-image"
                />
              )}
              <div className="modal-item-info">
                <span className="modal-item-category">{selectedItem.category}</span>
                <h3>{selectedItem.name}</h3>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default ProcessLearning;
