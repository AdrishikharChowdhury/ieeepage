import { cn } from "@/lib/utils";

interface ContentCardProps {
  children: React.ReactNode;
  className?: string;
}

export function ContentCard({ children, className }: ContentCardProps) {
  return (
    <div className={cn("bg-white-card rounded-2xl p-6 border border-ink/10", className)}>
      {children}
    </div>
  );
}
