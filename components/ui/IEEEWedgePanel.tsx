import { cn } from "@/lib/utils";

interface IEEEWedgePanelProps {
  className?: string;
  children?: React.ReactNode;
}

export function IEEEWedgePanel({ className, children }: IEEEWedgePanelProps) {
  return (
    <div className={cn("flex flex-col rounded-[0px] overflow-hidden", className)}>
      <div className="h-16 bg-[var(--color-ieee-blue)] w-full" />
      <div className="h-14 bg-[var(--color-ieee-navy)] w-[92%]" />
      <div className="h-12 bg-[var(--color-ieee-blue)] w-[84%]" />
      {children && <div className="bg-[var(--color-ieee-navy)] px-6 py-4 w-[76%]">{children}</div>}
    </div>
  );
}
