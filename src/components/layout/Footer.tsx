import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-navy-800/60 py-16">
      <div className="container-wide flex flex-col md:flex-row justify-between items-center gap-8">
        <span className="font-display text-lg font-bold text-white">
          Scale<span className="text-accent">.</span>digital
        </span>

        <ul className="flex gap-8">
          <li>
            <Link
              href="/method"
              className="text-sm text-navy-400 hover:text-white transition-colors"
            >
              How It Works
            </Link>
          </li>
          <li>
            <Link
              href="/routes"
              className="text-sm text-navy-400 hover:text-white transition-colors"
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              href="/#qualification"
              className="text-sm text-navy-400 hover:text-white transition-colors"
            >
              Is This For Me?
            </Link>
          </li>
          <li>
            <Link
              href="/apply"
              className="text-sm text-navy-400 hover:text-white transition-colors"
            >
              Free Audit
            </Link>
          </li>
        </ul>

        <span className="text-sm text-navy-500">
          &copy; {new Date().getFullYear()} Scale.digital. All rights reserved.
        </span>
      </div>
    </footer>
  );
}
