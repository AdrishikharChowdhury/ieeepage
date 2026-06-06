import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  label: string;
  accent: string;
  className?: string;
}

export function SectionHeader({ label, accent, className }: SectionHeaderProps) {
  return (
    <div className={cn("mb-14", className)}>
      <h1
        className="text-5xl md:text-6xl font-bold leading-[0.95] tracking-[1.28px] text-ink"
        style={{ fontFamily: "'PP Neue Corp Compact', 'Oswald', 'Anton', sans-serif" }}
      >
        {label}{" "}
        <span className="text-ieee-blue">{accent}</span>
      </h1>
    </div>
  );
}
