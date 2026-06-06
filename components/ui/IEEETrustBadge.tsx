import { cn } from "@/lib/utils";

interface IEEETrustBadgeProps {
  label: string;
  className?: string;
}

export function IEEETrustBadge({ label, className }: IEEETrustBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex text-[10px] font-bold text-white bg-[var(--color-ieee-blue)] px-3 py-1 rounded-[8px] leading-none tracking-wide uppercase",
        className
      )}
    >
      {label}
    </span>
  );
}
