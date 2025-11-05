import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Text, Sphere, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';
import { motion } from 'framer-motion';

// Floating sphere component
const FloatingSphere = ({ position, color, speed = 1 }) => {
  const mesh = useRef();
  
  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (mesh.current) {
      mesh.current.position.y = position[1] + Math.sin(time * speed) * 0.5;
      mesh.current.rotation.x = time * 0.5;
      mesh.current.rotation.y = time * 0.3;
    }
  });

  return (
    <Sphere ref={mesh} position={position} args={[1, 100, 200]}>
      <MeshDistortMaterial
        color={color}
        attach="material"
        distort={0.5}
        speed={2}
        roughness={0.3}
      />
    </Sphere>
  );
};

// Main 3D Hero Component
const Hero3D = () => {
  return (
    <section className="hero-3d">
      <div className="hero-content">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="hero-text"
        >
          <h2>Animation & Digital Illustration Portfolio</h2>
          <p>B.Tech 3rd Year, Computer Science & Engineering</p>
          <p>Ashoka Institute of Technology & Management, Varanasi</p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="cta-button"
          >
            View My Work
          </motion.button>
        </motion.div>
      </div>
      
      <div className="canvas-container">
        <Canvas camera={{ position: [0, 0, 10], fov: 75 }}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          
          <FloatingSphere position={[-4, 2, 0]} color="#ff6b6b" speed={1.2} />
          <FloatingSphere position={[3, -1, -2]} color="#4ecdc4" speed={0.8} />
          <FloatingSphere position={[0, 3, -3]} color="#ffd166" speed={1.5} />
          <FloatingSphere position={[-2, -2, 2]} color="#6a0572" speed={0.6} />
          
          <Text
            font="/fonts/Inter-Bold.woff"
            fontSize={1.5}
            position={[0, 0, 0]}
            color="#ffffff"
            anchorX="center"
            anchorY="middle"
          >
            Vipshyana
          </Text>
          
          <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
        </Canvas>
      </div>
    </section>
  );
};

export default Hero3D;