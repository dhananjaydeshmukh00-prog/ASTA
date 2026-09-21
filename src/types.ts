export interface RegistrationData {
  fullName: string;
  email: string;
  phone: string;
  city: string;
  occupation: string;
  preferredLanguage: string;
  batchId: string;
}

export interface BatchInfo {
  id: string;
  dayDate: string;
  time: string;
  seatsLeft: number;
  totalSeats: number;
  isPopular?: boolean;
}

export interface Testimonial {
  quote: string;
  name: string;
  city: string;
  profession: string;
  initials: string;
  avatarBg: string;
  experience?: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

export interface TargetAudience {
  id: string;
  icon: string;
  title: string;
  description: string;
  tagline: string;
}
