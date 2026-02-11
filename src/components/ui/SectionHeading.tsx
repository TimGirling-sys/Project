import { ReactNode } from "react";

interface SectionHeadingProps {
  children: ReactNode;
  as?: "h1" | "h2" | "h3";
  size?: "hero" | "section" | "sub";
}

export function SectionHeading({
  children,
  as: Tag = "h2",
  size = "section",
}: SectionHeadingProps) {
  const sizeClasses = {
    hero: "text-4xl md:text-6xl font-bold leading-[1.1] tracking-tight",
    section: "text-3xl md:text-5xl font-bold leading-[1.2] -tracking-wide",
    sub: "text-2xl font-bold leading-[1.3]",
  };

  return (
    <Tag
      className={`font-display text-gray-900 mb-8 ${sizeClasses[size]}`}
    >
      {children}
    </Tag>
  );
}
