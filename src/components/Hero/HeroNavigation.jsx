import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';

export function HeroNavigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Home', href: '#home', active: true },
    { label: 'About', href: '#about' },
    { label: 'Expertise', href: '#expertise' },
    { label: 'Robotic Surgery', href: '#robotic-surgery' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <motion.header 
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
      className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-8 pt-4 sm:pt-5 pointer-events-none"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* LOGO & BRAND NAME */}
        <a 
          href="#home" 
          className="pointer-events-auto flex items-center gap-3 p-2 px-3.5 rounded-2xl glass-nav hover:border-gold-primary/30 transition-all duration-300 shadow-subtle group"
        >
          <img 
            src="/logo/DR. KIRAN LOGO.png" 
            alt="Dr. Kiran Logo" 
            className="h-8 sm:h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
          />
          <div className="hidden lg:flex flex-col border-l border-navy-primary/10 pl-3 text-left">
            <span className="text-xs font-bold tracking-tight text-navy-dark">Dr. Kiran Kumar Karumuru</span>
            <span className="text-[9px] font-bold text-gold-dark tracking-widest uppercase">Orthopaedic Surgeon</span>
          </div>
        </a>

        {/* DESKTOP CENTER NAVIGATION LINKS */}
        <nav className="pointer-events-auto hidden md:flex items-center gap-1 p-1.5 px-4 rounded-full glass-nav shadow-subtle">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`px-4 py-2 rounded-full text-[11px] font-extrabold tracking-wider transition-all duration-200 relative ${
                link.active 
                  ? 'text-navy-dark font-black' 
                  : 'text-slate-blue hover:text-navy-dark hover:bg-navy-primary/5'
              }`}
            >
              {link.label}
              {link.active && (
                <motion.span
                  layoutId="navActiveDot"
                  className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-gold-primary rounded-full"
                  transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                />
              )}
            </a>
          ))}
        </nav>

        {/* TOP RIGHT BOOK APPOINTMENT PILL BUTTON */}
        <div className="pointer-events-auto flex items-center gap-2">
          <a
            href="#book"
            className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-navy-dark text-white text-[11px] font-bold tracking-wider uppercase shadow-floating hover:bg-navy-primary transition-all duration-300 border border-gold-primary/20"
          >
            <span>Book Appointment</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-gold-primary" />
          </a>

          {/* MOBILE TOGGLE BUTTON */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
            className="md:hidden p-2.5 rounded-2xl glass-nav text-navy-dark shadow-subtle"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

      </div>

      {/* MOBILE MENU DRAWER */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="pointer-events-auto md:hidden mt-3 max-w-sm mx-auto rounded-3xl glass-nav p-4 shadow-floating border border-navy-primary/10"
          >
            <div className="flex flex-col gap-1.5">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-2.5 rounded-xl text-xs font-bold tracking-wider uppercase transition-all ${
                    link.active 
                      ? 'bg-navy-dark text-white' 
                      : 'text-navy-medium hover:bg-navy-primary/5'
                  }`}
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-2 mt-1 border-t border-navy-primary/10">
                <a
                  href="#book"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-navy-dark text-white text-xs font-bold tracking-widest uppercase shadow-sm"
                >
                  <span>Book Appointment</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
