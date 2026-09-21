import React from 'react';
import { useMouseParallax } from '../../hooks/useMouseParallax';
import { HeroBackground } from './HeroBackground';
import { HeroTypography } from './HeroTypography';
import { HeroDoctor } from './HeroDoctor';
import { HeroCTA } from './HeroCTA';

export function Hero({ onOpenAppointment }) {
  // Smooth normalized cursor parallax coordinates
  const mousePosition = useMouseParallax(1);

  return (
    <section 
      id="home"
      className="relative w-full h-screen min-h-[700px] max-h-[1100px] overflow-hidden flex flex-col justify-between bg-[#F4F7F9] selection:bg-gold-primary/30"
    >
      {/* Layer 1: Very subtle background grid & faint radial geometry (0.00s entry) */}
      <HeroBackground mousePosition={mousePosition} />

      {/* Layer 2: 2-Line Background Name MEET / DR. KIRAN KUMAR + Watermark (0.25s letter-by-letter masked reveal) */}
      <HeroTypography mousePosition={mousePosition} />

      {/* Layer 3: Centered Doctor Cutout Photograph (0.55s entry) */}
      <HeroDoctor mousePosition={mousePosition} />

      {/* Layer 4: Floating Left CTA, Secondary Explore Link & Right Statistics Stack (0.95s entry) */}
      <HeroCTA mousePosition={mousePosition} onOpenAppointment={onOpenAppointment} />
    </section>
  );
}

export default Hero;
