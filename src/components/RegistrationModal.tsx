import React, { useState } from 'react';
import { X, Clock, ShieldCheck, ArrowRight, CheckCircle, User, Mail, Phone, MapPin } from 'lucide-react';
import { BATCHES } from '../data/landingData';
import { RegistrationData } from '../types';

interface RegistrationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onRegisterSuccess: (data: RegistrationData) => void;
  seatsLeft?: number;
}

export const RegistrationModal: React.FC<RegistrationModalProps> = ({
  isOpen,
  onClose,
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

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: { [key: string]: string } = {};

    if (!fullName.trim()) newErrors.fullName = 'Please enter your full name';
    if (!email.trim() || !email.includes('@')) newErrors.email = 'Please enter a valid email';
    if (!phone.trim() || phone.length < 10) newErrors.phone = 'Please enter your 10-digit WhatsApp number';
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
      onClose();
    }, 500);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-fade-in">
      <div className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden my-8">
        
        {/* Header */}
        <div className="bg-slate-900 text-white p-5 sm:p-6 relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-slate-400 hover:text-white p-1 rounded-lg bg-slate-800/80 cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-2 mb-2">
            <span className="text-[10px] font-bold uppercase tracking-wider bg-red-600 text-white px-2 py-0.5 rounded">
              🔴 Live Batch Allocation
            </span>
            <span className="text-xs text-amber-400 font-semibold flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              Only {seatsLeft} free seats left
            </span>
          </div>

          <h3 className="text-xl font-bold text-white font-display">
            Reserve Your Free Live Seat
          </h3>
          <p className="text-xs text-slate-300 mt-1">
            3-Hour Live ASTA Eye-Opener Session by Avadhut Sathe
          </p>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="p-5 sm:p-6 space-y-4 max-h-[80vh] overflow-y-auto">
          {/* Batch Choice */}
          <div>
            <label className="block text-xs font-bold uppercase text-slate-700 mb-1.5">
              Select Batch:
            </label>
            <div className="space-y-2">
              {BATCHES.map((b) => (
                <label
                  key={b.id}
                  className={`flex items-center justify-between p-3 rounded-xl border text-xs cursor-pointer transition-all ${
                    selectedBatch === b.id
                      ? 'border-blue-900 bg-blue-50 text-blue-950 font-bold'
                      : 'border-slate-200 hover:bg-slate-50 text-slate-700'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <input
                      type="radio"
                      name="modal-batch"
                      value={b.id}
                      checked={selectedBatch === b.id}
                      onChange={() => setSelectedBatch(b.id)}
                      className="text-blue-900 focus:ring-blue-900"
                    />
                    <div>
                      <span>{b.dayDate}</span>
                      <span className="block text-[11px] text-slate-500 font-normal">{b.time}</span>
                    </div>
                  </div>
                  <span className="text-[10px] font-bold text-red-600 bg-red-50 px-2 py-0.5 rounded border border-red-200">
                    {b.id === 'batch-1' ? `${seatsLeft} left` : `${b.seatsLeft} left`}
                  </span>
                </label>
              ))}
            </div>
          </div>

          {/* Full Name */}
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">
              Full Name *
            </label>
            <input
              type="text"
              placeholder="e.g. Priyesh Patel"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-sm text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-900/20"
            />
            {errors.fullName && <p className="text-red-600 text-xs mt-1">{errors.fullName}</p>}
          </div>

          {/* Email */}
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">
              Email Address (For Zoom Confirmation) *
            </label>
            <input
              type="email"
              placeholder="name@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-sm text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-900/20"
            />
            {errors.email && <p className="text-red-600 text-xs mt-1">{errors.email}</p>}
          </div>

          {/* WhatsApp Phone */}
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">
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
                className="w-full bg-slate-50 border border-slate-300 rounded-r-xl px-3.5 py-2.5 text-sm text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-900/20"
              />
            </div>
            {errors.phone && <p className="text-red-600 text-xs mt-1">{errors.phone}</p>}
          </div>

          {/* City & Occupation */}
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                City *
              </label>
              <input
                type="text"
                placeholder="Pune / Mumbai"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-sm text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-900/20"
              />
              {errors.city && <p className="text-red-600 text-xs mt-1">{errors.city}</p>}
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Occupation
              </label>
              <select
                value={occupation}
                onChange={(e) => setOccupation(e.target.value)}
                className="w-full bg-slate-50 border border-slate-300 rounded-xl px-2.5 py-2.5 text-xs text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-900/20"
              >
                <option value="Working Professional">Professional</option>
                <option value="Investor">Investor</option>
                <option value="Homemaker">Homemaker</option>
                <option value="Student">Student</option>
                <option value="Entrepreneur">Entrepreneur</option>
                <option value="Retired Professional">Retired</option>
              </select>
            </div>
          </div>

          {/* Preferred Language */}
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">
              Language Preference:
            </label>
            <select
              value={preferredLanguage}
              onChange={(e) => setPreferredLanguage(e.target.value)}
              className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3 py-2 text-xs text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-900/20"
            >
              <option value="English">English</option>
              <option value="Hindi">Hindi (हिंदी)</option>
              <option value="Marathi">Marathi (मराठी)</option>
              <option value="Tamil">Tamil (தமிழ்)</option>
              <option value="Telugu">Telugu (తెలుగు)</option>
              <option value="Kannada">Kannada (ಕನ್ನಡ)</option>
            </select>
          </div>

          <div className="pt-2">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full inline-flex items-center justify-center gap-2 bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-base py-3.5 rounded-xl shadow-lg transition-all cursor-pointer"
            >
              {isSubmitting ? 'Reserving...' : 'CONFIRM MY FREE SEAT →'}
            </button>
            <p className="text-[11px] text-center text-slate-500 mt-2">
              ⚠️ Regular ₹590 fee waived for next registrations
            </p>
          </div>
        </form>

      </div>
    </div>
  );
};
