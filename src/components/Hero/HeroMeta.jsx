import React from 'react';
import { motion } from 'framer-motion';
import { Activity, Cpu, Award, Sparkles } from 'lucide-react';

export function HeroMeta({ mousePosition }) {
  // Parallax offsets for metadata cards (stronger offset for depth floating look)
  const metaX1 = mousePosition.x * 25;
  const metaY1 = mousePosition.y * 22;

  const metaX2 = -mousePosition.x * 28;
  const metaY2 = -mousePosition.y * 20;

  const metaX3 = mousePosition.x * 18;
  const metaY3 = mousePosition.y * 24;

  return (
    <div className="absolute inset-0 z-30 pointer-events-none max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 flex flex-col justify-between py-24 md:py-28">
      
      {/* TOP LEFT EDITORIAL DESIGNATION */}
      <motion.div
        style={{ x: metaX1, y: metaY1 }}
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.9, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="self-start pointer-events-auto mt-6 sm:mt-10"
      >
        <div className="glass-card rounded-2xl p-4 sm:p-5 max-w-[260px] shadow-floating border-l-4 border-l-navy-dark border-t border-r border-b border-navy-primary/10">
          <div className="flex items-center gap-2 mb-1.5">
            <span className="w-2 h-2 rounded-full bg-gold-primary animate-pulse" />
            <span className="text-[10px] font-extrabold tracking-widest uppercase text-navy-medium">Specialization</span>
          </div>
          <h2 className="text-sm font-extrabold tracking-tight text-navy-dark uppercase font-display leading-tight">
            Orthopaedic Surgeon
          </h2>
          <p className="text-[11px] text-navy-medium/80 mt-1 font-medium leading-normal">
            Specializing in Robotic Joint Replacement & Knee Reconstruction.
          </p>
        </div>
      </motion.div>

      {/* TOP RIGHT METADATA BADGE: 500+ SURGERIES */}
      <motion.div
        style={{ x: metaX2, y: metaY2 }}
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.9, delay: 0.85, ease: [0.16, 1, 0.3, 1] }}
        className="self-end pointer-events-auto mt-2 sm:mt-4"
      >
        <div className="glass-card rounded-2xl p-4 sm:p-5 min-w-[210px] shadow-floating border-r-4 border-r-gold-primary border-t border-l border-b border-navy-primary/10 relative overflow-hidden group hover:border-gold-primary/50 transition-all duration-300">
          <div className="flex items-baseline gap-1.5">
            <span className="text-3xl sm:text-4xl font-extrabold font-display tracking-tight text-navy-dark">
              1000+
            </span>
            <Activity className="w-4 h-4 text-gold-dark stroke-[2.5]" />
          </div>
          <div className="mt-1 text-[10px] font-extrabold tracking-widest uppercase text-navy-primary/90 leading-tight">
            Knee Replacement<br />Surgeries Performed
          </div>
          <div className="mt-2 text-[9px] font-semibold text-navy-medium/70 flex items-center gap-1 border-t border-navy-primary/10 pt-1.5">
            <Sparkles className="w-3 h-3 text-gold-dark" />
            <span>Proven Surgical Excellence</span>
          </div>
        </div>
      </motion.div>

      {/* BOTTOM LEFT METADATA BADGE: ROBOTIC FELLOWSHIP */}
      <motion.div
        style={{ x: metaX3, y: metaY3 }}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 1.0, ease: [0.16, 1, 0.3, 1] }}
        className="self-start pointer-events-auto mb-16 sm:mb-8 hidden sm:block"
      >
        <div className="glass-card rounded-2xl p-4 sm:p-4.5 max-w-[250px] shadow-floating border border-navy-primary/10 hover:shadow-gold-glow transition-all duration-300">
          <div className="flex items-center gap-2 mb-1 text-gold-dark">
            <Cpu className="w-4 h-4 stroke-[2.2]" />
            <span className="text-[10px] font-extrabold tracking-widest uppercase">Advanced Tech</span>
          </div>
          <div className="text-xs font-bold text-navy-dark uppercase tracking-tight">
            Robotic Joint Replacement Fellowship
          </div>
          <div className="mt-1.5 text-[10px] text-navy-medium font-medium">
            Computer-assisted precision knee & hip joint arthroplasty.
          </div>
        </div>
      </motion.div>

    </div>
  );
}
