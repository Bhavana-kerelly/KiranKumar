import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const JOURNEY_STEPS = [
  {
    step: '01',
    label: 'Initial Consultation',
    shortLabel: 'Consultation',
    headline: 'Understanding Your Condition',
    description:
      'A thorough clinical assessment covering your medical history, symptom pattern, and diagnostic imaging review. Dr. Kiran evaluates the extent of joint involvement and discusses all available treatment options with you.',
    details: [
      'Full orthopaedic clinical examination',
      'X-ray and MRI imaging review',
      'Detailed discussion of treatment pathways',
      'Questions answered — no time pressure',
    ],
    tag: 'STEP ONE',
    image:
      '/images/journey/step-01-consultation.jpg',
    imageAlt: 'Doctor reviewing medical results and consulting with patient',
    caption: 'Phase 01 — Clinical Evaluation & Assessment',
  },
  {
    step: '02',
    label: 'Surgical Planning',
    shortLabel: 'Planning',
    headline: 'A Plan Built Around You',
    description:
      'Personalised pre-operative planning using advanced imaging technology to map your anatomy, simulate implant positioning and determine the optimal surgical approach for your specific joint geometry.',
    details: [
      'CT-based 3D anatomical modelling',
      'Patient-specific implant sizing',
      'Kinematic axis simulation',
      'Pre-operative risk and benefit review',
    ],
    tag: 'STEP TWO',
    image:
      '/images/journey/step-02-planning.jpg',
    imageAlt: '3D Joint planning interface',
    caption: 'Phase 02 — Precision Anatomical Simulation',
  },
  {
    step: '03',
    label: 'The Procedure',
    shortLabel: 'Procedure',
    headline: 'Precision at Every Incision',
    description:
      'Robotic-assisted or arthroscopic surgery performed with sub-millimetre accuracy, minimising soft tissue disruption and operating time. Every resection follows the pre-planned alignment within tight tolerances.',
    details: [
      'Robotic-guided or arthroscopic approach',
      'Minimal soft tissue disruption',
      'Real-time intra-operative feedback',
      'Component positioning verified intra-operatively',
    ],
    tag: 'STEP THREE',
    image:
      '/images/journey/step-03-procedure.jpg',
    imageAlt: 'Modern operating room environment',
    caption: 'Phase 03 — Sub-millimetre Intra-operative Accuracy',
  },
  {
    step: '04',
    label: 'Immediate Recovery',
    shortLabel: 'Recovery',
    headline: 'Monitored, Supported, Safe',
    description:
      'Structured post-operative care with pain management, wound monitoring and supervised early mobilisation — often beginning within 24 hours where clinically appropriate, to support a smooth recovery trajectory.',
    details: [
      'Dedicated post-operative monitoring',
      'Pain management protocol',
      'Early supervised mobilisation',
      'Wound care and complication screening',
    ],
    tag: 'STEP FOUR',
    image:
      '/images/journey/step-04-recovery.jpg',
    imageAlt: 'Medical recovery environment',
    caption: 'Phase 04 — Supervised Post-Operative Care',
  },
  {
    step: '05',
    label: 'Rehabilitation',
    shortLabel: 'Rehab',
    headline: 'Back to the Life You Love',
    description:
      'A structured physiotherapy programme designed to progressively restore strength, range of motion and functional independence — guiding you back to daily activity, work, and movement with confidence.',
    details: [
      'Personalised physiotherapy programme',
      'Progressive strength and mobility milestones',
      'Regular follow-up appointments',
      'Long-term outcome monitoring',
    ],
    tag: 'STEP FIVE',
    image:
      '/images/journey/step-05-rehab.jpg',
    imageAlt: 'Physiotherapy rehabilitation session',
    caption: 'Phase 05 — Functional Restoration & Mobility',
  },
];

const TRUST_SIGNALS = [
  { label: 'Available Locations', value: 'Visakhapatnam & Hyderabad' },
  { label: 'Care Model', value: 'Individualised Patient Planning' },
  { label: 'Follow-Up', value: 'Complete Post-Operative Care' },
];

export function PatientJourneySection() {
  const sectionRef = useRef(null);
  const storyContainerRef = useRef(null);
  const imagePanelRef = useRef(null);
  const contentPanelRef = useRef(null);

  const [activeStep, setActiveStep] = useState(0);

  const step = JOURNEY_STEPS[activeStep];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header subtle parallax reveal
      gsap.fromTo(
        '.apple-header-item',
        { y: 35, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.12,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
          },
        }
      );

      // Hero image subtle zoom reveal
      gsap.fromTo(
        '.apple-hero-viewport',
        { scale: 0.97, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 1.2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '#patient-journey',
            start: 'top 85%',
          },
        }
      );

      // Trust signals reveal
      gsap.fromTo(
        '.apple-trust-item',
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '.apple-trust-bar',
            start: 'top 92%',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    if (contentPanelRef.current) {
      gsap.fromTo(
        contentPanelRef.current,
        { opacity: 0, y: 16 },
        { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' }
      );
    }

    if (imagePanelRef.current) {
      gsap.fromTo(
        imagePanelRef.current,
        { opacity: 0.3, scale: 1.02 },
        { opacity: 1, scale: 1, duration: 0.6, ease: 'power2.out' }
      );
    }
  }, [activeStep]);

  return (
    <section
      ref={sectionRef}
      id="patient-journey"
      className="relative w-full bg-[#F5F7F6] text-[#071B2A] font-sans antialiased overflow-hidden py-10 sm:py-14 lg:py-16 selection:bg-[#C9A45C]/20 selection:text-[#071B2A]"
    >
      {/* =====================================================
          MAIN CONTAINER
      ===================================================== */}
      <div className="max-w-[1360px] mx-auto px-4 sm:px-8 lg:px-12 relative z-10">

        {/* =====================================================
            APPLE-STYLE EDITORIAL HEADER
        ===================================================== */}
        <div className="max-w-3xl mb-8 sm:mb-10">
          <p className="apple-header-item text-xs font-semibold tracking-[0.2em] text-[#C9A45C] uppercase mb-2">
            05 — Patient Journey
          </p>

          <h2 className="apple-header-item text-3xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-[#071B2A] leading-[1.08] mb-3">
            Restoring movement.<br />
            <span className="text-[#6A87A0] font-normal">Step by guided step.</span>
          </h2>

          <p className="apple-header-item text-sm sm:text-base text-[#456982] leading-relaxed font-normal max-w-2xl">
            A surgical experience designed around precision, clarity, and continuous clinical support from your first evaluation to total recovery.
          </p>
        </div>

        {/* =====================================================
            MINIMALIST HORIZONTAL STAGE NAVIGATOR
        ===================================================== */}
        <div className="mb-6 lg:mb-8 border-b border-[#D8E3EB]/80 pb-px">
          <div className="flex items-center justify-between overflow-x-auto no-scrollbar gap-6 sm:gap-10 py-1">
            {JOURNEY_STEPS.map((s, idx) => {
              const isActive = activeStep === idx;
              return (
                <button
                  key={s.step}
                  onClick={() => setActiveStep(idx)}
                  className="group relative flex flex-col items-start pb-2.5 focus:outline-none transition-all cursor-pointer flex-shrink-0"
                >
                  <span className={`text-[10px] font-mono font-medium tracking-wider mb-0.5 transition-colors duration-300 ${
                    isActive ? 'text-[#C9A45C]' : 'text-[#6A87A0] group-hover:text-[#071B2A]'
                  }`}>
                    {s.step}
                  </span>
                  
                  <span className={`text-xs sm:text-sm font-medium tracking-tight whitespace-nowrap transition-colors duration-300 ${
                    isActive ? 'text-[#071B2A] font-semibold' : 'text-[#6A87A0] group-hover:text-[#071B2A]'
                  }`}>
                    {s.label}
                  </span>

                  {/* Minimal indicator bar */}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#C9A45C] transition-all duration-300" />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* =====================================================
            HERO STORY VIEWER (APPLE-INSPIRED GLASS LAYERING)
        ===================================================== */}
        <div 
          ref={storyContainerRef}
          className="apple-hero-viewport relative rounded-2xl lg:rounded-[24px] overflow-hidden bg-[#071B2A] text-white shadow-xl border border-white/20 min-h-[480px] sm:min-h-[520px] lg:min-h-[500px] grid grid-cols-1 lg:grid-cols-12"
        >
          {/* ---- BACKGROUND / IMAGE MEDIA LAYER ---- */}
          <div className="lg:col-span-7 relative h-[240px] sm:h-[320px] lg:h-full order-1 lg:order-2 overflow-hidden">
            <img
              ref={imagePanelRef}
              src={step.image}
              alt={step.imageAlt}
              className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-1000 ease-out"
            />
            
            {/* Elegant lighting gradient overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#071B2A] via-[#071B2A]/20 to-transparent lg:bg-gradient-to-r lg:from-[#071B2A] lg:via-[#071B2A]/30 lg:to-transparent" />

            {/* Stage Caption Badge */}
            <div className="absolute top-4 right-4 hidden sm:block bg-[#071B2A]/60 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/10 text-[11px] font-mono tracking-wider text-white/90">
              {step.caption}
            </div>
          </div>

          {/* ---- EDITORIAL CONTENT LAYER ---- */}
          <div 
            ref={contentPanelRef}
            className="lg:col-span-5 p-6 sm:p-8 lg:p-10 flex flex-col justify-between order-2 lg:order-1 relative z-10 bg-[#071B2A]"
          >
            {/* Upper Content */}
            <div>
              {/* Step indicator tag */}
              <div className="flex items-center gap-2.5 mb-4">
                <span className="text-[10px] font-mono font-semibold tracking-[0.2em] text-[#C9A45C] uppercase px-2.5 py-0.5 bg-[#C9A45C]/10 rounded-full border border-[#C9A45C]/20">
                  {step.tag}
                </span>
                <span className="text-[11px] font-mono text-[#6A87A0]">
                  {step.step} / 05
                </span>
              </div>

              {/* Step Headline */}
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold tracking-tight text-white mb-3 leading-[1.15]">
                {step.headline}
              </h3>

              {/* Step Body Copy */}
              <p className="text-xs sm:text-sm text-[#D8E3EB] leading-relaxed font-normal mb-5">
                {step.description}
              </p>

              {/* Detailed Spec List */}
              <div className="pt-4 border-t border-white/10">
                <p className="text-[10px] font-mono font-medium tracking-[0.2em] text-[#6A87A0] uppercase mb-2.5">
                  Key Milestones
                </p>
                <div className="space-y-2">
                  {step.details.map((detail, index) => (
                    <div key={index} className="flex items-baseline gap-2.5 text-xs text-white/90">
                      <span className="text-[10px] font-mono text-[#C9A45C] font-semibold flex-shrink-0">
                        0{index + 1}
                      </span>
                      <span className="font-normal leading-snug text-white/80">
                        {detail}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Interactive Step Navigation Controls */}
            <div className="pt-5 mt-5 border-t border-white/10 flex items-center justify-between">
              {/* Minimal step progress bar */}
              <div className="flex items-center gap-1.5">
                {JOURNEY_STEPS.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveStep(idx)}
                    className={`h-1 rounded-full transition-all duration-300 cursor-pointer ${
                      activeStep === idx
                        ? 'w-6 bg-[#C9A45C]'
                        : 'w-1.5 bg-white/20 hover:bg-white/40'
                    }`}
                    aria-label={`Jump to stage ${idx + 1}`}
                  />
                ))}
              </div>

              {/* Clean text controls */}
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setActiveStep((prev) => Math.max(0, prev - 1))}
                  disabled={activeStep === 0}
                  className="text-[11px] font-medium tracking-wider text-white/70 hover:text-white disabled:opacity-30 disabled:hover:text-white/70 transition-colors uppercase cursor-pointer"
                >
                  Previous
                </button>
                <span className="text-white/20 text-xs">|</span>
                <button
                  onClick={() => setActiveStep((prev) => Math.min(JOURNEY_STEPS.length - 1, prev + 1))}
                  disabled={activeStep === JOURNEY_STEPS.length - 1}
                  className="text-[11px] font-medium tracking-wider text-[#C9A45C] hover:text-[#E4D1A5] disabled:opacity-30 disabled:hover:text-[#C9A45C] transition-colors uppercase cursor-pointer"
                >
                  Next Phase
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* =====================================================
            MINIMALIST TRUST SIGNALS & CTA
        ===================================================== */}
        <div className="apple-trust-bar mt-8 sm:mt-10 pt-6 border-t border-[#D8E3EB]">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-5">
            
            {/* Trust Specs */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-8">
              {TRUST_SIGNALS.map((signal, idx) => (
                <div key={idx} className="apple-trust-item flex flex-col gap-0.5">
                  <span className="text-[10px] font-mono tracking-wider text-[#6A87A0] uppercase">
                    {signal.label}
                  </span>
                  <span className="text-xs sm:text-sm font-semibold text-[#071B2A]">
                    {signal.value}
                  </span>
                </div>
              ))}
            </div>

            {/* Apple-style pill CTA */}
            <div className="apple-trust-item flex-shrink-0">
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-[#071B2A] text-white text-[11px] font-medium tracking-wider uppercase hover:bg-[#163B56] transition-all duration-300 shadow-sm hover:shadow-md"
              >
                Schedule Consultation
              </a>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

export default PatientJourneySection;