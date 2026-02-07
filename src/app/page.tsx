"use client";

import { useRef, useState } from "react";
import StorySection from "@/components/StorySection";
import SwipeUpAffordance from "@/components/SwipeUpAffordance";
import ForkCards from "@/components/ForkCards";

const NARRATIVE_1 = [
  "Time is the only thing you can't get back —\nwhich is why it matters who you give it to.",
  "We're careful with our time.\nEspecially when it comes to people.",
  "Most people don't struggle to meet people.\nThey struggle to meet the right people.",
  "The right people are rarely random.\nThey come from people who know us.",
  "Orbit is a place for thoughtful introductions.",
  "Orbit is simple.\n\nSome people are here to introduce someone they know.\nOthers are here to be introduced.",
];

const INTRODUCER_NARRATIVE = ["(Introducer narrative TBD)"];

const SINGLE_NARRATIVE = ["(Single narrative TBD)"];

export default function HomePage() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [path, setPath] = useState<null | "introducer" | "single">(null);

  return (
    <div
      ref={scrollRef}
      className="scroll-narrative h-[100svh] overflow-y-auto snap-y snap-mandatory bg-background-main"
    >
      {NARRATIVE_1.map((line, i) => (
        <StorySection
          key={i}
          slideIndex={i + 1}
          text={line}
          variant={i === 0 ? "headline" : "body"}
          boldPhrase={i === 3 ? "who know us" : undefined}
          children={i === 5 ? <ForkCards onSelect={setPath} /> : undefined}
        />
      ))}

      {path === "introducer" &&
        INTRODUCER_NARRATIVE.map((line, i) => (
          <StorySection
            key={`intro-${i}`}
            slideIndex={7 + i}
            text={line}
            variant="body"
          />
        ))}

      {path === "single" &&
        SINGLE_NARRATIVE.map((line, i) => (
          <StorySection
            key={`single-${i}`}
            slideIndex={7 + i}
            text={line}
            variant="body"
          />
        ))}

      {/* Swipe up affordance - first section only */}
      <div className="fixed bottom-0 left-0 right-0 pointer-events-none flex justify-center pt-20">
        <SwipeUpAffordance scrollContainerRef={scrollRef} />
      </div>
    </div>
  );
}
