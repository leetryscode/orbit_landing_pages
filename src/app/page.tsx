"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import StorySection from "@/components/StorySection";
import SwipeUpAffordance from "@/components/SwipeUpAffordance";
import ForkCards from "@/components/ForkCards";
import { INSTALL_URL } from "@/config";

const NARRATIVE_1 = [
  "Time is the only thing you can't get back —\nwhich is why it matters who you give it to.",
  "We're careful with our time.\nEspecially when it comes to people.",
  "Most people don't struggle to meet people.\nThey struggle to meet the right people.",
  "The right people are rarely random.\nThey come from people who know us.",
  "Swipe culture didn't just change dating.\nIt changed how people value themselves —\nand how they evaluate others.",
  "Attention without intention.\nVolume mistaken for opportunity.",
  "When everyone is one swipe away,\nno one feels seriously considered.\n\nThat's what Orbit is built to change.",
  "Orbit is a place for thoughtful introductions.\nSome people are here to introduce someone they know.\nOthers are here to be introduced.\nChoose the role that fits you.",
];

const SPONSOR_NARRATIVE = [
  "You already know someone worth introducing.\nYour have awesome friends, why do they struggle to find quality relationships?",
  "The truth is, it's crazy out there\nAnd it's not just the people.  It's the way people find people",
  "What used to happen through friends and family\nbecame something you do alone, at scale.",
  "As a part of the Orbit community\nyou join a network of fellow Sponsors",
  "These Sponsors are the only way introductions happen on Orbit.\nSponsors never message singles.",
  "You coordinate with other sponsors, people who know their singles well,\nwho can speak honestly, and advocate without sugarcoating.",
  "Good introductions change lives.\nBad one's waste years.",
];

const SPONSOR_CTAS: { primary: string; subtext?: string }[] = [
  { primary: "Apply to become a sponsor" },
  { primary: "Explore being a single" },
  { primary: "More about the orbit app" },
];

const SINGLE_NARRATIVE = [
  "You don't have to sell yourself on Orbit.\nSomeone who knows you makes the introduction.",
  "You are worth introducing.\nAnd the person you're meeting is, too.",
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
  const router = useRouter();
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

  const handleSingleClick = () => {
    setPath("single");
    setScrollToNarrative(true);
  };

  const handleApplyClick = () => {
    window.location.href = INSTALL_URL;
  };

  const handleMoreInfoClick = () => {
    router.push("/more");
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
          children={i === 7 ? <ForkCards onSelect={handleForkSelect} /> : undefined}
        />
      ))}

      {path && (
        <div ref={branchTargetRef}>
          {path === "introducer" &&
            SPONSOR_NARRATIVE.map((line, i) => (
              <StorySection
                key={`sponsor-${i}`}
                slideIndex={9 + i}
                text={line}
                variant="body"
                children={
                  i === 6 ? (
                    <div className="w-full mt-8 flex flex-col gap-3">
                      {SPONSOR_CTAS.map((cta, ctaIndex) => {
                        const baseClasses = `w-full rounded-xl border px-5 py-6 text-center text-base font-light ${
                          ctaIndex === 0
                            ? "bg-white text-[#566B89] border-white"
                            : "border-border-light bg-background-card/80 text-text-dark"
                        }`;
                        const isApplyButton = ctaIndex === 0;
                        const isSingleButton = ctaIndex === 1;
                        const isMoreInfoButton = ctaIndex === 2;

                        if (isApplyButton) {
                          return (
                            <button
                              key={cta.primary}
                              type="button"
                              onClick={handleApplyClick}
                              className={`${baseClasses} transition-colors hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-white/20 focus:ring-offset-2 focus:ring-offset-background-main`}
                            >
                              {cta.primary}
                            </button>
                          );
                        }

                        if (isSingleButton) {
                          return (
                            <button
                              key={cta.primary}
                              type="button"
                              onClick={handleSingleClick}
                              className={`${baseClasses} transition-colors hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-white/20 focus:ring-offset-2 focus:ring-offset-background-main`}
                            >
                              {cta.primary}
                            </button>
                          );
                        }

                        if (isMoreInfoButton) {
                          return (
                            <button
                              key={cta.primary}
                              type="button"
                              onClick={handleMoreInfoClick}
                              className={`${baseClasses} transition-colors hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-white/20 focus:ring-offset-2 focus:ring-offset-background-main`}
                            >
                              {cta.primary}
                            </button>
                          );
                        }

                        return (
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

          {path === "single" &&
            SINGLE_NARRATIVE.map((line, i) => (
              <StorySection
                key={`single-${i}`}
                slideIndex={9 + i}
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
                        const isApplyButton = ctaIndex === 0;
                        const isMoreInfoButton = ctaIndex === 1;
                        const isSponsorButton = ctaIndex === 2;

                        if (isApplyButton) {
                          return (
                            <button
                              key={cta.primary}
                              type="button"
                              onClick={handleApplyClick}
                              className={`${baseClasses} transition-colors hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-white/20 focus:ring-offset-2 focus:ring-offset-background-main`}
                            >
                              {cta.primary}
                            </button>
                          );
                        }

                        if (isMoreInfoButton) {
                          return (
                            <button
                              key={cta.primary}
                              type="button"
                              onClick={handleMoreInfoClick}
                              className={`${baseClasses} transition-colors hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-white/20 focus:ring-offset-2 focus:ring-offset-background-main`}
                            >
                              {cta.primary}
                            </button>
                          );
                        }

                        if (isSponsorButton) {
                          return (
                            <button
                              key={cta.primary}
                              type="button"
                              onClick={handleSponsorClick}
                              className={`${baseClasses} transition-colors hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-white/20 focus:ring-offset-2 focus:ring-offset-background-main`}
                            >
                              {cta.primary}
                            </button>
                          );
                        }

                        return (
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
