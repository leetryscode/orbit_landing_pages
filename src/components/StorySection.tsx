import { ReactNode } from "react";

type StorySectionProps = {
  text?: string;
  variant?: "headline" | "body" | "cta";
  children?: ReactNode;
};

export default function StorySection({
  text,
  variant = "body",
  children,
}: StorySectionProps) {
  const base = "min-h-[100svh] flex flex-col items-start justify-center px-6 py-16 snap-start snap-always";

  const textSizes = {
    headline: "text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-text-dark leading-[1.3] max-w-narrative text-left whitespace-pre-line",
    body: "text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-text-dark leading-[1.4] max-w-narrative text-left whitespace-pre-line",
    cta: "max-w-narrative text-left",
  };

  return (
    <section className={base}>
      {text && <p className={textSizes[variant]}>{text}</p>}
      {children}
    </section>
  );
}
