import React from 'react';
import { motion } from 'framer-motion';

export function HeroDoctor({ mousePosition }) {
  // Opposite parallax shift for foreground depth
  const docX = -mousePosition.x * 12;
  const docY = -mousePosition.y * 8;

  return (
    <div className="absolute inset-0 flex items-end justify-center md:justify-end pointer-events-none select-none z-20 overflow-visible">
      
      {/* Doctor Cutout Container */}
      <motion.div
        style={{ x: docX, y: docY }}
        initial={{ y: 85, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 1.15,
          ease: [0.16, 1, 0.3, 1],
          delay: 0.55,
        }}
        className="relative max-w-[560px] sm:max-w-[660px] lg:max-w-[760px] xl:max-w-[820px] w-full h-[76vh] sm:h-[82vh] lg:h-[88vh] flex items-end justify-center pointer-events-auto"
      >

        {/* Soft Radial Lighting behind doctor cutout */}
        <div className="absolute bottom-[12%] left-1/2 -translate-x-1/2 w-[70%] h-[60%] rounded-full bg-radial-glow opacity-80 blur-2xl pointer-events-none" />

        {/* DOCTOR TRANSPARENT PNG CUTOUT */}
        <img
          id="hero-doctor-img"
          src="/assets/DR. KIRAN KUMAR imagev2.png"
          alt="Dr. Kiran Kumar Karumuru - Orthopaedic Surgeon"
          className="w-full h-full object-contain object-bottom drop-shadow-[0_24px_45px_rgba(11,30,45,0.15)] transition-transform duration-700 hover:scale-[1.008]"
        />

      </motion.div>
    </div>
  );
}
