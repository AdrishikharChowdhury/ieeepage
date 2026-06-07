"use client";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  label: string;
  accent: string;
  className?: string;
}

export function SectionHeader({ label, accent, className }: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={cn("mb-8 md:mb-14", className)}
    >
      <h1
        className="px-4 text-4xl sm:text-5xl md:text-6xl font-bold leading-[0.95] tracking-[1.28px] text-ink"
        style={{ fontFamily: "'PP Neue Corp Compact', 'Oswald', 'Anton', sans-serif" }}
      >
        {label}{" "}
        <span className="text-ieee-blue">{accent}</span>
      </h1>
    </motion.div>
  );
}
