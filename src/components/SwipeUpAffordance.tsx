"use client";

import { useState, useEffect, RefObject } from "react";

type SwipeUpAffordanceProps = {
  scrollContainerRef: RefObject<HTMLDivElement | null>;
};

export default function SwipeUpAffordance({ scrollContainerRef }: SwipeUpAffordanceProps) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    let scrolled = false;

    const handleScroll = () => {
      if (!scrolled) {
        scrolled = true;
        setVisible(false);
      }
    };

    container.addEventListener("scroll", handleScroll, { passive: true });
    return () => container.removeEventListener("scroll", handleScroll);
  }, [scrollContainerRef]);

  if (!visible) return null;

  return (
    <div
      className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-text-light text-sm animate-fade-in"
      aria-hidden="true"
    >
      <span>More</span>
      <svg
        className="w-5 h-5 animate-bounce"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M5 15l7-7 7 7"
        />
      </svg>
    </div>
  );
}
