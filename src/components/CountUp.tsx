"use client";

import { useEffect, useRef, useState } from "react";

type CountUpProps = {
  to: number;
  suffix?: string;
  duration?: number;
  className?: string;
};

export function CountUp({ to, suffix = "", duration = 1800, className = "" }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const [value, setValue] = useState(to);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let raf = 0;
    let settle = 0;
    const reset = requestAnimationFrame(() => setValue(0));

    const run = () => {
      const start = performance.now();
      settle = window.setTimeout(() => setValue(to), duration + 300);
      const tick = (now: number) => {
        const p = Math.min(1, (now - start) / duration);
        setValue(Math.round(to * (1 - Math.pow(1 - p, 3))));
        if (p < 1) raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);
    };

    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        io.disconnect();
        run();
      },
      { threshold: 0.2 }
    );
    io.observe(el);

    return () => {
      cancelAnimationFrame(reset);
      cancelAnimationFrame(raf);
      window.clearTimeout(settle);
      io.disconnect();
    };
  }, [to, duration]);

  return (
    <span ref={ref} className={`tabular-nums ${className}`}>
      {value}
      {suffix}
    </span>
  );
}
