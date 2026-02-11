import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Scale.digital — Get Found Online. Get More Customers. Grow on Autopilot.",
  description:
    "We take established businesses from invisible online to having a complete system that brings in qualified customers automatically. Websites, ads, lead capture, and automation — all done for you.",
  keywords:
    "website design for small business, digital marketing for local business, lead generation services, marketing automation, customer acquisition, online presence",
  openGraph: {
    title: "Scale.digital — More Customers. Less Busywork.",
    description:
      "We build websites, run ads, capture leads, and automate follow-up for established businesses. One partner. Complete system. Real results.",
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
        <main className="pt-[72px]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
