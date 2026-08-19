import { EventItem } from "@/types";

export const eventsData: EventItem[] = [
  {
    id: "annual-blood-donation-camp-2026",
    slug: "annual-blood-donation-camp-2026",
    title: "Mega Blood Donation & Thalassemia Screening Camp 2026",
    category: "Blood Donation",
    tagline: "One unit of blood can save up to 3 lives. Step up for humanity.",
    description:
      "Join our flagship biannual blood donation drive in collaboration with the Indian Red Cross Society and AIIMS Blood Bank. Complete health checkup and certificate provided.",
    fullDetails:
      "The NSS Unit of Apex Institute is organizing its Mega Blood Donation Camp 2026. Every healthy individual between 18 and 65 years weighing 45kg or more is eligible to donate. Specialist physicians and nurses from the Indian Red Cross Society will oversee the clinical process. Every donor receives refreshments, donor card, thalassemia screening report, and an official university NSS merit recognition certificate.",
    bannerImage:
      "https://images.unsplash.com/photo-1615461066841-6116e61058f4?auto=format&fit=crop&w=1400&q=80",
    date: "2026-09-12",
    time: "09:00 AM – 05:00 PM IST",
    location: "Main Indoor Sports Complex & Student Activity Centre",
    venueType: "On-Campus",
    status: "Upcoming",
    isFlagship: true,
    registrationOpen: true,
    registrationDeadline: "2026-09-11",
    volunteersRequired: 40,
    volunteersRegistered: 28,
    objectives: [
      "Mobilize 500+ voluntary whole blood donations for critical pediatric and emergency wards.",
      "Conduct complimentary Hemoglobin and Thalassemia carrier screening for all registrants.",
      "Promote youth awareness on regular non-remunerated voluntary blood donation.",
    ],
    schedule: [
      { time: "09:00 AM", activity: "Inauguration by Dean of Student Welfare & Red Cross Officials", speakerOrLead: "Dr. Rajeshwar Sharma & Chief Medical Officer" },
      { time: "09:30 AM", activity: "Medical Screening & Donor Vitals Checkup Starts" },
      { time: "11:00 AM", activity: "Thalassemia Awareness & Myth Busting Interactive Session", speakerOrLead: "Red Cross Hematologist" },
      { time: "01:00 PM", activity: "Donor Refreshment & Blood Units Cold-Chain Dispatch" },
      { time: "04:30 PM", activity: "Felicitation of 5-Time Donors & Certificate Distribution" },
      { time: "05:00 PM", activity: "Camp Concludes & Final Count Announcement" },
    ],
    coordinator: {
      name: "Devendra Singh & Simran Kaur",
      phone: "+91 98765 43210",
      email: "blooddonation@apexinstitute.edu.in",
    },
    highlights: [
      "State-of-the-art sterile collection beds by AIIMS",
      "Immediate digital donor card & certificate issuance",
      "Complimentary high-nutrition fruit & beverage pack",
    ],
    impactStats: [
      { metric: "500+", label: "Target Units" },
      { metric: "1,500+", label: "Potential Lives Saved" },
      { metric: "100%", label: "Sterile & Safe" },
    ],
  },
  {
    id: "special-rural-camp-sultanpur-2026",
    slug: "special-rural-camp-sultanpur-2026",
    title: "7-Day Special Rural Immersion Camp — Village Sultanpur",
    category: "Rural Development",
    tagline: "Living, learning and transforming lives through 7 days of grassroot service.",
    description:
      "A transformative residential camp where 80 student volunteers stay in our adopted village, constructing rainwater pits, conducting health surveys, and hosting children's science melas.",
    fullDetails:
      "The Annual 7-Day Special NSS Residential Camp is the pinnacle of the NSS calendar. Volunteers live in village community rooms, wake up at 5:30 AM for Prabhat Pheri and yoga, engage in physical Shramdaan (manual community labor) till noon, conduct door-to-door literacy & hygiene surveys in the afternoon, and host evening cultural street plays on social issues for the village elders.",
    bannerImage:
      "https://images.unsplash.com/photo-1544717302-de2939b7ef71?auto=format&fit=crop&w=1400&q=80",
    date: "2026-10-05",
    time: "7 Full Days (Residential)",
    location: "Village Sultanpur Panchayat Bhavan & Primary School",
    venueType: "Adopted Village",
    status: "Upcoming",
    isFlagship: true,
    registrationOpen: true,
    registrationDeadline: "2026-09-28",
    volunteersRequired: 80,
    volunteersRegistered: 65,
    objectives: [
      "Perform Shramdaan: desilt village irrigation canals and repair 2 km of unmetalled school access road.",
      "Conduct solar lighting feasibility and water sample fluoride testing for 200 households.",
      "Host 'Udaan Bal Mela' with science toys, drawing contests, and prize distribution for 250 village kids.",
      "Stage street plays (Nukkad Natak) against female foeticide, substance abuse, and digital fraud.",
    ],
    schedule: [
      { time: "Day 1 (Oct 5)", activity: "Arrival, Village Survey, Meeting with Gram Pradhan & Camp Setup" },
      { time: "Day 2-3", activity: "Morning Shramdaan Road Repair & Afternoon Door-to-Door Health Census" },
      { time: "Day 4", activity: "Free Veterinary & Multispeciality Human Health Camp with District Hospital" },
      { time: "Day 5", activity: "Udaan Science & Career Fest for Primary/Middle School Students" },
      { time: "Day 6", activity: "Women SHG Digital Literacy Workshop & Mega Cultural Evening" },
      { time: "Day 7 (Oct 11)", activity: "Review Meeting, Sapling Plantation, Valedictory Function & Return" },
    ],
    coordinator: {
      name: "Tushar Deshmukh & Priya Nair",
      phone: "+91 94123 99887",
      email: "specialcamp@apexinstitute.edu.in",
    },
    highlights: [
      "Official 120-hour NSS Special Camp Certificate",
      "Full boarding, lodging, and transport organized",
      "Direct interaction with district administrative officers",
    ],
    impactStats: [
      { metric: "7 Days", label: "Grassroot Immersion" },
      { metric: "80", label: "Selected Volunteers" },
      { metric: "2,000+", label: "Villagers Impacted" },
    ],
  },
  {
    id: "van-mahotsav-tree-plantation-2026",
    slug: "van-mahotsav-tree-plantation-2026",
    title: "Van Mahotsav 2026: 1,000 Native Trees Eco-Restoration Drive",
    category: "Environment",
    tagline: "Rooting for the future: Turning barren tracts into living biodiversity hubs.",
    description:
      "A massive campus and riverbank afforestation drive planting 1,000 hardy indigenous saplings (Neem, Peepal, Banyan, Jamun) with geo-tagging and foster care adoption.",
    fullDetails:
      "In observance of the national Van Mahotsav season, the NSS Unit invites all faculty, students, and local residents to plant trees. Each volunteer adopts a sapling, tags its GPS location in our digital green ledger, and commits to watering and monitoring it for the next 12 months. We will also distribute free indoor air-purifying plants (Tulsi, Snake Plant, Areca Palm) to participants.",
    bannerImage:
      "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=1400&q=80",
    date: "2026-08-29",
    time: "07:30 AM – 11:30 AM IST",
    location: "Eco-Park, Yamuna Riverfront Corridor & Campus Green Belt",
    venueType: "Public Space",
    status: "Upcoming",
    registrationOpen: true,
    registrationDeadline: "2026-08-28",
    volunteersRequired: 150,
    volunteersRegistered: 112,
    objectives: [
      "Plant 1,000 indigenous broadleaf saplings along the erosion-prone riverbank buffer zone.",
      "Distribute 2,500 seed-balls to nature trek enthusiasts.",
      "Install organic mulching and vermicompost beds around newly planted zones.",
    ],
    coordinator: {
      name: "Rhea Sen",
      phone: "+91 97112 33445",
      email: "environment@apexinstitute.edu.in",
    },
    impactStats: [
      { metric: "1,000+", label: "Saplings" },
      { metric: "92%", label: "Expected Survival" },
      { metric: "2.5k", label: "Seed Balls" },
    ],
  },
  {
    id: "national-youth-day-conclave-2026",
    slug: "national-youth-day-conclave-2026",
    title: "National Youth Day Conclave: Youth as Catalysts of Social Change",
    category: "Awareness Campaigns",
    tagline: "Celebrating Swami Vivekananda's Jayanti with policy debates, social startup pitches, and youth awards.",
    description:
      "A grand youth summit featuring keynote addresses by Padma awardee social activists, an inter-college street play competition, and youth changemaker awards.",
    fullDetails:
      "Commemorating National Youth Day, this conclave unites 600+ youth delegates from 25 universities. The day features keynote sessions on ethical leadership, grassroots innovation panel discussions, a fierce Nukkad Natak competition, and recognition of student social impact projects.",
    bannerImage:
      "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1400&q=80",
    date: "2026-01-12",
    time: "09:30 AM – 05:00 PM IST",
    location: "University Grand Auditorium",
    venueType: "On-Campus",
    status: "Completed",
    registrationOpen: false,
    objectives: [
      "Inspire youth towards nationwide social commitment and ethical civic participation.",
      "Award ₹1,00,000 in seed grants for top 3 college grassroots innovation projects.",
    ],
    coordinator: {
      name: "Aman Gupta",
      phone: "+91 99100 11223",
      email: "youthday@apexinstitute.edu.in",
    },
    highlights: [
      "Keynote by Magsaysay awardee community leader",
      "Over 22 college Nukkad Natak teams competed",
      "Live broadcast across 40 university NSS cells",
    ],
    impactStats: [
      { metric: "650+", label: "Attendees" },
      { metric: "25", label: "Colleges" },
      { metric: "₹1 Lakh", label: "Youth Grants Awarded" },
    ],
  },
  {
    id: "swachhata-hi-seva-plogathon-2025",
    slug: "swachhata-hi-seva-plogathon-2025",
    title: "Swachhata Plogathon & Mega Riverfront Cleanliness Drive",
    category: "Sustainability",
    tagline: "5 kilometers, 250 volunteers, 3.8 tons of plastic waste cleared.",
    description:
      "A high-octane 5 km plog-run where volunteers jogged while picking up single-use plastics and packaging waste across the historic district ghats.",
    fullDetails:
      "To mark Swachhata Pakhwada, NSS volunteers, faculty, and local civic authorities executed the largest city plog-run. Clad in gloves and biodegradable sacks, teams combed a 5 km stretch, cataloging waste types and handing them over to authorized e-waste and plastic recyclers.",
    bannerImage:
      "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&w=1400&q=80",
    date: "2025-10-02",
    time: "06:30 AM – 10:30 AM IST",
    location: "City Ghats & Monument Heritage Walk",
    venueType: "Public Space",
    status: "Completed",
    registrationOpen: false,
    objectives: [
      "Collect and divert non-biodegradable waste from river channels.",
      "Distribute 1,500 cloth bags to vegetable market vendors to replace plastic polythene.",
    ],
    coordinator: {
      name: "Simran Kaur",
      phone: "+91 98110 55443",
      email: "swachhata@apexinstitute.edu.in",
    },
    impactStats: [
      { metric: "3.8 Tons", label: "Plastic Diverted" },
      { metric: "5 KM", label: "Stretch Cleaned" },
      { metric: "250+", label: "Ploggers Participated" },
    ],
  },
  {
    id: "digital-literacy-camp-elderly-2025",
    slug: "digital-literacy-camp-elderly-2025",
    title: "Project Sanjh: Digital Safety & UPI Workshop for Senior Citizens",
    category: "Community Outreach",
    tagline: "Bridging the generational tech divide with patient 1-on-1 mentorship.",
    description:
      "Teaching senior citizens smartphone fundamentals, DigiLocker, online pension verification (Jeevan Pramaan), and cyber fraud prevention.",
    fullDetails:
      "Volunteers spent an interactive weekend at the Senior Citizen Community Centre. Each senior citizen was paired with a student volunteer who guided them through making secure UPI payments, video calling family, setting up emergency SOS medical dials, and spotting phishing phone scams.",
    bannerImage:
      "https://images.unsplash.com/photo-1516214104703-d870798883c5?auto=format&fit=crop&w=1400&q=80",
    date: "2025-11-18",
    time: "10:00 AM – 02:00 PM IST",
    location: "Senior Citizen Wellness Center, Sector 4",
    venueType: "Public Space",
    status: "Completed",
    registrationOpen: false,
    objectives: [
      "Train 120 senior citizens in smartphone essentials and cyber safety.",
      "Help 45 pensioners submit digital life certificates via biometric authentication.",
    ],
    coordinator: {
      name: "Aditya Mishra",
      phone: "+91 98711 00998",
      email: "sanjh@apexinstitute.edu.in",
    },
    impactStats: [
      { metric: "120+", label: "Seniors Trained" },
      { metric: "1-on-1", label: "Personal Guidance" },
      { metric: "100%", label: "Smiles & Gratitude" },
    ],
  },
];
