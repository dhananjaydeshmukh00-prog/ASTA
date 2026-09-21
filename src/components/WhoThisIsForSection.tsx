import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, UserCheck } from 'lucide-react';
import { AUDIENCE_LIST } from '../data/landingData';

interface WhoThisIsForSectionProps {
  onOpenModal: () => void;
}

export const WhoThisIsForSection: React.FC<WhoThisIsForSectionProps> = ({ onOpenModal }) => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  return (
    <section id="who-this-is-for" className="py-16 md:py-24 bg-white border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-flex items-center gap-1.5 text-xs uppercase tracking-widest font-extrabold text-slate-700 bg-slate-100 border border-slate-200 px-3 py-1 rounded-full mb-3">
            <UserCheck className="w-3.5 h-3.5 text-blue-900" />
            Target Audience
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight font-display mb-4">
            Built For Beginners. Valuable For Everyone.
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            No matter your current background or career stage, the foundational principles of risk and market mechanics remain universal.
          </p>
        </div>

        {/* 6 Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {AUDIENCE_LIST.map((item) => {
            const isSelected = selectedCategory === item.id;
            return (
              <div
                key={item.id}
                onClick={() => setSelectedCategory(isSelected ? null : item.id)}
                className={`p-6 rounded-2xl border transition-all duration-200 cursor-pointer text-left flex flex-col justify-between ${
                  isSelected
                    ? 'border-blue-900 bg-blue-50/50 shadow-md ring-2 ring-blue-900/20'
                    : 'border-slate-200 bg-slate-50/50 hover:bg-white hover:border-slate-300 hover:shadow-sm'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-3xl p-2 bg-white rounded-xl shadow-xs border border-slate-200/80">
                      {item.icon}
                    </span>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 bg-white px-2 py-0.5 rounded border border-slate-200">
                      Target Role
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2">
                    {item.title}
                  </h3>

                  <p className="text-sm font-semibold text-blue-950 mb-3 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-200/70">
                  <p className="text-xs text-slate-500 italic">
                    Focus: {item.tagline}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Callout & CTA */}
        <div className="text-center max-w-2xl mx-auto bg-slate-50 p-6 sm:p-8 rounded-2xl border border-slate-200">
          <p className="text-base sm:text-lg font-bold text-slate-900 mb-5">
            No prior experience required. If you’re serious about learning, this session is built for you.
          </p>

          <button
            onClick={onOpenModal}
            id="who-for-reserve-cta-btn"
            className="inline-flex items-center justify-center gap-3 bg-blue-900 hover:bg-blue-950 text-white font-extrabold text-base sm:text-lg px-8 py-3.5 rounded-xl shadow-md hover:shadow-lg transition-all active:scale-98 cursor-pointer"
          >
            <span>Reserve My Free Seat</span>
            <ArrowRight className="w-4 h-4 text-amber-400" />
          </button>
        </div>

      </div>
    </section>
  );
};
