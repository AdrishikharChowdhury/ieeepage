import MilestoneButton from "./MilestoneButton";
import { storyCardColors } from "@/lib/constants";

interface StoryCardProps {
  title: string
  date: string
  description: string
  side: "left" | "right"
  index: number
}

const StoryCard = ({ title, date, description, index }: StoryCardProps) => {
  const bg = storyCardColors[index % storyCardColors.length];

  return (
    <div className={`${bg} rounded-2xl p-6 flex flex-col gap-4 min-w-75 w-85 shrink-0`}>
      <MilestoneButton index={index} />
      <span className="text-[11px] font-bold text-white/80 bg-white/15 px-3 py-1.5 rounded-tags self-start leading-tight">
        {date}
      </span>
      <div className="flex flex-col gap-2">
        <h2
          className="text-[22px] font-bold leading-[1.1] tracking-[0.44px] text-white"
          
        >
          {title}
        </h2>
        <p className="text-sm leading-relaxed text-white/70">
          {description}
        </p>
      </div>
    </div>
  );
};

export default StoryCard;
