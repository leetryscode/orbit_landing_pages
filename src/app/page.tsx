"use client";

import { useEffect, useRef, useState } from "react";
import StorySection from "@/components/StorySection";
import SwipeUpAffordance from "@/components/SwipeUpAffordance";
import ForkCards from "@/components/ForkCards";

const NARRATIVE_1 = [
  "Time is the only thing you can't get back —\nwhich is why it matters who you give it to.",
  "We're careful with our time.\nEspecially when it comes to people.",
  "Most people don't struggle to meet people.\nThey struggle to meet the right people.",
  "The right people are rarely random.\nThey come from people who know us.",
  "Orbit is a place for thoughtful introductions.\n\nSome people are here to introduce someone they know.\nOthers are here to be introduced.",
];

const INTRODUCER_NARRATIVE = ["(Introducer narrative TBD)"];

const SINGLE_NARRATIVE = [
  "You don't have to sell yourself on Orbit.\nSomeone who knows you makes the introduction.",
  "You were worth introducing.\nAnd the person you're meeting was, too.",
  "You don't have to build or optimize a profile.\nSomeone who knows you represents you thoughtfully.",
  "You're not presented to strangers.\nYou're shared through trusted relationships.",
  "Your profile isn't a performance.\nIt's handled by someone who actually knows you.",
  "Orbit is for people who value intention over attention.\nIf that sounds like you, Orbit is for you.",
];

const SINGLE_CTAS: { primary: string; subtext?: string }[] = [
  { primary: "Apply to the waitlist" },
  { primary: "More on how Orbit works" },
  { primary: "I am interested in becoming a Sponsor and introducing someone" },
];

export default function HomePage() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const branchTargetRef = useRef<HTMLDivElement>(null);
  const [path, setPath] = useState<null | "introducer" | "single">(null);
  const [scrollToNarrative, setScrollToNarrative] = useState(false);

  const handleForkSelect = (selectedPath: "introducer" | "single", options?: { fromTap: boolean }) => {
    setPath(selectedPath);
    if (options?.fromTap) {
      setScrollToNarrative(true);
    }
  };

  const handleSponsorClick = () => {
    setPath("introducer");
    setScrollToNarrative(true);
  };

  useEffect(() => {
    if (!path || !scrollToNarrative || !branchTargetRef.current || !scrollRef.current) return;
    setScrollToNarrative(false);
    const el = branchTargetRef.current;
    requestAnimationFrame(() => {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }, [path, scrollToNarrative]);

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
          children={i === 4 ? <ForkCards onSelect={handleForkSelect} /> : undefined}
        />
      ))}

      {path && (
        <div ref={branchTargetRef}>
          {path === "introducer" &&
            INTRODUCER_NARRATIVE.map((line, i) => (
              <StorySection
                key={`intro-${i}`}
                slideIndex={6 + i}
                text={line}
                variant="body"
              />
            ))}

          {path === "single" &&
            SINGLE_NARRATIVE.map((line, i) => (
              <StorySection
                key={`single-${i}`}
                slideIndex={6 + i}
                text={line}
                variant="body"
                children={
                  i === 5 ? (
                    <div className="w-full mt-8 flex flex-col gap-3">
                      {SINGLE_CTAS.map((cta, ctaIndex) => {
                        const baseClasses = `w-full rounded-xl border px-5 py-6 text-center text-base font-light ${
                          ctaIndex === 0
                            ? "bg-white text-[#566B89] border-white"
                            : "border-border-light bg-background-card/80 text-text-dark"
                        }`;
                        const isSponsorButton = ctaIndex === 2;

                        return isSponsorButton ? (
                          <button
                            key={cta.primary}
                            type="button"
                            onClick={handleSponsorClick}
                            className={`${baseClasses} transition-colors hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-white/20 focus:ring-offset-2 focus:ring-offset-background-main`}
                          >
                            {cta.primary}
                          </button>
                        ) : (
                          <div key={cta.primary} className={baseClasses}>
                            <div>{cta.primary}</div>
                            {cta.subtext && (
                              <div className="mt-2 text-sm text-text-light font-light">
                                {cta.subtext}
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  ) : undefined
                }
              />
            ))}
        </div>
      )}

      {/* Swipe up affordance - first section only */}
      <div className="fixed bottom-0 left-0 right-0 pointer-events-none flex justify-center pt-20">
        <SwipeUpAffordance scrollContainerRef={scrollRef} />
      </div>
    </div>
  );
}
