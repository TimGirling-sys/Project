import { ReactNode } from "react";

interface BodyCopyProps {
  children: ReactNode;
  secondary?: boolean;
  className?: string;
}

export function BodyCopy({
  children,
  secondary = false,
  className = "",
}: BodyCopyProps) {
  return (
    <p
      className={`text-lg leading-relaxed mb-6 ${
        secondary ? "text-navy-300" : "text-slate-200"
      } ${className}`}
    >
      {children}
    </p>
  );
}
