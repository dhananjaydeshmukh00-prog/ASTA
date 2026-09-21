import React from 'react';
import { ShieldCheck, Clock, ArrowRight, Award } from 'lucide-react';

interface HeaderProps {
  onOpenModal: () => void;
  seatsLeft?: number;
}

export const Header: React.FC<HeaderProps> = ({ onOpenModal, seatsLeft = 5 }) => {
  return (
    <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-xs">
      {/* Top Urgent Alert Bar */}
      <div className="bg-slate-900 text-white text-xs sm:text-sm py-2 px-4 transition-colors">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2 font-medium tracking-wide">
            <span className="inline-flex items-center gap-1.5 bg-red-600/90 text-white text-[11px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full badge-pulse">
              <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping"></span>
              Live Batch
            </span>
            <span className="hidden sm:inline text-slate-300">|</span>
            <span className="text-slate-200">
              Saturday, 26th Sept at 10:00 AM IST
            </span>
            <span className="hidden md:inline text-slate-400">
              • Worth <span className="line-through text-slate-500">₹590</span> <span className="text-emerald-400 font-bold">100% Free</span> for Next 25 Registrations
            </span>
          </div>

          <div className="flex items-center gap-3 text-xs">
            <span className="inline-flex items-center gap-1 text-amber-300 font-semibold">
              <Clock className="w-3.5 h-3.5" />
              Only <span className="text-white bg-red-600/80 px-1.5 py-0.2 rounded font-bold">{seatsLeft} seats left</span>
            </span>
            <button
              onClick={onOpenModal}
              id="header-top-reserve-btn"
              className="text-xs text-cyan-300 hover:text-white font-semibold underline underline-offset-2 flex items-center gap-0.5 transition-colors cursor-pointer"
            >
              Claim Seat →
            </button>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
        {/* Brand */}
        <a href="#hero" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-slate-900 to-blue-950 flex items-center justify-center text-white font-black text-xl tracking-tight shadow-md border border-slate-700/50">
            A<span className="text-amber-400">S</span>
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="font-extrabold text-slate-900 text-lg tracking-tight group-hover:text-blue-900 transition-colors">
                ASTA
              </span>
              <span className="text-[10px] font-bold uppercase tracking-wider bg-blue-50 text-blue-800 border border-blue-200/70 px-1.5 py-0.5 rounded">
                Official
              </span>
            </div>
            <p className="text-[11px] text-slate-500 font-medium tracking-tight leading-none">
              Avadhut Sathe Trading Academy
            </p>
          </div>
        </a>

        {/* Navigation links (Desktop) */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-semibold text-slate-600">
          <a href="#the-problem" className="hover:text-blue-900 transition-colors">
            The Problem
          </a>
          <a href="#the-solution" className="hover:text-blue-900 transition-colors">
            Session Details
          </a>
          <a href="#who-this-is-for" className="hover:text-blue-900 transition-colors">
            Who This Is For
          </a>
          <a href="#why-trust-asta" className="hover:text-blue-900 transition-colors">
            Why ASTA
          </a>
          <a href="#social-proof" className="hover:text-blue-900 transition-colors">
            Reviews
          </a>
          <a href="#faq-section" className="hover:text-blue-900 transition-colors">
            FAQ
          </a>
        </nav>

        {/* Action Button */}
        <div className="flex items-center gap-3">
          <div className="hidden sm:flex items-center gap-1.5 text-xs text-slate-500 font-medium bg-slate-100/90 px-2.5 py-1.5 rounded-lg border border-slate-200">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>Purely Educational</span>
          </div>

          <button
            onClick={onOpenModal}
            id="header-cta-reserve-btn"
            className="inline-flex items-center gap-2 bg-blue-900 hover:bg-blue-950 text-white font-bold text-sm px-4 sm:px-5 py-2.5 rounded-xl shadow-md shadow-blue-900/15 hover:shadow-lg transition-all active:scale-98 cursor-pointer"
          >
            <span>Reserve My Free Seat</span>
            <ArrowRight className="w-4 h-4 text-amber-300" />
          </button>
        </div>
      </div>
    </header>
  );
};
