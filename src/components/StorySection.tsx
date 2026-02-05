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
  const base = "min-h-[100svh] flex flex-col items-center justify-center px-6 py-16 snap-start snap-always";

  const textSizes = {
    headline: "text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-text-dark leading-[1.3] max-w-narrative text-center",
    body: "text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-text-dark leading-[1.4] max-w-narrative text-center",
    cta: "max-w-narrative text-center",
  };

  return (
    <section className={base}>
      {text && <p className={textSizes[variant]}>{text}</p>}
      {children}
    </section>
  );
}
