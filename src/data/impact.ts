export interface SDGGoal {
  number: number;
  title: string;
  color: string;
  description: string;
  ourContribution: string;
}

export const sdgGoalsData: SDGGoal[] = [
  {
    number: 1,
    title: "No Poverty",
    color: "#E5243B",
    description: "End poverty in all its forms everywhere.",
    ourContribution: "Free educational kits, skill training for rural self-help groups, and agricultural water pit construction in adopted villages.",
  },
  {
    number: 3,
    title: "Good Health & Well-Being",
    color: "#4C9F38",
    description: "Ensure healthy lives and promote well-being for all at all ages.",
    ourContribution: "2,400+ voluntary blood units, free village cataract screenings, menstrual health awareness, and mental health workshops.",
  },
  {
    number: 4,
    title: "Quality Education",
    color: "#C5192D",
    description: "Ensure inclusive and equitable quality education and promote lifelong learning.",
    ourContribution: "Project Udaan weekend remedial tutoring, school mini-libraries, digital literacy labs, and STEM mentorship for 350+ children.",
  },
  {
    number: 5,
    title: "Gender Equality",
    color: "#FF3A21",
    description: "Achieve gender equality and empower all women and girls.",
    ourContribution: "Project Shakti distributing 4,500+ biodegradable hygiene kits, self-defense masterclasses, and women entrepreneurship fairs.",
  },
  {
    number: 6,
    title: "Clean Water & Sanitation",
    color: "#26BDE2",
    description: "Ensure availability and sustainable management of water and sanitation for all.",
    ourContribution: "Groundwater testing, biosand filter setups in 3 adopted villages, and regular riverfront desilting drives.",
  },
  {
    number: 11,
    title: "Sustainable Cities & Communities",
    color: "#FD9D24",
    description: "Make cities and human settlements inclusive, safe, resilient and sustainable.",
    ourContribution: "14+ tons of single-use plastic diverted, community pocket gardens created on dumping grounds, and street solar lamp installations.",
  },
  {
    number: 13,
    title: "Climate Action",
    color: "#3F7E44",
    description: "Take urgent action to combat climate change and its impacts.",
    ourContribution: "6,200+ native saplings planted through Miyawaki urban forest technique, carbon sink mapping, and seed-ball dispersals.",
  },
  {
    number: 17,
    title: "Partnerships for the Goals",
    color: "#19486A",
    description: "Strengthen the means of implementation and revitalize the global partnership for sustainable development.",
    ourContribution: "Active collaborations with Indian Red Cross, Municipal Corporations, District Hospitals, and rural Panchayats.",
  },
];

export const annualReports = [
  {
    year: "2024–2025",
    title: "Annual Social Impact & Service Audit Report",
    pages: 48,
    fileSize: "4.2 MB",
    highlights: "550 Volunteers, 48 Drives, 7-Day Special Camp, 18,000 Service Hours Logged",
  },
  {
    year: "2023–2024",
    title: "NSS Unit Annual Activities & Financial Audit",
    pages: 42,
    fileSize: "3.8 MB",
    highlights: "Best NSS Unit Trophy, Miyawaki Forest Launch, 520 Blood Units Collected",
  },
  {
    year: "2022–2023",
    title: "Community Outreach & Village Immersion Ledger",
    pages: 36,
    fileSize: "3.1 MB",
    highlights: "Project Udaan Foundation, 1,200 Saplings, Village Sultanpur Adoption",
  },
];
