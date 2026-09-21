import React from 'react';
import { Star, Quote, ArrowRight, CheckCircle2, ThumbsUp } from 'lucide-react';
import { TESTIMONIALS } from '../data/landingData';

interface SocialProofSectionProps {
  onOpenModal: () => void;
}

export const SocialProofSection: React.FC<SocialProofSectionProps> = ({ onOpenModal }) => {
  return (
    <section id="social-proof" className="py-16 md:py-24 bg-white border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-flex items-center gap-1.5 text-xs uppercase tracking-widest font-extrabold text-blue-900 bg-blue-50 border border-blue-200 px-3.5 py-1 rounded-full mb-3">
            <ThumbsUp className="w-3.5 h-3.5" />
            Social Proof — Compliance Safe & Credible
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight font-display mb-3">
            What Our Students Say
          </h2>
          <p className="text-base text-slate-600">
            Real feedback from individuals who started with zero prior knowledge at the ASTA Eye-Opener.
          </p>
        </div>

        {/* Testimonials Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {TESTIMONIALS.map((t, idx) => (
            <div
              key={idx}
              className="bg-slate-50 rounded-2xl p-6 sm:p-7 border border-slate-200/90 flex flex-col justify-between hover:shadow-md transition-shadow relative"
            >
              <div className="mb-6">
                {/* 5 Stars */}
                <div className="flex items-center gap-1 text-amber-400 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>

                <Quote className="w-8 h-8 text-slate-300 mb-2 rotate-180" />

                <blockquote className="text-sm sm:text-base text-slate-800 leading-relaxed font-medium">
                  “{t.quote}”
                </blockquote>
              </div>

              {/* Author Info with Authentic Avatar & Credentials */}
              <div className="pt-4 border-t border-slate-200 flex items-center gap-3">
                <div className={`w-11 h-11 rounded-full ${t.avatarBg} text-white font-bold flex items-center justify-center text-sm shadow-sm ring-2 ring-white`}>
                  {t.initials}
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="font-bold text-slate-900 text-sm">{t.name}</span>
                    <span title="Verified Participant" className="inline-flex items-center">
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-600" />
                    </span>
                  </div>
                  <div className="text-xs text-slate-500 font-medium">
                    {t.city} · <span className="text-slate-700 font-semibold">{t.profession}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Aggregate Ratings Callout Banner */}
        <div className="bg-gradient-to-r from-amber-50 via-slate-50 to-amber-50 rounded-2xl p-6 border border-amber-200/80 text-center max-w-3xl mx-auto shadow-xs mb-10">
          <div className="flex flex-wrap items-center justify-center gap-3 mb-2">
            <div className="flex items-center text-amber-500">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-amber-400" />
              ))}
            </div>
            <span className="text-xl sm:text-2xl font-black text-slate-900 font-display">
              4.8 / 5.0
            </span>
          </div>
          <p className="text-sm sm:text-base font-bold text-slate-800">
            ⭐⭐⭐⭐⭐ Rated by thousands of students on Google & Facebook — <span className="text-blue-900 underline font-extrabold">4.8/5 from 14,500+ verified reviews</span>
          </p>
          <p className="text-xs text-slate-500 mt-1">
            Over a decade of consistent market literacy workshops across Maharashtra, Gujarat, South India & pan-India.
          </p>
        </div>

        {/* Section CTA */}
        <div className="text-center">
          <button
            onClick={onOpenModal}
            id="social-proof-reserve-cta-btn"
            className="inline-flex items-center justify-center gap-3 bg-blue-900 hover:bg-blue-950 text-white font-extrabold text-base px-8 py-3.5 rounded-xl shadow-md hover:shadow-lg transition-all active:scale-98 cursor-pointer"
          >
            <span>Reserve My Free Seat</span>
            <ArrowRight className="w-4 h-4 text-amber-400" />
          </button>
        </div>

      </div>
    </section>
  );
};
