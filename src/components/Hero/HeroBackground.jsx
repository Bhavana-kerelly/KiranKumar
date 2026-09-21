import React from 'react';
import { motion } from 'framer-motion';

export function HeroBackground({ mousePosition }) {
  // Almost static layer 1 parallax (minimal movement)
  const bgX = mousePosition.x * 6;
  const bgY = mousePosition.y * 6;

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none select-none bg-[#F6F8FA]">
      
      {/* 1. Extremely Subtle Technical Grid (Opacity reduced to 0.02 so typography dominates) */}
      <div className="absolute inset-0 bg-grid-subtle opacity-40" />

      {/* 2. Soft Warm Gold Light Blur behind visual center */}
      <motion.div 
        style={{ x: bgX * 0.5, y: bgY * 0.5 }}
        className="absolute -top-[5%] left-1/2 -translate-x-1/2 w-[85vw] max-w-[1100px] h-[600px] bg-radial-glow blur-3xl opacity-70" 
      />

      {/* 3. Logo-Inspired Joint & Circular Geometric Arcs (Faint) */}
      <motion.svg
        style={{ x: bgX, y: bgY }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] sm:w-[1150px] h-[850px] sm:h-[1150px] opacity-[0.035] text-navy-primary"
        viewBox="0 0 1000 1000"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="500" cy="500" r="440" stroke="currentColor" strokeWidth="1.5" strokeDasharray="10 10" />
        <circle cx="500" cy="500" r="370" stroke="currentColor" strokeWidth="1" />
        <path d="M 130 500 A 370 370 0 0 1 870 500" stroke="#D4B583" strokeWidth="2.5" opacity="0.6" />
        
        {/* Precision Crosshair Marks */}
        <line x1="500" y1="40" x2="500" y2="110" stroke="currentColor" strokeWidth="1.5" />
        <line x1="500" y1="890" x2="500" y2="960" stroke="currentColor" strokeWidth="1.5" />
        <line x1="40" y1="500" x2="110" y2="500" stroke="currentColor" strokeWidth="1.5" />
        <line x1="890" y1="500" x2="960" y2="500" stroke="currentColor" strokeWidth="1.5" />
      </motion.svg>

      {/* 4. Bottom Fade Vignette for smooth transition */}
      <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-[#F6F8FA] to-transparent z-10" />
    </div>
  );
}
