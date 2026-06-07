import StoryHeader from "@/components/story/StoryHeader";
import StoryCard from "@/components/story/StoryCard";
import Link from "next/link";
import { milestones, stats } from "@/lib/constants";
import { StatCard } from "./ui/StatCard";

const Story = () => {
  return (
    <section
      className="w-full bg-light-canvas py-12 md:py-20 flex flex-col items-center"
      id="story"
      style={{ contentVisibility: 'auto', contain: 'layout style paint' }}
    >
      <div className="w-full max-w-7xl px-6">
        <StoryHeader />

        <div className="flex gap-3 sm:gap-4 md:gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-none mt-10 justify-start lg:justify-center">
          {milestones.map((m, i) => (
            <StoryCard key={i} {...m} index={i} />
          ))}
        </div>
        <section className="w-full bg-light-canvas" id="stats">
        <div className="mx-auto w-full max-w-7xl px-6">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-2">
            {stats.map((stat, i) => (
              <StatCard key={i} {...stat} />
            ))}
          </div>
        </div>
      </section>
        <div className="flex justify-center mt-12">
          <Link
            href="/story"
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-ink border border-ink rounded-full transition-colors hover:bg-ink hover:text-white"
          >
            <span>Know More</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14" /><path d="M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Story;
