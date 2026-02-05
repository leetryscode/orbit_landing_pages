import { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary";
  className?: string;
};

export default function Button({
  children,
  href,
  onClick,
  variant = "primary",
  className = "",
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-xl px-8 py-4 text-base font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-white/30 focus:ring-offset-2 focus:ring-offset-background-main";

  const variants = {
    primary:
      "bg-action-primary text-primary-blue hover:bg-action-primary-hover active:bg-action-primary-active shadow-subtle",
    secondary:
      "bg-transparent text-text-dark border-2 border-border-light hover:border-white/30",
  };

  const classes = `${base} ${variants[variant]} ${className}`.trim();

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button type="button" onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
