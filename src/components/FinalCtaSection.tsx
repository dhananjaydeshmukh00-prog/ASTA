import React, { useState } from 'react';
import { Clock, ShieldCheck, ArrowRight, CheckCircle, Sparkles, AlertCircle, Calendar, Phone, Mail, User, MapPin } from 'lucide-react';
import { BATCHES } from '../data/landingData';
import { RegistrationData } from '../types';

interface FinalCtaSectionProps {
  onRegisterSuccess: (data: RegistrationData) => void;
  seatsLeft: number;
}

export const FinalCtaSection: React.FC<FinalCtaSectionProps> = ({
  onRegisterSuccess,
  seatsLeft = 5,
}) => {
  const [selectedBatch, setSelectedBatch] = useState<string>(BATCHES[0].id);
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [city, setCity] = useState('');
  const [occupation, setOccupation] = useState('Working Professional');
  const [preferredLanguage, setPreferredLanguage] = useState('English');
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: { [key: string]: string } = {};

    if (!fullName.trim()) newErrors.fullName = 'Please enter your full name';
    if (!email.trim() || !email.includes('@')) newErrors.email = 'Please enter a valid email';
    if (!phone.trim() || phone.length < 10) newErrors.phone = 'Please enter a valid 10-digit WhatsApp number';
    if (!city.trim()) newErrors.city = 'Please enter your city';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      onRegisterSuccess({
        fullName,
        email,
        phone,
        city,
        occupation,
        preferredLanguage,
        batchId: selectedBatch,
      });
    }, 600);
  };

  const currentBatch = BATCHES.find((b) => b.id === selectedBatch) || BATCHES[0];

  return (
    <section id="final-cta" className="py-18 md:py-26 bg-gradient-to-b from-white via-amber-50/20 to-slate-100/90 border-b border-slate-200 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Urgency Pill */}
        <div className="text-center mb-5">
          <div className="inline-flex items-center gap-2 bg-red-600 text-white font-bold text-xs sm:text-sm px-4 py-1.5 rounded-full shadow-md badge-pulse">
            <span className="w-2 h-2 rounded-full bg-white animate-ping"></span>
            <span>⏳ Only [{seatsLeft}] of [30] seats remaining for [{currentBatch.dayDate}] batch</span>
          </div>
        </div>

        {/* Headlines */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight font-display mb-4">
            Your First Step Starts With One Free Session
          </h2>
          <p className="text-lg sm:text-xl text-slate-700 font-medium leading-relaxed max-w-2xl mx-auto mb-3">
            You don’t need experience. You don’t need capital ready today. You just need to start with the right foundation.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-red-600">
            ⚠️ Once full, next batch opens in 14 days. Reserve your free seat below before allocations expire.
          </p>
        </div>

        {/* Embedded Registration Form Card */}
        <div className="bg-white rounded-3xl border-2 border-blue-900/30 shadow-2xl overflow-hidden max-w-3xl mx-auto">
          {/* Header Banner */}
          <div className="bg-slate-950 text-white p-6 sm:p-8">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <span className="text-amber-400 text-xs font-extrabold uppercase tracking-widest block mb-1">
                  100% Free Live Online Workshop
                </span>
                <h3 className="text-2xl font-bold font-display">
                  Lock In Your Free Registration Pass
                </h3>
              </div>
              <div className="text-right">
                <span className="text-xs text-slate-400 block line-through">Regular: ₹590</span>
                <span className="text-xl font-extrabold text-emerald-400 bg-emerald-950/80 px-3 py-1 rounded-lg border border-emerald-700/60">
                  ₹0 FREE
                </span>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-6">
            
            {/* Step 1: Batch Selector */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                1. Select Your Live Batch Date & Time:
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {BATCHES.map((b) => (
                  <label
                    key={b.id}
                    className={`relative p-3.5 rounded-xl border-2 cursor-pointer transition-all flex flex-col justify-between ${
                      selectedBatch === b.id
                        ? 'border-blue-900 bg-blue-50/70 shadow-xs'
                        : 'border-slate-200 bg-white hover:border-slate-300'
                    }`}
                  >
                    <input
                      type="radio"
                      name="batch"
                      value={b.id}
                      checked={selectedBatch === b.id}
                      onChange={() => setSelectedBatch(b.id)}
                      className="sr-only"
                    />
                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-xs font-bold text-slate-900">
                          {b.dayDate.split(',')[0]}
                        </span>
                        {b.isPopular && (
                          <span className="text-[10px] bg-red-100 text-red-700 font-bold px-1.5 py-0.2 rounded">
                            Fast Filling
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-slate-600 font-medium">
                        {b.dayDate.split(',')[1]}
                      </p>
                      <p className="text-xs font-semibold text-blue-950 mt-1">
                        {b.time}
                      </p>
                    </div>
                    <div className="mt-2 text-[11px] font-bold text-red-600">
                      {b.id === 'batch-1' ? `${seatsLeft} seats left` : `${b.seatsLeft} seats left`}
                    </div>
                  </label>
                ))}
              </div>
            </div>

            {/* Step 2: Contact Information */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Full Name */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5 flex items-center gap-1.5">
                  <User className="w-3.5 h-3.5 text-slate-500" />
                  Your Full Name *
                </label>
                <input
                  type="text"
                  placeholder="e.g. Rahul Sharma"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className={`w-full bg-slate-50 border rounded-xl px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-900/20 ${
                    errors.fullName ? 'border-red-500 bg-red-50/30' : 'border-slate-300 focus:border-blue-900'
                  }`}
                />
                {errors.fullName && <p className="text-red-600 text-xs mt-1">{errors.fullName}</p>}
              </div>

              {/* Email */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5 flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-slate-500" />
                  Email Address (For Zoom Link) *
                </label>
                <input
                  type="email"
                  placeholder="e.g. rahul@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={`w-full bg-slate-50 border rounded-xl px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-900/20 ${
                    errors.email ? 'border-red-500 bg-red-50/30' : 'border-slate-300 focus:border-blue-900'
                  }`}
                />
                {errors.email && <p className="text-red-600 text-xs mt-1">{errors.email}</p>}
              </div>

              {/* WhatsApp Phone */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5 flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-emerald-600" />
                  WhatsApp Number (For Instant Pass & PDF) *
                </label>
                <div className="flex">
                  <span className="inline-flex items-center px-3 rounded-l-xl border border-r-0 border-slate-300 bg-slate-100 text-slate-600 text-sm font-semibold">
                    +91
                  </span>
                  <input
                    type="tel"
                    maxLength={10}
                    placeholder="9876543210"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value.replace(/\D/g, ''))}
                    className={`w-full bg-slate-50 border rounded-r-xl px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-900/20 ${
                      errors.phone ? 'border-red-500 bg-red-50/30' : 'border-slate-300 focus:border-blue-900'
                    }`}
                  />
                </div>
                {errors.phone && <p className="text-red-600 text-xs mt-1">{errors.phone}</p>}
              </div>

              {/* City */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-slate-500" />
                  City / Location *
                </label>
                <input
                  type="text"
                  placeholder="e.g. Pune / Mumbai / Bengaluru"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  className={`w-full bg-slate-50 border rounded-xl px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-900/20 ${
                    errors.city ? 'border-red-500 bg-red-50/30' : 'border-slate-300 focus:border-blue-900'
                  }`}
                />
                {errors.city && <p className="text-red-600 text-xs mt-1">{errors.city}</p>}
              </div>
            </div>

            {/* Step 3: Profile & Preferred Language */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                  Current Occupation / Profile:
                </label>
                <select
                  value={occupation}
                  onChange={(e) => setOccupation(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 text-sm text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-900/20 focus:border-blue-900"
                >
                  <option value="Working Professional">💼 Working Professional</option>
                  <option value="Investor">📈 Investor</option>
                  <option value="Homemaker">🏠 Homemaker</option>
                  <option value="Student">🎓 Student</option>
                  <option value="Entrepreneur">🚀 Entrepreneur / Business Owner</option>
                  <option value="Retired Professional">🧓 Retired Professional</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                  Preferred Session Language:
                </label>
                <select
                  value={preferredLanguage}
                  onChange={(e) => setPreferredLanguage(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 text-sm text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-900/20 focus:border-blue-900"
                >
                  <option value="English">English</option>
                  <option value="Hindi">Hindi (हिंदी)</option>
                  <option value="Marathi">Marathi (मराठी)</option>
                  <option value="Tamil">Tamil (தமிழ்)</option>
                  <option value="Telugu">Telugu (తెలుగు)</option>
                  <option value="Kannada">Kannada (ಕನ್ನಡ)</option>
                </select>
              </div>
            </div>

            {/* Free Starter Kit Reminder */}
            <div className="bg-emerald-50 rounded-xl p-3.5 border border-emerald-200 flex items-center gap-3 text-xs text-emerald-900 font-medium">
              <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>
                Bonus included: <strong>Market Orientation Roadmap PDF</strong> + <strong>Risk Checklist</strong> will be sent to your WhatsApp immediately upon registration.
              </span>
            </div>

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                disabled={isSubmitting}
                id="final-reserve-now-btn"
                className="w-full inline-flex items-center justify-center gap-3 bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-lg sm:text-xl py-4 sm:py-5 px-8 rounded-xl shadow-xl shadow-amber-400/25 hover:shadow-2xl transition-all duration-200 transform hover:-translate-y-0.5 active:scale-98 disabled:opacity-60 cursor-pointer"
              >
                {isSubmitting ? (
                  <span>Reserving Your Seat...</span>
                ) : (
                  <>
                    <span>RESERVE MY FREE SEAT NOW</span>
                    <ArrowRight className="w-5 h-5 text-slate-900" />
                  </>
                )}
              </button>

              <div className="mt-3 flex flex-wrap items-center justify-center gap-4 text-xs text-slate-500 font-medium">
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" /> Purely Educational
                </span>
                <span>•</span>
                <span>No Credit Card Required</span>
                <span>•</span>
                <span>Instant Zoom Access</span>
              </div>
            </div>

          </form>
        </div>

      </div>
    </section>
  );
};
