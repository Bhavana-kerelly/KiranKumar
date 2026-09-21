import React from 'react';
import { Phone, Mail, MapPin, AlertCircle, Clock } from 'lucide-react';

export function ContactInfo() {
  return (
    <div className="relative w-full h-full bg-gradient-to-br from-[#10283B] via-[#193852] to-[#315F86] rounded-[32px] p-8 md:p-12 overflow-hidden flex flex-col shadow-[0_12px_40px_rgba(16,40,59,0.15)]">
      
      {/* Background Geometry */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-[#315F86]/20 rounded-full blur-3xl pointer-events-none translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 border border-[#E7C68E]/10 rounded-full pointer-events-none -translate-x-1/3 translate-y-1/3 opacity-30" />
      
      {/* Content */}
      <div className="relative z-10 flex-grow">
        
        {/* Header */}
        <div className="mb-12">
          <span className="inline-block px-3 py-1 bg-[#E7C68E]/10 border border-[#E7C68E]/20 text-[#E7C68E] text-[10px] font-sans font-bold uppercase tracking-widest rounded-full mb-4">
            Contact Information
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-white leading-tight">
            We're Here <br />
            <span className="text-[#E7C68E]">To Help.</span>
          </h2>
        </div>

        {/* Contact Details List */}
        <div className="space-y-6 mb-12">
          
          <a href="tel:+919876543210" className="group flex items-start gap-5 pb-6 border-b border-[#E7C68E]/10 transition-colors">
            <div className="w-10 h-10 rounded-full bg-[#E7C68E]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#E7C68E]/20 transition-colors">
              <Phone className="w-4 h-4 text-[#E7C68E]" />
            </div>
            <div>
              <p className="text-[10px] font-sans font-bold text-[#F7F5F0]/60 uppercase tracking-widest mb-1">Phone</p>
              <p className="text-base font-sans font-medium text-white group-hover:text-[#E7C68E] transition-colors">+91 98765 43210</p>
            </div>
          </a>

          <a href="mailto:info@drkirankumar.com" className="group flex items-start gap-5 pb-6 border-b border-[#E7C68E]/10 transition-colors">
            <div className="w-10 h-10 rounded-full bg-[#E7C68E]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#E7C68E]/20 transition-colors">
              <Mail className="w-4 h-4 text-[#E7C68E]" />
            </div>
            <div>
              <p className="text-[10px] font-sans font-bold text-[#F7F5F0]/60 uppercase tracking-widest mb-1">Email</p>
              <p className="text-base font-sans font-medium text-white group-hover:text-[#E7C68E] transition-colors">info@drkirankumar.com</p>
            </div>
          </a>

          <div className="group flex items-start gap-5 pb-6 border-b border-[#E7C68E]/10 transition-colors">
            <div className="w-10 h-10 rounded-full bg-[#E7C68E]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#E7C68E]/20 transition-colors">
              <MapPin className="w-4 h-4 text-[#E7C68E]" />
            </div>
            <div>
              <p className="text-[10px] font-sans font-bold text-[#F7F5F0]/60 uppercase tracking-widest mb-1">Location</p>
              <p className="text-base font-sans font-medium text-white leading-relaxed">
                Primary Clinic Address Placeholder<br />
                City, State, ZIP
              </p>
            </div>
          </div>

          <div className="group flex items-start gap-5 transition-colors">
            <div className="w-10 h-10 rounded-full bg-[#E7C68E]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#E7C68E]/20 transition-colors">
              <Clock className="w-4 h-4 text-[#E7C68E]" />
            </div>
            <div>
              <p className="text-[10px] font-sans font-bold text-[#F7F5F0]/60 uppercase tracking-widest mb-1">Consultation Hours</p>
              <p className="text-sm font-sans font-medium text-white/80">Consultation timings available on request.</p>
            </div>
          </div>

        </div>

      </div>

      {/* Emergency Notice */}
      <div className="relative z-10 mt-auto pt-6 border-t border-[#E7C68E]/15">
        <div className="flex gap-3 items-start p-4 rounded-xl bg-black/20 backdrop-blur-sm border border-white/5">
          <AlertCircle className="w-5 h-5 text-[#E7C68E] flex-shrink-0 mt-0.5" />
          <p className="text-xs font-sans font-medium text-white/80 leading-relaxed">
            For urgent or emergency medical needs, please contact the nearest emergency medical facility immediately.
          </p>
        </div>
      </div>

    </div>
  );
}
