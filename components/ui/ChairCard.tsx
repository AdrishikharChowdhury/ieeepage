import Image from "next/image";
import type { Chair } from "@/lib/constants";

interface ChairCardProps extends Chair {
  className?: string;
}

export function ChairCard({ name, role, email, avatar, src, alt, color }: ChairCardProps) {
  return (
    <div className="bg-white-card rounded-2xl overflow-hidden flex flex-col">
      <div className={`h-2 rounded-t-2xl w-full ${color}`} />
      <div className="flex flex-col items-center text-center gap-3">
        <div className="overflow-hidden w-full aspect-square shrink-0">
          <Image src={avatar} alt={name} width={320} height={320} className="w-full h-full object-cover" decoding="async" />
        </div>
        <h3
          className="text-xl sm:text-2xl font-bold text-ink"
        >
          {name}
        </h3>
        <span className="text-xs sm:text-sm text-ink/50 -mt-1">{role}</span>
        <a
          href={`mailto:${email}`}
          className="text-xs font-medium text-ieee-blue hover:underline"
        >
          {email}
        </a>
        <div className="flex items-center gap-1.5 py-3 border-t border-ink/5 w-full justify-center mt-1">
          <Image src={src} alt={alt} width={20} height={20} className="object-contain" decoding="async" />
          <span className="text-xs font-medium text-ink/70">{alt}</span>
        </div>
      </div>
    </div>
  );
}
