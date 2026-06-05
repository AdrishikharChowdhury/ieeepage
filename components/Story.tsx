import StoryHeader from "@/components/story/StoryHeader";
import StoryCard from "@/components/story/StoryCard";
import MilestoneButton from "@/components/story/MilestoneButton";
import Link from "next/link";
import { milestones } from "@/lib/constants";
import { ChevronsRight } from "lucide-react";

interface MilestoneItemProps {
  milestone: (typeof milestones)[0];
  index: number;
}

const MilestoneItem = ({ milestone: m, index: i }: MilestoneItemProps) => (
  <div key={i} className="relative flex items-start group">
    {/* Desktop Layout */}
    <div className="hidden md:flex w-5/12 items-center justify-end pr-8">
      {m.side === "left" && (
        <div className="transform transition-all duration-500 group-hover:scale-105">
          <StoryCard {...m} />
        </div>
      )}
    </div>

    <div className="hidden md:flex w-2/12 justify-center">
      <div className="relative z-10">
        <MilestoneButton index={i} />
      </div>
    </div>

    <div className="hidden md:flex w-5/12 items-center pl-8">
      {m.side === "right" && (
        <div className="transform transition-all duration-500 group-hover:scale-105">
          <StoryCard {...m} />
        </div>
      )}
    </div>

    {/* Mobile Layout */}
    <div className="flex md:hidden items-start gap-4 w-full">
      <div className="flex flex-col items-center pt-1 shrink-0">
        <MilestoneButton index={i} />
      </div>
      <div className="flex-1 min-w-0 pt-1">
        <div className="transform transition-all duration-500 group-hover:scale-105">
          <StoryCard {...m} />
        </div>
      </div>
    </div>
  </div>
);

const Story = () => {
  return (
    <section
      className="h-screen w-full bg-linear-to-b from-blue-600 via-blue-700 to-blue-900 px-5 md:px-10 py-20 flex flex-col items-center relative"
      id="story"
    >
      {/* Background Accent */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-blue-300 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 w-full">
        <StoryHeader />

        <div className="relative w-full mt-6">
          {/* Timeline Line - Enhanced */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1.5 bg-linear-to-b from-white via-white/50 to-transparent -translate-x-1/2 hidden md:block rounded-full" />
          <div className="absolute left-4.5 top-0 bottom-0 w-1 bg-linear-to-b from-white/50 to-transparent md:hidden" />

          {/* Timeline Items */}
          <div className="flex flex-col gap-6 md:gap-16">
            {milestones.map((m, i) => (
              <MilestoneItem key={i} milestone={m} index={i} />
            ))}
          </div>
        </div>

        {/* Know More Link - Enhanced */}
        <div className="flex justify-center mt-6">
          <Link 
            href="/story" 
            className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white flex gap-2 items-center rounded-full transition-all duration-300 border border-white/20 hover:border-white/40 group"
          >
            <span>Know More</span>
            <ChevronsRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Story;
