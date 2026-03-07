"use client";

import { useEffect, useRef, useState } from "react";

type Path = "introducer" | "single";

type ForkCardsProps = {
  isSlide6Active?: boolean;
  onSelect: (path: Path, options?: { fromTap: boolean }) => void;
  prefersReducedMotion?: boolean;
};

const CARD_DELAY_MS = 4000; // cards appear 4000ms after slide 5 becomes active

export default function ForkCards({
  isSlide6Active = false,
  onSelect,
  prefersReducedMotion = false,
}: ForkCardsProps) {
  const [cardsVisible, setCardsVisible] = useState(false);
  const pendingPathRef = useRef<Path | null>(null);
  const pointerStartYRef = useRef<number>(0);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (!isSlide6Active) return;

    if (prefersReducedMotion) {
      setCardsVisible(true);
      return;
    }

    timerRef.current = setTimeout(() => {
      setCardsVisible(true);
    }, CARD_DELAY_MS);

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [isSlide6Active, prefersReducedMotion]);

  const onSelectRef = useRef(onSelect);
  onSelectRef.current = onSelect;

  const handleSelect = (path: Path, fromTap = false) => {
    onSelectRef.current(path, { fromTap });
    pendingPathRef.current = null;
  };

  const handlePointerDown = (path: Path, e: React.PointerEvent) => {
    pendingPathRef.current = path;
    pointerStartYRef.current = e.clientY;
  };

  useEffect(() => {
    const handlePointerMove = (e: PointerEvent) => {
      if (pendingPathRef.current === null) return;
      const deltaY = pointerStartYRef.current - e.clientY;
      if (deltaY > 10) {
        const path = pendingPathRef.current;
        pendingPathRef.current = null;
        onSelectRef.current(path, { fromTap: false });
      }
    };

    const handlePointerUp = () => {
      pendingPathRef.current = null;
    };

    document.addEventListener("pointermove", handlePointerMove);
    document.addEventListener("pointerup", handlePointerUp);
    document.addEventListener("pointercancel", handlePointerUp);
    return () => {
      document.removeEventListener("pointermove", handlePointerMove);
      document.removeEventListener("pointerup", handlePointerUp);
      document.removeEventListener("pointercancel", handlePointerUp);
    };
  }, []);

  const handleClick = (path: Path) => {
    handleSelect(path, true);
  };

  return (
    <div
      className={`w-full mt-8 flex gap-3 ${!cardsVisible ? "opacity-0 pointer-events-none" : ""}`}
      aria-hidden={!cardsVisible}
    >
      <button
        type="button"
        className={`fork-card flex-1 rounded-xl border border-border-light bg-background-card/80 px-5 py-6 text-center text-base font-light text-text-dark transition-colors hover:bg-background-card focus:outline-none focus:ring-2 focus:ring-white/20 focus:ring-offset-2 focus:ring-offset-background-main ${
          cardsVisible && (prefersReducedMotion ? "" : "fork-card-animate")
        }`}
        onClick={() => handleClick("introducer")}
        onPointerDown={(e) => handlePointerDown("introducer", e)}
      >
        I&apos;m here to introduce someone
      </button>
      <button
        type="button"
        className={`fork-card flex-1 rounded-xl border border-border-light bg-background-card/80 px-5 py-6 text-center text-base font-light text-text-dark transition-colors hover:bg-background-card focus:outline-none focus:ring-2 focus:ring-white/20 focus:ring-offset-2 focus:ring-offset-background-main ${
          cardsVisible && (prefersReducedMotion ? "" : "fork-card-animate")
        }`}
        onClick={() => handleClick("single")}
        onPointerDown={(e) => handlePointerDown("single", e)}
      >
        I&apos;m open to being introduced
      </button>
    </div>
  );
}
