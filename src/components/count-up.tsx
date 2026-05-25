"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

/**
 * Animates a numeric stat up from zero when scrolled into view, preserving any
 * prefix/suffix and formatting. Handles "3+", "1,000+", "4.00", "50+", etc.
 */
export function CountUp({ value, className }: { value: string; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [display, setDisplay] = useState(value);

  useEffect(() => {
    if (!inView) return;

    const match = value.match(/^([\d.,]+)(.*)$/);
    if (!match) return;
    const numStr = match[1];
    const suffix = match[2] ?? "";
    const target = parseFloat(numStr.replace(/,/g, "")) || 0;
    const decimals = numStr.includes(".") ? numStr.split(".")[1].length : 0;
    const hasComma = numStr.includes(",");

    const format = (n: number) => {
      const fixed = decimals > 0 ? n.toFixed(decimals) : String(Math.round(n));
      const out = hasComma ? Number(fixed).toLocaleString("en-US") : fixed;
      return out + suffix;
    };

    const duration = 1200;
    const start = performance.now();
    let raf = 0;
    const step = (t: number) => {
      const p = Math.min((t - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3); // easeOutCubic
      setDisplay(format(target * eased));
      if (p < 1) raf = requestAnimationFrame(step);
      else setDisplay(format(target));
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [inView, value]);

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  );
}
