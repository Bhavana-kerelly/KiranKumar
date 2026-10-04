import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, ChevronDown, ShieldCheck } from 'lucide-react';

export function HeroCTA({ mousePosition, onOpenAppointment }) {
  // Subtle parallax shift for floating cards
  const cardXLeft = mousePosition.x * 14;
  const cardYLeft = mousePosition.y * 10;

  const cardXRight = -mousePosition.x * 16;
  const cardYRight = -mousePosition.y * 12;

  return (
    <div className="absolute inset-0 z-40 pointer-events-none px-4 sm:px-8 lg:px-12 pb-6 pt-24 flex flex-col justify-end">
      
      {/* BOTTOM FLOATING ELEMENTS CONTAINER */}
      <div className="w-full max-w-[1450px] mx-auto flex items-end justify-end pointer-events-auto">
        
        {/* RIGHT SIDE FLOATING STACK CARDS */}
        <motion.div
          style={{ x: cardXRight, y: cardYRight }}
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 1.05, ease: [0.16, 1, 0.3, 1] }}
          className="hidden md:flex flex-col gap-4 mb-2 sm:mb-4 text-right items-end"
        >
          {/* ITEM 1: 500+ KNEE SURGERIES */}
          <div className="flex flex-col items-end">
            <span className="text-2xl sm:text-3xl font-black font-grotesk tracking-tight text-navy-dark">
              1000+
            </span>
            <span className="text-[9.5px] font-extrabold tracking-widest uppercase text-slate-blue/90 leading-tight">
              KNEE REPLACEMENT<br />SURGERIES
            </span>
          </div>

          {/* ITEM 2: ROBOTIC JOINT FELLOWSHIP */}
          <div className="flex flex-col items-end border-t border-navy-primary/10 pt-2">
            <span className="text-sm font-black font-grotesk tracking-wider text-navy-dark uppercase">
              ROBOTIC
            </span>
            <span className="text-[9.5px] font-bold tracking-widest uppercase text-gold-dark leading-tight">
              JOINT REPLACEMENT<br />FELLOWSHIP
            </span>
          </div>


        </motion.div>

      </div>
    </div>
  );
}
