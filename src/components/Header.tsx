import Link from "next/link";
import Container from "./Container";

export default function Header() {
  return (
    <header className="border-b border-border-light py-5">
      <Container>
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="text-lg font-medium tracking-wide text-text-dark hover:text-white transition-colors"
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
        </div>
      </Container>
    </header>
  );
}
