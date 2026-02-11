"use client";

import { useState } from "react";
import Link from "next/link";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <div className="max-w-wide mx-auto px-5 md:px-6 py-4 flex items-center justify-between">
        <Link
          href="/"
          className="font-display text-lg font-bold tracking-tight text-gray-900"
        >
          NOMADS
        </Link>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          <div className="space-y-1">
            <span
              className={`block w-5 h-0.5 bg-black transition-all ${isOpen ? "rotate-45 translate-y-1.5" : ""}`}
            />
            <span
              className={`block w-5 h-0.5 bg-black transition-all ${isOpen ? "opacity-0" : ""}`}
            />
            <span
              className={`block w-5 h-0.5 bg-black transition-all ${isOpen ? "-rotate-45 -translate-y-1.5" : ""}`}
            />
          </div>
        </button>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-8">
          <li>
            <Link
              href="/method"
              className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors tracking-wide"
            >
              Method
            </Link>
          </li>
          <li>
            <Link
              href="/routes"
              className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors tracking-wide"
            >
              Routes
            </Link>
          </li>
          <li>
            <Link
              href="/#qualification"
              className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors tracking-wide"
            >
              Who This Is For
            </Link>
          </li>
          <li>
            <Link
              href="/apply"
              className="text-sm font-semibold text-white bg-black px-5 py-2 hover:bg-gray-800 transition-colors"
            >
              Apply
            </Link>
          </li>
        </ul>

        {/* Mobile nav */}
        {isOpen && (
          <div className="absolute top-full left-0 right-0 bg-white border-b border-gray-200 md:hidden">
            <ul className="flex flex-col gap-4 p-6">
              <li>
                <Link
                  href="/method"
                  className="text-sm font-medium text-gray-600"
                  onClick={() => setIsOpen(false)}
                >
                  Method
                </Link>
              </li>
              <li>
                <Link
                  href="/routes"
                  className="text-sm font-medium text-gray-600"
                  onClick={() => setIsOpen(false)}
                >
                  Routes
                </Link>
              </li>
              <li>
                <Link
                  href="/#qualification"
                  className="text-sm font-medium text-gray-600"
                  onClick={() => setIsOpen(false)}
                >
                  Who This Is For
                </Link>
              </li>
              <li>
                <Link
                  href="/apply"
                  className="inline-block text-sm font-semibold text-white bg-black px-5 py-2"
                  onClick={() => setIsOpen(false)}
                >
                  Apply
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}
