import React, { useState } from 'react';
import { CheckCircle2, Download, Calendar, MessageSquare, ShieldCheck, X, Share2, Sparkles, Copy, Check } from 'lucide-react';
import { RegistrationData } from '../types';
import { BATCHES } from '../data/landingData';

interface SuccessPassModalProps {
  data: RegistrationData | null;
  onClose: () => void;
}

export const SuccessPassModal: React.FC<SuccessPassModalProps> = ({ data, onClose }) => {
  const [copied, setCopied] = useState(false);
  const [downloadStarted, setDownloadStarted] = useState(false);

  if (!data) return null;

  const batch = BATCHES.find((b) => b.id === data.batchId) || BATCHES[0];
  const passId = `ASTA-EO-${Math.floor(10000 + Math.random() * 90000)}`;

  const handleCopyPass = () => {
    navigator.clipboard.writeText(`ASTA Registration Pass ID: ${passId}\nSession: ${batch.dayDate} at ${batch.time}\nAttendee: ${data.fullName}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownloadPDF = () => {
    setDownloadStarted(true);
    // Create simulated file download
    const element = document.createElement('a');
    const file = new Blob([
      `AVADHUT SATHE TRADING ACADEMY\nMarket Orientation Roadmap & Risk Management Starter Kit\n\nRegistered to: ${data.fullName} (${data.email})\nPass ID: ${passId}\nSession Time: ${batch.dayDate} - ${batch.time}\n\n1. Focus on Risk First.\n2. Understand the 4 market phases.\n3. Never trade based on unverified tips.\n4. Join live 10 minutes prior to session.`
    ], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = `ASTA_Market_Orientation_Roadmap_${data.fullName.replace(/\s+/g, '_')}.txt`;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-fade-in">
      <div className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden my-8">
        
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 text-slate-400 hover:text-white p-1 rounded-full bg-black/40 cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header Ticket Banner */}
        <div className="bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 text-white p-6 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-amber-400/10 rounded-full blur-2xl"></div>
          
          <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto mb-3 border border-emerald-500/30">
            <CheckCircle2 className="w-7 h-7" />
          </div>

          <span className="text-[11px] font-bold uppercase tracking-widest text-amber-400 block mb-1">
            Registration Confirmed
          </span>
          <h3 className="text-2xl font-extrabold text-white font-display">
            Your Seat Is Officially Locked!
          </h3>
          <p className="text-xs text-slate-300 mt-1 max-w-sm mx-auto">
            Welcome to the 3-Hour ASTA Eye-Opener Session with Avadhut Sathe.
          </p>
        </div>

        {/* Digital Admission Pass Body */}
        <div className="p-6 space-y-5">
          {/* Ticket Card Container */}
          <div className="bg-slate-50 rounded-2xl p-4.5 border border-slate-200 shadow-2xs relative">
            <div className="flex items-center justify-between border-b border-slate-200/80 pb-3 mb-3">
              <div>
                <span className="text-[10px] uppercase font-bold text-slate-400">Pass ID</span>
                <p className="font-mono text-sm font-bold text-slate-900">{passId}</p>
              </div>
              <div className="text-right">
                <span className="text-[10px] uppercase font-bold text-slate-400">Fee Status</span>
                <p className="text-xs font-black text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded">
                  100% FREE (₹590 WAIVED)
                </p>
              </div>
            </div>

            <div className="space-y-2 text-xs">
              <div className="flex justify-between">
                <span className="text-slate-500">Attendee:</span>
                <strong className="text-slate-900">{data.fullName}</strong>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Date:</span>
                <strong className="text-blue-950">{batch.dayDate}</strong>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Time:</span>
                <strong className="text-blue-950">{batch.time}</strong>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Mode:</span>
                <strong className="text-slate-900">Live Zoom Webinar</strong>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Language:</span>
                <strong className="text-slate-900">{data.preferredLanguage}</strong>
              </div>
            </div>

            <div className="mt-3 pt-3 border-t border-dashed border-slate-300 flex items-center justify-between text-[11px]">
              <span className="text-slate-500">Zoom link sent to:</span>
              <span className="font-medium text-slate-800">{data.email}</span>
            </div>
          </div>

          {/* Action: Download Promised Roadmap PDF */}
          <div className="bg-amber-50 rounded-xl p-4 border border-amber-200/80 flex items-center justify-between gap-3">
            <div>
              <p className="text-xs font-bold text-amber-950">
                🎁 Promised Bonus Unlocked!
              </p>
              <p className="text-[11px] text-amber-800">
                Market Orientation Roadmap & Risk Checklist
              </p>
            </div>
            <button
              onClick={handleDownloadPDF}
              className="inline-flex items-center gap-1.5 bg-amber-400 hover:bg-amber-300 text-slate-950 text-xs font-bold px-3 py-2 rounded-lg transition-colors cursor-pointer shrink-0"
            >
              <Download className="w-3.5 h-3.5" />
              <span>{downloadStarted ? 'Downloaded!' : 'Download PDF'}</span>
            </button>
          </div>

          {/* Buttons */}
          <div className="space-y-2 pt-1">
            <button
              onClick={handleCopyPass}
              className="w-full inline-flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs py-3 rounded-xl transition-colors cursor-pointer"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              <span>{copied ? 'Pass Details Copied!' : 'Copy Pass Details'}</span>
            </button>

            <button
              onClick={onClose}
              className="w-full text-slate-500 hover:text-slate-800 text-xs font-semibold py-2 cursor-pointer transition-colors"
            >
              Back to Landing Page
            </button>
          </div>

          <div className="text-[11px] text-center text-slate-400 flex items-center justify-center gap-1">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            <span>A WhatsApp reminder with the direct Zoom link will be sent prior to the session.</span>
          </div>
        </div>

      </div>
    </div>
  );
};
