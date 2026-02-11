import Link from "next/link";
import { ReactNode } from "react";

interface ButtonProps {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
}

export function Button({ href, children, variant = "primary" }: ButtonProps) {
  const base = "inline-block px-8 py-4 text-base font-semibold transition-colors";
  const variants = {
    primary: "text-navy-950 bg-accent hover:bg-accent-hover",
    secondary: "text-slate-200 bg-transparent border border-navy-600 hover:border-navy-400",
  };

  return (
    <Link href={href} className={`${base} ${variants[variant]}`}>
      {children}
    </Link>
  );
}
