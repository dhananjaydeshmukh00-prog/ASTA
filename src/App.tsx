import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { ProblemSection } from './components/ProblemSection';
import { SolutionSection } from './components/SolutionSection';
import { WhoThisIsForSection } from './components/WhoThisIsForSection';
import { WhyTrustSection } from './components/WhyTrustSection';
import { SocialProofSection } from './components/SocialProofSection';
import { FaqSection } from './components/FaqSection';
import { FinalCtaSection } from './components/FinalCtaSection';
import { FooterSection } from './components/FooterSection';
import { RegistrationModal } from './components/RegistrationModal';
import { SuccessPassModal } from './components/SuccessPassModal';
import { RegistrationData } from './types';
import { ArrowRight, Clock, ShieldCheck, Sparkles } from 'lucide-react';

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [successData, setSuccessData] = useState<RegistrationData | null>(null);
  const [seatsLeft, setSeatsLeft] = useState(5);
  const [showStickyBar, setShowStickyBar] = useState(false);

  // Monitor scroll for floating quick action bar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 450) {
        setShowStickyBar(true);
      } else {
        setShowStickyBar(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleRegisterSuccess = (data: RegistrationData) => {
    setSuccessData(data);
    setSeatsLeft((prev) => Math.max(1, prev - 1));
  };

  const handleCloseSuccess = () => {
    setSuccessData(null);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC] text-slate-800 antialiased">
      {/* Navbar with Live alert */}
      <Header onOpenModal={handleOpenModal} seatsLeft={seatsLeft} />

      <main className="flex-1">
        {/* 1. HERO SECTION */}
        <HeroSection onOpenModal={handleOpenModal} seatsLeft={seatsLeft} />

        {/* 2. THE PROBLEM */}
        <ProblemSection />

        {/* 3. THE SOLUTION — Now With a Stacked Offer */}
        <SolutionSection onOpenModal={handleOpenModal} seatsLeft={seatsLeft} />

        {/* 4. WHO THIS IS FOR */}
        <WhoThisIsForSection onOpenModal={handleOpenModal} />

        {/* 5. WHY TRUST ASTA (Authority) — Navy Blue Contrast Divider Section */}
        <WhyTrustSection onOpenModal={handleOpenModal} />

        {/* 6. SOCIAL PROOF — Compliance-Safe & Credible */}
        <SocialProofSection onOpenModal={handleOpenModal} />

        {/* 7. FAQ SECTION */}
        <FaqSection onOpenModal={handleOpenModal} />

        {/* 8. FINAL CTA SECTION — With Real Urgency & Embedded Reservation Form */}
        <FinalCtaSection onRegisterSuccess={handleRegisterSuccess} seatsLeft={seatsLeft} />
      </main>

      {/* 9. FOOTER / MANDATORY COMPLIANCE */}
      <FooterSection />

      {/* Quick Action Floating Bar on Mobile & Desktop scroll */}
      {showStickyBar && (
        <div className="fixed bottom-3 left-1/2 -translate-x-1/2 z-40 w-[94%] max-w-xl bg-slate-900/95 backdrop-blur-md text-white px-4 py-3 rounded-2xl shadow-2xl border border-slate-700/80 flex items-center justify-between gap-3 animate-fade-in">
          <div className="flex items-center gap-2 text-xs">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-ping"></span>
            <div>
              <span className="font-bold text-amber-300">Saturday Batch</span>
              <span className="text-slate-300 hidden sm:inline"> · Only {seatsLeft} free seats left</span>
            </div>
          </div>
          <button
            onClick={handleOpenModal}
            id="floating-reserve-btn"
            className="inline-flex items-center gap-1.5 bg-amber-400 hover:bg-amber-300 text-slate-950 text-xs sm:text-sm font-extrabold px-4 py-2 rounded-xl shadow-md cursor-pointer transition-all active:scale-95"
          >
            <span>Reserve Free Seat</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      )}

      {/* Quick Reservation Popup Modal */}
      <RegistrationModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onRegisterSuccess={handleRegisterSuccess}
        seatsLeft={seatsLeft}
      />

      {/* Confirmed Admission Pass / Bonus Download Modal */}
      <SuccessPassModal
        data={successData}
        onClose={handleCloseSuccess}
      />
    </div>
  );
}

