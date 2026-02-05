"use client";

import { useRef } from "react";
import StorySection from "@/components/StorySection";
import SwipeUpAffordance from "@/components/SwipeUpAffordance";
import { INSTALL_URL } from "@/config";
import { trackEvent } from "@/lib/analytics";

const NARRATIVE_1 = [
  "Introductions replace algorithms.",
  "Somewhere along the way, meeting people became a numbers game.",
  "Speed replaced judgment. Scale replaced care.",
  "Algorithms are good at scale. They are bad at meaning.",
  "Before apps and feeds, meaningful relationships began with an introduction.",
  "Orbit brings that practice into the present.",
];

const NARRATIVE_2 = [
  "Stewardship, not swiping.",
  "When you sponsor someone on Orbit, you're not choosing for yourself.",
  "You're vouching for another person.",
  "You're saying: I know them — and I stand behind them.",
  "That's a different kind of responsibility.",
  "And a different kind of trust.",
];

export default function HomePage() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleInstallClick = () => {
    trackEvent("install_click");
  };

  const handleSponsorClick = () => {
    trackEvent("sponsor_click");
  };

  return (
    <div
      ref={scrollRef}
      className="scroll-narrative h-[100svh] overflow-y-auto snap-y snap-mandatory bg-background-main"
    >
      {/* Narrative 1 */}
      {NARRATIVE_1.map((line, i) => (
        <StorySection
          key={i}
          text={line}
          variant={i === 0 ? "headline" : "body"}
        />
      ))}

      {/* CTA 1 */}
      <StorySection variant="cta">
        <div className="flex flex-col items-center gap-6">
          <a
            href={INSTALL_URL}
            onClick={handleInstallClick}
            className="inline-flex items-center justify-center rounded-xl px-8 py-4 text-base font-medium bg-action-primary text-primary-blue hover:bg-action-primary-hover active:bg-action-primary-active shadow-subtle transition-colors focus:outline-none focus:ring-2 focus:ring-white/30 focus:ring-offset-2 focus:ring-offset-background-main"
          >
            Install Orbit
          </a>
          <p className="text-text-light text-sm">Invite-only. Built slowly.</p>
        </div>
      </StorySection>

      {/* Narrative 2 */}
      {NARRATIVE_2.map((line, i) => (
        <StorySection
          key={`n2-${i}`}
          text={line}
          variant={i === 0 ? "headline" : "body"}
        />
      ))}

      {/* CTA 2 */}
      <StorySection variant="cta">
        <div className="flex flex-col items-center gap-6">
          <a
            href={INSTALL_URL}
            onClick={handleSponsorClick}
            className="inline-flex items-center justify-center rounded-xl px-8 py-4 text-base font-medium bg-action-primary text-primary-blue hover:bg-action-primary-hover active:bg-action-primary-active shadow-subtle transition-colors focus:outline-none focus:ring-2 focus:ring-white/30 focus:ring-offset-2 focus:ring-offset-background-main"
          >
            Become a Sponsor
          </a>
          <p className="text-text-light text-sm">For people others already trust.</p>
        </div>
      </StorySection>

      {/* Swipe up affordance - first section only */}
      <div className="fixed bottom-0 left-0 right-0 pointer-events-none flex justify-center pt-20">
        <SwipeUpAffordance scrollContainerRef={scrollRef} />
      </div>
    </div>
  );
}
