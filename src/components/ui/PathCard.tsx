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
    <div className="border border-navy-700 p-8 bg-navy-900 hover:border-navy-500 transition-colors">
      <div className="mb-6 pb-6 border-b border-navy-700">
        <h3 className="font-display text-2xl font-bold text-white mb-2">{name}</h3>
        <p className="text-base text-navy-300">{subtitle}</p>
      </div>

      <div className="mb-6">
        <span className="block text-sm font-semibold text-accent mb-2 uppercase tracking-widest">
          The Challenge
        </span>
        <p className="text-base leading-relaxed text-slate-200">{bottleneck}</p>
      </div>

      <div className="mb-6">
        <span className="block text-sm font-semibold text-accent mb-2 uppercase tracking-widest">
          What We Install
        </span>
        <p className="text-base leading-relaxed text-slate-200">{installs}</p>
      </div>

      <Link
        href={href}
        className="inline-block text-base font-semibold text-accent underline underline-offset-4 hover:text-accent-hover transition-colors"
      >
        Get Started &rarr;
      </Link>
    </div>
  );
}
