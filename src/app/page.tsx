import Image from "next/image";
import { INSTALL_URL } from "@/config";

const NARRATIVE = [
  "Orbit is a different kind of dating app.",
  "Instead of singles swiping through strangers, friends introduce friends.",
  "On most apps, you build your own profile and try to guess chemistry from photos and prompts. On Orbit, sponsors represent the singles they know. They create the profile, talk with other sponsors, and when both think it's a good fit, an introduction is made.",
  "Singles aren't browsing the entire city. They're meeting someone who was thoughtfully introduced — with someone vouching for both sides.",
  "The idea started simply.",
  "One night my wife came home excited because she had found a date for a friend of mine. Not through an app, but through a conversation with her friends about their friends.",
  "They compared notes, talked about what each person was like, and decided to set them up.",
  "It felt different than an app. There was context. Someone actually knew both people.",
  "I kept coming back to that feeling, and eventually built Orbit around it.",
  "Orbit isn't public or performative. Sponsors participate as connectors, not daters, and singles join through someone who knows them. The goal isn't quantity. It's the right introduction.",
  "Orbit is just getting started. The first group of sponsors and singles will shape what this becomes.",
  "If this feels like something you'd tell a friend about, you're probably exactly who this is for.",
  "Request an invite and we'll reach out personally.",
];

export default function HomePage() {
  return (
    <div className="min-h-dvh bg-background-main text-text-dark">
      {/* Brand */}
      <header className="flex justify-center pt-8 pb-6">
        <span className="tracking-[0.15em] uppercase font-orbit-heading text-orbit-text text-sm">
          Orbit
        </span>
      </header>

      {/* Narrative */}
      <section className="pt-4 pb-16 px-5">
        <div className="max-w-narrative-lg mx-auto space-y-6 text-lg leading-relaxed text-text-dark font-normal">
          {NARRATIVE.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
          <div className="flex justify-center pt-4">
            <a
              href={INSTALL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full px-8 py-4 text-base font-medium bg-action-primary text-primary-blue border border-white transition-colors hover:bg-action-primary-hover focus:outline-none focus:ring-2 focus:ring-orbit-border focus:ring-offset-2 focus:ring-offset-background-main"
            >
              Visit Orbit
            </a>
          </div>
          <div className="pt-6 flex items-center gap-4">
            <div className="w-16 h-16 sm:w-20 sm:h-20 flex-shrink-0 rounded-full overflow-hidden ring-2 ring-orbit-border/50 shadow-subtle">
              <Image
                src="/founder-photo.jpg"
                alt="Lee Williams"
                width={80}
                height={80}
                className="w-full h-full object-cover"
              />
            </div>
            <p className="text-text-dark">
              — Lee Williams
              <br />
              Founder, Orbit Introductions
            </p>
          </div>
        </div>
      </section>

    </div>
  );
}
