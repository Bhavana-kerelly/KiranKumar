import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { FaYoutube, FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { useLocation, useNavigate, Link } from 'react-router-dom';

export function Header({ onOpenAppointment }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Expertise', href: '/#expertise' },
    { label: 'Patient Stories', href: '/patient-stories' },
    { label: 'Contact', href: '/contact' },
  ];

  const socialLinks = [
    { icon: FaYoutube, href: '#', label: 'YouTube', color: '#FF0000' },
    { icon: FaFacebook, href: '#', label: 'Facebook', color: '#1877F2' },
    { icon: FaInstagram, href: '#', label: 'Instagram', color: '#E1306C' },
    { icon: FaLinkedin, href: '#', label: 'LinkedIn', color: '#0A66C2' },
  ];

  const handleNavClick = (e, link) => {
    e.preventDefault();
    if (link.href.includes('#')) {
      const targetId = link.href.split('#')[1];
      if (location.pathname === '/') {
        document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' });
      } else {
        navigate('/', { state: { scrollTo: targetId } });
      }
    } else if (link.href === '/') {
      if (location.pathname === '/') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        navigate('/');
      }
    } else {
      navigate(link.href);
      window.scrollTo(0, 0);
    }
  };

  return (
    <header 
      className="fixed top-0 left-0 right-0 z-[100] px-4 sm:px-8 pt-4 sm:pt-5 pointer-events-none"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* LOGO & BRAND NAME */}
        <Link 
          to="/" 
          onClick={(e) => handleNavClick(e, { href: '/' })}
          className="pointer-events-auto flex items-center gap-3 p-2 px-3.5 rounded-2xl glass-nav hover:border-[#C9A45C]/30 transition-all duration-300 shadow-subtle group bg-white/70 backdrop-blur-md"
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
        </Link>

        {/* DESKTOP CENTER NAVIGATION LINKS */}
        <nav className="pointer-events-auto hidden md:flex items-center gap-1 p-1.5 px-4 rounded-full glass-nav shadow-subtle bg-white/70 backdrop-blur-md">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.href || (location.pathname === '/' && link.href.includes('#') && false); // Simplified active logic
            const isExactActive = location.pathname === link.href;
            return (
              <Link
                key={link.label}
                to={link.href}
                onClick={(e) => handleNavClick(e, link)}
                className={`px-4 py-2 rounded-full text-[11px] font-extrabold tracking-wider transition-all duration-200 relative ${
                  isExactActive 
                    ? 'text-navy-dark font-black' 
                    : 'text-slate-blue hover:text-navy-dark hover:bg-navy-primary/5'
                }`}
              >
                {link.label}
                {isExactActive && (
                  <motion.span
                    layoutId="navActiveDot"
                    className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-[#C9A45C] rounded-full"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* TOP RIGHT BOOK APPOINTMENT PILL BUTTON & SOCIALS */}
        <div className="pointer-events-auto flex items-center gap-2">
          {/* Social Icons (Desktop) */}
          <div className="hidden lg:flex items-center gap-2 mr-2 bg-white/70 backdrop-blur-md px-3 py-2 rounded-full shadow-subtle">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a key={social.label} href={social.href} className="w-7 h-7 rounded-full hover:bg-navy-primary/5 flex items-center justify-center transition-all hover:scale-110" aria-label={social.label}>
                  <Icon className="w-4 h-4" style={{ color: social.color }} />
                </a>
              );
            })}
          </div>

          <button
            onClick={onOpenAppointment}
            className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-navy-dark text-white text-[11px] font-bold tracking-wider uppercase shadow-floating hover:bg-navy-primary transition-all duration-300 border border-[#C9A45C]/20"
          >
            <span>Book Appointment</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-[#C9A45C]" />
          </button>

          {/* MOBILE TOGGLE BUTTON */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
            className="md:hidden p-2.5 rounded-2xl glass-nav text-navy-dark shadow-subtle bg-white/70 backdrop-blur-md"
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
            className="pointer-events-auto md:hidden mt-3 max-w-sm mx-auto rounded-3xl glass-nav p-4 shadow-floating border border-navy-primary/10 bg-white/95 backdrop-blur-md"
          >
            <div className="flex flex-col gap-1.5">
              {navLinks.map((link) => {
                const isExactActive = location.pathname === link.href;
                return (
                  <Link
                    key={link.label}
                    to={link.href}
                    onClick={(e) => {
                      setMobileMenuOpen(false);
                      handleNavClick(e, link);
                    }}
                    className={`px-4 py-2.5 rounded-xl text-xs font-bold tracking-wider uppercase transition-all ${
                      isExactActive 
                        ? 'bg-navy-dark text-white' 
                        : 'text-navy-medium hover:bg-navy-primary/5'
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
              
              <div className="flex justify-center gap-4 py-3 mt-1 border-t border-navy-primary/10">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a key={social.label} href={social.href} className="w-10 h-10 rounded-full bg-[#193852]/5 flex items-center justify-center transition-transform hover:scale-110" aria-label={social.label}>
                      <Icon className="w-5 h-5" style={{ color: social.color }} />
                    </a>
                  );
                })}
              </div>

              <div className="pt-2 mt-1 border-t border-navy-primary/10">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenAppointment();
                  }}
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-navy-dark text-white text-xs font-bold tracking-widest uppercase shadow-sm"
                >
                  <span>Book Appointment</span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Header;
