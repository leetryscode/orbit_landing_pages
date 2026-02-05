import Link from "next/link";
import Container from "./Container";

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-border-light py-8">
      <Container>
        <p className="text-xs text-text-light">
          © {new Date().getFullYear()} Orbit. All rights reserved.
        </p>
        <div className="mt-2 flex gap-4 text-xs text-text-light">
          <Link href="/" className="hover:text-text-dark transition-colors">
            Home
          </Link>
          <Link href="/contact" className="hover:text-text-dark transition-colors">
            Contact
          </Link>
        </div>
      </Container>
    </footer>
  );
}
