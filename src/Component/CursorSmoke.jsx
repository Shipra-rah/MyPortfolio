import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const COLORS = [
  'radial-gradient(circle, rgba(244, 63, 94, 0.45) 0%, rgba(244, 63, 94, 0) 70%)',   // Hot Pink (rose-500)
  'radial-gradient(circle, rgba(244, 114, 182, 0.45) 0%, rgba(244, 114, 182, 0) 70%)', // Soft Pink (pink-400)
  'radial-gradient(circle, rgba(255, 255, 255, 0.45) 0%, rgba(255, 255, 255, 0) 70%)', // White
];

export default function CursorSmoke() {
  const [particles, setParticles] = useState([]);
  const lastPos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const dx = e.clientX - lastPos.current.x;
      const dy = e.clientY - lastPos.current.y;
      const dist = Math.sqrt(dx * dx + dy * dy);

      // Only spawn a new puff when the cursor moves at least 15 pixels
      if (dist > 15) {
        const size = 50 + Math.random() * 50; // Volumetric puff sizes
        const newParticle = {
          id: `${Date.now()}-${Math.random()}`,
          x: e.clientX,
          y: e.clientY,
          tx: (Math.random() - 0.5) * 140, // Random drift x
          ty: (Math.random() - 0.5) * 140 - 90, // Upward drift y
          size,
          color: COLORS[Math.floor(Math.random() * COLORS.length)],
        };

        // Keep a max of 18 active particles to guarantee peak render performance
        setParticles((prev) => [...prev.slice(-17), newParticle]);
        lastPos.current = { x: e.clientX, y: e.clientY };
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      zIndex: 9999,
      pointerEvents: 'none',
      overflow: 'hidden',
    }}>
      <AnimatePresence>
        {particles.map((p) => (
          <motion.div
            key={p.id}
            initial={{
              x: p.x - p.size / 2,
              y: p.y - p.size / 2,
              scale: 0.15,
              opacity: 0.8,
              filter: 'blur(8px)',
            }}
            animate={{
              x: p.x - p.size / 2 + p.tx,
              y: p.y - p.size / 2 + p.ty,
              scale: 2.5,
              opacity: 0,
              filter: 'blur(35px)',
            }}
            exit={{ opacity: 0 }}
            transition={{
              duration: 1.5,
              ease: 'easeOut',
            }}
            onAnimationComplete={() => {
              setParticles((prev) => prev.filter((item) => item.id !== p.id));
            }}
            style={{
              position: 'absolute',
              width: p.size,
              height: p.size,
              background: p.color,
              borderRadius: '50%',
              mixBlendMode: 'screen',
            }}
          />
        ))}
      </AnimatePresence>
    </div>
  );
}
