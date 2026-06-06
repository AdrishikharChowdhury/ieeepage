export const milestones = [
  {
    title: "IEEE Student Branch Foundation",
    date: "August 4, 2022",
    description:
      "The journey began with the official establishment of the main IEEE Student Branch on August 4, 2022. This foundational milestone laid the groundwork for future technical societies and professional growth on the campus.",
    side: "left" as const,
  },
  {
    title: "Growth in Computational Intelligence",
    date: "May 23, 2024",
    description:
      "Expanding its academic and research reach, the institution established the IEEE Student Chapter (SC) for the Computational Intelligence Society (CIS) on May 23, 2024. This addition focused on fostering advanced skills and knowledge in AI and computing fields.",
    side: "right" as const,
  },
  {
    title: "Dual Expansion: Industry Focus and Inclusivity",
    date: "April 5, 2025",
    description:
      "A major dual milestone occurred on April 5, 2025, when two distinct groups were formed simultaneously. The first was the IEEE Student Chapter for the Industrial Electronics Society (IES), aimed at specializing in hardware and electronic applications. On the exact same day, the IEEE Student Affinity Group for Women in Engineering (WIE) was established to promote diversity and empower female student leaders in technology.",
    side: "left" as const,
  },
];

export const stats = [
  { label: "Members", value: "200+", variant: "primary" as const },
  { label: "Events", value: "50+", variant: "secondary" as const },
  { label: "Workshops", value: "15+", variant: "primary" as const },
  { label: "Chapters", value: "2", variant: "secondary" as const },
  { label: "Affinity Groups", value: "1", variant: "primary" as const },
];

export const navLinks = [
  { label: "Home", route: "/", id: "home" },
  { label: "Our Story", route: "/story", id: "story" },
  { label: "Events", route: "/events", id: "events" },
  { label: "The Board", route: "/board", id: "board" },
  { label: "Highlights", route: "/highlights", id: "highlights" },
];

export interface PartnerLogo {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export const partnerLogos: PartnerLogo[] = [
  { src: "/logo.png", alt: "IEEE", width: 80, height: 40 },
  { src: "/aicte-webp.webp", alt: "AICTE", width: 60, height: 40 },
  { src: "/makaut-webp.webp", alt: "MAKAUT", width: 60, height: 40 },
  { src: "/NBA-webp.webp", alt: "NBA", width: 60, height: 40 },
];

export interface BlogPost {
  slug?: string;
  title: string;
  date: string;
  description?: string;
  author?: string;
  email?: string;
  tag: "product" | "standard" | "research" | "alert" | "award";
  tagLabel: string;
}

const blogAuthors = [
  { author: "Adrishikhar Chowdhury", email: "ec24.adrishikhar.chowdhury@stcet.ac.in" },
  { author: "Tanisha Ghosh", email: "ec24.tanisha.ghosh@stcet.ac.in" },
  { author: "Sounak Mal", email: "ec24.sounak.mal@stcet.ac.in" },
  { author: "Angana Mukhapadhyay", email: "ec24.angana.mukhapadhyay@stcet.ac.in" },
  { author: "Ruprekha Hait", email: "ec24.ruprekha.hait@stcet.ac.in" },
  { author: "Surajit Singh", email: "ec24.surajit.singh@stcet.ac.in" },
  { author: "Megha Paul", email: "ec24.megha.paul@stcet.ac.in" },
  { author: "Samiparna Bhowmick", email: "ec24.samiparna.bhowmick@stcet.ac.in" },
];

const slugify = (title: string) =>
  title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

export const blogs: BlogPost[] = [
  {
    slug: slugify("Inauguration of IEEE WIE AG"),
    title: "Inauguration of IEEE WIE AG",
    date: "Apr 5, 2025",
    description: "We finally did it — the Women in Engineering Affinity Group is officially here at STCET! The inauguration was nothing short of inspiring, with some incredible talks from folks who've been there and done that. Faculty, students, and industry voices all came together to remind us why diversity in tech matters now more than ever. Honestly, it felt like the start of something really special.",
    ...blogAuthors[0],
    tag: "product",
    tagLabel: "Announcement",
  },
  {
    slug: slugify("CIS Chapter: First Technical Workshop"),
    title: "CIS Chapter: First Technical Workshop",
    date: "May 23, 2024",
    description: "Our CIS chapter kicked things off with a bang — a full-day workshop on machine learning that had everyone glued to their screens. No fluff, just code. Students got their hands dirty with Python, building regression models, tinkering with classifiers, and even dipping their toes into neural networks. By the end of it, people were already asking, 'When's the next one?'",
    ...blogAuthors[1],
    tag: "research",
    tagLabel: "Research",
  },
  {
    slug: slugify("IES Chapter: Industry Connect Program"),
    title: "IES Chapter: Industry Connect Program",
    date: "Apr 5, 2025",
    description: "If there's one thing everyone craves, it's real-world exposure. That's exactly what our IES chapter delivered with the Industry Connect Program. Engineers and leaders from top tech companies walked us through what the industry actually looks like right now — the trends, the struggles, and the opportunities. It was one of those sessions where you leave with a notebook full of ideas and a head full of possibilities.",
    ...blogAuthors[2],
    tag: "standard",
    tagLabel: "Standard",
  },
  {
    slug: slugify("IEEE Day Celebrations 2025"),
    title: "IEEE Day Celebrations 2025",
    date: "Oct 5, 2025",
    description: "IEEE Day at STCET was an absolute blast. We had quizzes that actually made you think, project displays that showed off some seriously cool work, and tons of networking over chai and conversation. But the best part? Seeing everyone from first-years to final-years come together to celebrate what it means to be part of this global community. That's the IEEE spirit right there.",
    ...blogAuthors[3],
    tag: "award",
    tagLabel: "Award",
  },
  {
    slug: slugify("Student Innovation Bootcamp 2025"),
    title: "Student Innovation Bootcamp 2025",
    date: "Nov 20, 2025",
    description: "Five days. Real problems. Working prototypes. That was the vibe at this year's Innovation Bootcamp. Teams picked real-world challenges, brainstormed like crazy, built actual prototypes, and then pitched their ideas to a panel of judges who didn't go easy on them. The energy in the room was electric — you could feel ideas turning into something tangible right in front of you.",
    ...blogAuthors[4],
    tag: "product",
    tagLabel: "Workshop",
  },
  {
    slug: slugify("Women in Engineering Leadership Summit"),
    title: "Women in Engineering Leadership Summit",
    date: "Mar 8, 2025",
    description: "This one hit different. The WIE Leadership Summit brought together some of the most brilliant women in tech, and the conversations were raw, real, and ridiculously motivating. Keynotes that gave you chills, panels that sparked debates, and mentorship circles where seniors actually sat down with juniors and said, 'Here's what I wish someone had told me.' It wasn't just an event — it was a movement.",
    ...blogAuthors[5],
    tag: "alert",
    tagLabel: "Summit",
  },
  {
    slug: slugify("Paper Presentation: Emerging Tech Trends"),
    title: "Paper Presentation: Emerging Tech Trends",
    date: "Jan 15, 2025",
    description: "Our students brought their A-game to this paper presentation session. Topics ranged from blockchain rethinking supply chains to edge computing making data faster than ever, and even renewable energy systems that could actually change the world. It was amazing to see undergrads presenting research that felt like it belonged at a national conference. The Q&A sessions got heated — in the best way possible.",
    ...blogAuthors[6],
    tag: "research",
    tagLabel: "Research",
  },
  {
    slug: slugify("Hands-on Workshop on IoT & Embedded Systems"),
    title: "Hands-on Workshop on IoT & Embedded Systems",
    date: "Dec 10, 2024",
    description: "Arduino boards, Raspberry Pis, and a room full of excited students — what could possibly go wrong? Turns out, nothing. This workshop was pure hands-on fun. We built smart home systems that could turn lights on with a clap, environmental monitors that tracked air quality in real time, and a bunch of other IoT gadgets that made everyone feel like a mad scientist. Spoiler: a few LEDs may have been sacrificed in the process.",
    ...blogAuthors[7],
    tag: "standard",
    tagLabel: "Workshop",
  },
  {
    slug: slugify("IEEE STCET SB Annual Report 2024"),
    title: "IEEE STCET SB Annual Report 2024",
    date: "Feb 28, 2025",
    description: "What a year it's been. Our annual report for 2024 is out, and honestly, flipping through it makes you feel proud. 50+ events, 200+ active members, new chapters, new collaborations — we've grown in ways we didn't quite expect. This report isn't just numbers and charts; it's a story of how a bunch of passionate students turned ideas into impact. And trust us, 2025 is going to be even bigger.",
    ...blogAuthors[0],
    tag: "product",
    tagLabel: "Report",
  },
  {
    slug: slugify("Guest Lecture on Quantum Computing"),
    title: "Guest Lecture on Quantum Computing",
    date: "Sep 12, 2024",
    description: "Quantum computing sounds like sci-fi, but this guest lecture made it feel weirdly... real? Our speaker broke down qubits, superposition, and entanglement in a way that actually made sense (yes, really). We explored how quantum tech is starting to creep into cryptography, drug discovery, and optimization problems. By the end, half the room was seriously considering a career switch to quantum. That's how good it was.",
    ...blogAuthors[1],
    tag: "research",
    tagLabel: "Lecture",
  },
];

export interface Event {
  slug: string;
  title: string;
  date: string;
  time: string;
  description: string;
  agenda: string[];
  details: string;
  organiser: string;
  tags: string[];
  picture: string;
  registrationLink: string;
  tag: "product" | "standard" | "research" | "alert" | "award";
  tagLabel: string;
}

export const events: Event[] = [
  {
    slug: "ai-in-healthcare-tech-talk",
    title: "Tech Talk: AI in Healthcare",
    date: "Mar 15, 2025",
    time: "2:00 PM – 4:30 PM",
    description:
      "AI is reshaping healthcare as we know it, and this talk brought that reality straight to our campus. From diagnosing diseases with computer vision to predicting patient outcomes using ML models, the session covered how algorithms are saving lives behind the scenes. The speaker walked us through real-world case studies — including an AI system that detects diabetic retinopathy better than human experts. It was the kind of talk that makes you want to pivot your entire career into health-tech.",
    agenda: [
      "Welcome & Introduction",
      "Keynote: AI in Modern Healthcare",
      "Case Study: Medical Imaging with Deep Learning",
      "Live Demo: Disease Prediction Model",
      "Q&A Session",
      "Networking & Refreshments",
    ],
    details:
      "Open to all IEEE members and non-members. Basic knowledge of ML is helpful but not required. Certificates will be provided to all attendees.",
    organiser: "IEEE CIS Chapter, STCET",
    tags: ["AI", "Healthcare", "Machine Learning", "Deep Learning"],
    picture: "/events/highlights1.jpeg",
    registrationLink: "https://forms.google.com/ai-healthcare-stcet",
    tag: "research",
    tagLabel: "Workshop",
  },
  {
    slug: "ieee-hackathon-2025",
    title: "IEEE Hackathon 2025",
    date: "Feb 10, 2025",
    time: "9:00 AM – 9:00 PM",
    description:
      "24 hours. Zero sleep. Maximum caffeine. That was the IEEE Hackathon 2025, and it was absolutely wild. Teams from across the college camped out in the labs, building everything from AI-powered chatbots to IoT-based disaster alert systems. The judges had a genuinely tough time picking winners because the quality of projects was insane. By the end of it, nobody wanted to go home — even after being awake for a full day. The winning team walked away with cash prizes, internship opportunities, and eternal bragging rights.",
    agenda: [
      "Registration & Team Formation",
      "Opening Ceremony & Problem Statement Reveal",
      "Hacking Begins!",
      "Mid-way Check-in & Mentoring",
      "Final Submissions",
      "Project Presentations & Demos",
      "Results & Prize Distribution",
    ],
    details:
      "Teams of 3-4 members. Bring your own laptops. Food, snacks, and energy drinks will be provided throughout the event.",
    organiser: "IEEE STCET Student Branch",
    tags: ["Hackathon", "Coding", "Innovation", "Competition"],
    picture: "/events/highlights2.jpeg",
    registrationLink: "https://forms.google.com/ieee-hackathon-2025",
    tag: "product",
    tagLabel: "Competition",
  },
  {
    slug: "industry-visit-google-office",
    title: "Industry Visit: Google Office",
    date: "Jan 22, 2025",
    time: "10:00 AM – 4:00 PM",
    description:
      "Walking into the Google office felt like stepping into the future. From the open workstations to the nap pods and the endless snack bars — it was everything you'd imagine and more. But beyond the cool perks, the engineering team gave us a raw look at how Google builds products used by billions. We sat through sessions on site reliability engineering, saw how they run massive-scale A/B tests, and even got a peek at some internal tools. A bunch of students walked out with interview callbacks, so yeah, it was a good day.",
    agenda: [
      "Arrival & Office Tour",
      "Welcome Talk by Google Engineers",
      "Session: How Google Builds at Scale",
      "Workshop: Cloud & Machine Learning APIs",
      "Networking Lunch",
      "Mock Interview Session",
      "Goodies & Departure",
    ],
    details:
      "Limited to 30 students. Selected based on resume shortlisting. Transport will be arranged from college.",
    organiser: "IEEE IES Chapter, STCET",
    tags: ["Industry Visit", "Google", "Cloud", "Career"],
    picture: "/events/highlights3.jpeg",
    registrationLink: "https://forms.google.com/google-visit-stcet",
    tag: "standard",
    tagLabel: "Industrial",
  },
  {
    slug: "annual-ieee-banquet",
    title: "Annual IEEE Banquet",
    date: "Dec 20, 2024",
    time: "6:00 PM – 10:00 PM",
    description:
      "The Annual IEEE Banquet was the perfect way to wrap up an incredible year. We had awards, performances, photo booths, and a dinner that honestly deserved its own standing ovation. The highlight of the evening was the awards ceremony — recognizing the people who put in the work behind all those events, workshops, and hackathons. There were speeches that made people laugh, a few that made people tear up, and a dance floor that stayed packed till the very end. Here's to another year of making IEEE STCET proud.",
    agenda: [
      "Welcome Drink & Networking",
      "Year-in-Review Presentation",
      "Award Ceremony",
      "Cultural Performances",
      "Keynote Address",
      "Dinner & Dance",
      "Photo Booth & Closing",
    ],
    details:
      "Formal attire. IEEE members get complimentary entry. Non-members can purchase tickets at the door.",
    organiser: "IEEE STCET Student Branch",
    tags: ["Banquet", "Celebration", "Awards", "Networking"],
    picture: "/events/highlights4.jpeg",
    registrationLink: "",
    tag: "award",
    tagLabel: "Celebration",
  },
  {
    slug: "robotics-workshop-series",
    title: "Robotics Workshop Series: Build Your First Bot",
    date: "Nov 8, 2024",
    time: "11:00 AM – 5:00 PM",
    description:
      "Ever wanted to build a robot that actually does something? This workshop series made that dream real. Over two intensive days, participants went from zero to building fully functional line-following and obstacle-avoiding bots. We started with motor drivers and sensor calibration, then moved to PID controllers and autonomous navigation. By the end, robots were zipping across the track, dodging obstacles, and making their creators look like absolute geniuses. The best part? Everyone got to take their bot home.",
    agenda: [
      "Day 1: Electronics & Motor Drivers",
      "Day 1: Sensor Calibration & Chassis Assembly",
      "Day 2: Programming & PID Control",
      "Day 2: Obstacle Avoidance Logic",
      "Day 2: Competition: Line Following Race",
      "Prize Distribution & Takeaways",
    ],
    details:
      "All components provided. No prior robotics experience needed. Bring a laptop with Arduino IDE installed.",
    organiser: "IEEE RAS Chapter, STCET",
    tags: ["Robotics", "Arduino", "IoT", "Hands-on"],
    picture: "/events/highlights5.jpeg",
    registrationLink: "https://forms.google.com/robotics-workshop-stcet",
    tag: "research",
    tagLabel: "Workshop",
  },
  {
    slug: "cybersecurity-awareness-campaign",
    title: "Cybersecurity Awareness Campaign",
    date: "Oct 15, 2024",
    time: "10:00 AM – 3:00 PM",
    description:
      "Phishing, password hygiene, social engineering — this campaign tackled the stuff that actually matters in the real world. We set up stalls, ran interactive demos, and even staged a live 'hack' to show how easily weak passwords can be cracked. Students learned how to spot malicious emails, set up 2FA, and secure their digital footprint. The highlight was a CTF (Capture The Flag) challenge that had teams racing to find vulnerabilities in a mock web app. It was eye-opening, educational, and honestly kind of addictive.",
    agenda: [
      "Inaugural Talk: Why Cybersecurity Matters",
      "Interactive Stalls & Demos",
      "Live Hacking Demonstration",
      "CTF Challenge: Capture The Flag",
      "Workshop: Secure Coding Basics",
      "Prize Distribution",
    ],
    details:
      "Open to all. No technical background required for the awareness sessions. CTF requires basic web knowledge.",
    organiser: "IEEE Computer Society Chapter, STCET",
    tags: ["Cybersecurity", "CTF", "Awareness", "Hacking"],
    picture: "/events/highlights6.jpeg",
    registrationLink: "https://forms.google.com/cyber-awareness-stcet",
    tag: "alert",
    tagLabel: "Campaign",
  },
  {
    slug: "entrepreneurship-summit-startup-pitch",
    title: "Entrepreneurship Summit & Startup Pitch",
    date: "Sep 20, 2024",
    time: "9:30 AM – 5:00 PM",
    description:
      "If you've ever dreamed of starting your own company, this summit was the place to be. Entrepreneurs who've actually built successful startups shared their journeys — the failures, the pivots, and the breakthrough moments. The afternoon was all about action: teams pitched their startup ideas to a panel of investors and industry experts. Some pitches were brilliant, some were rough around the edges, but every single one came from a place of genuine passion. One team even got a mentorship offer on the spot. That's the kind of energy this event had.",
    agenda: [
      "Keynote: 'From Dorm Room to Boardroom'",
      "Panel Discussion: Building in a Small Town",
      "Workshop: Business Model Canvas",
      "Networking Lunch",
      "Startup Pitch Competition",
      "Investor Feedback Session",
      "Winners Announcement & Networking",
    ],
    details:
      "Pitch competition is for teams of 2-4. Bring your pitch deck on a USB drive. All attendees get access to a network of mentors.",
    organiser: "IEEE WIE AG & IES Chapter, STCET",
    tags: ["Entrepreneurship", "Startup", "Pitch", "Networking"],
    picture: "/events/highlights7.jpeg",
    registrationLink: "https://forms.google.com/startup-summit-stcet",
    tag: "product",
    tagLabel: "Summit",
  },
];

export interface FooterLinkGroup {
  title: string;
  links: { label: string; href: string }[];
}

export const footerLinkGroups: FooterLinkGroup[] = [
  {
    title: "About",
    links: [
      { label: "Our Story", href: "/story" },
      { label: "The Board", href: "/board" },
      { label: "Events", href: "/events" },
    ],
  },
  {
    title: "Community",
    links: [
      { label: "Highlights", href: "/highlights" },
      { label: "Events", href: "/events" },
      { label: "Blog", href: "/blog" },
    ],
  },
  {
    title: "IEEE",
    links: [
      { label: "IEEE.org", href: "https://www.ieee.org" },
      { label: "IEEE Xplore", href: "https://ieeexplore.ieee.org" },
      { label: "IEEE Collabratec", href: "https://collabratec.ieee.org" },
    ],
  },
];

export const storyCardColors = ["bg-ieee-blue", "bg-ieee-navy", "bg-ieee-teal"];

export const milestoneLogos = [
  { label: "IEEE", color: "bg-ieee-blue" },
  { label: "CIS", color: "bg-ieee-teal" },
  { label: "IES+WIE", color: "bg-ieee-green" },
];

export const milestoneTagColors = [
  "bg-ieee-blue text-white",
  "bg-ieee-teal text-white",
  "bg-ieee-green text-white",
];

const heights = [280, 360, 240, 320, 260, 380, 300, 340, 220, 400, 310, 270, 350, 230, 390, 290, 330, 250];

export const eventImages = Array.from({ length: 18 }, (_, i) => ({
  src: `/events/highlights${i + 1}.jpeg`,
  alt: `Event highlight ${i + 1}`,
  id: `highlight-${i + 1}`,
  url: '',
  height: heights[i],
}));

export const collegeLogos = [
  { src: "/aicte-webp.webp", alt: "AICTE" },
  { src: "/makaut-webp.webp", alt: "MAKAUT" },
  { src: "/NBA-webp.webp", alt: "NBA" },
];

export interface Chair {
  name: string;
  role: string;
  email: string;
  avatar: string;
  src: string;
  alt: string;
  color: string;
}

export const chairs: Chair[] = [
  {
    name: "Arjun Mitra",
    role: "Chair",
    email: "arjunmitra06082004@gmail.com",
    avatar: "/ieeechair.jpg",
    src: "/ies-ieee.png",
    alt: "Industry Electronics Society",
    color: "bg-ieee-blue",
  },
  {
    name: "Kaushiki Sarkar",
    role: "Chair",
    email: "kaushikisarkar2005@gmail.com",
    avatar: "/wiechair.jpg",
    src: "/wie-logo.png",
    alt: "Women in Engineering",
    color: "bg-ieee-navy",
  },
  {
    name: "Priyangshu Pal",
    role: "Chair",
    email: "priyangshuieee@gmail.com",
    avatar: "/cischair.jpg",
    src: "/cis-logo.png",
    alt: "Computational Intelligence Society",
    color: "bg-ieee-teal",
  },
];

export const branchAdvisors: Chair[] = [
  {
    name: "Dr. Prasun Chowdhury",
    role: "Branch Advisor",
    email: "prasun.chowdhury@stcet.ac.in",
    avatar: "/iesba.webp",
    src: "/ies-ieee.png",
    alt: "Industry Electronics Society",
    color: "bg-ieee-green",
  },
  {
    name: "Dr. Biswajita Dutta",
    role: "Branch Advisor",
    email: "biswajita.datta@stcet.ac.in",
    avatar: "/wieba.webp",
    src: "/wie-logo.png",
    alt: "Women in Engineering",
    color: "bg-ieee-red",
  },
  {
    name: "Dr. Amit Paul",
    role: "Branch Advisor & SB Councellor",
    email: "amit.paul@stcet.ac.in",
    avatar: "/cisba.jpg",
    src: "/cis-logo.png",
    alt: "Computational Intelligence Society",
    color: "bg-ieee-purple",
  },
];
