"use client";

import Link from "next/link";
import Container from "@/components/Container";
import Button from "@/components/Button";
import { INSTALL_URL } from "@/config";
import { trackEvent } from "@/lib/analytics";

export default function HomePage() {
  const handleInstallClick = () => {
    trackEvent("install_click");
  };

  return (
    <Container>
      <div className="py-16 sm:py-24">
        <h1 className="text-3xl sm:text-4xl font-medium tracking-tight text-text-dark max-w-2xl">
          Trusted introductions, without pressure.
        </h1>
        <p className="mt-4 text-lg text-text-light max-w-xl">
          Orbit connects singles through people who know them. No swiping, no
          algorithms. Just trusted introductions.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4">
          <a
            href={INSTALL_URL}
            onClick={handleInstallClick}
            className="inline-flex items-center justify-center rounded-xl px-6 py-3 text-sm font-medium bg-action-primary text-primary-blue hover:bg-action-primary-hover active:bg-action-primary-active shadow-subtle transition-colors focus:outline-none focus:ring-2 focus:ring-white/30 focus:ring-offset-2 focus:ring-offset-background-main"
          >
            Install Orbit
          </a>
          <Link
            href="/contact"
            className="text-sm text-text-light hover:text-text-dark transition-colors self-center sm:self-auto"
          >
            Contact
          </Link>
        </div>

        <ul className="mt-16 space-y-4 max-w-lg">
          <li className="text-text-dark">
            Introductions from people who already know and trust you.
          </li>
          <li className="text-text-dark">
            No public profiles. Your story stays between you and your sponsor.
          </li>
          <li className="text-text-dark">
            Calm, private, and designed for real connection.
          </li>
        </ul>
      </div>
    </Container>
  );
}
