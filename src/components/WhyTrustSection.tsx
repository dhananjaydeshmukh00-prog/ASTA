import React from 'react';
import { ShieldCheck, Award, Users, MapPin, Globe, CheckCircle2, ArrowRight } from 'lucide-react';
import { ASTA_DIFFERENTIATORS, ASTA_STATS } from '../data/landingData';

interface WhyTrustSectionProps {
  onOpenModal: () => void;
}

export const WhyTrustSection: React.FC<WhyTrustSectionProps> = ({ onOpenModal }) => {
  return (
    <section id="why-trust-asta" className="py-18 md:py-26 bg-slate-950 text-white relative overflow-hidden">
      {/* Background visual accents */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:20px_20px]"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-1.5 text-xs uppercase tracking-widest font-extrabold text-amber-400 bg-amber-400/10 border border-amber-400/20 px-3.5 py-1 rounded-full mb-3">
            <Award className="w-3.5 h-3.5" />
            Why Trust ASTA (Authority)
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight font-display mb-5">
            Learn From Trainers Who Trade First, Teach Second
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Avadhut Sathe and the ASTA training team don’t just teach theory — they built their teaching from real trading experience across Indian and global markets.
          </p>
        </div>

        {/* Stats Strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-16">
          {ASTA_STATS.map((stat, idx) => (
            <div
              key={idx}
              className="bg-slate-900/90 border border-slate-800 rounded-2xl p-5 text-center shadow-lg hover:border-slate-700 transition-colors"
            >
              <div className="text-2xl sm:text-3xl lg:text-4xl font-black text-amber-400 font-display mb-1">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm font-medium text-slate-300">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Sub-headline: What makes ASTA different */}
        <div className="mb-14">
          <div className="text-center mb-10">
            <h3 className="text-xl sm:text-2xl font-bold text-slate-200">
              What makes ASTA different:
            </h3>
            <p className="text-sm text-slate-400 mt-1">
              Built on discipline, live engagement, and nationwide local support
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ASTA_DIFFERENTIATORS.map((diff, index) => (
              <div
                key={index}
                className="bg-slate-900/60 rounded-2xl p-6 border border-slate-800 hover:border-blue-500/50 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="w-8 h-8 rounded-lg bg-blue-900/60 text-blue-300 font-black text-xs flex items-center justify-center border border-blue-700/50">
                      {diff.number}
                    </span>
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  </div>
                  <h4 className="text-base sm:text-lg font-bold text-white mb-2 leading-snug">
                    {diff.title}
                  </h4>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    {diff.description}
                  </p>
                </div>
              </div>
            ))}

            {/* Language card showcase */}
            <div className="bg-gradient-to-br from-blue-950/70 to-slate-900 rounded-2xl p-6 border border-blue-800/40 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="w-8 h-8 rounded-lg bg-amber-400/20 text-amber-300 font-black text-xs flex items-center justify-center border border-amber-400/30">
                    06
                  </span>
                  <Globe className="w-4 h-4 text-amber-400" />
                </div>
                <h4 className="text-base sm:text-lg font-bold text-white mb-2 leading-snug">
                  Multilingual Learning
                </h4>
                <p className="text-sm text-slate-400 mb-3">
                  Sessions & materials available across 6 Indian regional languages:
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {['English', 'Hindi (हिंदी)', 'Marathi (मराठी)', 'Tamil (தமிழ்)', 'Telugu (తెలుగు)', 'Kannada (ಕನ್ನಡ)'].map((lang, lidx) => (
                    <span key={lidx} className="text-[11px] font-semibold bg-slate-800 text-slate-200 px-2 py-0.5 rounded border border-slate-700">
                      {lang}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Navy Section CTA */}
        <div className="text-center pt-6">
          <button
            onClick={onOpenModal}
            id="why-trust-reserve-cta-btn"
            className="inline-flex items-center justify-center gap-3 bg-amber-400 hover:bg-amber-300 text-slate-950 font-extrabold text-base sm:text-lg px-9 py-4 rounded-xl shadow-xl shadow-amber-400/20 hover:shadow-2xl transition-all active:scale-98 cursor-pointer"
          >
            <span>Reserve My Free Seat</span>
            <ArrowRight className="w-4 h-4 text-slate-900" />
          </button>
          <p className="text-xs text-slate-400 mt-2.5">
            Free 3-hour live workshop · Limited to next 25 attendees
          </p>
        </div>

      </div>
    </section>
  );
};
