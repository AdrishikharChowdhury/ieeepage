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
    description: "The Women in Engineering Affinity Group was officially inaugurated at STCET, marking a major milestone for diversity and inclusion. The event featured inspiring talks from industry leaders and faculty members, highlighting the importance of women in technology and engineering fields.",
    ...blogAuthors[0],
    tag: "product",
    tagLabel: "Announcement",
  },
  {
    slug: slugify("CIS Chapter: First Technical Workshop"),
    title: "CIS Chapter: First Technical Workshop",
    date: "May 23, 2024",
    description: "The Computational Intelligence Society chapter hosted its first technical workshop on machine learning fundamentals. Students gained hands-on experience with Python-based ML models, covering topics like regression, classification, and neural networks.",
    ...blogAuthors[1],
    tag: "research",
    tagLabel: "Research",
  },
  {
    slug: slugify("IES Chapter: Industry Connect Program"),
    title: "IES Chapter: Industry Connect Program",
    date: "Apr 5, 2025",
    description: "The Industrial Electronics Society chapter launched an industry connect program bridging the gap between academia and industry. Professionals from leading tech companies shared insights on current industry trends and career pathways.",
    ...blogAuthors[2],
    tag: "standard",
    tagLabel: "Standard",
  },
  {
    slug: slugify("IEEE Day Celebrations 2025"),
    title: "IEEE Day Celebrations 2025",
    date: "Oct 5, 2025",
    description: "IEEE Day 2025 was celebrated with great enthusiasm at STCET. The event included technical quizzes, project exhibitions, and networking sessions. Students showcased innovative projects and celebrated the global IEEE community.",
    ...blogAuthors[3],
    tag: "award",
    tagLabel: "Award",
  },
  {
    slug: slugify("Student Innovation Bootcamp 2025"),
    title: "Student Innovation Bootcamp 2025",
    date: "Nov 20, 2025",
    description: "A five-day innovation bootcamp was organized to foster entrepreneurial thinking among students. Participants worked on real-world problem statements, developed prototypes, and pitched their ideas to a panel of judges.",
    ...blogAuthors[4],
    tag: "product",
    tagLabel: "Workshop",
  },
  {
    slug: slugify("Women in Engineering Leadership Summit"),
    title: "Women in Engineering Leadership Summit",
    date: "Mar 8, 2025",
    description: "The WIE Leadership Summit brought together accomplished women professionals from across the tech industry. The summit featured keynote sessions, panel discussions, and mentorship circles aimed at empowering the next generation of women engineers.",
    ...blogAuthors[5],
    tag: "alert",
    tagLabel: "Summit",
  },
  {
    slug: slugify("Paper Presentation: Emerging Tech Trends"),
    title: "Paper Presentation: Emerging Tech Trends",
    date: "Jan 15, 2025",
    description: "Students presented research papers on emerging technologies including blockchain, edge computing, and renewable energy systems. The event provided a platform for undergraduate researchers to showcase their work and receive feedback from faculty experts.",
    ...blogAuthors[6],
    tag: "research",
    tagLabel: "Research",
  },
  {
    slug: slugify("Hands-on Workshop on IoT & Embedded Systems"),
    title: "Hands-on Workshop on IoT & Embedded Systems",
    date: "Dec 10, 2024",
    description: "An intensive hands-on workshop on IoT and embedded systems using Arduino and Raspberry Pi. Students built working IoT prototypes including smart home automation and environmental monitoring systems.",
    ...blogAuthors[7],
    tag: "standard",
    tagLabel: "Workshop",
  },
  {
    slug: slugify("IEEE STCET SB Annual Report 2024"),
    title: "IEEE STCET SB Annual Report 2024",
    date: "Feb 28, 2025",
    description: "The IEEE STCET Student Branch released its annual report for 2024, highlighting achievements including 50+ events, 200+ active members, and multiple chapter formations. The report outlines the branch's growth and future roadmap.",
    ...blogAuthors[0],
    tag: "product",
    tagLabel: "Report",
  },
  {
    slug: slugify("Guest Lecture on Quantum Computing"),
    title: "Guest Lecture on Quantum Computing",
    date: "Sep 12, 2024",
    description: "A distinguished guest lecture on quantum computing was delivered by an expert from the field. The session covered quantum algorithms, superposition, entanglement, and the future of quantum technology in real-world applications.",
    ...blogAuthors[1],
    tag: "research",
    tagLabel: "Lecture",
  },
];

export const events: BlogPost[] = [
  {
    title: "Tech Talk: AI in Healthcare",
    date: "Mar 15, 2025",
    tag: "research",
    tagLabel: "Workshop",
  },
  {
    title: "IEEE Hackathon 2025",
    date: "Feb 10, 2025",
    tag: "product",
    tagLabel: "Competition",
  },
  {
    title: "Industry Visit: Google Office",
    date: "Jan 22, 2025",
    tag: "standard",
    tagLabel: "Industrial",
  },
  {
    title: "Annual IEEE Banquet",
    date: "Dec 20, 2024",
    tag: "award",
    tagLabel: "Celebration",
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
