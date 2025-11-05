import { animate, spring } from 'motion';

// Scroll-based animations
export const initScrollAnimations = () => {
  // Parallax effect for background elements
  const handleParallax = () => {
    const scrolled = window.scrollY;
    const background = document.querySelector('.background-3d');
    if (background) {
      background.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
  };

  // Progress bar for scroll position
  const updateProgressBar = () => {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    const progressBar = document.querySelector('.scroll-progress');
    
    if (progressBar) {
      progressBar.style.width = `${scrolled}%`;
    }
  };

  window.addEventListener('scroll', () => {
    handleParallax();
    updateProgressBar();
  });
};

// Initialize 3D hover effects
export const init3DHoverEffects = () => {
  const cards = document.querySelectorAll('.artwork-card, .timeline-card');
  
  cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      const rotateY = (x - centerX) / 25;
      const rotateX = (centerY - y) / 25;
      
      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
    });
    
    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
    });
  });
};

// Smooth scroll to section
export const smoothScrollTo = (targetId) => {
  const target = document.getElementById(targetId);
  if (target) {
    window.scrollTo({
      top: target.offsetTop - 80,
      behavior: 'smooth'
    });
  }
};

// Animate counter for numbers
export const animateCounter = (element, start, end, duration) => {
  const range = end - start;
  const increment = end > start ? 1 : -1;
  const stepTime = Math.abs(Math.floor(duration / range));
  const timer = setInterval(() => {
    start += increment;
    element.textContent = start;
    if (start === end) {
      clearInterval(timer);
    }
  }, stepTime);
};

// Initialize all animations
export const initAllAnimations = () => {
  initScrollAnimations();
  init3DHoverEffects();
};

export default {
  initScrollAnimations,
  init3DHoverEffects,
  smoothScrollTo,
  animateCounter,
  initAllAnimations
};