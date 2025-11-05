import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import IllustrationGallery from './components/IllustrationGallery';
import AnimationShowcase from './components/AnimationShowcase';
import ProcessLearning from './components/ProcessLearning';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import LoadingScreen from './components/LoadingScreen';
import ScrollProgress from './components/ScrollProgress';
import ScrollToTop from './components/ScrollToTop';
import './styles/main.css';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time for demonstration
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      <LoadingScreen isLoading={isLoading} setIsLoading={setIsLoading} />
      {!isLoading && (
        <>
          <ScrollProgress />
          <ScrollToTop />
          <Header />
          <main>
            <Hero />
            <IllustrationGallery />
            <AnimationShowcase />
            <ProcessLearning />
            <About featuredImageSrc={'/VIP/Illustration/witch.jpg'} />
            <Contact />
          </main>
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;