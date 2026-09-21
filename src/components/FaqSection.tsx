import React, { useState } from 'react';
import { ChevronDown, HelpCircle, ArrowRight, Search } from 'lucide-react';
import { FAQS } from '../data/landingData';

interface FaqSectionProps {
  onOpenModal: () => void;
}

export const FaqSection: React.FC<FaqSectionProps> = ({ onOpenModal }) => {
  const [openIds, setOpenIds] = useState<string[]>(['faq-1', 'faq-2']);
  const [searchQuery, setSearchQuery] = useState('');

  const toggleFaq = (id: string) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const filteredFaqs = FAQS.filter(
    (item) =>
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section id="faq-section" className="py-16 md:py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-10">
          <span className="inline-flex items-center gap-1.5 text-xs uppercase tracking-widest font-extrabold text-blue-900 bg-blue-100/60 border border-blue-200 px-3.5 py-1 rounded-full mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            Frequently Asked Questions
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight font-display mb-3">
            Everything You Need To Know
          </h2>
          <p className="text-base text-slate-600">
            Clear, honest answers to the most common questions from beginners.
          </p>
        </div>

        {/* Search Input for fast query lookup */}
        <div className="relative mb-8 max-w-md mx-auto">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search questions (e.g., cost, experience, duration)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-white border border-slate-300 rounded-xl pl-10 pr-4 py-2.5 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-900/20 focus:border-blue-900 transition-all shadow-2xs"
          />
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-3.5 mb-12">
          {filteredFaqs.map((faq) => {
            const isOpen = openIds.includes(faq.id);
            return (
              <div
                key={faq.id}
                className="bg-white rounded-xl border border-slate-200/90 shadow-2xs overflow-hidden transition-all"
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full px-5 py-4 text-left flex items-center justify-between gap-4 hover:bg-slate-50/80 transition-colors cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="font-bold text-slate-900 text-sm sm:text-base leading-snug">
                    {faq.question}
                  </span>
                  <div className={`w-7 h-7 rounded-full bg-slate-100 flex items-center justify-center shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180 bg-blue-50 text-blue-900' : 'text-slate-500'}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-sm sm:text-base text-slate-600 leading-relaxed border-t border-slate-100 bg-slate-50/40">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}

          {filteredFaqs.length === 0 && (
            <div className="p-8 text-center text-slate-500 bg-white rounded-xl border border-slate-200">
              No matching questions found. Try searching with another term.
            </div>
          )}
        </div>

        {/* FAQ Section CTA */}
        <div className="text-center">
          <button
            onClick={onOpenModal}
            id="faq-reserve-cta-btn"
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
