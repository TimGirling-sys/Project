import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Scale.digital — Acquisition Systems That Scale With You",
  description:
    "Scale.digital installs predictable acquisition systems for agencies, coaches, and consultants scaling from $10K to $100K/month. Infrastructure, not tactics.",
  keywords:
    "acquisition systems, agency scaling, lead generation, growth infrastructure, predictable revenue, consultants, coaches",
  openGraph: {
    title: "Scale.digital — Predictable Revenue. Engineered.",
    description:
      "We install complete acquisition systems for agencies and consultants scaling from $10K to $100K/month. Infrastructure, not tactics.",
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
