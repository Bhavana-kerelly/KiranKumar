import React from 'react';
import { motion } from 'framer-motion';
import { ProfileCard } from './ProfileCard';
import { AboutContent, ExperienceHighlight, ExpertiseCard, PhilosophyPanel } from './AboutContent';

export function AboutPage({ mousePosition }) {
  return (
    <main className="w-full min-h-screen bg-[#F7F5F0] text-[#10283B] overflow-x-hidden selection:bg-[#E7C68E] selection:text-[#10283B] pt-32 pb-24">
      
      {/* Subtle Page Background Ambient Shapes */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[-10%] right-[-5%] w-[40vw] h-[40vw] rounded-full bg-[#193852]/5 blur-3xl" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-[#315F86]/5 blur-3xl" />
      </div>

      <div className="max-w-[1360px] mx-auto px-6 sm:px-10 lg:px-12 relative z-10 w-full">
        
        {/* Breadcrumb & Title */}
        <div className="mb-12">
          <div className="flex items-center gap-3 text-[10px] font-sans font-bold tracking-[0.2em] uppercase text-[#315F86]/60 mb-3">
            <a href="#home" className="hover:text-[#E7C68E] transition-colors">Home</a>
            <span>/</span>
            <span className="text-[#193852]">About Dr. Kiran Kumar</span>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-black text-[#193852] tracking-tight">
            About Dr. Kiran Kumar Karumuru
          </h1>
        </div>

        {/* 2-Column Layout */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
          
          {/* Left Column (Sticky on Desktop) - 35% */}
          <div className="w-full lg:w-[380px] xl:w-[420px] flex-shrink-0 relative z-20">
            <ProfileCard />
          </div>

          {/* Right Column (Scrolls naturally) - 65% */}
          <div className="w-full lg:flex-1 relative z-10">
            <AboutContent />
          </div>

        </div>

      </div>

      {/* Full Width Sections Below */}
      <div className="max-w-[1360px] mx-auto px-6 sm:px-10 lg:px-12 relative z-10 w-full mt-12">
        <ExperienceHighlight />
        <ExpertiseCard />
        <PhilosophyPanel />
      </div>

    </main>
  );
}

