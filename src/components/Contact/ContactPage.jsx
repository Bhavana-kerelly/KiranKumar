import React from 'react';
import { motion } from 'framer-motion';
import { ContactInfo } from './ContactInfo';
import { ConsultationForm } from './ConsultationForm';
import { ContactFooter } from './ContactFooter';

export function ContactPage() {
  return (
    <div className="w-full min-h-screen bg-[#F7F5F0] relative overflow-hidden font-sans">
      
      {/* Background Ambience */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-[#315F86]/3 blur-[120px]" />
        <div className="absolute bottom-[20%] right-[-5%] w-[40%] h-[40%] rounded-full bg-[#193852]/5 blur-[100px]" />
      </div>

      <div className="relative z-10 pt-32 pb-12 w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-12">
        
        {/* Header / Breadcrumb */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12 md:mb-16"
        >
          <div className="flex flex-col items-center text-center gap-4">
            
            {/* Eyebrow */}
            <div className="px-3 py-1 bg-white border border-[#193852]/10 rounded-full text-[10px] font-sans font-bold uppercase tracking-widest text-[#E7C68E] shadow-sm">
              Get In Touch
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-[#193852] leading-[1.1] max-w-3xl mx-auto mt-2">
              Let's Talk About <br />
              <span className="text-[#E7C68E]">Your Orthopaedic Care.</span>
            </h1>

            <p className="text-sm md:text-base font-sans text-[#315F86]/80 leading-relaxed max-w-2xl mx-auto mt-4">
              Whether you are exploring treatment options, seeking a second opinion, or looking to understand your orthopaedic condition better, connect with Dr. Kiran Kumar Karumuru's team.
            </p>
          </div>
        </motion.div>

        {/* Main 2-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column (Contact Info) */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-5 w-full h-full lg:sticky lg:top-28"
          >
            <ContactInfo />
          </motion.div>

          {/* Right Column (Consultation Form) */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-7 w-full"
          >
            <ConsultationForm />
          </motion.div>

        </div>

      </div>

      {/* Footer / Map / FAQ */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="relative z-10"
      >
        <ContactFooter />
      </motion.div>

    </div>
  );
}
