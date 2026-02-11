import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Nomads — Predictable Growth Systems for Agencies",
  description:
    "Nomads builds calm, predictable growth systems for companies scaling globally. We create acquisition engines that work across borders.",
  keywords:
    "growth agency, marketing agency, acquisition systems, global scaling, funnel optimization",
  openGraph: {
    title: "Nomads — Calm, Predictable Growth Systems",
    description:
      "Nomads builds calm, predictable growth systems for companies scaling globally. We create acquisition engines that work across borders.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Navbar />
        <main className="pt-[60px]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
