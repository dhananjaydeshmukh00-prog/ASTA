import { BatchInfo, Testimonial, FaqItem, TargetAudience } from '../types';

export const BATCHES: BatchInfo[] = [
  {
    id: 'batch-1',
    dayDate: 'Saturday, 26th September 2026',
    time: '10:00 AM – 1:00 PM IST',
    seatsLeft: 5,
    totalSeats: 30,
    isPopular: true,
  },
  {
    id: 'batch-2',
    dayDate: 'Sunday, 27th September 2026',
    time: '5:00 PM – 8:00 PM IST',
    seatsLeft: 8,
    totalSeats: 30,
  },
  {
    id: 'batch-3',
    dayDate: 'Wednesday, 30th September 2026',
    time: '7:00 PM – 10:00 PM IST',
    seatsLeft: 12,
    totalSeats: 30,
  },
];

export const TRUST_ITEMS = [
  {
    icon: '⭐',
    label: "India's Most Loved & Highly Rated Stock Market Institute",
  },
  {
    icon: '🎥',
    label: 'Live Sessions — Not Recordings',
  },
  {
    icon: '👥',
    label: 'Trained Students Across India & Overseas',
  },
  {
    icon: '🏢',
    label: '200+ Support Centres Nationwide',
  },
];

export const PROBLEM_POINTS = [
  {
    number: '01',
    title: 'Stay on the sidelines for years',
    description: 'Watching others talk about investing and trading while inflation constantly erodes your hard-earned savings.',
    badge: 'The Paralysis Trap',
  },
  {
    number: '02',
    title: 'Jump in blindly, following random tips',
    description: 'Following Telegram channels, friends, or social media gurus — and losing money you can’t afford to lose.',
    badge: 'The Tip-Trader Trap',
  },
  {
    number: '03',
    title: 'Read 10 different YouTube videos',
    description: 'Ending up more confused than before with contradictory indicators, overnight-rich promises, and zero system.',
    badge: 'The Overload Trap',
  },
];

export const SOLUTION_CLARITY_POINTS = [
  'A realistic roadmap to approaching the stock market — not shortcuts, not hacks',
  'How to think about risk and manage it, instead of ignoring it',
  'How to evolve through each stage of your investing & trading journey',
  'Understanding the forces that actually move the market',
  'The mindset and discipline serious traders and investors build',
  'A confidence boost — even if you’re starting from zero',
];

export const STACKED_BONUSES = [
  {
    title: 'Market Orientation Roadmap PDF',
    value: '₹999',
    description: 'A 24-page step-by-step visual blueprint illustrating the 4 phases of market maturity.',
  },
  {
    title: 'Beginner’s Risk Management Checklist',
    value: '₹799',
    description: 'The golden rules to protect your principal capital before taking your first trade.',
  },
  {
    title: 'Direct Live Trainer Q&A Access',
    value: '₹1,499',
    description: 'Ask your personal questions directly to Avadhut Sathe during the interactive session.',
  },
];

export const SESSION_DETAILS = [
  {
    label: 'Format',
    value: 'Eye-Opener + Market Orientation (2 live sessions)',
  },
  {
    label: 'Duration',
    value: '3 hours',
  },
  {
    label: 'Trainer',
    value: 'Avadhut Sathe',
  },
  {
    label: 'Mode',
    value: '100% Online (Interactive Zoom Webinar)',
  },
  {
    label: 'Investment',
    value: '₹590 FREE',
    subvalue: 'For the next 25 registrations only',
    highlight: true,
  },
];

export const AUDIENCE_LIST: TargetAudience[] = [
  {
    id: 'investors',
    icon: '📈',
    title: 'Investors',
    description: 'Want a structured approach instead of guesswork',
    tagline: 'Replace emotion with institutional market principles',
  },
  {
    id: 'professionals',
    icon: '💼',
    title: 'Working Professionals',
    description: 'Want to build a second skill alongside your career',
    tagline: 'Learn non-screen-glued swing & positional frameworks',
  },
  {
    id: 'homemakers',
    icon: '🏠',
    title: 'Homemakers',
    description: 'Want financial independence on your own terms',
    tagline: 'Build confidence and manage family wealth productively',
  },
  {
    id: 'students',
    icon: '🎓',
    title: 'Students',
    description: 'Want to start learning early, the right way',
    tagline: 'Gain financial literacy before entering the corporate world',
  },
  {
    id: 'entrepreneurs',
    icon: '🚀',
    title: 'Entrepreneurs',
    description: 'Want to understand markets to manage business cash better',
    tagline: 'Hedge inflation and diversify retained business earnings',
  },
  {
    id: 'retirees',
    icon: '🧓',
    title: 'Retired Professionals',
    description: 'Want to put your time and savings to structured use',
    tagline: 'Preserve retirement corpus with calculated, peaceful growth',
  },
];

export const ASTA_DIFFERENTIATORS = [
  {
    number: '01',
    title: 'Live, interactive sessions — not pre-recorded content',
    description: 'Ask questions, get answered in real time. We believe genuine learning happens in live market discussions, not canned static videos.',
  },
  {
    number: '02',
    title: 'Structured 4-level learning path',
    description: 'From foundational concepts to advanced strategy, at your pace. You will always know your exact stage and next milestone.',
  },
  {
    number: '03',
    title: '600+ leaders and monitors supporting students',
    description: 'Active community leaders across India and overseas dedicated to reviewing your charts and ensuring you never feel stuck alone.',
  },
  {
    number: '04',
    title: '200+ ASTA Satsang Centres (ASCs)',
    description: 'Physical and hybrid local support groups that meet regularly nationwide to keep your discipline and consistency sharp.',
  },
  {
    number: '05',
    title: 'Trainers across regions and languages',
    description: 'Learn comfortably in your preferred tongue: English, Hindi, Marathi (मराठी), Tamil (தமிழ்), Telugu (తెలుగు), and Kannada (ಕನ್ನಡ).',
  },
];

export const ASTA_STATS = [
  { label: 'Students Trained', value: '2,50,000+' },
  { label: 'Satsang Centres', value: '200+' },
  { label: 'Mentors & Monitors', value: '600+' },
  { label: 'Google & FB Rating', value: '4.8 / 5.0' },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      'The way concepts are simplified for a beginner is what stood out to me. Live sessions meant my doubts got cleared in real time, not left hanging.',
    name: 'Rajesh Kulkarni',
    city: 'Pune',
    profession: 'Working Professional',
    initials: 'RK',
    avatarBg: 'bg-blue-600',
    experience: 'Attended batch in Feb 2026',
  },
  {
    quote:
      'I always thought the stock market wasn’t for someone like me. ASTA changed that. The structured, step-by-step approach gave me real confidence.',
    name: 'Sunita Sharma',
    city: 'Mumbai',
    profession: 'Homemaker',
    initials: 'SS',
    avatarBg: 'bg-emerald-600',
    experience: 'Attended batch in March 2026',
  },
  {
    quote:
      'After years in a corporate job, starting something new felt intimidating. The support system — mentors, monitors, community — made all the difference.',
    name: 'Anand Varma',
    city: 'Bengaluru',
    profession: 'Retired Professional',
    initials: 'AV',
    avatarBg: 'bg-amber-600',
    experience: 'Attended batch in Jan 2026',
  },
];

export const FAQS: FaqItem[] = [
  {
    id: 'faq-1',
    question: 'What is this webinar about?',
    answer:
      'A live introduction to stock market trading and investing — covering market dynamics, foundational concepts, and how to approach the market with a structured mindset.',
  },
  {
    id: 'faq-2',
    question: 'Do I need any prior experience?',
    answer:
      'No. This session is designed for complete beginners, while still offering useful perspective for those with some experience.',
  },
  {
    id: 'faq-3',
    question: 'Is there a cost to attend?',
    answer:
      'This session is normally ₹590. It’s currently free for a limited time — registration required to secure your seat.',
  },
  {
    id: 'faq-4',
    question: 'How long is the session?',
    answer:
      '3 hours of live training, followed by a live Q&A where you can ask questions directly.',
  },
  {
    id: 'faq-5',
    question: 'Will I learn how to trade in this one session?',
    answer:
      'This session gives you a strategic overview and foundational understanding. It’s the starting point for deeper, structured learning through ASTA’s full training programs.',
  },
  {
    id: 'faq-6',
    question: 'Is there support after the session?',
    answer:
      'Yes — students who continue with ASTA get access to ongoing support, mentorship, and community resources.',
  },
  {
    id: 'faq-7',
    question: 'Can I ask questions live?',
    answer:
      'Yes, every session includes a live Q&A with the trainer.',
  },
  {
    id: 'faq-8',
    question: 'What if I can’t attend live?',
    answer:
      'You’ll still get the Market Orientation Roadmap PDF and checklist instantly on registration — but live attendance is recommended for the Q&A.',
  },
];

export const MANDATORY_COMPLIANCE =
  'Disclaimer: AVADHUT SATHE TRADING ACADEMY PRIVATE LIMITED is a purely educational institution providing market literacy, technical analysis training, and risk management workshops. We do not provide investment advice, stock recommendations, buy/sell calls, or financial advisory services. Trading in financial markets involves substantial risk; past performance or educational case studies are not indicative of future results.';
