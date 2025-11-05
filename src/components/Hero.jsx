import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import '../styles/Hero.css';

const Hero = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    // Create beautiful floating translucent bubbles
    const bubbles = [];
    const bubbleCount = 12;

    class Bubble {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.radius = Math.random() * 50 + 30;
        this.vx = (Math.random() - 0.5) * 0.5; // Slower horizontal drift
        this.vy = -(Math.random() * 0.5 + 0.3); // Float upward
        this.hue = Math.random() * 60 + 300; // Purple to pink range
        this.alpha = 0.15 + Math.random() * 0.1;
        this.pulseSpeed = 0.015 + Math.random() * 0.015;
        this.pulsePhase = Math.random() * Math.PI * 2;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        // Reset bubble when it goes off top - reappear at bottom
        if (this.y + this.radius < 0) {
          this.y = canvas.height + this.radius;
          this.x = Math.random() * canvas.width;
        }

        // Wrap horizontally
        if (this.x + this.radius < 0) {
          this.x = canvas.width + this.radius;
        } else if (this.x - this.radius > canvas.width) {
          this.x = -this.radius;
        }

        // Gentle horizontal sway
        this.vx += (Math.random() - 0.5) * 0.02;
        this.vx *= 0.98; // Damping
        
        // Pulse effect
        this.pulsePhase += this.pulseSpeed;
        const pulse = Math.sin(this.pulsePhase) * 8;

        return pulse;
      }

      draw(pulse) {
        // Create radial gradient for bubble
        const gradient = ctx.createRadialGradient(
          this.x - this.radius * 0.3, 
          this.y - this.radius * 0.3, 
          0,
          this.x, 
          this.y, 
          this.radius + pulse
        );
        
        gradient.addColorStop(0, `hsla(${this.hue}, 80%, 85%, ${this.alpha * 0.6})`);
        gradient.addColorStop(0.4, `hsla(${this.hue + 10}, 75%, 75%, ${this.alpha * 0.4})`);
        gradient.addColorStop(0.7, `hsla(${this.hue + 20}, 70%, 65%, ${this.alpha * 0.3})`);
        gradient.addColorStop(1, `hsla(${this.hue + 30}, 70%, 60%, 0)`);

        // Draw bubble with soft glow
        ctx.shadowBlur = 25;
        ctx.shadowColor = `hsla(${this.hue}, 70%, 70%, 0.3)`;
        
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius + pulse, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();
        
        // Add subtle rim highlight
        ctx.shadowBlur = 0;
        ctx.beginPath();
        ctx.arc(
          this.x - this.radius * 0.3, 
          this.y - this.radius * 0.3, 
          this.radius * 0.3, 
          0, 
          Math.PI * 2
        );
        ctx.fillStyle = `hsla(${this.hue}, 90%, 95%, ${this.alpha * 0.4})`;
        ctx.fill();
      }
    }

    // Initialize bubbles with staggered starting positions
    for (let i = 0; i < bubbleCount; i++) {
      bubbles.push(new Bubble());
    }

    function animate() {
      // Clear with slight fade for smooth motion
      ctx.fillStyle = 'rgba(255, 248, 240, 0.2)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw and update bubbles
      bubbles.forEach(bubble => {
        const pulse = bubble.update();
        bubble.draw(pulse);
      });

      requestAnimationFrame(animate);
    }

    animate();

    const handleResize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero-section" id="home">
      <div className="hero-container">
        {/* Animated Banner */}
        <motion.div 
          className="hero-banner"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <canvas ref={canvasRef} className="hero-canvas" />
          <div className="banner-overlay">
            <motion.div
              className="floating-element"
              animate={{
                y: [0, -20, 0],
                rotate: [0, 5, -5, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              
            </motion.div>
          </div>
        </motion.div>

        {/* Intro Content */}
        <motion.div 
          className="hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <h1 className="hero-title">
            <span className="title-line">Bringing Stories to Life</span>
            <span className="title-subtitle">Through Art & Animation</span>
          </h1>
          
          <p className="hero-intro">
            Hi! I'm <strong>Vipshyana Upadhyay</strong> – an animator and illustrator 
            crafting cozy, imaginative worlds one frame at a time. ✨
          </p>

          {/* Navigation Links */}
          <nav className="hero-nav">
            <motion.button
              className="nav-btn"
              onClick={() => scrollToSection('illustrations')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Illustrations
            </motion.button>
            <motion.button
              className="nav-btn"
              onClick={() => scrollToSection('animations')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Animation
            </motion.button>
            <motion.button
              className="nav-btn"
              onClick={() => scrollToSection('about')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              About
            </motion.button>
            <motion.button
              className="nav-btn"
              onClick={() => scrollToSection('contact')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact
            </motion.button>
          </nav>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
