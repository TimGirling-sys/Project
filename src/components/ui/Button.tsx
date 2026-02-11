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
    primary: "text-white bg-black hover:bg-gray-800",
    secondary: "text-gray-900 bg-transparent border border-gray-200 hover:border-gray-400",
  };

  return (
    <Link href={href} className={`${base} ${variants[variant]}`}>
      {children}
    </Link>
  );
}
