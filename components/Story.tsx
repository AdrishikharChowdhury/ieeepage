import StoryHeader from "@/components/story/StoryHeader";
import StoryCard from "@/components/story/StoryCard";
import MilestoneButton from "@/components/story/MilestoneButton";
import Link from "next/link";
import { milestones } from "@/lib/constants";
import { ChevronsRight } from "lucide-react";

const Story = () => {
  return (
    <section
      className="h-screen w-full bg-linear-to-b from-blue-500 to-blue-700 px-5 md:px-10 py-16 flex flex-col items-center"
      id="story"
    >
      <StoryHeader />

      <div className="relative w-full">
        <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-white/30 -translate-x-1/2 hidden md:block" />

        <div className="absolute left-4.5 top-0 bottom-0 w-1 bg-white/30 md:hidden" />

        <div className="flex flex-col gap-8">
          {milestones.map((m, i) => (
            <div key={i} className="relative flex items-start">
              <div className="hidden md:flex w-5/12 items-start">
                {m.side === "left" && (
                  <StoryCard
                    title={m.title}
                    date={m.date}
                    description={m.description}
                    side={m.side}
                  />
                )}
              </div>

              <div className="hidden md:flex w-2/12 justify-center">
                <MilestoneButton index={i} />
              </div>

              <div className="hidden md:flex w-5/12 items-start">
                {m.side === "right" && (
                  <StoryCard
                    title={m.title}
                    date={m.date}
                    description={m.description}
                    side={m.side}
                  />
                )}
              </div>

              <div className="flex md:hidden items-start gap-6 w-full">
                <div className="flex flex-col items-center pt-2">
                  <MilestoneButton index={i} />
                </div>
                <div className="flex-1 min-w-0">
                  <StoryCard
                    title={m.title}
                    date={m.date}
                    description={m.description}
                    side={m.side}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Link href="/story" className="pb-2 pt-4 text-white flex gap-1 text-lg items-center">
        <p>Know More</p>
        <ChevronsRight className="mt-0.5" />
      </Link>
    </section>
  );
};

export default Story;
