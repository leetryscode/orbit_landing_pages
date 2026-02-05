import Container from "@/components/Container";

export default function ContactPage() {
  return (
    <div className="flex-1 pt-24 pb-16 bg-background-main min-h-[100svh]">
      <Container>
        <h1 className="text-3xl sm:text-4xl font-medium tracking-tight text-text-dark max-w-2xl">
          Contact
        </h1>
        <p className="mt-4 text-lg text-text-light max-w-xl">
          If you&apos;re building Orbit with us, say hello.
        </p>

        <div className="mt-12 space-y-6">
          <a
            href="mailto:hello@orbitintroductions.com"
            className="text-text-dark hover:text-white transition-colors underline underline-offset-4"
          >
            hello@orbitintroductions.com
          </a>

          {/* Optional simple form UI - non-functional, layout only */}
          <div className="mt-10 max-w-md space-y-4">
            <div>
              <label
                htmlFor="contact-name"
                className="block text-sm font-medium text-text-light mb-1"
              >
                Name
              </label>
              <input
                id="contact-name"
                type="text"
                placeholder="Your name"
                className="w-full rounded-xl border border-border-light bg-background-card/50 px-4 py-3 text-text-dark placeholder:text-text-light/60 focus:outline-none focus:ring-2 focus:ring-white/20 focus:ring-offset-2 focus:ring-offset-background-main"
                disabled
                aria-hidden="true"
              />
            </div>
            <div>
              <label
                htmlFor="contact-email"
                className="block text-sm font-medium text-text-light mb-1"
              >
                Email
              </label>
              <input
                id="contact-email"
                type="email"
                placeholder="you@example.com"
                className="w-full rounded-xl border border-border-light bg-background-card/50 px-4 py-3 text-text-dark placeholder:text-text-light/60 focus:outline-none focus:ring-2 focus:ring-white/20 focus:ring-offset-2 focus:ring-offset-background-main"
                disabled
                aria-hidden="true"
              />
            </div>
            <div>
              <label
                htmlFor="contact-message"
                className="block text-sm font-medium text-text-light mb-1"
              >
                Message
              </label>
              <textarea
                id="contact-message"
                rows={4}
                placeholder="Your message..."
                className="w-full rounded-xl border border-border-light bg-background-card/50 px-4 py-3 text-text-dark placeholder:text-text-light/60 focus:outline-none focus:ring-2 focus:ring-white/20 focus:ring-offset-2 focus:ring-offset-background-main resize-none"
                disabled
                aria-hidden="true"
              />
            </div>
            <p className="text-xs text-text-light">
              Form is placeholder only. Use the email link above to reach us.
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
}
