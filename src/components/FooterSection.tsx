import React from 'react';
import { MANDATORY_COMPLIANCE } from '../data/landingData';
import { ShieldCheck, Mail, Phone, MapPin, ExternalLink } from 'lucide-react';

export const FooterSection: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-slate-400 text-xs border-t border-slate-800">
      {/* Upper Footer: ASTA Highlights & Quick Info */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-b border-slate-800/80">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* Col 1: Brand & Identity */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-blue-900 flex items-center justify-center text-white font-black text-lg border border-blue-700">
                A<span className="text-amber-400">S</span>
              </div>
              <div>
                <span className="font-extrabold text-white text-base tracking-tight block">
                  AVADHUT SATHE TRADING ACADEMY
                </span>
                <span className="text-[11px] text-slate-400">
                  Pioneering Financial & Market Literacy Since 2008
                </span>
              </div>
            </div>
            <p className="text-slate-400 text-xs leading-relaxed max-w-md">
              ASTA is dedicated to empowering everyday individuals with disciplined market education, risk-first thinking, and systematic learning pathways across India and overseas.
            </p>
          </div>

          {/* Col 2: Key Programs & Quick Links */}
          <div className="md:col-span-3 space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-200 block mb-3">
              Educational Sessions
            </span>
            <ul className="space-y-2 text-slate-400">
              <li><a href="#hero" className="hover:text-amber-400 transition-colors">ASTA Eye-Opener (Free Live)</a></li>
              <li><a href="#the-solution" className="hover:text-amber-400 transition-colors">Market Orientation Roadmap</a></li>
              <li><a href="#who-this-is-for" className="hover:text-amber-400 transition-colors">Programs for Beginners</a></li>
              <li><a href="#why-trust-asta" className="hover:text-amber-400 transition-colors">ASTA Satsang Centres (ASCs)</a></li>
            </ul>
          </div>

          {/* Col 3: Support & Regional Network */}
          <div className="md:col-span-4 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-200 block mb-1">
              National Presence
            </span>
            <p className="text-slate-400 text-xs">
              200+ Satsang Support Centres across Maharashtra, Gujarat, Karnataka, Tamil Nadu, Telangana, Delhi NCR and pan-India.
            </p>
            <div className="pt-2 text-slate-400 space-y-1">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                <span>Support: support@avadhutsathe.com</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span>
                <span>Sessions conducted live via Secure Web Conferencing</span>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Mandatory Statutory Compliance Block (VERBATIM) */}
      <div className="bg-slate-900/90 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto space-y-4">
          <div className="flex items-center gap-2 text-amber-400 font-bold text-xs uppercase tracking-wider">
            <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0" />
            <span>Regulatory & Educational Compliance Notice</span>
          </div>

          {/* Verbatim Disclaimer */}
          <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-slate-300 text-xs sm:text-xs leading-relaxed font-normal">
            <p id="mandatory-compliance-text" className="select-text">
              {MANDATORY_COMPLIANCE}
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-slate-800/80 text-[11px] text-slate-500">
            <p>© {new Date().getFullYear()} AVADHUT SATHE TRADING ACADEMY PRIVATE LIMITED. All rights reserved.</p>
            <div className="flex items-center gap-4">
              <span className="hover:text-slate-400 cursor-pointer">Privacy Policy</span>
              <span>•</span>
              <span className="hover:text-slate-400 cursor-pointer">Terms of Service</span>
              <span>•</span>
              <span className="hover:text-slate-400 cursor-pointer">Code of Ethics</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
