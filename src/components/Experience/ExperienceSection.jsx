import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  MapPin, 
  Compass, 
  Layers, 
  ChevronRight, 
  GraduationCap, 
  Stethoscope, 
  Building2, 
  Cpu, 
  CheckCircle2,
  ShieldCheck,
  ArrowUpRight,
  Activity
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

// ==========================================
// VERIFIED ACADEMIC MILESTONES DATA
// ==========================================
const MILESTONES = [
  {
    id: "01",
    tag: "UNDERGRADUATE MEDICAL EDUCATION",
    degree: "MBBS",
    institution: "Andhra Medical College",
    location: "Visakhapatnam, Andhra Pradesh",
    coords: "17.7041° N, 83.3022° E",
    mapPos: { top: "20%", left: "82%" },
    coordsNum: { x: 82, y: 20 },
    category: "FOUNDATION",
    icon: GraduationCap,
    description: "Foundational undergraduate medical training, clinical rotations across general surgery and internal medicine, human anatomy dissection, and emergency casualty care.",
    tags: ["MEDICAL EDUCATION", "CLINICAL FOUNDATION", "SURGICAL ANATOMY"],
    bgImage: "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?auto=format&fit=crop&q=80&w=1200"
  },
  {
    id: "02",
    tag: "POSTGRADUATE SPECIALIZATION",
    degree: "MS ORTHOPAEDICS",
    institution: "Andhra Medical College",
    affiliation: "Affiliated with NTR University of Health Sciences",
    location: "Visakhapatnam, Andhra Pradesh",
    coords: "17.7100° N, 83.3150° E",
    mapPos: { top: "42%", left: "60%" },
    coordsNum: { x: 60, y: 42 },
    category: "SPECIALIZATION",
    icon: Stethoscope,
    description: "Advanced Master of Surgery post-graduate residency focusing on skeletal trauma management, joint biomechanics, operative fracture fixation, and orthopaedic surgery.",
    tags: ["MS ORTHOPAEDICS", "TRAUMA MANAGEMENT", "JOINT BIOMECHANICS"],
    bgImage: "https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80&w=1200"
  },
  {
    id: "03",
    tag: "CLINICAL ADVANCEMENT",
    degree: "SENIOR RESIDENCY",
    institution: "RVMIMS Hospital",
    location: "Hyderabad Region, Telangana",
    coords: "17.3850° N, 78.4867° E",
    mapPos: { top: "64%", left: "38%" },
    coordsNum: { x: 38, y: 64 },
    category: "CLINICAL EXPERIENCE",
    icon: Building2,
    description: "Senior surgical residency managing high-volume complex orthopaedic trauma, operative fracture procedures, clinical diagnostics, and comprehensive patient care.",
    tags: ["SENIOR RESIDENCY", "COMPLEX TRAUMA", "PATIENT CARE"],
    bgImage: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=1200"
  },
  {
    id: "04",
    tag: "SUB-SPECIALTY FELLOWSHIP",
    degree: "ROBOTIC JOINT REPLACEMENT FELLOWSHIP",
    institution: "Medicover Hospitals",
    location: "Hitech City, Hyderabad, Telangana",
    coords: "17.4435° N, 78.3772° E",
    mapPos: { top: "60%", left: "30%" },
    coordsNum: { x: 30, y: 60 },
    category: "ROBOTIC EXPERTISE",
    icon: Cpu,
    description: "Sub-specialty fellowship training in computer-assisted surgical navigation, 3D kinematic patient-specific planning, and robotic-assisted knee and hip arthroplasty.",
    tags: ["ROBOTIC SURGERY", "JOINT REPLACEMENT", "3D NAVIGATION"],
    bgImage: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1200"
  },
  {
    id: "05",
    tag: "SUB-SPECIALTY FELLOWSHIP",
    degree: "FELLOWSHIP IN PAIN MANAGEMENT",
    institution: "Specialized Center",
    location: "India",
    coords: "0.0° N, 0.0° E",
    mapPos: { top: "75%", left: "20%" },
    coordsNum: { x: 20, y: 75 },
    category: "PAIN MANAGEMENT",
    icon: ShieldCheck,
    description: "Advanced fellowship focusing on comprehensive pain management techniques and interventions.",
    tags: ["PAIN MANAGEMENT", "FELLOWSHIP"],
    bgImage: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=1200"
  },
  {
    id: "06",
    tag: "SUB-SPECIALTY FELLOWSHIP",
    degree: "FELLOWSHIP IN LUMBAR SPINE",
    institution: "Specialized Center",
    location: "India",
    coords: "0.0° N, 0.0° E",
    mapPos: { top: "90%", left: "10%" },
    coordsNum: { x: 10, y: 90 },
    category: "SPINE SURGERY",
    icon: ShieldCheck,
    description: "Specialized fellowship focusing on the diagnosis and surgical treatment of lumbar spine disorders.",
    tags: ["LUMBAR SPINE", "SPINE SURGERY"],
    bgImage: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&q=80&w=1200"
  }
];

export function ExperienceSection({ mousePosition = { x: 0, y: 0 } }) {
  const [activeId, setActiveId] = useState("04"); // Default to fellowship destination
  const [viewMode, setViewMode] = useState("map"); // "map" | "timeline"

  const sectionRef = useRef(null);
  const doctorImgRef = useRef(null);
  const routePathRef = useRef(null);
  const activeMilestone = MILESTONES.find(m => m.id === activeId) || MILESTONES[3];

  // Mouse parallax
  const bgMouseX = (mousePosition?.x || 0) * 4;
  const bgMouseY = (mousePosition?.y || 0) * 4;

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Heading Reveal
      gsap.fromTo(
        ".sec2-heading-anim",
        { y: 35, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
          }
        }
      );

      // 2. Doctor Cutout Smooth Rise & Fade
      if (doctorImgRef.current) {
        gsap.fromTo(
          doctorImgRef.current,
          { y: 60, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1.3,
            ease: "power2.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 70%",
            }
          }
        );
      }

      // 3. Map Panel Reveal
      gsap.fromTo(
        ".sec2-map-panel",
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".sec2-map-panel",
            start: "top 80%",
          }
        }
      );

      // 4. Route Path Drawing Animation with safe length check
      if (routePathRef.current) {
        try {
          const length = routePathRef.current.getTotalLength();
          if (length && !isNaN(length)) {
            gsap.set(routePathRef.current, { strokeDasharray: length, strokeDashoffset: length });
            gsap.to(routePathRef.current, {
              strokeDashoffset: 0,
              duration: 2.5,
              ease: "power2.inOut",
              scrollTrigger: {
                trigger: ".sec2-map-panel",
                start: "top 70%",
              }
            });
          }
        } catch (e) {
          console.warn("SVG getTotalLength fallback:", e);
        }
      }

      // 5. Milestone Markers Stagger Fade In
      gsap.fromTo(
        ".sec2-milestone-marker",
        { scale: 0, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.7,
          stagger: 0.18,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: ".sec2-map-panel",
            start: "top 65%",
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, [viewMode]);

  return (
    <section 
      ref={sectionRef}
      id="about"
      className="relative w-full min-h-screen bg-[#071B2A] text-[#F5F7F6] py-24 sm:py-32 px-6 md:px-12 lg:px-20 font-sans overflow-hidden select-none border-t border-[#163B56]/50 scroll-mt-20"
    >
      {/* Background Grid & Ambient Glows */}
      <div 
        style={{ transform: `translate3d(${bgMouseX}px, ${bgMouseY}px, 0)` }}
        className="absolute inset-0 bg-[radial-gradient(#163B56_1px,transparent_1px)] [background-size:36px_36px] opacity-25 pointer-events-none transition-transform duration-300 ease-out" 
      />
      <div className="absolute top-1/4 -right-32 w-[650px] h-[650px] rounded-full bg-[#163B56]/20 blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/4 -left-32 w-[600px] h-[600px] rounded-full bg-[#C9A45C]/10 blur-[160px] pointer-events-none" />

      {/* Background Watermark */}
      <div className="absolute top-[10%] left-0 w-[170%] whitespace-nowrap font-grotesk font-black text-[clamp(5.5rem,16vw,18rem)] text-[#163B56]/10 tracking-tighter uppercase pointer-events-none select-none z-0">
        ACADEMIC &nbsp;•&nbsp; CLINICAL &nbsp;•&nbsp; SURGICAL &nbsp;•&nbsp; JOURNEY
      </div>

      <div className="max-w-[1600px] mx-auto relative z-10 flex flex-col gap-12">
        
        {/* ==========================================
            SECTION HEADER
        ========================================== */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-[#163B56]/60 pb-10 gap-6">
          <div>
            <div className="sec2-heading-anim text-[#C9A45C] text-xs sm:text-sm font-grotesk tracking-[0.25em] font-semibold uppercase mb-3 flex items-center gap-2">
              <span className="inline-block w-2.5 h-2.5 rounded-full bg-[#C9A45C]" />
              02 / ACADEMIC & PROFESSIONAL JOURNEY
            </div>
            <h2 className="sec2-heading-anim text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-[#FBFAF7] leading-[1.05]">
              THE PATH<br />
              <span className="text-[#456982] font-light">TO PRECISION.</span>
            </h2>
          </div>

          <div className="flex flex-col md:items-end gap-4 max-w-md">
            <p className="sec2-heading-anim text-xs sm:text-sm text-[#456982] font-normal leading-relaxed text-left md:text-right">
              "An academic and clinical journey shaped by orthopaedic training, surgical experience and advanced specialization in robotic joint replacement."
            </p>


          </div>
        </div>

        {/* ==========================================
            DOCTOR IDENTITY & BIOGRAPHICAL HERO CARD
        ========================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* DOCTOR IMAGE COMPOSITION (4 COLS) */}
          <div className="lg:col-span-4 relative bg-gradient-to-b from-[#0D2638] to-[#071B2A] rounded-3xl border border-[#163B56] overflow-hidden p-6 sm:p-8 flex flex-col justify-between shadow-2xl group min-h-[460px] lg:min-h-[540px]">
            
            {/* Ambient Lighting & Radial Glow behind cutout */}
            <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-72 h-72 rounded-full bg-[#C9A45C]/15 blur-3xl pointer-events-none" />
            <div className="absolute inset-0 bg-[radial-gradient(#163B56_1px,transparent_1px)] [background-size:24px_24px] opacity-20 pointer-events-none" />

            {/* Top Identity Tags */}
            <div className="relative z-20 flex items-center justify-between">
              <span className="px-3 py-1 rounded-full bg-[#163B56]/60 border border-[#C9A45C]/30 text-[10px] font-mono tracking-widest text-[#E4D1A5] uppercase">
                ORTHOPAEDIC SURGEON
              </span>
              <span className="text-[10px] font-mono text-[#456982] tracking-wider">
                HYDERABAD, TS
              </span>
            </div>

            {/* REAL DOCTOR TRANSPARENT PNG CUTOUT WITH CINEMATIC MASK */}
            <div 
              ref={doctorImgRef}
              className="relative z-10 w-full flex-1 flex items-end justify-center my-2 pointer-events-none select-none"
            >
              <div className="relative w-full max-w-[280px] sm:max-w-[320px] h-[340px] sm:h-[400px] flex items-end justify-center">
                <img
                  src="/assets/DR. KIRAN KUMAR imagev2.png"
                  alt="Dr. Kiran Kumar Karumuru - Orthopaedic Surgeon"
                  className="w-full h-full object-contain object-bottom drop-shadow-[0_20px_35px_rgba(7,27,42,0.9)] filter contrast-[105%] brightness-[98%]"
                />
                {/* Soft gradient bottom fade so cutout flows smoothly into container floor */}
                <div className="absolute bottom-0 inset-x-0 h-16 bg-gradient-to-t from-[#071B2A] to-transparent pointer-events-none" />
              </div>
            </div>

            {/* Bottom Doctor Identification */}
            <div className="relative z-20 pt-4 border-t border-[#163B56]/70">
              <div className="text-xl font-grotesk font-black text-[#FBFAF7] tracking-tight uppercase">
                DR. KIRAN KUMAR KARUMURU
              </div>

              {/* Qualifications Pill */}
              <div className="mt-3 inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-[#C9A45C]/15 border border-[#C9A45C]/40 text-[#E4D1A5] text-[11px] font-grotesk font-bold">
                <span>Mbbs,MS ortho,FIJR,FIPM,vFISS</span>
              </div>
            </div>

          </div>

          {/* RIGHT EDITORIAL JOURNEY & VERIFIED RECORD (8 COLS) */}
          <div className="lg:col-span-8 flex flex-col justify-between space-y-6">
            
            {/* Top Editorial Summary Card */}
            <div className="bg-[#0D2638]/70 border border-[#163B56] rounded-3xl p-6 sm:p-8 backdrop-blur-md">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#163B56]/60">
                <div>
                  <span className="text-[10px] font-mono text-[#C9A45C] tracking-widest uppercase block mb-1">
                    CLINICAL ARCHITECTURE
                  </span>
                  <h3 className="text-xl sm:text-2xl font-grotesk font-extrabold text-[#FBFAF7] tracking-tight uppercase">
                    From Rigorous Foundation to Robotic Precision
                  </h3>
                </div>

                
              </div>

              {/* 4 Core Pillars of Dr. Kiran's Academic & Clinical Path */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mt-6">
                <div className="p-4 rounded-2xl bg-[#071B2A]/70 border border-[#163B56]/60 flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-lg bg-[#163B56] text-[#C9A45C] flex items-center justify-center font-bold text-xs shrink-0 font-mono">
                    01
                  </div>
                  <div>
                    <span className="text-xs font-mono font-bold text-[#E4D1A5] block">UNDERGRADUATE MBBS</span>
                    <span className="text-sm font-bold text-[#FBFAF7] block">Andhra Medical College</span>
                    <span className="text-xs text-[#456982]">Visakhapatnam, Andhra Pradesh</span>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-[#071B2A]/70 border border-[#163B56]/60 flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-lg bg-[#163B56] text-[#C9A45C] flex items-center justify-center font-bold text-xs shrink-0 font-mono">
                    02
                  </div>
                  <div>
                    <span className="text-xs font-mono font-bold text-[#E4D1A5] block">MS ORTHOPAEDICS</span>
                    <span className="text-sm font-bold text-[#FBFAF7] block">Andhra Medical College</span>
                    <span className="text-xs text-[#456982]">Affiliated with NTR University of Health Sciences</span>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-[#071B2A]/70 border border-[#163B56]/60 flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-lg bg-[#163B56] text-[#C9A45C] flex items-center justify-center font-bold text-xs shrink-0 font-mono">
                    03
                  </div>
                  <div>
                    <span className="text-xs font-mono font-bold text-[#E4D1A5] block">SENIOR RESIDENCY</span>
                    <span className="text-sm font-bold text-[#FBFAF7] block">RVMIMS Hospital</span>
                    <span className="text-xs text-[#456982]">Hyderabad Region, Telangana</span>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-[#071B2A]/70 border border-[#163B56]/60 flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-lg bg-[#163B56] text-[#C9A45C] flex items-center justify-center font-bold text-xs shrink-0 font-mono">
                    04
                  </div>
                  <div>
                    <span className="text-xs font-mono font-bold text-[#E4D1A5] block">ROBOTIC SURGERY FELLOWSHIP</span>
                    <span className="text-sm font-bold text-[#FBFAF7] block">Medicover Hospitals</span>
                    <span className="text-xs text-[#456982]">Hitech City, Hyderabad, Telangana</span>
                  </div>
                </div>
              <div className="p-4 rounded-2xl bg-[#071B2A]/70 border border-[#163B56]/60 flex items-start gap-3.5">
                <div className="w-8 h-8 rounded-lg bg-[#163B56] text-[#C9A45C] flex items-center justify-center font-bold text-xs shrink-0 font-mono">
                  05
                </div>
                <div>
                  <span className="text-xs font-mono font-bold text-[#E4D1A5] block uppercase">QUALIFICATION</span>
                  <span className="text-sm font-bold text-[#FBFAF7] block">FIPM(kolkata)</span>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-[#071B2A]/70 border border-[#163B56]/60 flex items-start gap-3.5">
                <div className="w-8 h-8 rounded-lg bg-[#163B56] text-[#C9A45C] flex items-center justify-center font-bold text-xs shrink-0 font-mono">
                  06
                </div>
                <div>
                  <span className="text-xs font-mono font-bold text-[#E4D1A5] block uppercase">QUALIFICATION</span>
                  <span className="text-sm font-bold text-[#FBFAF7] block">vFISS (Ganga hospital ,Coimbatore)</span>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-[#071B2A]/70 border border-[#163B56]/60 flex items-start gap-3.5">
                <div className="w-8 h-8 rounded-lg bg-[#163B56] text-[#C9A45C] flex items-center justify-center font-bold text-xs shrink-0 font-mono">
                  07
                </div>
                <div>
                  <span className="text-xs font-mono font-bold text-[#E4D1A5] block uppercase">FELLOWSHIP</span>
                  <span className="text-sm font-bold text-[#FBFAF7] block">Fellowship in pain management</span>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-[#071B2A]/70 border border-[#163B56]/60 flex items-start gap-3.5">
                <div className="w-8 h-8 rounded-lg bg-[#163B56] text-[#C9A45C] flex items-center justify-center font-bold text-xs shrink-0 font-mono">
                  08
                </div>
                <div>
                  <span className="text-xs font-mono font-bold text-[#E4D1A5] block uppercase">FELLOWSHIP</span>
                  <span className="text-sm font-bold text-[#FBFAF7] block">Fellowship in lumbar spine</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
      </div>
    </section>
  );
}

export default ExperienceSection;