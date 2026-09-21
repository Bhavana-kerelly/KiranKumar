import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, Calendar } from 'lucide-react';

export function AppointmentModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: 'Robotic Joint Replacement',
    comment: ''
  });

  const WHATSAPP_NUMBER = '1234567890'; // Placeholder number

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Construct WhatsApp message
    const message = `Hello Dr. Kiran Kumar Karumuru Team!
I would like to book an appointment.

*Name:* ${formData.name}
*Phone:* ${formData.phone}
*Service Requested:* ${formData.service}
${formData.comment ? `\n*Additional Comments:*\n${formData.comment}` : ''}`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
    
    // Open in new tab
    window.open(whatsappUrl, '_blank');
    
    // Reset and close
    setFormData({ name: '', phone: '', service: 'Robotic Joint Replacement', comment: '' });
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[200] flex items-center justify-center bg-[#071B2A]/80 backdrop-blur-md p-4 sm:p-6"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.95, y: 20, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.95, y: 20, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="w-full max-w-md bg-[#F7F5F0] rounded-[32px] overflow-hidden shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="bg-[#10283B] p-6 text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-[#315F86]/20 blur-2xl" />
              <button 
                onClick={onClose}
                className="absolute top-4 right-4 text-white/50 hover:text-white transition-colors"
                type="button"
              >
                <X className="w-5 h-5" />
              </button>
              
              <div className="relative z-10 flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mb-3">
                  <Calendar className="w-6 h-6 text-[#E7C68E]" />
                </div>
                <h3 className="text-xl font-serif font-bold text-white mb-1">Book an Appointment</h3>
                <p className="text-xs font-sans text-white/60">Fill out this quick form and we will connect via WhatsApp</p>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-5">
              
              <div className="space-y-1.5">
                <label className="text-xs font-sans font-bold uppercase tracking-widest text-[#193852] ml-1">Full Name</label>
                <input 
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-white border border-[#193852]/10 rounded-xl px-4 py-3 text-sm font-sans text-[#193852] placeholder:text-[#315F86]/40 focus:outline-none focus:border-[#E7C68E] focus:ring-1 focus:ring-[#E7C68E] transition-all"
                  placeholder="John Doe"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-sans font-bold uppercase tracking-widest text-[#193852] ml-1">Phone Number</label>
                <input 
                  type="tel"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full bg-white border border-[#193852]/10 rounded-xl px-4 py-3 text-sm font-sans text-[#193852] placeholder:text-[#315F86]/40 focus:outline-none focus:border-[#E7C68E] focus:ring-1 focus:ring-[#E7C68E] transition-all"
                  placeholder="+91 99999 99999"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-sans font-bold uppercase tracking-widest text-[#193852] ml-1">Service Needed</label>
                <div className="relative">
                  <select 
                    name="service"
                    required
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full appearance-none bg-white border border-[#193852]/10 rounded-xl px-4 py-3 text-sm font-sans text-[#193852] focus:outline-none focus:border-[#E7C68E] focus:ring-1 focus:ring-[#E7C68E] transition-all cursor-pointer"
                  >
                    <option value="Robotic Joint Replacement">Robotic Joint Replacement</option>
                    <option value="Arthroscopy">Arthroscopy</option>
                    <option value="Complex Trauma">Complex Trauma</option>
                    <option value="General Consultation">General Consultation</option>
                    <option value="Second Opinion">Second Opinion</option>
                  </select>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-[#193852]/40">
                    <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-sans font-bold uppercase tracking-widest text-[#193852] ml-1">Comments (Optional)</label>
                <textarea 
                  name="comment"
                  value={formData.comment}
                  onChange={handleChange}
                  rows={2}
                  className="w-full bg-white border border-[#193852]/10 rounded-xl px-4 py-3 text-sm font-sans text-[#193852] placeholder:text-[#315F86]/40 focus:outline-none focus:border-[#E7C68E] focus:ring-1 focus:ring-[#E7C68E] transition-all resize-none"
                  placeholder="Tell us briefly about your condition..."
                />
              </div>

              <button 
                type="submit"
                className="w-full flex items-center justify-center gap-2 bg-[#E7C68E] hover:bg-[#d4b37d] text-[#10283B] py-3.5 rounded-xl font-sans font-bold text-sm tracking-wide transition-colors mt-2 shadow-[0_4px_14px_rgba(231,198,142,0.3)] hover:shadow-[0_6px_20px_rgba(231,198,142,0.4)]"
              >
                <span>Continue to WhatsApp</span>
                <Send className="w-4 h-4" />
              </button>

            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
