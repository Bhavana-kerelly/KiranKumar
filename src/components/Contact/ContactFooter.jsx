import React from 'react';
import { MapPin, ArrowRight } from 'lucide-react';

export function ContactFooter() {
  return (
    <div className="w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 mt-20 mb-32 space-y-20">
      
      {/* Map & Location Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <span className="inline-block px-3 py-1 bg-[#193852]/5 border border-[#193852]/10 text-[#193852] text-[10px] font-sans font-bold uppercase tracking-widest rounded-full mb-4">
            Find the Clinic
          </span>
          <h2 className="text-3xl font-serif font-bold text-[#193852] mb-6">Location & Directions</h2>
          <p className="text-sm font-sans text-[#315F86]/80 mb-8 max-w-md">
            Our clinic is centrally located and easily accessible. We offer a modern, comfortable environment for your orthopaedic consultations and follow-up care.
          </p>
          <a 
            href="#" 
            className="inline-flex items-center gap-3 px-6 py-3.5 bg-white border border-[#193852]/10 rounded-xl text-xs font-sans font-bold uppercase tracking-widest text-[#193852] hover:border-[#E7C68E] hover:bg-[#F7F5F0] transition-colors group"
          >
            <MapPin className="w-4 h-4 text-[#E7C68E]" />
            <span>Get Directions</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
        
        {/* Map Placeholder */}
        <div className="w-full h-[350px] bg-[#F4F8FA] rounded-[32px] border border-[#193852]/10 relative overflow-hidden flex items-center justify-center">
          {/* Decorative Map Pattern */}
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23193852\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }} />
          
          <div className="relative z-10 flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-white shadow-xl flex items-center justify-center relative mb-4">
              <div className="absolute inset-0 rounded-full border-2 border-[#E7C68E] scale-110 animate-pulse opacity-50" />
              <MapPin className="w-8 h-8 text-[#193852]" />
            </div>
            <p className="font-sans font-bold text-[#193852] bg-white/90 backdrop-blur-sm px-4 py-1.5 rounded-lg text-sm shadow-sm">
              Dr. Kiran Kumar Karumuru
            </p>
          </div>
        </div>
      </div>

      {/* Doctor Strip */}
      <div className="w-full bg-[#10283B] rounded-[24px] p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#315F86]/30 rounded-full blur-3xl pointer-events-none translate-x-1/2 -translate-y-1/2" />
        
        <div className="flex items-center gap-6 relative z-10">
          <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-[#E7C68E]/30 bg-white flex items-center justify-center">
            <img src="/logo/DR. KIRAN LOGO.png" alt="Dr. Kiran Logo" className="w-12 h-12 object-contain" onError={(e) => {e.target.style.display='none'}} />
          </div>
          <div>
            <h3 className="text-xl font-serif font-bold text-white mb-1">Dr. Kiran Kumar Karumuru</h3>
            <p className="text-xs font-sans font-medium text-[#E7C68E] uppercase tracking-widest mb-2">Orthopaedic Surgeon</p>
            <p className="text-[11px] font-sans text-white/60 uppercase tracking-wider">
              Robotic Joint Replacement • Arthroscopy • Complex Trauma
            </p>
          </div>
        </div>

        <a href="#/about" className="relative z-10 whitespace-nowrap px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/10 rounded-xl text-xs font-sans font-bold uppercase tracking-widest text-white transition-colors flex items-center gap-2 group">
          View About Dr. Kiran <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </a>
      </div>

    </div>
  );
}
