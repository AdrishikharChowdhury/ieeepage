"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export default function PageLoader() {
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          return 100;
        }
        const increment = Math.random() * 15 + 5;
        return Math.min(prev + increment, 100);
      });
    }, 200);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (progress === 100) {
      const timeout = setTimeout(() => setVisible(false), 400);
      return () => clearTimeout(timeout);
    }
  }, [progress]);

  if (!visible) return null;

  return (
    <div
      className={cn(
        "fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-light-canvas transition-opacity duration-500",
        progress === 100 && "opacity-0",
      )}
    >
      <div className="relative size-28">
        <svg className="size-full rotate-[-90deg]" viewBox="0 0 120 120">
          <circle
            cx="60"
            cy="60"
            r="52"
            fill="none"
            stroke="currentColor"
            strokeWidth="4"
            className="text-ink/10"
          />
          <circle
            cx="60"
            cy="60"
            r="52"
            fill="none"
            stroke="currentColor"
            strokeWidth="4"
            strokeLinecap="round"
            strokeDasharray={326.72}
            strokeDashoffset={326.72 - (326.72 * progress) / 100}
            className="text-ieee-blue transition-all duration-200 ease-out"
          />
        </svg>
        <span className="absolute inset-0 flex items-center justify-center text-2xl font-bold text-ink tabular-nums">
          {Math.round(progress)}%
        </span>
      </div>
    </div>
  );
}
