"use client";

import { useRef } from "react";
import StorySection from "@/components/StorySection";
import SwipeUpAffordance from "@/components/SwipeUpAffordance";
import { INSTALL_URL } from "@/config";

const MORE_INFO_NARRATIVE = [
  "Every dating app says they want you to find a relationship.\nBut most dating apps only work\nas long as you stay a single user.",
  "They make money from memberships, upgrades,\nand keeping you engaged.\nWhich means endless browsing is good for them —\neven when it's a waste of your time.",
  "Orbit isn't built only for singles.\nOrbit includes people who aren't dating at all.\nThey're here to introduce someone they know.",
  "When a relationship works,\nsingles don't disappear from Orbit.\nThey often return later —\nas introducers.",
  "Orbit doesn't rely on memberships or upgrades.\nWe're incentivized when real dates happen —\nand go well.",
  "That's why Orbit focuses on vetted places\nand thoughtful ways to meet.\nOrbit works best when introductions lead somewhere real —\nnot when you keep scrolling.",
  "Special introductions.\nQuality dates.\nLess noise.",
];

export default function MoreInfoPage() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleApplyClick = () => {
    window.location.href = INSTALL_URL;
  };

  return (
    <div
      ref={scrollRef}
      className="scroll-narrative h-[100svh] overflow-y-auto snap-y snap-mandatory bg-background-main"
    >
      {MORE_INFO_NARRATIVE.map((line, i) => (
        <StorySection
          key={i}
          slideIndex={i + 1}
          text={line}
          variant="body"
          children={
            i === 6 ? (
              <div className="w-full mt-8 flex flex-col gap-3">
                <button
                  type="button"
                  onClick={handleApplyClick}
                  className="w-full rounded-xl border px-5 py-6 text-center text-base font-light bg-white text-[#566B89] border-white transition-colors hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-white/20 focus:ring-offset-2 focus:ring-offset-background-main"
                >
                  Apply to become a member of the Orbit community
                </button>
              </div>
            ) : undefined
          }
        />
      ))}

      {/* Swipe up affordance */}
      <div className="fixed bottom-0 left-0 right-0 pointer-events-none flex justify-center pt-20">
        <SwipeUpAffordance scrollContainerRef={scrollRef} />
      </div>
    </div>
  );
}
