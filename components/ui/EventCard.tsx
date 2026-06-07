import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";

type TagVariant = "product" | "standard" | "research" | "alert" | "award";

export interface EventCardProps {
  slug: string;
  title: string;
  date: string;
  time: string;
  description: string;
  picture: string;
  tags: string[];
  tag: TagVariant;
  tagLabel: string;
}

const tagStyles: Record<TagVariant, string> = {
  product: "bg-[var(--color-ieee-green)] text-white",
  standard: "bg-[var(--color-ieee-blue)] text-white",
  research: "bg-[var(--color-ieee-teal)] text-white",
  alert: "bg-[var(--color-ieee-red)] text-white",
  award: "bg-[var(--color-ieee-gold)] text-[var(--color-ink)]",
};

export function EventCard({ slug, title, date, time, description, picture, tags, tag, tagLabel }: EventCardProps) {
  return (
    <Link href={`/events/${slug}`}>
      <article
        className={cn(
          "bg-white-card rounded-2xl border border-ink/10 flex flex-col gap-3 min-w-[280px] sm:min-w-90 w-[85vw] sm:w-1/4 shrink-0 cursor-pointer group h-full",
        )}
      >
        <div className="aspect-video rounded-t-2xl overflow-hidden">
          <Image
            src={picture}
            alt={title}
            width={400}
            height={225}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="p-5 flex flex-col gap-3">
          <span className={cn("text-xs font-bold px-3 py-1.5 rounded-tags self-start", tagStyles[tag])}>
            {tagLabel}
          </span>
          <h3 className="text-xl font-bold leading-[1.1] tracking-[0.4px] text-ink">
            {title}
          </h3>
          <div className="flex items-center gap-3 text-sm text-ink/50">
            <time>{date}</time>
            <span className="inline-block w-1 h-1 rounded-full bg-ink/30" />
            <span>{time}</span>
          </div>
          <p className="text-sm text-ink/70 line-clamp-2">{description}</p>
          <div className="flex flex-wrap gap-1.5 mt-1">
            {tags.slice(0, 3).map((t) => (
              <span key={t} className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-ink/5 text-ink/50">
                {t}
              </span>
            ))}
          </div>
        </div>
      </article>
    </Link>
  );
}
