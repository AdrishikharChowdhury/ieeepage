"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const imagesToPreload = [
  "/logo.png",
  "/webp/ieeechair.webp",
  "/webp/wiechair.webp",
  "/webp/cischair.webp",
  "/webp/ies-ieee.webp",
  "/webp/wie-logo.webp",
  "/webp/cis-logo.webp",
  "/events/webp/highlights1.webp",
  "/events/webp/highlights2.webp",
  "/events/webp/highlights3.webp",
  "/events/webp/highlights4.webp",
  "/events/webp/highlights5.webp",
  "/events/webp/highlights6.webp",
  "/events/webp/highlights7.webp",
];

function preloadImages(urls: string[]): Promise<number> {
  let loaded = 0;
  return new Promise((resolve) => {
    if (urls.length === 0) {
      resolve(0);
      return;
    }
    urls.forEach((url) => {
      const img = new Image();
      img.onload = img.onerror = () => {
        loaded++;
        if (loaded >= urls.length) resolve(loaded);
      };
      img.src = url;
    });
  });
}

export default function PageLoader() {
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const minTime = 1500;
    const start = Date.now();

    preloadImages(imagesToPreload).then((total) => {
      const elapsed = Date.now() - start;
      const remaining = Math.max(0, minTime - elapsed);
      setTimeout(() => setProgress(100), remaining);
    });

    const interval = setInterval(() => {
      setProgress((prev) => {
        const elapsed = Date.now() - start;
        if (elapsed >= minTime) return prev;
        const timeProgress = (elapsed / minTime) * 70;
        return Math.min(Math.max(prev, timeProgress), 99);
      });
    }, 100);

    return () => clearInterval(interval);
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
