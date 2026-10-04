import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight } from 'lucide-react';
import { KneeAnatomyGraphic } from '../graphics/KneeAnatomyGraphic';

gsap.registerPlugin(ScrollTrigger);

export function FinalCTASection({ mousePosition = { x: 0, y: 0 } }) {
  const sectionRef = useRef(null);

  // Subtle parallax on anatomy visual
  const parallaxX = (mousePosition?.x || 0) * 6;
  const parallaxY = (mousePosition?.y || 0) * 4;

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Headline word-by-word reveal
      gsap.fromTo(
        '.fcta-headline-word',
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          stagger: 0.12,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
          },
        }
      );

      // Supporting copy + CTA
      gsap.fromTo(
        '.fcta-sub-item',
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          stagger: 0.1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
          },
          delay: 0.45,
        }
      );

      // Anatomy visual fade-in
      gsap.fromTo(
        '.fcta-anatomy',
        { opacity: 0, scale: 0.96 },
        {
          opacity: 1,
          scale: 1,
          duration: 1.2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 72%',
          },
          delay: 0.2,
        }
      );

      // Label + divider
      gsap.fromTo(
        '.fcta-label-item',
        { opacity: 0, x: -12 },
        {
          opacity: 1,
          x: 0,
          duration: 0.6,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 78%',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative w-full bg-[#061827] text-[#F5F7F6] font-sans overflow-hidden scroll-mt-20 min-h-[90vh] flex flex-col justify-center"
    >
      {/* ==============================================
          TOP TRANSITION: Patient Journey white → CTA dark navy
          (matches direction: light → dark)
      ============================================== */}
      <div className="w-full h-24 sm:h-28 bg-gradient-to-b from-[#F5F7F6] via-[#1a3550] to-[#061827] pointer-events-none absolute top-0 left-0 right-0" />

      {/* Subtle background grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#163B56_1px,transparent_1px)] [background-size:38px_38px] opacity-20 pointer-events-none" />

      {/* Ambient glows */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-[#102D40]/40 blur-[130px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-[#C9A45C]/7 blur-[120px] pointer-events-none" />

      {/* Background watermark text */}
      <div className="absolute bottom-0 left-0 w-[160%] whitespace-nowrap font-grotesk font-black text-[clamp(5rem,12vw,14rem)] text-[#102D40]/18 tracking-tighter uppercase pointer-events-none select-none z-0 leading-none">
        PRECISION&nbsp;•&nbsp;MOVEMENT&nbsp;•&nbsp;RECOVERY
      </div>

      {/* ==============================================
          MAIN CONTAINER
      ============================================== */}
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-10 relative z-10 w-full pt-32 sm:pt-36 pb-20 sm:pb-28">

        {/* Section label */}
        <div className="flex items-center gap-2.5 mb-8 sm:mb-10 fcta-label-item">
          <span className="w-2.5 h-2.5 rounded-full bg-[#C9A45C] animate-pulse" />
          <span className="text-xs sm:text-sm font-grotesk tracking-[0.25em] font-bold text-[#C9A45C] uppercase">
            05 / BOOK AN APPOINTMENT
          </span>
          <span className="flex-1 h-px bg-gradient-to-r from-[#C9A45C]/40 to-transparent ml-2 hidden sm:block" />
        </div>

        {/* ==============================================
            TWO-COLUMN LAYOUT
        ============================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* ---- LEFT: Headline + copy + CTA ---- */}
          <div className="lg:col-span-6 flex flex-col gap-8">

            {/* Oversized editorial headline */}
            <h2 className="font-grotesk font-black tracking-[-0.03em] uppercase leading-[0.88] text-[clamp(2.8rem,5.5vw,5.5rem)]">
              <span className="block overflow-hidden">
                <span className="block fcta-headline-word">PRECISION</span>
              </span>
              <span className="block overflow-hidden">
                <span className="block fcta-headline-word text-[#456982] font-light">WHEN YOUR</span>
              </span>
              <span className="block overflow-hidden">
                <span className="block fcta-headline-word">MOVEMENT</span>
              </span>
              <span className="block overflow-hidden">
                <span className="block fcta-headline-word text-[#C9A45C]">MATTERS MOST.</span>
              </span>
            </h2>

            {/* Divider */}
            <div className="w-16 h-0.5 bg-gradient-to-r from-[#C9A45C] to-transparent fcta-sub-item" />

            {/* Supporting copy */}
            <p className="text-sm sm:text-base text-[#94AEC4] leading-relaxed font-normal max-w-lg fcta-sub-item">
              "Personalized orthopaedic care focused on precision, advanced treatment and a confident path toward recovery."
            </p>

            {/* Doctor ID card */}
            <div className="border border-[#163B56] rounded-2xl p-5 sm:p-6 bg-[#071B2A]/60 backdrop-blur-sm fcta-sub-item">
              <div className="text-[9px] font-mono tracking-[0.22em] text-[#C9A45C] uppercase mb-3">
                APPOINTMENTS
              </div>
              <div className="text-sm font-grotesk font-extrabold tracking-wide text-[#FBFAF7] uppercase mb-0.5">
                Dr. Kiran Kumar Karumuru
              </div>
              <div className="text-xs text-[#94AEC4] font-normal mb-4">
                Orthopaedic Surgeon — Robotic Joint Replacement · Arthroscopy · Complex Trauma
              </div>
              <div className="text-xs text-[#6A87A0] leading-relaxed">
                Book a consultation to discuss your joint condition, understand your treatment options and receive an individualized care plan.
              </div>
            </div>

            {/* Primary CTA */}
            <div className="fcta-sub-item">
              <a
                href="mailto:contact@drkirankumar.com"
                className="group inline-flex items-center gap-3 px-7 py-4 rounded-2xl bg-[#FBFAF7] text-[#071B2A] font-grotesk font-black text-sm tracking-[0.12em] uppercase shadow-lg hover:bg-[#E4D1A5] transition-all duration-300"
              >
                <span>Book an Appointment</span>
                <ArrowUpRight
                  className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200"
                  strokeWidth={2.5}
                />
              </a>
              <p className="text-[10px] font-mono text-[#456982] tracking-wider uppercase mt-3">
                Schedule a consultation
              </p>
            </div>

          </div>

          {/* ---- RIGHT: Anatomical knee visual ---- */}
          <div className="lg:col-span-6 flex items-center justify-center fcta-anatomy">
            <div
              className="relative w-full max-w-[440px] aspect-[3/4] mx-auto"
              style={{
                transform: `translate3d(${parallaxX}px, ${parallaxY}px, 0)`,
                transition: 'transform 0.35s ease-out',
              }}
            >
              {/* Outer glow ring */}
              <div className="absolute inset-[-8%] rounded-full bg-[#C9A45C]/5 blur-[60px] pointer-events-none" />

              {/* Anatomy container */}
              <div className="relative w-full h-full">
                <KneeAnatomyGraphic className="w-full h-full" />

                {/* Floating technical label chips */}
                <div className="absolute top-[8%] right-[-4%] flex flex-col items-end gap-1.5">
                  <span className="text-[8px] font-mono tracking-[0.18em] text-[#C9A45C] uppercase px-2 py-0.5 bg-[#071B2A]/80 border border-[#C9A45C]/30 rounded backdrop-blur-sm whitespace-nowrap">
                    JOINT ALIGNMENT
                  </span>
                </div>

                <div className="absolute bottom-[22%] left-[-2%] flex flex-col gap-1.5">
                  <span className="text-[8px] font-mono tracking-[0.18em] text-[#94AEC4] uppercase px-2 py-0.5 bg-[#071B2A]/80 border border-[#163B56] rounded backdrop-blur-sm whitespace-nowrap">
                    MOTION
                  </span>
                </div>

                <div className="absolute top-[46%] right-[-6%]">
                  <span className="text-[8px] font-mono tracking-[0.18em] text-[#E4D1A5] uppercase px-2 py-0.5 bg-[#071B2A]/80 border border-[#C9A45C]/25 rounded backdrop-blur-sm whitespace-nowrap">
                    PRECISION
                  </span>
                </div>

                <div className="absolute bottom-[8%] right-[10%]">
                  <span className="text-[8px] font-mono tracking-[0.18em] text-[#94AEC4] uppercase px-2 py-0.5 bg-[#071B2A]/80 border border-[#163B56] rounded backdrop-blur-sm whitespace-nowrap">
                    RECOVERY
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* ==============================================
            BOTTOM CREDENTIALS BAR
        ============================================== */}
        <div className="mt-16 sm:mt-20 pt-6 border-t border-[#163B56]/60 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 fcta-sub-item">
          <div className="flex items-center gap-2 text-[10px] font-mono text-[#C9A45C] tracking-wider">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C9A45C]" />
            <span>1000+ KNEE REPLACEMENT SURGERIES</span>
          </div>
        </div>

      </div>
    </section>
  );
}

export default FinalCTASection;
