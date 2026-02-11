import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-gray-200 py-12">
      <div className="max-w-wide mx-auto px-5 md:px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <span className="font-display text-base font-bold text-gray-900">
          NOMADS
        </span>

        <ul className="flex gap-6">
          <li>
            <Link
              href="/method"
              className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
            >
              Method
            </Link>
          </li>
          <li>
            <Link
              href="/routes"
              className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
            >
              Routes
            </Link>
          </li>
          <li>
            <Link
              href="/#qualification"
              className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
            >
              Qualification
            </Link>
          </li>
          <li>
            <Link
              href="/apply"
              className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
            >
              Apply
            </Link>
          </li>
        </ul>

        <span className="text-sm text-gray-500">
          &copy; {new Date().getFullYear()} Nomads. All rights reserved.
        </span>
      </div>
    </footer>
  );
}
