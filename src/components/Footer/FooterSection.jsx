import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight, Award, MapPin, Calendar, CheckCircle2, Sparkles } from 'lucide-react';
import { FaYoutube, FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { KneeAnatomyGraphic } from '../graphics/KneeAnatomyGraphic';

gsap.registerPlugin(ScrollTrigger);

const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Expertise', href: '/#expertise' },
  { label: 'Robotic Surgery', href: '/#robotic-surgery' },
  { label: 'Patient Journey', href: '/#patient-journey' },
  { label: 'Patient Stories', href: '/patient-stories' },
  { label: 'Contact', href: '/contact' },
];

const SPECIALTIES = [
  'Robotic Joint Replacement',
  'Arthroscopy',
  'Complex Trauma Management',
];

export function FooterSection({ onOpenAppointment }) {
  const footerRef = useRef(null);
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavClick = (e, link) => {
    if (link.href.includes('#')) {
      e.preventDefault();
      const targetId = link.href.split('#')[1];
      if (location.pathname === '/') {
        document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' });
      } else {
        navigate('/', { state: { scrollTo: targetId } });
      }
    } else if (link.href === '/') {
      e.preventDefault();
      if (location.pathname === '/') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        navigate('/');
      }
    }
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Name reveal — lines stagger
      gsap.fromTo(
        '.footer-name-line',
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.0,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: footerRef.current,
            start: 'top 80%',
          },
        }
      );

      // Navigation + bottom bar
      gsap.fromTo(
        '.footer-fade-item',
        { y: 16, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.65,
          stagger: 0.06,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '.footer-nav-area',
            start: 'top 88%',
          },
        }
      );

    }, footerRef);

    return () => ctx.revert();
  }, []);

  return (
    <footer
      ref={footerRef}
      className="relative w-full bg-white text-[#0A2540] font-sans overflow-hidden border-t border-slate-100 group/footer"
    >
      {/* Top accent line */}
      <div className="w-full h-[3px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />

      {/* Background Subtle Grid Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#0A2540_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.03] pointer-events-none" />

      {/* ===============================================
          FIXED BACKGROUND LOGO
          Keep the footer bright; the logo sits behind the
          content at 60% opacity for a strong editorial mark.
          Replace /logo.svg with your actual logo asset path.
      =============================================== */}
      <div
  className="footer-logo-bg-container absolute top-[40px] right-[-40px] sm:right-[-20px] lg:right-8 pointer-events-none select-none z-0 flex items-center justify-center"
  aria-hidden="true"
>
  <img
    src="logo/DR. KIRAN LOGO.png"
    alt=""
    className="w-[360px] h-[360px] sm:w-[440px] sm:h-[440px] lg:w-[520px] lg:h-[520px] object-contain opacity-60"
  />
</div>

      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-14 relative z-10">

        {/* ===============================================
            BRAND HEADER
        =============================================== */}
        <div className="pt-16 sm:pt-20 pb-12 sm:pb-16 border-b border-slate-200/80">
          


          <div className="font-grotesk font-black tracking-[-0.04em] uppercase leading-[0.88] text-[clamp(2.8rem,7.5vw,7.5rem)]">
            <div className="overflow-hidden">
              <span className="block footer-name-line text-[#0A2540]">
                DR. KIRAN
              </span>
            </div>
            <div className="overflow-hidden">
              <span className="block footer-name-line text-[#0A2540]">
                KUMAR
              </span>
            </div>
            <div className="overflow-hidden">
              <span className="block footer-name-line text-[#D4AF37]">
                KARUMURU<span className="text-[#0A2540]">.</span>
              </span>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2.5 mt-8 footer-name-line">
            {SPECIALTIES.map((spec, i) => (
              <span
                key={i}
                className="text-[10px] sm:text-[11px] font-mono tracking-[0.15em] text-[#0A2540]/80 uppercase px-4 py-1.5 bg-slate-50/80 backdrop-blur-sm border border-slate-200/80 rounded-full hover:border-[#D4AF37] hover:bg-white hover:shadow-md hover:shadow-[#D4AF37]/10 hover:-translate-y-0.5 transition-all duration-300"
              >
                {spec}
              </span>
            ))}
          </div>
        </div>

        {/* ===============================================
            GRID NAVIGATION & DETAILS
        =============================================== */}
        <div className="footer-nav-area grid grid-cols-1 md:grid-cols-12 gap-10 py-14 sm:py-16 border-b border-slate-200/80">

          <div className="md:col-span-4 lg:col-span-3">
            <div className="text-[11px] font-mono tracking-[0.2em] text-[#D4AF37] font-bold uppercase mb-6 footer-fade-item flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
              Navigation
            </div>
            <nav className="flex flex-col gap-3.5">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={(e) => handleNavClick(e, link)}
                  className="footer-fade-item group flex items-center gap-3 text-xs font-grotesk font-bold text-slate-600 hover:text-[#0A2540] tracking-wider uppercase transition-colors duration-200"
                >
                  <span className="w-2 h-2 rounded-full bg-slate-300 group-hover:bg-[#D4AF37] group-hover:scale-125 transition-all duration-300" />
                  <span className="group-hover:translate-x-1.5 transition-transform duration-300">
                    {link.label}
                  </span>
                </Link>
              ))}
            </nav>
          </div>

          <div className="md:col-span-4 lg:col-span-4">
            <div className="text-[11px] font-mono tracking-[0.2em] text-[#D4AF37] font-bold uppercase mb-6 footer-fade-item flex items-center gap-2">
              <Award className="w-3.5 h-3.5 text-[#D4AF37]" />
              Qualifications
            </div>
            <ul className="flex flex-col gap-3.5">
              {[
                'MBBS — Andhra Medical College',
                'MS Orthopaedics — Andhra Medical College',
                'Senior Residency — RVMIMS Hospital, Hyderabad',
                'Robotic Fellowship — Medicover Hospitals, Hitech City',
              ].map((cred, i) => (
                <li
                  key={i}
                  className="footer-fade-item group/item flex items-start gap-3 text-xs text-slate-600 font-medium leading-relaxed"
                >
                  <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5 group-hover/item:scale-110 transition-transform" />
                  <span className="group-hover/item:text-[#0A2540] transition-colors">{cred}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4 lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="text-[11px] font-mono tracking-[0.2em] text-[#D4AF37] font-bold uppercase mb-4 footer-fade-item flex items-center gap-2">
                <Calendar className="w-3.5 h-3.5 text-[#D4AF37]" />
                Appointments
              </div>

              <p className="text-xs text-slate-600 leading-relaxed font-normal max-w-sm footer-fade-item mb-6">
                Book a consultation with Dr. Kiran Kumar Karumuru for an individualized assessment of your orthopaedic condition.
              </p>

              <button
                onClick={onOpenAppointment}
                className="footer-fade-item group inline-flex items-center gap-3 px-6 py-3.5 rounded-xl bg-[#0A2540] text-white text-xs font-grotesk font-bold tracking-[0.12em] uppercase shadow-md shadow-[#0A2540]/10 hover:bg-[#D4AF37] hover:text-[#0A2540] hover:shadow-xl hover:shadow-[#D4AF37]/25 hover:-translate-y-0.5 transition-all duration-300 w-fit"
              >
                <span>Book an Appointment</span>
                <ArrowUpRight
                  className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                  strokeWidth={2.5}
                />
              </button>
            </div>

            <div className="footer-fade-item mt-8 p-4 rounded-xl bg-slate-50/80 backdrop-blur-sm border border-slate-200/80 hover:border-[#D4AF37]/50 hover:bg-white hover:shadow-lg hover:shadow-[#D4AF37]/10 transition-all duration-300 flex items-center gap-5 w-fit">
              <div className="flex items-baseline">
                <span className="text-3xl font-grotesk font-black text-[#0A2540] tracking-tight">500</span>
                <span className="text-2xl font-grotesk font-black text-[#D4AF37]">+</span>
              </div>
              <div className="border-l border-slate-200 pl-4">
                <div className="text-[10px] font-mono tracking-[0.15em] text-[#0A2540] font-bold uppercase">
                  Successful Surgeries
                </div>
                <div className="text-[10px] text-slate-500 mt-0.5">
                  Robotic &amp; Joint Replacements
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* ===============================================
            FOOTER BOTTOM BAR
        =============================================== */}
        <div className="py-8 flex flex-col md:flex-row items-center justify-between gap-6 text-xs font-mono text-slate-500 border-t border-slate-200/50 mt-12">
          
          <div className="flex items-center gap-3 footer-fade-item">
            <span className="w-2 h-2 rounded-full bg-[#0A2540]" />
            <span className="font-semibold text-[#0A2540]">
              © {new Date().getFullYear()} Dr. Kiran Kumar Karumuru
            </span>
            <span className="hidden sm:inline text-slate-300">|</span>
            <span className="hidden sm:inline">All Rights Reserved</span>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4 footer-fade-item">
            {[
              { icon: FaYoutube, label: 'YouTube', color: '#FF0000' },
              { icon: FaFacebook, label: 'Facebook', color: '#1877F2' },
              { icon: FaTwitter, label: 'Twitter', color: '#1DA1F2' },
              { icon: FaLinkedin, label: 'LinkedIn', color: '#0A66C2' }
            ].map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.label}
                  href="#"
                  aria-label={social.label}
                  className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 hover:bg-slate-200 transition-all hover:scale-110"
                >
                  <Icon className="w-4 h-4" style={{ color: social.color }} />
                </a>
              );
            })}
          </div>

          <div className="flex items-center gap-2 footer-fade-item">
            <MapPin className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span className="tracking-wide">Visakhapatnam &amp; Hyderabad, India</span>
          </div>
        </div>

      </div>
    </footer>
  );
}

export default FooterSection;