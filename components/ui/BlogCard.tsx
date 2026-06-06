import { cn } from "@/lib/utils";
import { ExternalLink } from "lucide-react";
import Link from "next/link";

export interface BlogCardProps {
  title: string;
  date: string;
  tagLabel: string;
  tagColor: string;
  author: string;
  email?: string;
  description?: string;
  className?: string;
  slug?: string;
}

export function BlogCard({
  title,
  date,
  tagLabel,
  tagColor,
  author,
  email,
  slug,
  className,
}: BlogCardProps) {
  return (
    <article
      className={cn(
        "bg-white-card rounded-2xl border border-ink/10 flex flex-col gap-3 p-6",
        className,
      )}
    >
      <span
        className={cn(
          "inline-block text-xs font-bold px-3 py-1.5 rounded-tags self-start",
          tagColor,
        )}
      >
        {tagLabel}
      </span>
      <div className="flex w-full justify-between items-center">
        <h3 className="text-[26px] font-bold leading-[1.1] tracking-[0.52px] text-ink">
          {title}
        </h3>
        <Link href={`/blogs/${slug}`}>
          <ExternalLink />
        </Link>
      </div>

      <p className="text-sm text-ink/50">{date}</p>
      <div className="flex items-center gap-3 pt-4 border-t border-ink/5 mt-2">
        <img
          src={`https://api.dicebear.com/10.x/triangles/svg?seed=${author}`}
          alt={author}
          className="size-10 rounded-full bg-ink/5 shrink-0"
        />
        <div>
          <p className="text-sm font-semibold text-ink">{author}</p>
          {email && (
            <a
              href={`mailto:${email}`}
              className="text-xs text-ieee-blue hover:underline"
            >
              {email}
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
