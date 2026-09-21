import React from 'react';
import { AlertTriangle, TrendingDown, HelpCircle, ArrowDown, Check, ShieldAlert } from 'lucide-react';

export const ProblemSection: React.FC = () => {
  return (
    <section id="the-problem" className="py-16 md:py-24 bg-white border-b border-slate-200 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Tag */}
        <div className="text-center mb-4">
          <span className="inline-flex items-center gap-1.5 text-xs uppercase tracking-widest font-extrabold text-amber-700 bg-amber-50 border border-amber-200/80 px-3 py-1 rounded-full">
            <AlertTriangle className="w-3.5 h-3.5 text-amber-600" />
            The Real Problem
          </span>
        </div>

        {/* Section Headline */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight font-display mb-4">
            Most People Never Start Because No One Explains It Simply
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Here’s the truth: the stock market isn’t complicated because it is hard — it’s complicated because most people never got a simple, honest introduction to it.
          </p>
        </div>

        {/* The 3 Pitfalls */}
        <div className="mb-10">
          <p className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-400 text-center mb-6">
            So they either fall into one of these three common patterns:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Trap 1 */}
            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 hover:border-slate-300 transition-all shadow-xs relative flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-slate-200/80 flex items-center justify-center text-slate-700 font-bold text-sm mb-4">
                  1
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2 leading-snug">
                  Stay on the sidelines for years
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Watching others talk about investing and trading while fear of the unknown keeps you frozen in place.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-200/80 text-xs font-semibold text-slate-500 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-slate-400"></span>
                Result: Missed wealth compounding
              </div>
            </div>

            {/* Trap 2 */}
            <div className="bg-red-50/50 rounded-2xl p-6 border border-red-200/80 hover:border-red-300 transition-all shadow-xs relative flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-red-100 flex items-center justify-center text-red-700 font-bold text-sm mb-4">
                  2
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2 leading-snug">
                  Jump in blindly, following random tips
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Following friends, tips, or social media — and losing money they can’t afford to lose.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-red-200/60 text-xs font-semibold text-red-600 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-red-500"></span>
                Result: Devastating capital losses
              </div>
            </div>

            {/* Trap 3 */}
            <div className="bg-amber-50/40 rounded-2xl p-6 border border-amber-200/80 hover:border-amber-300 transition-all shadow-xs relative flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center text-amber-800 font-bold text-sm mb-4">
                  3
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2 leading-snug">
                  Read 10 different YouTube videos
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Watching fragmented tutorials and ending up more confused and overwhelmed than before.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-amber-200/60 text-xs font-semibold text-amber-700 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                Result: Chronic analysis paralysis
              </div>
            </div>
          </div>
        </div>

        {/* Punchline Card */}
        <div className="bg-slate-900 text-white rounded-2xl p-6 sm:p-8 text-center shadow-lg border border-slate-800 relative overflow-hidden">
          <div className="relative z-10 max-w-2xl mx-auto">
            <p className="text-slate-400 text-sm sm:text-base mb-2 font-medium">
              None of these are a real starting point.
            </p>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white font-display mb-4">
              This session is.
            </h3>
            <p className="text-xs sm:text-sm text-slate-300">
              A structured, honest, 3-hour orientation designed to give you clarity and confidence before risking a single rupee.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
