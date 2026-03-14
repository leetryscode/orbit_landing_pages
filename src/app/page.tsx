import Image from "next/image";
import { INSTALL_URL } from "@/config";

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
        <div className="max-w-narrative-lg mx-auto space-y-6 text-lg leading-[1.8] text-text-dark font-normal">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-text-dark leading-tight">
            Friends introduce friends.
          </h1>
          <p>
            Instead of swiping through strangers, singles are introduced by someone who actually knows them.
          </p>
          <p>
            On most apps, you build your own profile and try to guess chemistry from photos and prompts.{" "}
            <span className="text-xl font-bold italic">On Orbit, a sponsor represents the single they know.</span>{" "}
            They create the profile, talk with other sponsors, and when both think it&apos;s a good fit, an introduction is made.
          </p>
          <p>
            Singles aren&apos;t browsing the entire city. They&apos;re meeting someone who was thoughtfully introduced{" "}
            <span className="text-xl font-bold italic">— with someone vouching for both sides.</span>
          </p>
          <p>
            The idea started simply. One night my wife came home excited because she had found a date for a friend of mine. Not through an app, but through a conversation with her friends about their friends.
          </p>
          <p>
            They compared notes, talked about what each person was like, and decided to set them up.
          </p>
          <p>
            <span className="text-xl font-bold italic">It felt different.</span> There was context. Someone actually knew both people.
          </p>
          <p>
            I kept coming back to that feeling, and eventually built Orbit around it.
          </p>
          <p>
            Orbit isn&apos;t public or performative. Sponsors participate as connectors, not daters, and singles join through someone who knows them.{" "}
            <span className="text-xl font-bold italic">The goal isn&apos;t quantity. It&apos;s the right introduction.</span>
          </p>
          <p>
            Orbit is just getting started. The first group of sponsors and singles will shape what this becomes.
          </p>
          <p>
            If this feels like something you&apos;d tell a friend about, you&apos;re probably exactly who this is for.
          </p>
          <p>
            Request an invite and we&apos;ll reach out personally.
          </p>
          <div className="flex justify-center pt-4">
            <a
              href={INSTALL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full px-10 py-4 text-base font-medium bg-white/10 text-white border border-white transition-all duration-150 hover:bg-white/15 hover:opacity-95 active:scale-[0.98] active:bg-white/20 focus:outline-none focus:ring-2 focus:ring-orbit-border focus:ring-offset-2 focus:ring-offset-background-main"
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
