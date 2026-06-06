import { cn } from "@/lib/utils";

type TagVariant = "product" | "standard" | "research" | "alert" | "award";

interface BlogCardProps {
  title: string;
  date: string;
  tag: TagVariant;
  tagLabel: string;
  className?: string;
}

const tagStyles: Record<TagVariant, string> = {
  product: "bg-[var(--color-ieee-green)] text-white",
  standard: "bg-[var(--color-ieee-blue)] text-white",
  research: "bg-[var(--color-ieee-teal)] text-white",
  alert: "bg-[var(--color-ieee-red)] text-white",
  award: "bg-[var(--color-ieee-gold)] text-[var(--color-ink)]",
};

export function BlogCard({ title, date, tag, tagLabel, className }: BlogCardProps) {
  return (
    <article
      className={cn(
        "bg-[var(--color-white-card)] rounded-[40px] p-6 border border-[var(--color-ink)]/10 flex flex-col gap-4 min-w-[280px] w-[320px] shrink-0",
        className
      )}
    >
      <div className="aspect-video rounded-[calc(40px-12px)] bg-gradient-to-br from-[var(--color-ieee-blue)] to-[var(--color-ieee-teal)] opacity-30" />

      <span className={cn("text-xs font-bold px-3 py-1.5 rounded-[20px] self-start", tagStyles[tag])}>
        {tagLabel}
      </span>

      <h3 className="text-[26px] font-bold leading-[1.1] tracking-[0.52px] text-[var(--color-ink)]"
        style={{ fontFamily: "'PP Neue Corp Compact', 'Oswald', 'Anton', sans-serif" }}>
        {title}
      </h3>

      <time className="text-sm font-medium text-[var(--color-ink)]/60">{date}</time>
    </article>
  );
}
