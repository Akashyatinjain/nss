export type InitiativeCategory =
  | "Education"
  | "Environment"
  | "Health"
  | "Blood Donation"
  | "Women Empowerment"
  | "Rural Development"
  | "Awareness Campaigns"
  | "Disaster Relief"
  | "Sustainability"
  | "Community Outreach";

export interface Initiative {
  id: string;
  slug: string;
  title: string;
  category: InitiativeCategory;
  tagline: string;
  shortDescription: string;
  fullDescription: string;
  bannerImage: string;
  thumbnailImage: string;
  impactMetric: string;
  impactNumber: string;
  impactLabel: string;
  startDate: string;
  status: "Active" | "Ongoing" | "Flagship" | "Completed";
  location: string;
  volunteersInvolved: number;
  beneficiariesCount: string;
  hoursDedicated: number;
  objectives: string[];
  keyOutcomes: string[];
  sdgGoals: number[];
  coordinator: {
    name: string;
    role: string;
    contact?: string;
  };
  galleryImages: string[];
}

export type EventStatus = "Upcoming" | "Completed" | "Ongoing";

export interface EventScheduleItem {
  time: string;
  activity: string;
  speakerOrLead?: string;
}

export interface EventItem {
  id: string;
  slug: string;
  title: string;
  category: InitiativeCategory;
  tagline: string;
  description: string;
  fullDetails?: string;
  bannerImage: string;
  date: string;
  time: string;
  location: string;
  venueType: "On-Campus" | "Adopted Village" | "Public Space" | "Partner Hospital";
  status: EventStatus;
  isFlagship?: boolean;
  registrationOpen: boolean;
  registrationDeadline?: string;
  volunteersRequired?: number;
  volunteersRegistered?: number;
  objectives: string[];
  schedule?: EventScheduleItem[];
  coordinator: {
    name: string;
    phone: string;
    email: string;
  };
  highlights?: string[];
  impactStats?: {
    metric: string;
    label: string;
  }[];
  galleryImages?: string[];
}

export type GalleryCategory =
  | "All"
  | "Special Camps"
  | "Blood Donation"
  | "Tree Plantation"
  | "Education Drives"
  | "Awareness Rallies"
  | "Cleanliness Drives"
  | "Community Visits";

export interface GalleryItem {
  id: string;
  title: string;
  category: GalleryCategory;
  imageUrl: string;
  date: string;
  location: string;
  caption: string;
  aspectRatio?: "square" | "landscape" | "portrait";
}

export type TeamRoleCategory =
  | "Programme Officer"
  | "Faculty Coordinator"
  | "Executive Committee"
  | "Domain Lead"
  | "Active Volunteer";

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  category: TeamRoleCategory;
  department: string;
  year?: string;
  image: string;
  bio: string;
  quote?: string;
  socials: {
    linkedin?: string;
    email?: string;
    instagram?: string;
    github?: string;
  };
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  association: "Student Volunteer" | "Village Pradhan" | "School Headmaster" | "Alumni" | "Faculty";
  quote: string;
  avatar: string;
  initiativeInvolved?: string;
}

export interface ImpactStory {
  id: string;
  title: string;
  personName: string;
  personRole: string;
  story: string;
  quote: string;
  image: string;
  impactMetric: string;
  location: string;
  year: string;
}

export interface Achievement {
  id: string;
  year: string;
  title: string;
  issuer: string;
  category: "National" | "State" | "University" | "Institutional";
  description: string;
  badge: string;
  iconName: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: "General" | "Volunteering" | "Certificates" | "Camps";
}
