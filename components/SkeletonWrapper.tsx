"use client";

import { useEffect, useState } from "react";
import "@aejkatappaja/phantom-ui";

export default function SkeletonWrapper({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <phantom-ui loading={loading} animation="shimmer" reveal={0.3} stagger={0.03}>
      {children}
    </phantom-ui>
  );
}
