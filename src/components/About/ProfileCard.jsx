import React from 'react';

export function ProfileCard() {
  return (
    <div className="sticky top-28 bg-[#FFFFFF] rounded-[28px] border border-[#193852]/10 shadow-[0_12px_40px_rgba(25,56,82,0.06)] overflow-hidden relative">
      
      {/* Subtle Background Watermark */}
      <div className="absolute top-10 -right-10 w-64 h-64 border-[1px] border-[#E7C68E]/20 rounded-full pointer-events-none opacity-50" />
      <div className="absolute -top-20 -left-20 w-80 h-80 bg-[#315F86]/5 blur-3xl rounded-full pointer-events-none" />

      {/* Doctor Image Container */}
      <div className="relative w-full h-[380px] sm:h-[420px] bg-[#F7F5F0]/50 border-b border-[#193852]/5 overflow-hidden flex items-end justify-center px-4 pt-8">
        <img 
          src="/assets/DR. KIRAN KUMAR imagev2.png" 
          alt="Dr. Kiran Kumar Karumuru"
          className="w-full h-full object-contain object-bottom drop-shadow-[0_10px_20px_rgba(16,40,59,0.1)] transition-transform duration-700 hover:scale-[1.02]"
        />
        {/* Subtle inner shadow at bottom for grounding */}
        <div className="absolute bottom-0 w-full h-24 bg-gradient-to-t from-[#10283B]/10 to-transparent pointer-events-none" />
      </div>

      {/* Profile Details */}
      <div className="p-8 lg:p-10 relative z-10 bg-white">
        
        {/* Identity */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-serif font-black text-[#193852] tracking-tight mb-1">
            Dr. Kiran Kumar Karumuru
          </h1>
          <h2 className="text-sm font-sans font-bold text-[#E7C68E] uppercase tracking-[0.15em] mb-4">
            Orthopaedic Surgeon
          </h2>
          <div className="flex flex-wrap justify-center items-center gap-2 text-[11px] font-sans text-[#315F86] font-bold tracking-wider uppercase">
            <span>Robotic Joint Replacement</span>
            <span className="text-[#E7C68E]/50">&bull;</span>
            <span>Arthroscopy</span>
            <span className="text-[#E7C68E]/50">&bull;</span>
            <span>Complex Trauma</span>
          </div>
        </div>

        <div className="w-full h-px bg-gradient-to-r from-transparent via-[#E7C68E]/30 to-transparent mb-8" />

        {/* Quick Information */}
        <div className="space-y-4 mb-10">
          <div className="grid grid-cols-[110px_1fr] gap-4 items-start">
            <span className="text-xs font-sans text-[#315F86]/70 uppercase tracking-widest font-semibold mt-0.5">Specialization</span>
            <span className="text-sm font-sans font-medium text-[#10283B] leading-snug">Joint Replacement & Orthopaedic Surgery</span>
          </div>
          <div className="grid grid-cols-[110px_1fr] gap-4 items-start">
            <span className="text-xs font-sans text-[#315F86]/70 uppercase tracking-widest font-semibold mt-0.5">Expertise</span>
            <span className="text-sm font-sans font-medium text-[#10283B] leading-snug">Robotic Joint Replacement Surgery<br/>Arthroscopy<br/>Complex Trauma Management</span>
          </div>
          <div className="grid grid-cols-[110px_1fr] gap-4 items-start">
            <span className="text-xs font-sans text-[#315F86]/70 uppercase tracking-widest font-semibold mt-0.5">Qualification</span>
            <span className="text-sm font-sans font-medium text-[#10283B] leading-snug">Mbbs,MS ortho,FIJR,FIPM(kolkata),FISS (Ganga hospital ,Coimbatore)</span>
          </div>
          <div className="grid grid-cols-[110px_1fr] gap-4 items-start">
            <span className="text-xs font-sans text-[#315F86]/70 uppercase tracking-widest font-semibold mt-0.5">Fellowship</span>
            <span className="text-sm font-sans font-medium text-[#10283B] leading-snug">Robotic Joint Replacement Surgery</span>
          </div>
        </div>

        {/* Statistics Blocks */}
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-[#F7F5F0] rounded-2xl p-5 flex flex-col items-center justify-center text-center relative overflow-hidden group">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full border border-[#E7C68E]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 scale-150 group-hover:scale-100" />
            <span className="text-2xl font-serif font-black text-[#E7C68E] mb-1 relative z-10">1000+</span>
            <span className="text-[10px] font-sans font-bold text-[#193852]/80 uppercase tracking-widest leading-tight relative z-10">
              Knee Replacement<br/>Surgeries
            </span>
          </div>
          <div className="bg-[#F7F5F0] rounded-2xl p-5 flex flex-col items-center justify-center text-center relative overflow-hidden group">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full border border-[#E7C68E]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 scale-150 group-hover:scale-100" />
            <svg className="w-6 h-6 text-[#E7C68E] mb-2 relative z-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
            </svg>
            <span className="text-[10px] font-sans font-bold text-[#193852]/80 uppercase tracking-widest leading-tight relative z-10">
              Robotic Joint<br/>Replacement
            </span>
          </div>
        </div>
        
      </div>
    </div>
  );
}
