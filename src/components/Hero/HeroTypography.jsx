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
          <p className="text-[10px] sm:text-[11px] font-semibold tracking-wider text-slate-blue/90 uppercase pl-7">
            Robotic Joint Replacement &nbsp;•&nbsp; Arthroscopy &nbsp;•&nbsp; Complex Trauma Management
          </p>
        </motion.div>

        {/* WATERMARK BACKGROUND TEXT: KIRAN (Faint large watermark behind doctor) */}
        <div className="absolute top-[48%] left-1/2 -translate-x-1/2 w-full text-center font-display font-black text-[clamp(8rem,24vw,26rem)] text-navy-primary/[0.05] tracking-tighter pointer-events-none -z-10 uppercase leading-none">
          KIRAN
        </div>

      </div>
    </motion.div>
  );
}
