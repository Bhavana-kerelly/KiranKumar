import React from 'react';
import { motion } from 'framer-motion';

export function HeroTypography({ mousePosition }) {
  // Parallax shift for typography (Layer 2)
  const textX = mousePosition.x * 12;
  const textY = mousePosition.y * 10;

  const line1 = "MEET";
  const line2 = "DR. KIRAN KUMAR";

  // Stagger container variant for character reveal
  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.032,
        delayChildren: 0.25,
      },
    },
  };

  // Letter reveal variant from behind clip mask
  const letterVariants = {
    hidden: { 
      y: '105%', 
      opacity: 0,
    },
    visible: {
      y: '0%',
      opacity: 1,
      transition: {
        duration: 0.85,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  const renderAnimatedLetters = (text, customClass = "") => {
    return (
      <span className={`inline-flex flex-wrap ${customClass}`}>
        {text.split("").map((char, index) => {
          if (char === " ") {
            return <span key={index} className="w-[0.25em] inline-block" />;
          }
          return (
            <span key={index} className="letter-wrapper">
              <motion.span
                variants={letterVariants}
                className="letter-char inline-block"
              >
                {char}
              </motion.span>
            </span>
          );
        })}
      </span>
    );
  };

  return (
    <motion.div
      style={{ x: textX, y: textY }}
      className="absolute inset-0 flex flex-col justify-start items-center pointer-events-none select-none z-0 px-4 sm:px-8 pt-24 sm:pt-28"
    >
      <div className="w-full max-w-[1450px] relative flex flex-col">
        
        {/* TOP RIGHT METADATA (Matching reference image top right tag) */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.8, duration: 0.7 }}
          className="absolute top-2 right-4 hidden md:flex items-start gap-3 text-right"
        >
          <div className="w-0.5 h-10 bg-gold-primary rounded-full mt-0.5" />
          <div className="flex flex-col text-[10px] font-extrabold tracking-[0.22em] text-slate-blue/80 uppercase leading-snug font-grotesk">
            <span>PRECISION</span>
            <span>TECHNOLOGY</span>
            <span>BETTER MOVEMENT</span>
          </div>
        </motion.div>

        {/* TWO-LINE BACKGROUND TYPOGRAPHY: MEET / DR. KIRAN KUMAR */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-start font-display font-black uppercase tracking-tighter leading-[0.82]"
        >
          {/* LINE 1: MEET (Slate blue tone, large) */}
          <div className="py-0.5">
            <h1 className="text-[clamp(3.2rem,9vw,9.5rem)] text-slate-blue/65 tracking-[-0.03em]">
              {renderAnimatedLetters(line1)}
            </h1>
          </div>

          {/* LINE 2: DR. KIRAN KUMAR (Deep Navy, dominant title stretching across) */}
          <div className="py-0.5 -mt-[1.2vw] sm:-mt-[1.6vw]">
            <h1 className="text-[clamp(3.6rem,10vw,10.8rem)] text-navy-dark tracking-[-0.04em] whitespace-nowrap">
              {renderAnimatedLetters(line2)}
            </h1>
          </div>
        </motion.div>

        {/* LEFT SIDE SPECIALTY TAGS BELOW NAME (Matching reference image left side info) */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.7 }}
          className="mt-3 sm:mt-5 flex flex-col gap-1 items-start pl-1"
        >
          <div className="flex items-center gap-2">
            <div className="w-5 h-0.5 bg-gold-primary rounded-full" />
            <span className="text-[11px] sm:text-xs font-extrabold tracking-[0.2em] text-navy-dark uppercase font-grotesk">
              ORTHOPAEDIC SURGEON
            </span>
          </div>

          {/* NEW PREMIUM EXPERTISE VISUALS GRID */}
          <div className="mt-12 sm:mt-16 lg:mt-20 flex items-center gap-5 sm:gap-8 md:gap-12 pointer-events-auto">
            {[
              { title: "ROBOTIC JOINT\nREPLACEMENT", img: "/assets/robotic-joint-replacement.jpg" },
              { title: "HIP\nREPLACEMENT", img: "/assets/hip-replacement.jpg" },
              { title: "ARTHROSCOPY", img: "/assets/arthroscopy.jpg" },
              { title: "COMPLEX\nTRAUMA", img: "/assets/complex-trauma.jpg" }
            ].map((item, idx) => (
              <div key={idx} className="flex flex-col items-center">
                {/* Clean Circular Image Container */}
                <div className="relative w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 rounded-full bg-white/80 backdrop-blur-sm border border-white flex items-center justify-center p-1 sm:p-2 group hover:-translate-y-1 transition-transform duration-500 shadow-sm">
                  
                  {/* Image (With Fallback) */}
                  <div className="w-full h-full rounded-full overflow-hidden bg-white">
                    <img 
                      src={item.img} 
                      alt={item.title.replace('\n', ' ')}
                      className="w-full h-full object-cover filter saturate-[0.85] group-hover:saturate-110 transition-all duration-500 scale-105 group-hover:scale-100"
                      onError={(e) => {
                        e.target.onerror = null; 
                        e.target.src = "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=200&h=200&fit=crop"; 
                      }}
                    />
                  </div>
                </div>

                {/* Title (Decreased Size) */}
                <span className="text-[7px] sm:text-[8px] md:text-[9px] font-extrabold tracking-[0.1em] sm:tracking-[0.15em] text-navy-dark uppercase text-center font-grotesk mt-3 sm:mt-4 whitespace-pre-line leading-snug h-6 flex items-center justify-center">
                  {item.title}
                </span>
              </div>
            ))}
          </div>

        </motion.div>



      </div>
    </motion.div>
  );
}
