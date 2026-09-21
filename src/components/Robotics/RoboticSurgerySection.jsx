import React, { useEffect, useRef, useState } from 'react';

const SURGICAL_STAGES = [
  {
    id: "stage-01",
    step: "01",
    phase: "Pre-Operative",
    title: "3D Anatomical Mapping",
    description: "Generates a personalized 3D virtual model of your unique joint anatomy to pre-plan bone cuts and implant placement down to 0.1mm accuracy before entering the operating room.",
    image: "/assets/robotic-stage-1.jpg",
  },
  {
    id: "stage-02",
    step: "02",
    phase: "Intra-Operative",
    title: "Robotic-Arm Execution",
    description: "The surgeon guides the robotic arm, which enforces strict haptic boundaries. This prevents bone removal outside the pre-planned zone, protecting surrounding ligaments and healthy tissue.",
    image: "/assets/robotic-stage-2.jpg",
  },
  {
    id: "stage-03",
    step: "03",
    phase: "Balancing",
    title: "Dynamic Ligament Tuning",
    description: "Evaluates joint laxity and tension throughout the full range of motion in real-time, allowing micro-adjustments so the knee feels completely natural when flexing and extending.",
    image: "/assets/robotic-stage-3.jpg",
  },
  {
    id: "stage-04",
    step: "04",
    phase: "Post-Operative",
    title: "Rapid Mobilization",
    description: "Because bone cuts and soft tissues are handled with surgical precision, post-operative pain and swelling are significantly reduced, allowing most patients to walk within hours.",
    image: "/assets/robotic-stage-4.jpg",
  }
];

export function RoboticSurgerySection() {
  const [activeStageIndex, setActiveStageIndex] = useState(0);
  const sectionRefs = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRefs.current.length === 0) return;
      
      const triggerPoint = window.innerHeight / 2;
      let activeIdx = 0;

      sectionRefs.current.forEach((ref, index) => {
        if (!ref) return;
        const rect = ref.getBoundingClientRect();
        // If the top of the panel is above the middle of the screen, it becomes the active one.
        // Because they are in order, the last one to cross the middle wins.
        if (rect.top <= triggerPoint) {
          activeIdx = index;
        }
      });

      setActiveStageIndex(prev => prev !== activeIdx ? activeIdx : prev);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section 
      id="robotic-surgery"
      className="relative w-full bg-[#040E17] text-[#F4F8FA] font-sans pt-24 pb-32"
    >
      {/* Background depth */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#040E17] to-[#0A1A2A] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* HEADER AREA */}
        <div className="mb-12 lg:mb-20">
          <span className="text-[#D4AF37] text-xs font-mono font-bold tracking-[0.2em] block mb-4">
            Surgical Methodology
          </span>
          <h2 className="text-3xl sm:text-5xl lg:text-5xl font-black tracking-tight text-white leading-tight">
            Robotic Precision. <br className="hidden sm:block" />
            <span className="text-[#8AA1B5] font-light">Natural Kinematics.</span>
          </h2>
        </div>

        {/* DESKTOP INTERACTIVE LAYOUT (Sticky + Scrolling) */}
        <div className="hidden lg:grid grid-cols-12 gap-16 relative">
          
          {/* LEFT: STICKY VERTICAL JOURNEY NAVIGATION */}
          <div className="col-span-4 relative">
            <div className="sticky top-32 flex flex-col justify-between h-[60vh] py-8">
              {/* Background Line */}
              <div className="absolute left-[-2px] top-8 bottom-8 w-[1px] bg-[#13344E]" />
              
              {/* Animated Progress line */}
              <div 
                className="absolute left-[-2px] top-8 w-[2px] bg-[#D4AF37] transition-all duration-300 ease-out"
                style={{ height: `${(activeStageIndex / (SURGICAL_STAGES.length - 1)) * 100}%` }}
              />

              {SURGICAL_STAGES.map((s, idx) => {
                const isActive = activeStageIndex === idx;
                return (
                  <div 
                    key={s.id} 
                    className={`pl-8 transition-all duration-500 ${
                      isActive ? 'opacity-100 scale-105 origin-left' : 'opacity-40 hover:opacity-60'
                    }`}
                  >
                    <div className="text-sm font-mono text-[#D4AF37] mb-1">
                      STAGE {s.step} &bull; {s.phase}
                    </div>
                    <h4 className="text-xl font-bold text-white tracking-wide">
                      {s.title}
                    </h4>
                  </div>
                );
              })}
            </div>
          </div>

          {/* RIGHT: MAIN SCROLLING CONTENT AREA */}
          <div className="col-span-8 flex flex-col gap-32 pb-32">
            {SURGICAL_STAGES.map((s, idx) => (
              <div 
                key={s.id}
                ref={(el) => (sectionRefs.current[idx] = el)}
                data-index={idx}
                className="flex flex-col gap-6"
              >
                {/* Large Image */}
                <div className="w-full aspect-[21/9] lg:aspect-[21/9] rounded-2xl overflow-hidden shadow-2xl border border-[#13344E]/30 relative">
                  <img 
                    src={s.image} 
                    alt={s.title} 
                    className="w-full h-full object-cover object-center filter contrast-[1.1] brightness-[0.9]"
                  />
                  {/* Subtle edge overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#040E17]/40 to-transparent" />
                </div>

                {/* Stage Information */}
                <div className="bg-[#0A1A2A] p-8 md:p-10 rounded-2xl border border-[#13344E]/30 shadow-xl relative mt-[-40px] mx-8 z-10 backdrop-blur-md">
                  <div className="flex items-center gap-4 mb-3">
                    <span className="text-3xl font-mono font-bold text-[#D4AF37]">
                      {s.step}
                    </span>
                    <span className="w-8 h-[1px] bg-[#D4AF37]/50" />
                    <span className="text-xs font-mono tracking-widest text-[#D4AF37]">
                      {s.phase}
                    </span>
                  </div>
                  
                  <h3 className="text-2xl lg:text-3xl font-extrabold text-white mb-4 tracking-tight leading-tight">
                    {s.title}
                  </h3>
                  
                  <p className="text-base lg:text-lg text-[#C2D1DF] max-w-2xl leading-relaxed font-light">
                    {s.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* MOBILE STACKED LAYOUT */}
        <div className="lg:hidden flex flex-col gap-24 mt-8">
          {SURGICAL_STAGES.map((s, idx) => (
            <div 
              key={s.id} 
              ref={(el) => (sectionRefs.current[idx] = el)}
              data-index={idx}
              className="flex flex-col gap-4 relative"
            >
              
              <div className="mb-2">
                <div className="flex items-center gap-3 mb-1">
                  <span className="text-2xl font-mono font-bold text-[#D4AF37]">
                    {s.step}
                  </span>
                  <span className="text-[10px] font-mono tracking-widest text-[#D4AF37]">
                    STAGE {s.step} &bull; {s.phase}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-white tracking-tight">
                  {s.title}
                </h3>
              </div>

              <div className="w-full aspect-video rounded-xl overflow-hidden shadow-xl border border-[#13344E]/30 relative">
                <img 
                  src={s.image} 
                  alt={s.title} 
                  className="w-full h-full object-cover filter contrast-[1.1]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#040E17]/40 to-transparent" />
              </div>

              <div className="bg-[#0A1A2A] p-6 rounded-xl border border-[#13344E]/30 shadow-lg relative mt-[-20px] mx-4 z-10">
                <p className="text-sm text-[#C2D1DF] leading-relaxed font-light">
                  {s.description}
                </p>
              </div>
              
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default RoboticSurgerySection;
