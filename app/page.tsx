import Banner from '@/components/Banner';
import Story from '@/components/Story';
import Footer from '@/components/Footer';
import { StatCard } from '@/components/ui/StatCard';
import { BlogCard } from '@/components/ui/BlogCard';
import { LogoStrip } from '@/components/ui/LogoStrip';

const stats = [
  { label: "Members", value: "200+", variant: "primary" as const },
  { label: "Events", value: "50+", variant: "secondary" as const },
  { label: "Workshops", value: "15+", variant: "primary" as const },
  { label: "Chapters", value: "4", variant: "secondary" as const },
];

const blogPosts = [
  { title: "Inauguration of IEEE WIE AG", date: "Apr 5, 2025", tag: "product" as const, tagLabel: "Announcement" },
  { title: "CIS Chapter: First Technical Workshop", date: "May 23, 2024", tag: "research" as const, tagLabel: "Research" },
  { title: "IES Chapter: Industry Connect Program", date: "Apr 5, 2025", tag: "standard" as const, tagLabel: "Standard" },
  { title: "IEEE Day Celebrations 2025", date: "Oct 5, 2025", tag: "award" as const, tagLabel: "Award" },
];

const partnerLogos = [
  { src: "/logo.png", alt: "IEEE", width: 80, height: 40 },
  { src: "/aicte-webp.webp", alt: "AICTE", width: 60, height: 40 },
  { src: "/makaut-webp.webp", alt: "MAKAUT", width: 60, height: 40 },
  { src: "/NBA-webp.webp", alt: "NBA", width: 60, height: 40 },
];

export default function Home() {
  return (
    <>
      <Banner />
      <Story />

      {/* Stats Section */}
      <section className="w-full py-20 bg-[var(--color-light-canvas)]" id="stats">
        <div className="mx-auto w-full max-w-[1280px] px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {stats.map((stat, i) => (
              <StatCard key={i} {...stat} />
            ))}
          </div>
        </div>
      </section>

      {/* Blog / Content Section */}
      <section className="w-full py-20 bg-[var(--color-white-card)]" id="highlights">
        <div className="mx-auto w-full max-w-[1280px] px-6">
          <h2
            className="text-[40px] font-bold leading-[1] tracking-[0.8px] text-[var(--color-ink)] mb-10"
            style={{ fontFamily: "'PP Neue Corp Compact', 'Oswald', 'Anton', sans-serif" }}
          >
            Latest Updates
          </h2>
          <div className="flex gap-6 overflow-x-auto pb-4 -mx-6 px-6 snap-x snap-mandatory scrollbar-none">
            {blogPosts.map((post, i) => (
              <BlogCard key={i} {...post} />
            ))}
          </div>
        </div>
      </section>

      {/* Logo Strip Section */}
      <section className="w-full py-20 bg-[var(--color-light-canvas)]">
        <div className="mx-auto w-full max-w-[1280px] px-6">
          <LogoStrip logos={partnerLogos} />
        </div>
      </section>

      <Footer />
    </>
  );
}
