import { cn } from "@/lib/utils";

interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

export function TextInput({ className, ...props }: TextInputProps) {
  return (
    <input
      className={cn(
        "w-full bg-[var(--color-white-card)] border border-[var(--color-ink)] rounded-[100px] px-5 py-3 text-base font-medium text-[var(--color-ink)] outline-none transition-all duration-200 focus:border-2 focus:border-[var(--color-ieee-blue)] placeholder:text-[var(--color-ink)]/40",
        className
      )}
      {...props}
    />
  );
}
