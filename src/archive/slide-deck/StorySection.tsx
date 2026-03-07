"use client";

import { ReactNode, cloneElement, isValidElement, useEffect, useRef, useState } from "react";

type StorySectionProps = {
  text?: string;
  variant?: "headline" | "body" | "cta";
  slideIndex?: number;
  boldPhrase?: string;
  children?: ReactNode;
};

function renderWithBold(content: string, boldPhrase?: string): ReactNode {
  if (!boldPhrase || !content.includes(boldPhrase)) return content;
  const parts = content.split(boldPhrase);
  return (
    <>
      {parts[0]}
      <strong>{boldPhrase}</strong>
      {parts[1]}
    </>
  );
}

/** Returns [line2DelayMs, line3DelayMs] or null if no staged reveal. Animation only for pre-split slides 2–7. */
function getRevealConfig(slideIndex: number): number[] | null {
  if (slideIndex === 2 || slideIndex === 3 || slideIndex === 4 || slideIndex === 6 || slideIndex === 7) {
    return [1400, -1]; // line 2 at 1400ms, no line 3
  }
  if (slideIndex === 5) {
    return [1400, 3000]; // line 2 at 1400ms, line 3 at 3000ms
  }
  return null; // slide 8 (fork) and post-split: no animation
}

export default function StorySection({
  text,
  variant = "body",
  slideIndex = 0,
  boldPhrase,
  children,
}: StorySectionProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const [isInView, setIsInView] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  const revealConfig = slideIndex ? getRevealConfig(slideIndex) : null;

  const lines = (() => {
    if (!text) return [];
    if (slideIndex === 7) {
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
    headline:
      "text-[clamp(28px,6vw,42px)] font-light tracking-tight text-text-dark leading-[1.15] max-w-[22ch] text-left break-words [text-wrap:balance]",
    body:
      "text-[clamp(28px,6vw,42px)] font-light tracking-tight text-text-dark leading-[1.15] max-w-[22ch] text-left break-words [text-wrap:balance]",
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
    const renderedChildren =
      slideIndex === 8 &&
      children &&
      isValidElement(children)
        ? cloneElement(children as React.ReactElement<{ isSlide6Active?: boolean; prefersReducedMotion?: boolean }>, {
            isSlide6Active: isInView,
            prefersReducedMotion,
          })
        : children;
    return (
      <section ref={sectionRef} className={base}>
        <div className={`${lineClass} flex flex-col gap-6`}>
          {text.split(/\n/).filter((s) => s.length > 0).map((line, i) => (
            <span key={i}>{boldPhrase ? renderWithBold(line, boldPhrase) : line}</span>
          ))}
        </div>
        {renderedChildren}
      </section>
    );
  }

  const [delay2, delay3] = revealConfig;
  const isForkSlide = slideIndex === 8;
  const hasThirdLine = delay3 > 0 && lines[2] !== undefined;
  const line2Class = isInView ? "cadence-reveal" : "cadence-hidden";
  const line3Class = isInView ? "cadence-reveal" : "cadence-hidden";

  const renderedChildren =
    isForkSlide &&
    children &&
    isValidElement(children)
      ? cloneElement(children as React.ReactElement<{ isSlide6Active?: boolean; prefersReducedMotion?: boolean }>, {
          isSlide6Active: isInView,
          prefersReducedMotion,
        })
      : children;

  return (
    <section ref={sectionRef} className={base}>
      <div className={`${lineClass} flex flex-col gap-0`}>
        <div className={lines[0].includes("\n") ? "whitespace-pre-line" : ""}>
          {renderWithBold(lines[0], boldPhrase)}
        </div>
        {lines[1] && (
          <div
            className={`mt-6 ${line2Class}`}
            style={isInView ? { animationDelay: `${delay2}ms` } : undefined}
          >
            {renderWithBold(lines[1], boldPhrase)}
          </div>
        )}
        {hasThirdLine && (
          <div
            className={`mt-6 ${line3Class}`}
            style={isInView ? { animationDelay: `${delay3}ms` } : undefined}
          >
            {renderWithBold(lines[2], boldPhrase)}
          </div>
        )}
      </div>
      {renderedChildren}
    </section>
  );
}
