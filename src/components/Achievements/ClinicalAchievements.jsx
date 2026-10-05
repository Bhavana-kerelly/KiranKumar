import React from 'react';

const ACHIEVEMENTS = [
  {
    value: "1000+",
    label: "KNEE REPLACEMENTS",
    img: "/assets/robotic-joint-replacement.jpg"
  },
  {
    value: "500+",
    label: "HIP REPLACEMENTS",
    img: "/assets/hip-replacement.jpg"
  },
  {
    value: "1500+",
    label: "ARTHROSCOPY",
    img: "/assets/arthroscopy.jpg"
  },
  {
    value: "5000+",
    label: "COMPLEX TRAUMA",
    img: "/assets/complex-trauma.jpg"
  }
];

export function ClinicalAchievements() {
  // Duplicate for seamless loop (4 originals + 4 duplicates)
  const items = [...ACHIEVEMENTS, ...ACHIEVEMENTS];

  return (
    <section className="relative w-full bg-[#ebece8] pt-10 pb-10 sm:pt-12 sm:pb-12 lg:pt-16 lg:pb-16 overflow-hidden z-20 border-b border-[#163B56]/10">
      <style>{`
        @keyframes marquee-achievements {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee-achievements {
          display: flex;
          width: max-content;
          animation: marquee-achievements 35s linear infinite;
        }
        .animate-marquee-achievements:hover {
          animation-play-state: paused;
        }
      `}</style>
      
      {/* Edge Gradients for smooth fade in/out */}
      <div className="absolute inset-y-0 left-0 w-16 sm:w-32 bg-gradient-to-r from-[#ebece8] to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-16 sm:w-32 bg-gradient-to-l from-[#ebece8] to-transparent z-10 pointer-events-none" />

      <div className="animate-marquee-achievements items-center">
        {items.map((item, idx) => (
          <div key={idx} className="flex items-center">
            {/* The Achievement Item */}
            <div className="flex items-center gap-4 sm:gap-6 px-10 sm:px-16 md:px-20 group cursor-default">
              
              {/* Subtle Thumbnail */}
              <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-full overflow-hidden border border-[#163B56]/10 opacity-30 group-hover:opacity-60 transition-opacity duration-500 shrink-0 hidden sm:block shadow-inner">
                <img 
                  src={item.img} 
                  alt={item.label} 
                  className="w-full h-full object-cover filter grayscale mix-blend-multiply" 
                  onError={(e) => { 
                    e.target.onerror = null; 
                    e.target.src = "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=200"; 
                  }}
                />
              </div>

              {/* Data Content */}
              <div className="flex flex-col items-start justify-center">
                <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-black text-[#071B2A] tracking-tight leading-none mb-1 sm:mb-2 drop-shadow-sm">
                  {item.value}
                </span>
                <span className="text-[10px] sm:text-[11px] font-mono font-bold tracking-[0.25em] text-[#456982] group-hover:text-[#163B56] transition-colors duration-500 uppercase leading-tight">
                  {item.label}
                </span>
              </div>
            </div>


          </div>
        ))}
      </div>
    </section>
  );
}
