import React, { useState } from 'react';
import { Play, Pause, Volume2, VolumeX, Sparkles, CheckCircle, ArrowRight, Clock, Users, ShieldAlert, Award, Video } from 'lucide-react';
import { TRUST_ITEMS } from '../data/landingData';

interface HeroSectionProps {
  onOpenModal: () => void;
  seatsLeft?: number;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenModal, seatsLeft = 5 }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [headlineMode, setHeadlineMode] = useState<'primary' | 'alternative'>('primary');

  const primaryHeadline = "The 3-Hour Live Session That Explains What 9 Out Of 10 Beginners Get Wrong About The Stock Market";
  const altHeadline = "Before You Put a Single Rupee in the Market — Watch This Free Live Session First";

  return (
    <section id="hero" className="relative pt-8 pb-16 md:pt-12 md:pb-24 bg-gradient-to-b from-white via-slate-50 to-slate-100/70 overflow-hidden border-b border-slate-200">
      {/* Decorative background grids and soft ambient accents */}
      <div className="absolute inset-0 pointer-events-none opacity-40 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:24px_24px]"></div>
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-100/50 rounded-full blur-3xl pointer-events-none -z-10"></div>
      <div className="absolute top-1/3 left-10 w-72 h-72 bg-amber-100/40 rounded-full blur-3xl pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Eyebrow badge */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-50 border border-red-200 text-red-700 text-xs sm:text-sm font-bold shadow-xs">
            <span className="w-2.5 h-2.5 rounded-full bg-red-600 badge-pulse"></span>
            <span>🔴 LIVE Batch — Saturday, 26th September at 10:00 AM IST</span>
            <span className="text-slate-400">|</span>
            <span className="text-slate-800 font-semibold">
              Worth <span className="line-through text-slate-400">₹590</span> — <span className="text-emerald-700 font-extrabold bg-emerald-100/70 px-1.5 py-0.5 rounded">Free for Next 25 Registrations</span>
            </span>
          </div>
        </div>

        {/* Headlines */}
        <div className="text-center max-w-4xl mx-auto mb-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-extrabold text-slate-900 tracking-tight leading-[1.18] mb-5 font-display">
            {headlineMode === 'primary' ? (
              <span>
                The 3-Hour Live Session That Explains What <span className="underline decoration-amber-400 decoration-4 underline-offset-4 text-blue-950">9 Out Of 10 Beginners</span> Get Wrong About The Stock Market
              </span>
            ) : (
              <span>
                Before You Put a Single Rupee in the Market — <span className="text-blue-950 underline decoration-amber-400 decoration-4 underline-offset-4">Watch This Free Live Session First</span>
              </span>
            )}
          </h1>

          {/* Headline option selector pill for testing readability */}
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="text-[11px] text-slate-400 uppercase tracking-wider font-semibold">Headline version:</span>
            <button
              onClick={() => setHeadlineMode('primary')}
              className={`text-xs px-2.5 py-1 rounded-md transition-all ${
                headlineMode === 'primary'
                  ? 'bg-slate-900 text-white font-bold shadow-xs'
                  : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              Primary (Recommended)
            </button>
            <button
              onClick={() => setHeadlineMode('alternative')}
              className={`text-xs px-2.5 py-1 rounded-md transition-all ${
                headlineMode === 'alternative'
                  ? 'bg-slate-900 text-white font-bold shadow-xs'
                  : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              Alternative Angle
            </button>
          </div>

          <p className="text-lg sm:text-xl text-slate-600 font-normal leading-relaxed max-w-3xl mx-auto">
            No prior experience needed. No confusing jargon. Taught live by <strong className="font-bold text-slate-900">Avadhut Sathe</strong> — trainer to lakhs of students across India, <span className="underline decoration-slate-300 decoration-2 font-semibold text-slate-800">live, not on a recording</span>.
          </p>
        </div>

        {/* Video Placeholder & Authentic Video Card */}
        <div className="max-w-3xl mx-auto mb-10">
          <div className="relative rounded-2xl bg-slate-900 overflow-hidden shadow-2xl border-2 border-slate-700/60 group">
            {/* Top Video Header Bar */}
            <div className="bg-slate-950/80 px-4 py-2.5 flex items-center justify-between text-xs text-slate-300 border-b border-slate-800">
              <div className="flex items-center gap-2">
                <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-red-600 text-white font-bold text-[10px] tracking-wider uppercase">
                  <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping"></span>
                  Trainer Message
                </span>
                <span className="font-medium text-slate-300 truncate">
                  Avadhut Sathe — Why I’m Teaching This Eye-Opener For Free
                </span>
              </div>
              <div className="flex items-center gap-2 text-[11px] text-slate-400">
                <span>60–90 sec quick brief</span>
              </div>
            </div>

            {/* Video Canvas Container */}
            <div className="relative aspect-video bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 flex flex-col items-center justify-center p-6 text-center text-white">
              {/* Simulated Authentic Trainer Video Still Background */}
              <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-700 via-slate-900 to-black"></div>
              
              {/* Speaker Portrait & Context Box */}
              <div className="relative z-10 max-w-lg mx-auto flex flex-col items-center">
                <div className="relative mb-4">
                  <div className="w-22 h-22 sm:w-26 sm:h-26 rounded-full p-1 bg-gradient-to-tr from-amber-400 via-amber-200 to-blue-400 shadow-xl">
                    <div className="w-full h-full rounded-full bg-slate-800 flex items-center justify-center overflow-hidden border-2 border-slate-950">
                      {/* Stylized high-credibility trainer badge/silhouette representation */}
                      <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-b from-slate-700 to-slate-900 text-amber-300">
                        <span className="font-extrabold text-2xl tracking-tighter">AS</span>
                        <span className="text-[9px] text-slate-300 uppercase tracking-widest font-semibold">Avadhut</span>
                      </div>
                    </div>
                  </div>
                  <div className="absolute -bottom-1.5 -right-1 bg-blue-600 text-white p-1.5 rounded-full shadow-md border-2 border-slate-900">
                    <Video className="w-3.5 h-3.5" />
                  </div>
                </div>

                <div className="mb-4">
                  <p className="text-amber-300 text-xs sm:text-sm font-semibold tracking-wide uppercase mb-1">
                    Avadhut Sathe speaking directly to camera
                  </p>
                  <blockquote className="text-base sm:text-lg italic font-medium text-slate-100 leading-snug">
                    “Here’s exactly what you’ll learn in this session, and why I’m teaching it for free.”
                  </blockquote>
                  <p className="text-xs text-slate-400 mt-1">
                    Unpolished & authentic conversation · No sales hype · Real ground truth
                  </p>
                </div>

                {/* Interactive Play Toggle */}
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setIsPlaying(!isPlaying)}
                    id="hero-video-play-button"
                    className="inline-flex items-center gap-2.5 bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold px-5 py-2.5 rounded-full shadow-lg transition-transform active:scale-95 cursor-pointer"
                  >
                    {isPlaying ? <Pause className="w-4 h-4 fill-current" /> : <Play className="w-4 h-4 fill-current" />}
                    <span>{isPlaying ? 'Pause Preview' : 'Play 90-Sec Video Brief'}</span>
                  </button>

                  <button
                    onClick={() => setIsMuted(!isMuted)}
                    className="p-2.5 rounded-full bg-slate-800/80 hover:bg-slate-700 text-slate-200 border border-slate-600 cursor-pointer"
                    title={isMuted ? 'Unmute' : 'Mute'}
                  >
                    {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                  </button>
                </div>

                {/* Progress bar simulation if playing */}
                {isPlaying && (
                  <div className="w-full max-w-xs mt-4">
                    <div className="h-1.5 bg-slate-700 rounded-full overflow-hidden">
                      <div className="h-full bg-amber-400 animate-[pulse_2s_infinite] w-2/3 transition-all duration-300"></div>
                    </div>
                    <div className="flex justify-between text-[10px] text-slate-400 mt-1">
                      <span>0:42</span>
                      <span>1:28</span>
                    </div>
                  </div>
                )}
              </div>

              {/* Note about conversion impact */}
              <div className="absolute bottom-2 right-3 text-[10px] text-slate-400 hidden sm:block">
                Direct camera briefing by Avadhut Sathe
              </div>
            </div>
          </div>
        </div>

        {/* Main CTA Block */}
        <div className="text-center max-w-xl mx-auto mb-14">
          <button
            onClick={onOpenModal}
            id="hero-reserve-cta-btn"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-amber-400 hover:bg-amber-300 text-slate-950 font-extrabold text-lg sm:text-xl px-8 sm:px-10 py-4 sm:py-4.5 rounded-xl shadow-xl shadow-amber-400/20 hover:shadow-2xl transition-all duration-200 transform hover:-translate-y-0.5 active:scale-98 cursor-pointer"
          >
            <span>Reserve My Free Seat</span>
            <ArrowRight className="w-5 h-5 text-slate-900" />
          </button>

          {/* Micro-copy below button */}
          <div className="mt-3.5 flex items-center justify-center gap-2 text-xs sm:text-sm font-semibold text-red-600 bg-red-50/80 border border-red-200/80 py-1.5 px-4 rounded-lg inline-block mx-auto">
            <span>⚠️ Only [{seatsLeft}] seats left for this batch.</span>
          </div>

          <div className="mt-2 text-xs text-slate-500">
            Takes 30 seconds · No credit card required · Instant Zoom confirmation
          </div>
        </div>

        {/* Trust Strip */}
        <div className="border-t border-slate-200/90 pt-8 pb-2">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {TRUST_ITEMS.map((item, idx) => (
              <div
                key={idx}
                className="flex items-center gap-3 bg-white p-3.5 rounded-xl border border-slate-200/80 shadow-xs hover:border-blue-200 transition-colors"
              >
                <span className="text-2xl shrink-0 p-1.5 bg-slate-50 rounded-lg border border-slate-100">
                  {item.icon}
                </span>
                <span className="text-xs sm:text-sm font-semibold text-slate-800 leading-snug">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
