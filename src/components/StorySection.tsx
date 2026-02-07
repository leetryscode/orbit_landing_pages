"use client";

import { ReactNode, useEffect, useRef, useState } from "react";

type StorySectionProps = {
  text?: string;
  variant?: "headline" | "body" | "cta";
  slideIndex?: number;
  children?: ReactNode;
};

/** Returns [line2DelayMs, line3DelayMs] or null if no staged reveal. Line 3 only for slide 6. */
function getRevealConfig(slideIndex: number): number[] | null {
  if (slideIndex === 2 || slideIndex === 3 || slideIndex === 4) {
    return [940, -1]; // line 2 at 940ms, no line 3
  }
  if (slideIndex === 6) {
    return [940, 1880]; // line 2 at 940ms, line 3 at 1880ms (940 x 2)
  }
  return null;
}

export default function StorySection({
  text,
  variant = "body",
  slideIndex = 0,
  children,
}: StorySectionProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const [isInView, setIsInView] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  const revealConfig = slideIndex ? getRevealConfig(slideIndex) : null;

  const lines = (() => {
    if (!text) return [];
    if (slideIndex === 6) {
      const parts = text.split(/\n\n+/);
      const line1 = parts[0] ?? "";
      const rest = parts[1] ? parts[1].split(/\n/).filter((s) => s.length > 0) : [];
      return [line1, ...rest];
    }
    return text.split(/\n/).filter((s) => s.length > 0);
  })();

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);
    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry?.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.5, root: el.closest(".scroll-narrative") ?? undefined }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const shouldReveal =
    revealConfig &&
    lines.length >= 2 &&
    isInView &&
    !prefersReducedMotion;

  const base = "min-h-[100svh] flex flex-col items-start justify-center px-6 py-16 snap-start snap-always";

  const textSizes = {
    headline: "text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-text-dark leading-[1.3] max-w-narrative text-left",
    body: "text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-text-dark leading-[1.4] max-w-narrative text-left",
    cta: "max-w-narrative text-left",
  };

  const lineClass = textSizes[variant];

  if (!text) {
    return (
      <section ref={sectionRef} className={base}>
        {children}
      </section>
    );
  }

  if (!revealConfig || lines.length < 2 || prefersReducedMotion) {
    return (
      <section ref={sectionRef} className={base}>
        <p className={`${lineClass} whitespace-pre-line`}>{text}</p>
        {children}
      </section>
    );
  }

  const [delay2, delay3] = revealConfig;
  const isSlide6 = slideIndex === 6;
  const line2Class = isInView ? "cadence-reveal" : "cadence-hidden";
  const line3Class = isInView ? "cadence-reveal" : "cadence-hidden";

  return (
    <section ref={sectionRef} className={base}>
      <div className={`${lineClass} flex flex-col gap-0`}>
        <div>{lines[0]}</div>
        {lines[1] && (
          <div
            className={isSlide6 ? `mt-4 ${line2Class}` : `mt-1 ${line2Class}`}
            style={isInView ? { animationDelay: `${delay2}ms` } : undefined}
          >
            {lines[1]}
          </div>
        )}
        {isSlide6 && lines[2] !== undefined && (
          <div
            className={`mt-1 ${line3Class}`}
            style={isInView ? { animationDelay: `${delay3}ms` } : undefined}
          >
            {lines[2]}
          </div>
        )}
      </div>
      {children}
    </section>
  );
}
