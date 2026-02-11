import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { CheckpointHeader } from "@/components/ui/CheckpointHeader";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { BodyCopy } from "@/components/ui/BodyCopy";
import { ResultItem } from "@/components/ui/ResultItem";
import { Button } from "@/components/ui/Button";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Packages — Scale.digital",
  description:
    "Four packages matched to your revenue stage. Launchpad, Accelerate, Expand, Overhaul. Find the right acquisition system for your business.",
};

const routes = [
  {
    id: "launchpad",
    number: "01",
    name: "Launchpad",
    subtitle: "Foundation Build — $10K–$25K/mo businesses",
    situation:
      "You have a proven service. Clients love your work. But growth is completely founder-dependent. New clients come from referrals, personal networking, or your reputation. There's no system generating demand independently.",
    bottleneck:
      "No acquisition system exists. You are the pipeline. Your calendar is the ceiling. When you stop actively selling, revenue stops with it.",
    installs: [
      {
        label: "Stage 01",
        title: "Offer Architecture",
        description:
          "Transform your service description into a compelling market offer with clear positioning, differentiation, and a reason to act now.",
      },
      {
        label: "Stage 02",
        title: "Market Signal Clarity",
        description:
          "Define exactly who your system targets and what behavioral signals indicate they're ready to buy.",
      },
      {
        label: "Stage 03",
        title: "Creative Infrastructure",
        description:
          "Build the messaging, ad systems, and content that bridge your offer to your target market.",
      },
      {
        label: "Stage 05",
        title: "Capture Engineering",
        description:
          "Design and build the funnel infrastructure that converts attention into booked discovery calls.",
      },
    ],
    bestFor:
      "Agency owners, consultants, and coaches at $10K–$25K/month who are ready to build their first real acquisition system and stop relying on referrals.",
  },
  {
    id: "accelerate",
    number: "02",
    name: "Accelerate",
    subtitle: "Scale Infrastructure — $25K–$50K/mo businesses",
    situation:
      "You have some lead flow. Maybe ads are running, maybe you have a basic funnel. But scaling breaks things. Conversion rates drop at higher volume. Your cost per acquisition rises. What worked at $25K/month falls apart at $50K.",
    bottleneck:
      "The foundation exists but it wasn't built to scale. Components that worked at low volume create friction at higher volume. The system needs engineering, not more spend.",
    installs: [
      {
        label: "Stage 04",
        title: "Traffic Scaling Protocols",
        description:
          "Build traffic systems that maintain efficiency at 2x, 5x, 10x spend. Platform-agnostic, algorithm-resistant.",
      },
      {
        label: "Stages 05-06",
        title: "Conversion Optimization",
        description:
          "Diagnose and fix the conversion drops that appear at scale. Rebuild capture and nurture for higher volume.",
      },
      {
        label: "Stage 07",
        title: "Sales System Engineering",
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
      "Service businesses at $25K–$50K/month with existing lead flow that needs to scale profitably without breaking.",
  },
  {
    id: "expand",
    number: "03",
    name: "Expand",
    subtitle: "Market Expansion — $50K+/mo businesses",
    situation:
      "Your core acquisition system works. Growth in your primary market is predictable. But expanding to new service lines, verticals, or geographic markets has been inconsistent or failed.",
    bottleneck:
      "What works in one market doesn't automatically translate. Different buyer behavior, different competitive dynamics, different trust signals. Your system needs adaptation, not duplication.",
    installs: null,
    installSummary:
      "Multi-channel acquisition architecture. We adapt your Revenue Engine for new markets — repositioned offers, market-specific creative, channel-appropriate traffic, and aligned sales processes. Same system DNA. Different market expression.",
    bestFor:
      "Businesses at $50K+/month with a proven core system ready to expand into new verticals, service lines, or markets.",
  },
  {
    id: "overhaul",
    number: "04",
    name: "Overhaul",
    subtitle: "Full System Rebuild — $50K–$100K+/mo businesses",
    situation:
      "You've hired agencies. You've tried freelancers. You've built internal teams. Nothing compounds. The acquisition layer of your business is a patchwork of disconnected experiments from different eras.",
    bottleneck:
      "There's no single failure point because the stages were never designed to work together. Fixing individual pieces won't work. The whole system needs rebuilding from first principles.",
    installs: null,
    installSummary:
      "Complete acquisition system rebuild across all 8 stages of the Revenue Engine. Offer → Market → Creative → Traffic → Capture → Nurture → Sales → Retention. Engineered as one connected system from scratch.",
    bestFor:
      "Established businesses at $50K–$100K+/month that have outgrown their patchwork acquisition and need a clean, engineered system.",
  },
];

export default function RoutesPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-12">
        <div className="container-narrow">
          <RevealOnScroll>
            <CheckpointHeader label="Packages" />
            <SectionHeading as="h1" size="hero">
              Matched to your stage. Built for what&rsquo;s next.
            </SectionHeading>
            <p className="text-xl leading-relaxed text-slate-300 font-medium mb-8">
              Your current revenue determines what needs building first. We
              don&rsquo;t sell generic retainers &mdash; we install the specific
              acquisition infrastructure your business is missing.
            </p>
          </RevealOnScroll>
        </div>
      </section>

      {/* Routes */}
      {routes.map((route) => (
        <section
          key={route.id}
          id={route.id}
          className="py-20 border-t border-navy-800"
        >
          <div className="container-narrow">
            <RevealOnScroll>
              <CheckpointHeader label={`Package ${route.number}`} />
              <SectionHeading>{route.name}</SectionHeading>
              <p className="text-xl leading-relaxed text-navy-300 font-medium -mt-4 mb-8">
                {route.subtitle}
              </p>

              <div className="w-10 h-0.5 bg-navy-700 my-8" />

              <div className="grid gap-10 mt-8">
                <div>
                  <p className="block text-sm font-semibold text-accent mb-2 uppercase tracking-widest">
                    The Situation
                  </p>
                  <BodyCopy>{route.situation}</BodyCopy>
                </div>

                <div>
                  <p className="block text-sm font-semibold text-accent mb-2 uppercase tracking-widest">
                    The Bottleneck
                  </p>
                  <BodyCopy>{route.bottleneck}</BodyCopy>
                </div>

                <div>
                  <p className="block text-sm font-semibold text-accent mb-2 uppercase tracking-widest">
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
                  <p className="block text-sm font-semibold text-accent mb-2 uppercase tracking-widest">
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
      <section className="py-20 border-t border-navy-800 bg-navy-900">
        <div className="container-narrow">
          <RevealOnScroll>
            <SectionHeading>Not sure which package?</SectionHeading>
            <BodyCopy secondary>
              That&rsquo;s exactly what the free diagnosis call is for.
              We&rsquo;ll map your Revenue Engine, identify the specific
              bottleneck, and recommend the right package for your situation.
            </BodyCopy>
            <div className="mt-8">
              <Button href="/apply">Book Your Free Diagnosis</Button>
            </div>
          </RevealOnScroll>
        </div>
      </section>
    </>
  );
}
