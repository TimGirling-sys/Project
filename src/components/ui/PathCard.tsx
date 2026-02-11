import Link from "next/link";

interface PathCardProps {
  name: string;
  subtitle: string;
  bottleneck: string;
  installs: string;
  href?: string;
}

export function PathCard({
  name,
  subtitle,
  bottleneck,
  installs,
  href = "/apply",
}: PathCardProps) {
  return (
    <div className="border border-gray-200 p-8 bg-white hover:border-gray-400 transition-colors">
      <div className="mb-6 pb-6 border-b border-gray-200">
        <h3 className="font-display text-2xl font-bold mb-2">{name}</h3>
        <p className="text-base text-gray-600">{subtitle}</p>
      </div>

      <div className="mb-6">
        <span className="block text-sm font-semibold text-gray-600 mb-2 uppercase tracking-widest">
          The Bottleneck
        </span>
        <p className="text-base leading-relaxed text-gray-900">{bottleneck}</p>
      </div>

      <div className="mb-6">
        <span className="block text-sm font-semibold text-gray-600 mb-2 uppercase tracking-widest">
          This Route Installs
        </span>
        <p className="text-base leading-relaxed text-gray-900">{installs}</p>
      </div>

      <Link
        href={href}
        className="inline-block text-base font-semibold text-accent underline underline-offset-4 hover:text-accent-hover transition-colors"
      >
        Take This Route &rarr;
      </Link>
    </div>
  );
}
