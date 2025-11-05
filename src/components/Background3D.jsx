import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';
import { motion } from 'framer-motion';

// Particle system component
const Particles = (props) => {
  const ref = useRef();
  const [sphere] = React.useState(() => {
    const pts = [];
    for (let i = 0; i < 5000; i++) {
      const t = Math.random() * 2 * Math.PI;
      const u = Math.random() * 2 - 1;
      const r = Math.sqrt(1 - u * u);
      const x = r * Math.cos(t) * 100;
      const y = r * Math.sin(t) * 100;
      const z = u * 100;
      pts.push(x, y, z);
    }
    return new Float32Array(pts);
  });

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
        <PointMaterial
          transparent
          color="#6a0572"
          size={0.8}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

// Main background component
const Background3D = () => {
  return (
    <div className="background-3d">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Particles />
      </Canvas>
    </div>
  );
};

export default Background3D;