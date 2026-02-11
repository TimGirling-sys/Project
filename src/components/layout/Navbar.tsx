"use client";

import { useState } from "react";
import Link from "next/link";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-navy-950/95 backdrop-blur-sm border-b border-navy-800/60">
      <div className="container-wide py-5 flex items-center justify-between">
        <Link
          href="/"
          className="font-display text-xl font-bold tracking-tight text-white"
        >
          Scale<span className="text-accent">.</span>digital
        </Link>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          <div className="space-y-1.5">
            <span
              className={`block w-5 h-0.5 bg-white transition-all ${isOpen ? "rotate-45 translate-y-2" : ""}`}
            />
            <span
              className={`block w-5 h-0.5 bg-white transition-all ${isOpen ? "opacity-0" : ""}`}
            />
            <span
              className={`block w-5 h-0.5 bg-white transition-all ${isOpen ? "-rotate-45 -translate-y-2" : ""}`}
            />
          </div>
        </button>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-10">
          <li>
            <Link
              href="/method"
              className="text-sm font-medium text-navy-300 hover:text-white transition-colors tracking-wide"
            >
              How It Works
            </Link>
          </li>
          <li>
            <Link
              href="/routes"
              className="text-sm font-medium text-navy-300 hover:text-white transition-colors tracking-wide"
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              href="/#qualification"
              className="text-sm font-medium text-navy-300 hover:text-white transition-colors tracking-wide"
            >
              Is This For Me?
            </Link>
          </li>
          <li>
            <Link
              href="/apply"
              className="text-sm font-semibold text-navy-950 bg-accent px-6 py-2.5 hover:bg-accent-hover transition-colors"
            >
              Free Audit
            </Link>
          </li>
        </ul>

        {/* Mobile nav */}
        {isOpen && (
          <div className="absolute top-full left-0 right-0 bg-navy-950 border-b border-navy-800 md:hidden">
            <ul className="flex flex-col gap-5 p-8">
              <li>
                <Link
                  href="/method"
                  className="text-sm font-medium text-navy-300"
                  onClick={() => setIsOpen(false)}
                >
                  How It Works
                </Link>
              </li>
              <li>
                <Link
                  href="/routes"
                  className="text-sm font-medium text-navy-300"
                  onClick={() => setIsOpen(false)}
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/#qualification"
                  className="text-sm font-medium text-navy-300"
                  onClick={() => setIsOpen(false)}
                >
                  Is This For Me?
                </Link>
              </li>
              <li>
                <Link
                  href="/apply"
                  className="inline-block text-sm font-semibold text-navy-950 bg-accent px-6 py-2.5"
                  onClick={() => setIsOpen(false)}
                >
                  Free Audit
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}
