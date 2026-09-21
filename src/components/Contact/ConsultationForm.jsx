import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export function ConsultationForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    interest: '',
    date: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Full Name is required';
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone Number is required';
    } else if (!/^[0-9+\-\s()]{7,15}$/.test(formData.phone)) {
      newErrors.phone = 'Invalid phone format';
    }
    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }
    if (!formData.interest) newErrors.interest = 'Please select an area of interest';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitting(true);
      // Simulate network request
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSuccess(true);
      }, 1500);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  return (
    <div className="bg-white rounded-[32px] p-8 md:p-12 shadow-[0_12px_40px_rgba(25,56,82,0.06)] relative overflow-hidden">
      
      {/* Subtle Watermark */}
      <div className="absolute top-0 right-0 w-64 h-64 border-[1px] border-[#E7C68E]/10 rounded-full pointer-events-none translate-x-1/3 -translate-y-1/3 opacity-50" />

      {/* Success State */}
      <AnimatePresence>
        {isSuccess && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="absolute inset-0 z-20 bg-white/95 backdrop-blur-sm flex flex-col items-center justify-center p-8 text-center"
          >
            <div className="w-20 h-20 rounded-full bg-[#F7F5F0] flex items-center justify-center mb-6">
              <CheckCircle2 className="w-10 h-10 text-[#E7C68E]" />
            </div>
            <h3 className="text-3xl font-serif font-black text-[#193852] mb-4">Thank You.</h3>
            <p className="text-lg font-sans text-[#315F86]/80 max-w-sm mb-8">
              Your consultation request has been received. Our team will contact you shortly to confirm your appointment.
            </p>
            <button 
              onClick={() => { setIsSuccess(false); setFormData({ fullName: '', phone: '', email: '', interest: '', date: '', message: '' }); }}
              className="px-8 py-4 bg-[#E7C68E] text-[#10283B] rounded-xl font-sans font-bold uppercase tracking-widest text-xs hover:bg-[#F3DFC0] transition-colors"
            >
              Submit Another Request
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-10">
        <h2 className="text-3xl font-serif font-bold text-[#193852] mb-3">Request a Consultation</h2>
        <p className="text-sm font-sans text-[#315F86]/70 mb-10">Share your details and our team can help you with the next step.</p>

        <form onSubmit={handleSubmit} className="space-y-6">
          
          {/* Row 1 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-1.5">
              <label className="text-xs font-sans font-bold text-[#193852] uppercase tracking-wider pl-2 flex justify-between">
                <span>Full Name <span className="text-[#E7C68E]">*</span></span>
                {errors.fullName && <span className="text-red-500 normal-case tracking-normal">{errors.fullName}</span>}
              </label>
              <input 
                type="text" 
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="John Doe"
                disabled={isSubmitting}
                className={`w-full h-[56px] px-5 rounded-2xl border bg-white font-sans text-[#193852] placeholder-[#315F86]/40 focus:outline-none focus:ring-4 transition-all duration-300 ${
                  errors.fullName 
                    ? 'border-red-300 focus:border-red-500 focus:ring-red-500/20' 
                    : 'border-[#193852]/15 focus:border-[#E7C68E] focus:ring-[#E7C68E]/20'
                }`}
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-sans font-bold text-[#193852] uppercase tracking-wider pl-2 flex justify-between">
                <span>Phone Number <span className="text-[#E7C68E]">*</span></span>
                {errors.phone && <span className="text-red-500 normal-case tracking-normal">{errors.phone}</span>}
              </label>
              <input 
                type="tel" 
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+91"
                disabled={isSubmitting}
                className={`w-full h-[56px] px-5 rounded-2xl border bg-white font-sans text-[#193852] placeholder-[#315F86]/40 focus:outline-none focus:ring-4 transition-all duration-300 ${
                  errors.phone 
                    ? 'border-red-300 focus:border-red-500 focus:ring-red-500/20' 
                    : 'border-[#193852]/15 focus:border-[#E7C68E] focus:ring-[#E7C68E]/20'
                }`}
              />
            </div>
          </div>

          {/* Row 2 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-1.5">
              <label className="text-xs font-sans font-bold text-[#193852] uppercase tracking-wider pl-2 flex justify-between">
                <span>Email Address</span>
                {errors.email && <span className="text-red-500 normal-case tracking-normal">{errors.email}</span>}
              </label>
              <input 
                type="email" 
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="optional@email.com"
                disabled={isSubmitting}
                className={`w-full h-[56px] px-5 rounded-2xl border bg-white font-sans text-[#193852] placeholder-[#315F86]/40 focus:outline-none focus:ring-4 transition-all duration-300 ${
                  errors.email 
                    ? 'border-red-300 focus:border-red-500 focus:ring-red-500/20' 
                    : 'border-[#193852]/15 focus:border-[#E7C68E] focus:ring-[#E7C68E]/20'
                }`}
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-sans font-bold text-[#193852] uppercase tracking-wider pl-2 flex justify-between">
                <span>Area of Interest <span className="text-[#E7C68E]">*</span></span>
                {errors.interest && <span className="text-red-500 normal-case tracking-normal">{errors.interest}</span>}
              </label>
              <div className="relative">
                <select 
                  name="interest"
                  value={formData.interest}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  className={`w-full h-[56px] px-5 appearance-none rounded-2xl border bg-white font-sans text-[#193852] focus:outline-none focus:ring-4 transition-all duration-300 ${
                    formData.interest ? 'text-[#193852]' : 'text-[#315F86]/40'
                  } ${
                    errors.interest 
                      ? 'border-red-300 focus:border-red-500 focus:ring-red-500/20' 
                      : 'border-[#193852]/15 focus:border-[#E7C68E] focus:ring-[#E7C68E]/20'
                  }`}
                >
                  <option value="" disabled>Select an option</option>
                  <option value="Knee Replacement">Knee Replacement</option>
                  <option value="Robotic Joint Replacement">Robotic Joint Replacement</option>
                  <option value="Arthroscopy">Arthroscopy</option>
                  <option value="Complex Trauma">Complex Trauma</option>
                  <option value="General Orthopaedic Consultation">General Orthopaedic Consultation</option>
                  <option value="Other">Other</option>
                </select>
                <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none">
                  <svg className="w-4 h-4 text-[#315F86]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                </div>
              </div>
            </div>
          </div>

          {/* Row 3 */}
          <div className="space-y-1.5">
            <label className="text-xs font-sans font-bold text-[#193852] uppercase tracking-wider pl-2">
              Preferred Date
            </label>
            <input 
              type="date" 
              name="date"
              value={formData.date}
              onChange={handleChange}
              disabled={isSubmitting}
              className={`w-full h-[56px] px-5 rounded-2xl border bg-white font-sans text-[#193852] focus:outline-none focus:ring-4 transition-all duration-300 border-[#193852]/15 focus:border-[#E7C68E] focus:ring-[#E7C68E]/20 ${!formData.date ? 'text-[#315F86]/40' : ''}`}
            />
          </div>

          {/* Row 4 */}
          <div className="space-y-1.5">
            <label className="text-xs font-sans font-bold text-[#193852] uppercase tracking-wider pl-2">
              Message
            </label>
            <textarea 
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="How can we help you?"
              disabled={isSubmitting}
              rows={4}
              className="w-full p-5 rounded-2xl border bg-white font-sans text-[#193852] placeholder-[#315F86]/40 focus:outline-none focus:ring-4 transition-all duration-300 border-[#193852]/15 focus:border-[#E7C68E] focus:ring-[#E7C68E]/20 resize-none"
            />
          </div>

          {/* Submit */}
          <div className="pt-4">
            <button 
              type="submit"
              disabled={isSubmitting}
              className="w-full h-[60px] rounded-2xl bg-[#E7C68E] text-[#10283B] font-sans font-bold uppercase tracking-widest text-sm flex items-center justify-center gap-3 transition-all duration-300 hover:bg-[#F3DFC0] hover:shadow-[0_8px_25px_rgba(231,198,142,0.4)] disabled:opacity-70 disabled:cursor-not-allowed group"
            >
              <span>{isSubmitting ? 'Submitting...' : 'Request a Consultation'}</span>
              {!isSubmitting && <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />}
            </button>
          </div>

        </form>
      </div>
    </div>
  );
}
