"use client";

import { useRef } from "react";
import StorySection from "@/components/StorySection";
import SwipeUpAffordance from "@/components/SwipeUpAffordance";

const NARRATIVE_1 = [
  "Time is the only thing you can't get back —\nwhich is why it matters who you give it to.",
  "We're careful with our time.\nEspecially when it comes to people.",
  "Most people don't struggle to meet people.\nThey struggle to meet the right people.",
  "The right people are rarely random.\nThey come from people who know us.",
  "Orbit is a place for thoughtful introductions.",
  "Orbit is simple.\n\nSome people are here to introduce someone they know.\nOthers are here to be introduced.",
];

export default function HomePage() {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={scrollRef}
      className="scroll-narrative h-[100svh] overflow-y-auto snap-y snap-mandatory bg-background-main"
    >
      {NARRATIVE_1.map((line, i) => (
        <StorySection
          key={i}
          text={line}
          variant={i === 0 ? "headline" : "body"}
        />
      ))}

      {/* Swipe up affordance - first section only */}
      <div className="fixed bottom-0 left-0 right-0 pointer-events-none flex justify-center pt-20">
        <SwipeUpAffordance scrollContainerRef={scrollRef} />
      </div>
    </div>
  );
}
