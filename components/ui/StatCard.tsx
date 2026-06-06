import { cn } from "@/lib/utils";

interface StatCardProps {
  label: string;
  value: string;
  variant?: "primary" | "secondary";
  className?: string;
}

export function StatCard({ label, value, variant = "primary", className }: StatCardProps) {
  return (
    <div
      className={cn(
        "rounded-[40px] px-5 py-6 flex flex-col gap-1",
        variant === "primary" && "bg-[var(--color-ieee-blue)]",
        variant === "secondary" && "bg-[var(--color-ieee-navy)]",
        className
      )}
    >
      <span className="text-4xl font-bold text-white leading-none tracking-[0.02em]"
        style={{ fontFamily: "'PP Neue Corp Compact', 'Oswald', 'Anton', sans-serif" }}>
        {value}
      </span>
      <span className="text-sm text-white/90 font-medium">{label}</span>
    </div>
  );
}
