import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { CheckpointHeader } from "@/components/ui/CheckpointHeader";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { BodyCopy } from "@/components/ui/BodyCopy";
import { ResultItem } from "@/components/ui/ResultItem";
import { Button } from "@/components/ui/Button";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Deployment Routes — Nomads",
  description:
    "Four deployment routes based on your current stage. Basecamp, Summit, Compass, Expedition. Find the right path for your business.",
};

const routes = [
  {
    id: "basecamp",
    number: "01",
    name: "Basecamp",
    subtitle: "Foundation Installation",
    situation:
      "You have a proven service. Clients get results. But growth is entirely founder-dependent. New clients come from referrals, personal outreach, or reputation. There is no system generating demand. Revenue is unpredictable.",
    bottleneck:
      "No acquisition system exists. You are the pipeline. Your calendar is the constraint. When you stop selling, revenue stops.",
    installs: [
      {
        label: "Stage 01",
        title: "Offer Architecture",
        description:
          "Transform your service description into a compelling market offer with clear positioning and differentiation.",
      },
      {
        label: "Stage 02",
        title: "Market Signal Clarity",
        description:
          "Define exactly who your system targets and what behavioral signals indicate readiness to buy.",
      },
      {
        label: "Stage 03",
        title: "Creative Infrastructure",
        description:
          "Build the messaging, ads, and content that bridge your offer to your market.",
      },
      {
        label: "Stage 05",
        title: "Capture Engineering",
        description:
          "Design and build the funnel infrastructure that converts attention into booked calls.",
      },
    ],
    bestFor:
      "Agencies, consultancies, and coaches at $10K–$30K/month who are ready to build their first real acquisition system.",
  },
  {
    id: "summit",
    number: "02",
    name: "Summit",
    subtitle: "Scaling Infrastructure",
    situation:
      "You have a system. Leads come in. But scaling breaks things. Conversion rates drop at higher volume. Unit economics deteriorate. What worked at $30K/month doesn't work at $60K.",
    bottleneck:
      "The foundation exists but it wasn't built to scale. Components that worked at low volume create friction at higher volume. The system needs reinforcement, not replacement.",
    installs: [
      {
        label: "Stage 04",
        title: "Traffic Scaling Protocols",
        description:
          "Build traffic systems that maintain efficiency at 2x, 5x, 10x volume. Platform-agnostic, algorithm-resistant.",
      },
      {
        label: "Stages 05-06",
        title: "Conversion Optimization",
        description:
          "Diagnose and fix the conversion drops that appear at scale. Rebuild capture and nurture for higher volume.",
      },
      {
        label: "Stage 07",
        title: "Sales System Refinement",
        description:
          "Systematize the sales process so it works beyond the founder. Scripts, qualification criteria, handoff protocols.",
      },
      {
        label: "Stage 08",
        title: "Retention Architecture",
        description:
          "Install retention systems that compound growth. LTV optimization, referral infrastructure, expansion revenue.",
      },
    ],
    bestFor:
      "Businesses at $30K–$70K/month with an existing system that needs to scale without breaking.",
  },
  {
    id: "compass",
    number: "03",
    name: "Compass",
    subtitle: "Market Expansion",
    situation:
      "Your domestic system works. Growth at home is predictable. But every attempt to expand into new markets has been inconsistent, expensive, or outright failed.",
    bottleneck:
      "What works in one market doesn't automatically translate to another. Different buyer behavior, different competitive landscapes, different trust signals. Your system needs adaptation, not duplication.",
    installs: null,
    installSummary:
      "Multi-market acquisition architecture. We adapt your Conversion Curve for new territories — localized offers, market-specific creative, territory-appropriate traffic channels, and culturally aligned sales processes. Same system DNA. Different environmental expression.",
    bestFor:
      "Businesses at $50K+/month with a proven domestic system ready to expand into 1–3 new markets.",
  },
  {
    id: "expedition",
    number: "04",
    name: "Expedition",
    subtitle: "Full System Overhaul",
    situation:
      "You've tried agencies. You've tried freelancers. You've tried doing it yourself. Nothing sticks. The acquisition layer of your business is a patchwork of disconnected experiments.",
    bottleneck:
      "There is no single failure point. The entire system needs rebuilding. Attempting to fix individual stages won't work because the stages were never designed to work together.",
    installs: null,
    installSummary:
      "Complete acquisition system rebuild. All 8 stages of the Conversion Curve. Full infrastructure replacement. Offer → Market → Creative → Traffic → Capture → Nurture → Sales → Retention. Engineered as one connected system from scratch.",
    bestFor:
      "Businesses at $50K–$100K+/month who have outgrown their current patchwork and need a clean, engineered system.",
  },
];

export default function RoutesPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-12">
        <div className="container-narrow">
          <RevealOnScroll>
            <CheckpointHeader label="Deployment Routes" />
            <SectionHeading as="h1" size="hero">
              Different environments. Different routes.
            </SectionHeading>
            <p className="text-xl leading-relaxed text-gray-900 font-medium mb-8">
              Not every business needs the same system. Your current stage
              dictates which infrastructure gets installed first. We deploy in
              four routes &mdash; each designed for a specific bottleneck.
            </p>
          </RevealOnScroll>
        </div>
      </section>

      {/* Routes */}
      {routes.map((route) => (
        <section
          key={route.id}
          id={route.id}
          className="py-20 border-t border-gray-200"
        >
          <div className="container-narrow">
            <RevealOnScroll>
              <CheckpointHeader label={`Route ${route.number}`} />
              <SectionHeading>{route.name}</SectionHeading>
              <p className="text-xl leading-relaxed text-gray-600 font-medium -mt-4 mb-8">
                {route.subtitle}
              </p>

              <div className="w-10 h-0.5 bg-gray-300 my-8" />

              <div className="grid gap-10 mt-8">
                <div>
                  <p className="block text-sm font-semibold text-gray-600 mb-2 uppercase tracking-widest">
                    The Situation
                  </p>
                  <BodyCopy>{route.situation}</BodyCopy>
                </div>

                <div>
                  <p className="block text-sm font-semibold text-gray-600 mb-2 uppercase tracking-widest">
                    The Bottleneck
                  </p>
                  <BodyCopy>{route.bottleneck}</BodyCopy>
                </div>

                <div>
                  <p className="block text-sm font-semibold text-gray-600 mb-2 uppercase tracking-widest">
                    What We Install
                  </p>
                  {route.installs ? (
                    <div className="grid gap-8 mt-4">
                      {route.installs.map((item) => (
                        <ResultItem
                          key={item.label}
                          label={item.label}
                          title={item.title}
                          description={item.description}
                        />
                      ))}
                    </div>
                  ) : (
                    <BodyCopy secondary>
                      {(route as any).installSummary}
                    </BodyCopy>
                  )}
                </div>

                <div>
                  <p className="block text-sm font-semibold text-gray-600 mb-2 uppercase tracking-widest">
                    Best For
                  </p>
                  <BodyCopy secondary>{route.bestFor}</BodyCopy>
                </div>
              </div>

              <div className="mt-10">
                <Button href="/apply">Apply for {route.name}</Button>
              </div>
            </RevealOnScroll>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="py-20 border-t border-gray-200 bg-gray-50">
        <div className="container-narrow">
          <RevealOnScroll>
            <SectionHeading>Not sure which route?</SectionHeading>
            <BodyCopy secondary>
              That&rsquo;s what the diagnosis call is for. We&rsquo;ll map your
              Conversion Curve, identify the specific constraint, and recommend
              the right deployment path for your situation.
            </BodyCopy>
            <div className="mt-8">
              <Button href="/apply">Book Your Diagnosis</Button>
            </div>
          </RevealOnScroll>
        </div>
      </section>
    </>
  );
}
