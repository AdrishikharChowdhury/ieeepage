import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "ghost";
  children: React.ReactNode;
}

export function Button({ variant = "primary", className, children, ...props }: ButtonProps) {
  return (
    <button
      className={cn(
        "text-base font-medium px-6 py-3 rounded-[40px] leading-none transition-all duration-200",
        variant === "primary" &&
          "bg-[var(--color-ieee-blue)] text-white hover:opacity-90",
        variant === "ghost" &&
          "bg-transparent text-[var(--color-ink)] border border-[var(--color-ink)] hover:bg-[var(--color-ink)] hover:text-white",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
