import { cn } from "@/lib/utils";

interface SectionSubHeaderProps {
  label: string;
  accent: string;
  className?: string;
}

export function SectionSubHeader({ label, accent, className }: SectionSubHeaderProps) {
  return (
    <div className={cn("mb-14", className)}>
      <h1
        className="text-3xl ml-6 md:text-4xl font-bold leading-[0.95] tracking-[1.28px] text-ink"
      >
        {label}{" "}
        <span className="text-ieee-blue">{accent}</span>
      </h1>
    </div>
  );
}
