import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Maximize2,
  Pause,
  Play,
  Volume2,
  VolumeX,
  Heart,
  CheckCircle2,
  Sparkles,
  ShieldCheck,
} from "lucide-react";

const SPECIALTIES = [
  {
    id: "01",
    chapter: "Chapter 01 / Advanced Surgery",
    title: "Robotic Joint Replacement",
    subtitle: "Surgical Precision & Individualized Planning",
    description:
      "Advanced joint replacement care supported by robotic technology, surgical precision and individualized treatment planning.",
    isPrimary: true,
    statNumber: "1000+",
    statLabel: "Knee Replacement Surgeries",
    statContext:
      "Verified clinical surgical experience in computer-navigated and robotic-assisted total and partial knee arthroplasty.",
    videoUrl: "/videos/robotic-joint-replacement.mp4",
    posterImage:
      "https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80&w=1600",
    techBadge: "3D Pre-Op Mapping & Robotic Guidance",
    principles: [
      "Surgical Precision",
      "Advanced Technology",
      "Personalized Planning",
      "Early Rehabilitation",
    ],
    clinicalFocus: [
      {
        name: "Kinematic Alignment",
        note: "Sub-millimeter implant positioning tailored to natural limb anatomy",
      },
      {
        name: "Soft-Tissue Preservation",
        note: "Real-time intraoperative ligament tensioning and dynamic balance",
      },
      {
        name: "Bone Resection Accuracy",
        note: "Haptic robotic arm feedback ensuring planned boundary protection",
      },
    ],
    ctaText: "Consult Robotic Joint Specialist",
  },
  {
    id: "02",
    chapter: "Chapter 02 / Advanced Surgery",
    title: "Hip Replacement",
    subtitle: "Precise Restoration of Joint Mechanics",
    description:
      "Advanced hip replacement surgery utilizing state-of-the-art techniques to restore mobility and alleviate pain with long-lasting results.",
    isPrimary: false,
    statNumber: "500+",
    statLabel: "Hip Replacement Surgeries",
    statContext:
      "Extensive clinical experience in primary and revision total hip arthroplasty.",
    videoUrl: "/videos/hip-replacement.mp4",
    posterImage:
      "https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80&w=1600",
    techBadge: "Advanced Implants & Kinematics",
    principles: [
      "Surgical Precision",
      "Advanced Technology",
      "Personalized Planning",
      "Early Rehabilitation",
    ],
    clinicalFocus: [
      {
        name: "Anatomical Restoration",
        note: "Precise cup positioning and leg length restoration",
      },
      {
        name: "Tissue Preserving",
        note: "Minimally invasive approaches for faster recovery",
      },
      {
        name: "Durable Materials",
        note: "Use of advanced bearing surfaces for longevity",
      },
    ],
    ctaText: "Consult Hip Replacement Specialist",
  },
  {
    id: "03",
    chapter: "Chapter 03 / Minimally Invasive",
    title: "Arthroscopy",
    subtitle: "Targeted Keyhole Joint Preservation",
    description:
      "Minimally invasive arthroscopic procedures designed to address joint conditions while supporting targeted treatment and recovery.",
    isPrimary: false,
    statNumber: "98%",
    statLabel: "Precision Accuracy",
    statContext:
      "High-definition endoscopic visualization providing surgical access with minimal soft-tissue disruption.",
    videoUrl: "/videos/arthroscopy.mp4",
    posterImage:
      "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=1600",
    techBadge: "Endoscopic 4K Visualization",
    principles: [
      "Minimally Invasive",
      "High-Def 4K Visuals",
      "Quick Recovery",
      "Joint Preservation",
    ],
    clinicalFocus: [
      {
        name: "Diagnostic Precision",
        note: "Direct optical assessment of articular cartilage and ligaments",
      },
      {
        name: "Tissue Sparing Access",
        note: "Small keyhole portals minimizing postoperative discomfort",
      },
      {
        name: "Structured Recovery",
        note: "Targeted post-intervention protocols supporting joint mobility",
      },
    ],
    ctaText: "Consult Arthroscopy Specialist",
  },
  {
    id: "04",
    chapter: "Chapter 04 / Reconstruction",
    title: "Complex Trauma Management",
    subtitle: "Structural Reconstruction & Axis Restoration",
    description:
      "Comprehensive orthopaedic management for complex injuries, with emphasis on surgical planning, precision and recovery.",
    isPrimary: false,
    statNumber: "24/7",
    statLabel: "Emergency Care Protocol",
    statContext:
      "Systematic surgical fixation protocols for high-energy fractures and severe musculoskeletal trauma.",
    videoUrl: "/videos/complex-trauma-management.mp4",
    posterImage:
      "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=1600",
    techBadge: "Multi-Planar Fixation Matrix",
    principles: [
      "Axial Realignment",
      "Damage Control",
      "Advanced Fixation",
      "Functional Rehab",
    ],
    clinicalFocus: [
      {
        name: "Fracture Stabilization",
        note: "Rigid internal fixation restoring mechanical stability",
      },
      {
        name: "Anatomical Realignment",
        note: "Restoration of rotational, angular, and axial limb integrity",
      },
      {
        name: "Damage Control Protocol",
        note: "Staged reconstructive interventions for high-energy trauma",
      },
    ],
    ctaText: "Consult Trauma Specialist",
  },
];

export function ExpertiseSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [progress, setProgress] = useState(0);
  const videoRef = useRef(null);

  const activeSpec = SPECIALTIES[activeIndex];

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    setProgress(0);
    video.load();

    const playPromise = video.play();
    if (playPromise?.catch) {
      playPromise.catch(() => setIsPlaying(false));
    }

    const onTimeUpdate = () => {
      if (video.duration) {
        setProgress((video.currentTime / video.duration) * 100);
      }
    };

    const onPlay = () => setIsPlaying(true);
    const onPause = () => setIsPlaying(false);

    video.addEventListener("timeupdate", onTimeUpdate);
    video.addEventListener("play", onPlay);
    video.addEventListener("pause", onPause);

    return () => {
      video.removeEventListener("timeupdate", onTimeUpdate);
      video.removeEventListener("play", onPlay);
      video.removeEventListener("pause", onPause);
    };
  }, [activeIndex]);

  const togglePlay = async () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      try {
        await video.play();
      } catch {}
    } else {
      video.pause();
    }
  };

  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = !video.muted;
    setIsMuted(video.muted);
  };

  const fullscreen = async () => {
    const video = videoRef.current;
    if (!video) return;

    try {
      if (video.requestFullscreen) {
        await video.requestFullscreen();
      }
    } catch {}
  };

  return (
    <section
      id="expertise"
      className="relative isolate min-h-screen bg-[#F4F8FA] py-12 text-[#163B59] lg:py-20"
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-32 top-10 h-96 w-96 rounded-full bg-[#1F5C86]/5 blur-3xl" />
        <div className="absolute right-0 top-1/3 h-[500px] w-[500px] rounded-full bg-[#C9A45C]/10 blur-3xl" />
        <div className="absolute bottom-10 left-1/4 h-80 w-80 rounded-full bg-[#163B59]/5 blur-2xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center md:mb-14">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#C9A45C]/30 bg-white px-4 py-1.5 shadow-sm">
            <Heart className="h-3.5 w-3.5 text-[#C9A45C]" />
            <span className="text-xs font-semibold uppercase tracking-wider text-[#1F5C86]">
              Clinical Expertise
            </span>
          </div>

          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-[#163B59] sm:text-4xl lg:text-5xl">
            Precision & Compassion <span className="text-[#1F5C86]">in Motion</span>
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-[#163B59]/70 sm:text-base">
            Advanced orthopaedic care combining surgical experience, modern technology, and individualized treatment planned around your personal recovery goals.
          </p>
        </div>

        <div className="mb-8 flex flex-wrap justify-center gap-3">
          {SPECIALTIES.map((spec, index) => {
            const active = index === activeIndex;

            return (
              <button
                key={spec.id}
                onClick={() => setActiveIndex(index)}
                className={`relative flex items-center gap-3 rounded-2xl px-5 py-3.5 transition-all duration-300 ${
                  active
                    ? "bg-[#163B59] text-white shadow-lg shadow-[#163B59]/20 scale-[1.02]"
                    : "bg-white text-[#163B59] hover:bg-white/80 hover:shadow-md border border-[#163B59]/10"
                }`}
              >
                <span
                  className={`flex h-7 w-7 items-center justify-center rounded-xl text-xs font-bold ${
                    active
                      ? "bg-[#E7C489] text-[#163B59]"
                      : "bg-[#F4F8FA] text-[#1F5C86]"
                  }`}
                >
                  {spec.id}
                </span>

                <div className="text-left">
                  <span className="block text-xs font-bold tracking-wide sm:text-sm">
                    {spec.title}
                  </span>
                  <span
                    className={`block text-[10px] tracking-wider uppercase ${
                      active ? "text-white/60" : "text-[#163B59]/50"
                    }`}
                  >
                    {spec.techBadge}
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        <div className="grid grid-cols-1 overflow-hidden rounded-3xl border border-[#163B59]/10 bg-white shadow-xl lg:grid-cols-12">
          <div className="relative min-h-[320px] bg-[#102E45] lg:col-span-7 lg:min-h-[500px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeSpec.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="absolute inset-0"
              >
                <video
                  ref={videoRef}
                  src={activeSpec.videoUrl}
                  autoPlay
                  loop
                  muted={isMuted}
                  playsInline
                  preload="metadata"
                  className="h-full w-full object-cover"
                />
              </motion.div>
            </AnimatePresence>

            <div className="absolute inset-0 bg-gradient-to-t from-[#163B59]/70 via-transparent to-black/20" />



            <button
              onClick={togglePlay}
              aria-label={isPlaying ? "Pause video" : "Play video"}
              className="group absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-[#163B59] shadow-xl backdrop-blur-md transition-all duration-300 hover:scale-110 hover:bg-[#E7C489]"
            >
              {isPlaying ? (
                <Pause className="h-6 w-6" />
              ) : (
                <Play className="ml-1 h-6 w-6" />
              )}
            </button>

            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <button
                  onClick={toggleMute}
                  aria-label={isMuted ? "Unmute video" : "Mute video"}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-[#163B59]/60 text-white backdrop-blur-md transition hover:bg-white hover:text-[#163B59]"
                >
                  {isMuted ? (
                    <VolumeX className="h-4 w-4" />
                  ) : (
                    <Volume2 className="h-4 w-4" />
                  )}
                </button>

                <button
                  onClick={fullscreen}
                  aria-label="Fullscreen video"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-[#163B59]/60 text-white backdrop-blur-md transition hover:bg-white hover:text-[#163B59]"
                >
                  <Maximize2 className="h-4 w-4" />
                </button>
              </div>

              <div className="hidden rounded-2xl border border-white/20 bg-[#163B59]/80 px-4 py-2 text-right backdrop-blur-md sm:block">
                <div className="text-lg font-black leading-none text-white">
                  {activeSpec.statNumber}
                </div>
                <div className="text-[10px] font-bold text-[#E7C489]">
                  {activeSpec.statLabel}
                </div>
              </div>
            </div>

            <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20">
              <div
                className="h-full bg-[#E7C489] transition-[width] duration-150"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          <div className="flex flex-col justify-between p-6 sm:p-8 lg:col-span-5 lg:p-10">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeSpec.id + "-details"}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                <div>
                  <span className="text-xs font-extrabold tracking-widest text-[#C9A45C]">
                    {activeSpec.subtitle}
                  </span>
                  <h3 className="mt-1 text-2xl font-black text-[#163B59] sm:text-3xl">
                    {activeSpec.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#163B59]/75">
                    {activeSpec.description}
                  </p>
                </div>

                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#1F5C86]">
                    Core Principles
                  </h4>
                  <div className="mt-2.5 grid grid-cols-2 gap-2">
                    {activeSpec.principles.map((principle) => (
                      <div
                        key={principle}
                        className="flex items-center justify-center rounded-xl bg-[#F4F8FA] p-2.5 text-xs font-semibold text-[#163B59] text-center"
                      >
                        <span>{principle}</span>
                      </div>
                    ))}
                  </div>
                </div>



                <div className="pt-2">
                  <a
                    href="#contact"
                    className="group flex w-full items-center justify-center gap-3 rounded-2xl bg-[#163B59] px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-white shadow-lg transition-all duration-300 hover:bg-[#1F5C86] hover:shadow-xl sm:text-sm"
                  >
                    <span>{activeSpec.ctaText}</span>
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>


      </div>
    </section>
  );
}

export default ExpertiseSection;