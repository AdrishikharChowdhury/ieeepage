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
        "rounded-2xl sm:rounded-[40px] px-3 py-4 sm:px-6 md:px-8 md:py-6 flex flex-col gap-1",
        variant === "primary" && "bg-ieee-blue",
        variant === "secondary" && "bg-ieee-navy",
        className
      )}
    >
      <span className="text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-none tracking-[0.02em]"
        style={{ fontFamily: "'PP Neue Corp Compact', 'Oswald', 'Anton', sans-serif" }}>
        {value}
      </span>
      <span className="text-xs sm:text-sm text-white/90 font-medium">{label}</span>
    </div>
  );
}
