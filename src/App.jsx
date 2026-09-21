import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Header } from './components/Header/Header';
import { Hero } from './components/Hero/Hero';
import { ExperienceSection } from './components/Experience/ExperienceSection';
import { ExpertiseSection } from './components/Expertise/ExpertiseSection';
import { RoboticSurgerySection } from './components/Robotics/RoboticSurgerySection';
import { PatientJourneySection } from './components/PatientJourney/PatientJourneySection';
import { FinalCTASection } from './components/FinalCTA/FinalCTASection';
import { FooterSection } from './components/Footer/FooterSection';
import { AboutPage } from './components/About/AboutPage';
import { ContactPage } from './components/Contact/ContactPage';
import { PatientStoriesPage } from './components/PatientStories/PatientStoriesPage';
import StickyScroll from './components/ui/sticky-scroll';
import { useMouseParallax } from './hooks/useMouseParallax';
import { AppointmentModal } from './components/ui/AppointmentModal';

function Home({ mousePosition, onOpenAppointment }) {
  return (
    <main className="w-full min-h-screen bg-[#F4F7F9] text-[#0B1E2D]">
      <Hero onOpenAppointment={onOpenAppointment} />
      <ExperienceSection mousePosition={mousePosition} />
      <ExpertiseSection mousePosition={mousePosition} />
      <RoboticSurgerySection mousePosition={mousePosition} />
      <PatientJourneySection />
      <StickyScroll />
      <FinalCTASection mousePosition={mousePosition} />
    </main>
  );
}

export default function App() {
  const mousePosition = useMouseParallax(1);
  const [isAppointmentModalOpen, setIsAppointmentModalOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Scroll to top on route change, unless there is a hash to scroll to
    if (!location.hash) {
      window.scrollTo(0, 0);
    } else {
      const element = document.getElementById(location.hash.replace('#', ''));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location.pathname, location.hash]);

  return (
    <>
      <Header onOpenAppointment={() => setIsAppointmentModalOpen(true)} />

      <Routes>
        <Route path="/" element={<Home mousePosition={mousePosition} onOpenAppointment={() => setIsAppointmentModalOpen(true)} />} />
        <Route path="/about" element={<AboutPage mousePosition={mousePosition} />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/patient-stories" element={<PatientStoriesPage />} />
      </Routes>

      <FooterSection onOpenAppointment={() => setIsAppointmentModalOpen(true)} />

      {/* Global Book Appointment Modal */}
      <AppointmentModal 
        isOpen={isAppointmentModalOpen} 
        onClose={() => setIsAppointmentModalOpen(false)} 
      />
    </>
  );
}
