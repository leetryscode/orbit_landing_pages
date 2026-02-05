import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 py-5 px-6 flex items-center justify-between bg-background-main/80 backdrop-blur-sm">
      <Link
        href="/"
        className="text-base font-medium tracking-wide text-text-dark hover:text-white transition-colors"
      >
        Orbit
      </Link>
      <nav>
        <Link
          href="/contact"
          className="text-sm text-text-light hover:text-text-dark transition-colors"
        >
          Contact
        </Link>
      </nav>
    </header>
  );
}
