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
  { label: "Timeline", route: "/timeline", id: "timeline" },
  { label: "The Board", route: "/board", id: "board" },
  { label: "Highlights", route: "/highlights", id: "highlights" },
];

export interface BlogPost {
  title: string;
  date: string;
  tag: "product" | "standard" | "research" | "alert" | "award";
  tagLabel: string;
}

export const blogPosts: BlogPost[] = [
  {
    title: "Inauguration of IEEE WIE AG",
    date: "Apr 5, 2025",
    tag: "product",
    tagLabel: "Announcement",
  },
  {
    title: "CIS Chapter: First Technical Workshop",
    date: "May 23, 2024",
    tag: "research",
    tagLabel: "Research",
  },
  {
    title: "IES Chapter: Industry Connect Program",
    date: "Apr 5, 2025",
    tag: "standard",
    tagLabel: "Standard",
  },
  {
    title: "IEEE Day Celebrations 2025",
    date: "Oct 5, 2025",
    tag: "award",
    tagLabel: "Award",
  },
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
      { label: "Timeline", href: "/timeline" },
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

export const collegeLogos = [
  { src: "/aicte-webp.webp", alt: "AICTE" },
  { src: "/makaut-webp.webp", alt: "MAKAUT" },
  { src: "/NBA-webp.webp", alt: "NBA" },
];

export interface Chair {
  name: string;
  role: string;
  avatar: string;
  src: string;
  alt: string;
  color: string;
}

export const chairs: Chair[] = [
  {
    name: "Arjun Mitra",
    role: "Chair",
    avatar: "/ieeechair.jpg",
    src: "/ies-ieee.png",
    alt: "Industry Applications Society",
    color: "bg-ieee-blue",
  },
  {
    name: "Kaushiki Sarkar",
    role: "Chair",
    avatar: "/wiechair.jpg",
    src: "/wie-logo.png",
    alt: "Women in Engineering",
    color: "bg-ieee-navy",
  },
  {
    name: "Priyangshu Pal",
    role: "Chair",
    avatar: "/cischair.jpg",
    src: "/cis-logo.png",
    alt: "Computational Intelligence Society",
    color: "bg-ieee-teal",
  },
];
