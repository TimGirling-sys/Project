import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { CheckpointHeader } from "@/components/ui/CheckpointHeader";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { BodyCopy } from "@/components/ui/BodyCopy";
import { PatternBlock } from "@/components/ui/PatternBlock";
import { Button } from "@/components/ui/Button";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Method — Scale.digital",
  description:
    "The Revenue Engine: 8 stages of acquisition infrastructure. See the system that produces predictable, scalable pipeline for agencies and consultants.",
};

const stages = [
  {
    number: "01",
    title: "Offer Architecture",
    body: "Everything starts here. Your offer is not your service description. It is the articulation of the transformation your client is buying — the outcome, the shift, the result they can't get anywhere else.",
    detail:
      "Most agencies describe what they do. That's not an offer. An offer answers: why should someone choose you, now, at this price, over every alternative — including doing nothing?",
    warning:
      "No amount of traffic, creative, or sales talent compensates for a weak offer. You can drive 10,000 visitors. If the offer doesn't resonate, nothing converts.",
  },
  {
    number: "02",
    title: "Market Signal Clarity",
    body: "Who exactly is this for? Not demographics. Behavioral signals. What is happening in their business right now that makes them ready to buy?",
    detail:
      "Market clarity isn't about casting a wider net. It's about knowing exactly which clients you're targeting and what triggers their buying decision.",
    warning:
      "You attract the wrong people. Lead quality is low. Sales calls feel like convincing rather than qualifying. Close rates suffer across the board.",
  },
  {
    number: "03",
    title: "Creative Infrastructure",
    body: "Creative is the bridge between your offer and your market. Ads, content, messaging — each piece must communicate the right offer to the right people in a way that earns attention and builds buying intent.",
    detail:
      "This is where most agencies start spending. And it's exactly why they fail. Creative without offer architecture and market clarity is just expensive noise.",
    warning:
      "Ads don't perform. Content doesn't engage. Your messaging feels generic. You look and sound like every other agency in the market.",
  },
  {
    number: "04",
    title: "Traffic Protocols",
    body: "Traffic is a volume dial. It amplifies whatever exists upstream. If your offer is dialled in and your creative is clear, traffic scales revenue. If not, it scales waste.",
    detail:
      "We install traffic systems, not campaigns. Systems produce consistent volume regardless of platform algorithm changes, creative fatigue, or seasonal dips.",
    warning:
      "Volume is unpredictable. You're riding platform algorithms instead of controlling them. One bad month destabilizes the entire business.",
  },
  {
    number: "05",
    title: "Capture Engineering",
    body: "Attention is worthless unless you capture intent. Landing pages, lead magnets, booking flows — each touchpoint must convert attention into a committed next step.",
    detail:
      "This is funnel engineering. Not templates. Not page builders. Engineered conversion environments designed for a specific audience at a specific stage of awareness.",
    warning:
      "You pay for clicks but don't convert them. High traffic, low opt-in rates. Your cost per lead is too high to sustain at scale.",
  },
  {
    number: "06",
    title: "Nurture Sequences",
    body: "Most leads aren't ready to buy the moment they find you. Nurture is the system that moves them from awareness to intent — email, retargeting, content sequences that build trust over time.",
    detail:
      "The most underinvested stage in nearly every business we audit. Companies spend thousands driving traffic, then let 80% of leads go completely cold.",
    warning:
      "You only close the hottest leads. Your pipeline is razor thin. Revenue depends on lucky timing rather than systematic follow-up.",
  },
  {
    number: "07",
    title: "Sales System",
    body: "If the upstream stages work, sales becomes qualification, not persuasion. The prospect arrives educated, pre-sold, and ready. The call is about fit, not convincing.",
    detail:
      "When founders complain about close rates, the problem is almost never the closer. It's the upstream stages that failed to qualify and nurture properly.",
    warning:
      "Close rates are low. No-show rates are high. Sales calls feel adversarial. The founder is still the only one who can reliably close.",
  },
  {
    number: "08",
    title: "Retention Architecture",
    body: "Acquisition doesn't end at the close. Client lifetime value, referral systems, expansion revenue — this is where profitable growth compounds over time.",
    detail:
      "Without retention architecture, you're constantly refilling a leaking bucket. Every new client simply replaces a lost one. Growth is a treadmill, not a flywheel.",
    warning:
      "Client churn is high. LTV is low. Acquisition costs can't be recouped. The business works harder every month just to stay in the same place.",
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
              The Revenue Engine.
            </SectionHeading>
            <p className="text-xl leading-relaxed text-slate-300 font-medium mb-8">
              8 stages. One connected system. Every stage depends on the one
              before it. Skip one, everything downstream breaks.
            </p>
            <BodyCopy secondary>
              This isn&rsquo;t a framework we invented to sound clever. It&rsquo;s a
              map of how acquisition actually works when you strip away the
              noise, the hype, and the tactical shortcuts.
            </BodyCopy>
          </RevealOnScroll>
        </div>
      </section>

      {/* Stages Deep Dive */}
      <section className="py-20 border-t border-navy-800">
        <div className="container-narrow">
          {stages.map((stage) => (
            <RevealOnScroll
              key={stage.number}
              className="mb-20 last:mb-12"
            >
              <CheckpointHeader label={`Stage ${stage.number}`} />
              <h2 className="font-display text-2xl font-bold leading-tight text-white mb-6">
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
      <section className="py-20 border-t border-navy-800">
        <div className="container-narrow">
          <RevealOnScroll>
            <SectionHeading>The system is the strategy.</SectionHeading>
            <BodyCopy>
              There is no silver bullet. No single tactic that transforms a
              business. There is only the system &mdash; 8 stages, connected,
              sequential, each supporting the next.
            </BodyCopy>
            <BodyCopy secondary>
              When we diagnose your business, we map which stages are
              functional, which are broken, and which don&rsquo;t exist yet.
              Then we build what&rsquo;s missing.
            </BodyCopy>
            <div className="mt-10">
              <Button href="/apply">Get Your Free Diagnosis</Button>
            </div>
          </RevealOnScroll>
        </div>
      </section>
    </>
  );
}
