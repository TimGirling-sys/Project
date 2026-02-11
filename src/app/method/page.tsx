import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { CheckpointHeader } from "@/components/ui/CheckpointHeader";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { BodyCopy } from "@/components/ui/BodyCopy";
import { PatternBlock } from "@/components/ui/PatternBlock";
import { Button } from "@/components/ui/Button";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Method — Nomads",
  description:
    "The Conversion Curve: 8 stages of acquisition infrastructure. Understand the system that produces predictable pipeline.",
};

const stages = [
  {
    number: "01",
    title: "Offer Architecture",
    body: "Everything starts here. Your offer is not what you sell. It is the articulation of what someone is buying — the transformation, the outcome, the shift.",
    detail:
      "Most businesses describe their service. That is not an offer. An offer articulates why someone should choose you, now, at this price point, over every alternative including doing nothing.",
    warning:
      "No amount of traffic, creative, or sales skill compensates for a weak offer. You can drive 10,000 visitors. If the offer doesn't resonate, nothing converts.",
  },
  {
    number: "02",
    title: "Market Signal Clarity",
    body: "Who is this for? Not demographics. Psychographics. Behavioral signals. What is happening in their business right now that makes them ready for this offer?",
    detail:
      "Market clarity is not about casting a wider net. It is about knowing exactly which fish you're catching and where they swim.",
    warning:
      "You attract the wrong people. Lead quality is low. Sales calls feel like convincing rather than qualifying. Close rates suffer.",
  },
  {
    number: "03",
    title: "Creative Infrastructure",
    body: "Creative is the bridge between your offer and your market. Ads, content, messaging — each piece must communicate the offer to the right market in a way that earns attention and builds intent.",
    detail:
      "This is where most businesses start. And it is exactly why they fail. Creative without offer architecture and market clarity is noise.",
    warning:
      "Ads don't perform. Content doesn't engage. The message feels generic. You look like everyone else in the market.",
  },
  {
    number: "04",
    title: "Traffic Protocols",
    body: "Traffic is a volume dial. It amplifies whatever exists upstream. If your offer is strong and your creative is clear, traffic scales results. If not, it scales waste.",
    detail:
      "We install traffic systems, not campaigns. Systems produce consistent volume regardless of platform changes, algorithm shifts, or creative fatigue.",
    warning:
      "Volume is inconsistent. You ride platform algorithms instead of controlling them. One bad month can destabilize the entire business.",
  },
  {
    number: "05",
    title: "Capture Engineering",
    body: "Getting attention is not enough. You need to capture intent. Landing pages, lead magnets, booking flows — each touchpoint must convert attention into committed action.",
    detail:
      "This is funnel engineering. Not pages. Not templates. Engineered conversion environments designed for a specific audience at a specific stage of awareness.",
    warning:
      "You pay for attention but don't convert it. High traffic, low opt-in rates. Your cost per lead is too high to sustain.",
  },
  {
    number: "06",
    title: "Nurture Sequences",
    body: "Most leads are not ready to buy when they first encounter you. Nurture is the system that moves them from awareness to intent. Email, retargeting, content sequences.",
    detail:
      "The most underinvested stage in almost every business we audit. Companies spend thousands driving traffic and then let 80% of leads go cold.",
    warning:
      "You only close the hottest leads. Your pipeline is thin. Revenue depends on timing rather than systems. Enormous waste of upstream investment.",
  },
  {
    number: "07",
    title: "Sales System",
    body: "Sales is not convincing. If your system works, sales is qualification. The prospect arrives educated, pre-sold, and ready. The call is about fit, not persuasion.",
    detail:
      "When founders complain about close rates, the problem is almost never the closer. It is the stages upstream that failed to qualify and nurture properly.",
    warning:
      "Close rates are low. No-show rates are high. Sales calls feel adversarial. The founder is still the only one who can close.",
  },
  {
    number: "08",
    title: "Retention Architecture",
    body: "Acquisition doesn't end at the close. Retention is the final stage. Client lifetime value, referral systems, expansion revenue — this is where profitable growth compounds.",
    detail:
      "Without retention architecture, you are constantly refilling a leaking bucket. Every new client simply replaces a lost one. Growth is a treadmill, not a flywheel.",
    warning:
      "Client churn is high. LTV is low. Acquisition costs can never be recouped. The business works hard and stays in the same place.",
  },
];

export default function MethodPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-12">
        <div className="container-narrow">
          <RevealOnScroll>
            <CheckpointHeader label="The Method" />
            <SectionHeading as="h1" size="hero">
              The Conversion Curve.
            </SectionHeading>
            <p className="text-xl leading-relaxed text-gray-900 font-medium mb-8">
              8 stages. One connected system. Every stage depends on the one
              before it. Skip one, everything downstream breaks.
            </p>
            <BodyCopy secondary>
              This is not a framework we invented to sound clever. It is a map
              of how acquisition actually works when you remove the noise, the
              hype, and the tactical shortcuts.
            </BodyCopy>
          </RevealOnScroll>
        </div>
      </section>

      {/* Stages Deep Dive */}
      <section className="py-20 border-t border-gray-200">
        <div className="container-narrow">
          {stages.map((stage) => (
            <RevealOnScroll
              key={stage.number}
              className="mb-20 last:mb-12"
            >
              <CheckpointHeader label={`Stage ${stage.number}`} />
              <h2 className="font-display text-2xl font-bold leading-tight mb-6">
                {stage.title}
              </h2>
              <BodyCopy>{stage.body}</BodyCopy>
              <BodyCopy secondary>{stage.detail}</BodyCopy>
              <PatternBlock
                label="If this stage is broken"
                text={stage.warning}
              />
            </RevealOnScroll>
          ))}
        </div>
      </section>

      {/* Summary */}
      <section className="py-20 border-t border-gray-200">
        <div className="container-narrow">
          <RevealOnScroll>
            <SectionHeading>The system is the strategy.</SectionHeading>
            <BodyCopy>
              There is no silver bullet. No single tactic that transforms a
              business. There is only the system. 8 stages. Connected.
              Sequential. Each supporting the next.
            </BodyCopy>
            <BodyCopy secondary>
              When we diagnose your business, we are not looking for a quick fix.
              We are mapping which stages are functional, which are broken, and
              which don&rsquo;t exist yet. Then we build.
            </BodyCopy>
            <div className="mt-10">
              <Button href="/apply">Get Your Diagnosis</Button>
            </div>
          </RevealOnScroll>
        </div>
      </section>
    </>
  );
}
