export default function Footer() {
  return (
    <footer className="mt-auto border-t border-border-light py-8">
      <div className="mx-auto w-full max-w-narrative-lg px-5 text-center">
        <p className="text-xs text-text-light">
          © {new Date().getFullYear()} Orbit
        </p>
      </div>
    </footer>
  );
}
