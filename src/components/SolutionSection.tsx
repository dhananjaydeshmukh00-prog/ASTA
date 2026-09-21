import React from 'react';
import { Check, Gift, Calendar, Clock, Video, User, Sparkles, ArrowRight, ShieldCheck } from 'lucide-react';
import { SOLUTION_CLARITY_POINTS, STACKED_BONUSES, SESSION_DETAILS } from '../data/landingData';

interface SolutionSectionProps {
  onOpenModal: () => void;
  seatsLeft?: number;
}

export const SolutionSection: React.FC<SolutionSectionProps> = ({ onOpenModal, seatsLeft = 5 }) => {
  return (
    <section id="the-solution" className="py-16 md:py-24 bg-slate-50 border-b border-slate-200 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-flex items-center gap-1.5 text-xs uppercase tracking-widest font-extrabold text-blue-900 bg-blue-100/70 border border-blue-200 px-3 py-1 rounded-full mb-3">
            <Sparkles className="w-3.5 h-3.5 text-blue-700" />
            The Solution — Now With a Stacked Offer
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight font-display mb-4">
            What Is the ASTA Eye-Opener Session?
          </h2>
          <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
            A free, 3-hour live online session designed to give you a realistic, no-nonsense introduction to how the stock market actually works — <strong className="font-semibold text-slate-900">before you risk a single rupee</strong>.
          </p>
          <p className="mt-3 text-sm sm:text-base text-slate-500 font-medium italic">
            “This is not a sales pitch disguised as a webinar. It’s the same starting point thousands of ASTA students — from working professionals to homemakers to retirees — began with.”
          </p>
        </div>

        {/* 2-Column Core: Clarity Points & Stacked Offer / Session Details */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-14">
          
          {/* Left: What You'll Get Clarity On */}
          <div className="lg:col-span-7 bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/90 shadow-sm">
            <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-blue-900"></span>
              In this session, you’ll get clarity on:
            </h3>

            <div className="space-y-4 mb-8">
              {SOLUTION_CLARITY_POINTS.map((point, index) => (
                <div key={index} className="flex items-start gap-3.5 p-3 rounded-xl hover:bg-slate-50 transition-colors">
                  <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5 border border-emerald-200">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <p className="text-sm sm:text-base font-semibold text-slate-800 leading-snug">
                    {point}
                  </p>
                </div>
              ))}
            </div>

            {/* Stacked Free Bonuses */}
            <div className="bg-gradient-to-br from-amber-50/80 to-amber-100/40 rounded-xl p-5 border border-amber-200">
              <div className="flex items-center gap-2 mb-3">
                <Gift className="w-5 h-5 text-amber-700" />
                <h4 className="text-sm sm:text-base font-bold text-amber-900">
                  🎁 Register Today & Get The Free Bonus Starter Kit:
                </h4>
              </div>
              <div className="space-y-2.5">
                {STACKED_BONUSES.map((bonus, i) => (
                  <div key={i} className="flex items-start justify-between gap-3 text-xs sm:text-sm bg-white/90 p-2.5 rounded-lg border border-amber-200/70">
                    <div>
                      <span className="font-bold text-slate-900 block">{bonus.title}</span>
                      <span className="text-slate-600 text-xs">{bonus.description}</span>
                    </div>
                    <span className="shrink-0 font-extrabold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200 text-xs">
                      FREE <span className="line-through text-slate-400 font-normal">{bonus.value}</span>
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Session Details Card */}
          <div className="lg:col-span-5">
            <div className="bg-white rounded-2xl border-2 border-blue-900/40 shadow-xl overflow-hidden sticky top-24">
              {/* Header */}
              <div className="bg-blue-950 text-white p-5 text-center">
                <span className="text-[11px] font-bold uppercase tracking-widest text-amber-400 block mb-1">
                  Session Specifications
                </span>
                <h3 className="text-xl font-extrabold font-display">
                  ASTA Eye-Opener Masterclass
                </h3>
                <p className="text-xs text-slate-300 mt-1">
                  Live Interactive Training with Live Q&A
                </p>
              </div>

              {/* Specs Table */}
              <div className="divide-y divide-slate-100 p-5 space-y-3.5">
                {SESSION_DETAILS.map((detail, index) => (
                  <div key={index} className="flex items-start justify-between gap-3 pt-2">
                    <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                      {detail.label}
                    </span>
                    <div className="text-right">
                      <span className={`text-sm font-bold ${detail.highlight ? 'text-emerald-600 text-base' : 'text-slate-900'}`}>
                        {detail.label === 'Investment' ? (
                          <span>
                            <span className="line-through text-slate-400 font-normal mr-1.5">₹590</span>
                            <span className="text-emerald-700 font-black text-lg bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                              FREE
                            </span>
                          </span>
                        ) : (
                          detail.value
                        )}
                      </span>
                      {detail.subvalue && (
                        <p className="text-[11px] text-red-600 font-semibold mt-0.5">
                          ⚠️ For the next {seatsLeft} registrations only
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Action */}
              <div className="p-5 bg-slate-50 border-t border-slate-200 text-center">
                <button
                  onClick={onOpenModal}
                  id="solution-reserve-cta-btn"
                  className="w-full inline-flex items-center justify-center gap-2 bg-amber-400 hover:bg-amber-300 text-slate-950 font-extrabold text-base py-3.5 px-6 rounded-xl shadow-md hover:shadow-lg transition-all active:scale-98 cursor-pointer"
                >
                  <span>Reserve My Free Seat</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <p className="text-[11px] text-slate-500 mt-2 flex items-center justify-center gap-1 font-medium">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                  No fees · Zero obligation · Instant confirmation
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
