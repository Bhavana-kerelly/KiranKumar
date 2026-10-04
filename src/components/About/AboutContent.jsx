import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// --- Subcomponents for clean structure ---

const BioCard = () => (
  <div className="bg-white rounded-[28px] p-8 md:p-12 shadow-[0_12px_40px_rgba(25,56,82,0.04)] mb-8">
    <div className="flex items-center gap-3 mb-6">
      <span className="w-1.5 h-1.5 rounded-full bg-[#E7C68E]" />
      <span className="text-[10px] font-sans font-bold tracking-[0.2em] text-[#E7C68E] uppercase">
        About The Surgeon
      </span>
    </div>
    <h2 className="text-3xl md:text-4xl font-serif font-black text-[#193852] mb-8">
      About Dr. Kiran Kumar Karumuru
    </h2>
    <div className="space-y-6 text-[17px] leading-[1.8] font-sans text-[#315F86]/90 font-light">
      <p>
        Dr. Kiran Kumar Karumuru is a highly dedicated and extensively trained Orthopaedic Surgeon with special expertise in Robotic Joint Replacement Surgery, Arthroscopy, and Complex Trauma Management. 
      </p>
      <p>
        With a strong academic foundation and advanced fellowship training from renowned institutions, he is committed to delivering evidence-based, patient-centered orthopaedic care using the latest surgical techniques and technologies.
      </p>
      <p>
        His approach ensures that each patient receives a personalized treatment plan designed to maximize functional recovery and improve long-term quality of life, focusing on precision, safety, and rapid rehabilitation.
      </p>
    </div>
  </div>
);

const EducationCard = () => (
  <div className="bg-white rounded-[28px] p-8 md:p-12 shadow-[0_12px_40px_rgba(25,56,82,0.04)] mb-8">
    <h2 className="text-2xl font-serif font-bold text-[#193852] mb-10">Education & Training</h2>
    <div className="relative pl-6 border-l border-[#E7C68E]/30 space-y-10">
      
      <div className="relative">
        <div className="absolute -left-[30px] top-1.5 w-3 h-3 rounded-full bg-[#E7C68E] shadow-[0_0_0_4px_#FFF,0_0_0_5px_rgba(231,198,142,0.3)]" />
        <span className="text-xs font-sans font-bold text-[#315F86]/60 tracking-widest uppercase mb-1 block">01</span>
        <h3 className="text-lg font-sans font-bold text-[#193852] uppercase tracking-wide">MBBS</h3>
        <p className="text-sm font-sans text-[#315F86] mt-1">Andhra Medical College</p>
      </div>

      <div className="relative">
        <div className="absolute -left-[30px] top-1.5 w-3 h-3 rounded-full bg-[#E7C68E] shadow-[0_0_0_4px_#FFF,0_0_0_5px_rgba(231,198,142,0.3)]" />
        <span className="text-xs font-sans font-bold text-[#315F86]/60 tracking-widest uppercase mb-1 block">02</span>
        <h3 className="text-lg font-sans font-bold text-[#193852] uppercase tracking-wide">MS Orthopaedics</h3>
        <p className="text-sm font-sans text-[#315F86] mt-1">Andhra Medical College<br/><span className="text-xs opacity-70">Affiliated with NTR University of Health Sciences</span></p>
      </div>

      <div className="relative">
        <div className="absolute -left-[30px] top-1.5 w-3 h-3 rounded-full bg-[#E7C68E] shadow-[0_0_0_4px_#FFF,0_0_0_5px_rgba(231,198,142,0.3)]" />
        <span className="text-xs font-sans font-bold text-[#315F86]/60 tracking-widest uppercase mb-1 block">03</span>
        <h3 className="text-lg font-sans font-bold text-[#193852] uppercase tracking-wide">Senior Residency</h3>
        <p className="text-sm font-sans text-[#315F86] mt-1">RVMIMS Hospital, Hyderabad</p>
      </div>

      <div className="relative">
        <div className="absolute -left-[30px] top-1.5 w-3 h-3 rounded-full bg-[#E7C68E] shadow-[0_0_0_4px_#FFF,0_0_0_5px_rgba(231,198,142,0.3)]" />
        <span className="text-xs font-sans font-bold text-[#315F86]/60 tracking-widest uppercase mb-1 block">04</span>
        <h3 className="text-lg font-sans font-bold text-[#193852] uppercase tracking-wide">Fellowship in Robotic Joint Replacement Surgery</h3>
        <p className="text-sm font-sans text-[#315F86] mt-1">Medicover Hospitals, Hitech City</p>
      </div>

    </div>
  </div>
);

export const ExperienceHighlight = () => (
  <div className="bg-[#10283B] rounded-[28px] overflow-hidden shadow-[0_12px_40px_rgba(25,56,82,0.1)] mb-8 flex flex-col md:flex-row relative min-h-[450px]">
    
    {/* Image Container - This is where the user's image will go */}
    <div className="w-full md:w-1/2 h-64 md:h-auto relative bg-[#193852]">
      <img 
        src="/assets/experience-image.jpg" 
        alt="Surgical Experience" 
        className="absolute inset-0 w-full h-full object-cover opacity-90 mix-blend-luminosity hover:mix-blend-normal transition-all duration-700" 
        onError={(e) => {
          // Temporary placeholder if the user hasn't uploaded their image yet
          e.target.src = 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=800'; 
        }}
      />
      {/* Soft gradient overlay so it blends into the navy section */}
      <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-l from-[#10283B] to-transparent pointer-events-none" />
    </div>

    {/* Content Area */}
    <div className="w-full md:w-1/2 p-10 md:p-14 flex flex-col justify-center relative z-10">
      <div className="absolute right-0 top-0 w-64 h-64 bg-[#E7C68E]/5 rounded-full blur-3xl pointer-events-none translate-x-1/2 -translate-y-1/2" />
      
      <h2 className="text-sm font-sans font-bold text-[#E7C68E] uppercase tracking-[0.2em] mb-4">Surgical Experience</h2>
      <div className="text-6xl md:text-7xl lg:text-8xl font-serif font-black text-[#FFFFFF] mb-8">1000<span className="text-[#E7C68E]">+</span></div>
      
      <p className="text-[17px] leading-[1.8] font-sans text-[#F7F5F0]/80 font-light">
        Throughout his professional journey, Dr. Kiran Kumar Karumuru has participated in and performed more than 1000 knee replacement surgeries, acquiring extensive expertise in primary and complex joint reconstruction procedures.
      </p>
    </div>

  </div>
);

export const ExpertiseCard = () => (
  <div className="bg-white rounded-[28px] p-8 md:p-12 shadow-[0_12px_40px_rgba(25,56,82,0.04)] mb-8">
    <h2 className="text-2xl font-serif font-bold text-[#193852] mb-10">Areas of Expertise</h2>
    
    <div className="space-y-2">
      {[
        { num: '01', title: 'Robotic Joint Replacement', desc: 'Precision-driven procedures utilizing advanced robotic assistance for optimal implant placement.' },
        { num: '02', title: 'Hip Replacement', desc: 'Comprehensive restoration and customized surgical interventions for hip disorders.' },
        { num: '03', title: 'Arthroscopy', desc: 'Minimally invasive keyhole surgeries for joint inspection, diagnosis, and treatment.' },
        { num: '04', title: 'Complex Trauma Management', desc: 'Expert care for severe fractures and multi-trauma musculoskeletal injuries.' }
      ].map((item, i, arr) => (
        <div key={item.num} className="group relative">
          <div className="grid grid-cols-[60px_1fr] md:grid-cols-[100px_1fr] items-start p-6 rounded-2xl hover:bg-[#F7F5F0]/80 transition-colors duration-300 cursor-default -mx-6">
            <div className="text-[#E7C68E] font-sans font-bold tracking-widest pt-0.5 transition-transform group-hover:scale-110 origin-left">
              {item.num}
            </div>
            <div>
              <h3 className="text-base font-sans font-bold text-[#193852] uppercase tracking-wide mb-2">{item.title}</h3>
              <p className="text-sm font-sans text-[#315F86]/70 font-medium">{item.desc}</p>
            </div>
          </div>
          {/* Custom border that hides on hover */}
          {i !== arr.length - 1 && (
            <div className="absolute bottom-0 left-0 right-0 h-px bg-[#E7C68E]/20 group-hover:opacity-0 transition-opacity duration-300" />
          )}
        </div>
      ))}
    </div>
  </div>
);

export const PhilosophyPanel = () => (
  <div className="bg-[#193852] rounded-[28px] p-8 md:p-12 shadow-[0_12px_40px_rgba(25,56,82,0.1)] mb-8">
    <div className="text-center max-w-2xl mx-auto">
      <h2 className="text-2xl font-serif font-bold text-[#FFFFFF] mb-6">Patient-Centered Care</h2>
      <p className="text-[17px] leading-[1.8] font-sans text-[#F7F5F0]/90 font-light mb-10">
        "Dr. Kiran Kumar Karumuru believes in combining surgical precision, advanced technology, and compassionate patient care to achieve optimal functional outcomes and improve the quality of life of his patients."
      </p>
      
      <div className="flex flex-wrap justify-center gap-4">
        {['Personalized Treatment', 'Minimally Invasive Techniques When Appropriate', 'Early Rehabilitation', 'Functional Recovery'].map((label, i) => (
          <span key={i} className="inline-block px-4 py-2 rounded-full border border-[#E7C68E]/30 text-xs font-sans font-bold text-[#E7C68E] uppercase tracking-widest bg-[#10283B]/50">
            {label}
          </span>
        ))}
      </div>
    </div>
  </div>
);

export function AboutContent() {
  return (
    <div className="w-full flex flex-col">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <BioCard />
        <EducationCard />
      </motion.div>
    </div>
  );
}
