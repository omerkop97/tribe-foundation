"use client";

import { useEffect, useRef } from "react";

type WordRevealProps = {
  text: string;
  className?: string;
};

const DIM = 0.16;

export function WordReveal({ text, className = "" }: WordRevealProps) {
  const ref = useRef<HTMLParagraphElement>(null);
  const words = text.split(" ");

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const spans = Array.from(el.querySelectorAll<HTMLElement>("[data-w]"));
    let raf = 0;

    const update = () => {
      raf = 0;
      const r = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const travel = vh * 0.5 + r.height;
      const p = Math.min(1, Math.max(0, (vh * 0.88 - r.top) / travel));
      const n = spans.length;
      spans.forEach((span, i) => {
        const t = Math.min(1, Math.max(0, p * (n + 2) - i));
        span.style.opacity = String(DIM + (1 - DIM) * t);
      });
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <p ref={ref} className={className}>
      {words.map((word, i) => (
        <span key={i} data-w>
          {word}{" "}
        </span>
      ))}
    </p>
  );
}
