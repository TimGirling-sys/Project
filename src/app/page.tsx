import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { CheckpointHeader } from "@/components/ui/CheckpointHeader";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { BodyCopy } from "@/components/ui/BodyCopy";
import { PatternBlock } from "@/components/ui/PatternBlock";
import { Button } from "@/components/ui/Button";
import { Stage } from "@/components/ui/Stage";
import { ResultItem } from "@/components/ui/ResultItem";
import { PathCard } from "@/components/ui/PathCard";
import { Phase } from "@/components/ui/Phase";
import { Requirement } from "@/components/ui/Requirement";
import { Testimonial } from "@/components/ui/Testimonial";

export default function HomePage() {
  return (
    <>
      {/* ===== HERO ===== */}
      <section className="pt-32 pb-16">
        <div className="container-narrow">
          <RevealOnScroll>
            <p className="text-sm text-accent mb-6 tracking-wide font-semibold uppercase">
              Acquisition systems for agencies, coaches &amp; consultants
            </p>
            <SectionHeading as="h1" size="hero">
              Stop chasing leads. Start engineering revenue.
            </SectionHeading>
            <p className="text-xl leading-relaxed text-slate-300 font-medium mb-10">
              We install complete acquisition systems for service businesses
              scaling from $10K to $100K/month. Not campaigns. Not freelancers.
              A single connected infrastructure that produces booked calls on
              repeat.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button href="/apply">Get Your Free Diagnosis</Button>
              <Button href="#diagnosis" variant="secondary">
                See how it works
              </Button>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* ===== CHECKPOINT 01 — DIAGNOSIS ===== */}
      <section id="diagnosis" className="py-20 border-t border-navy-800">
        <div className="container-narrow">
          <RevealOnScroll>
            <CheckpointHeader label="Step 01 · The Problem" />
            <SectionHeading>
              Your acquisition is broken in a way that more marketing
              can&rsquo;t fix.
            </SectionHeading>
            <BodyCopy>
              Most agency owners treat growth as a series of disconnected
              activities. They hire an ads manager. Then a funnel builder. Then a
              closer. Each person optimizes their piece in isolation.
            </BodyCopy>
            <BodyCopy>
              The result? A patchwork of tactics that never compounds. Spend goes
              up, but booked calls don&rsquo;t follow. You&rsquo;re buying
              activity, not building infrastructure.
            </BodyCopy>
            <PatternBlock
              label="The Real Issue"
              text="The constraint is never volume. The constraint is sequence. Every revenue leak traces back to a missing or misaligned stage in your acquisition process."
            />
          </RevealOnScroll>

          <RevealOnScroll>
            <h3 className="font-display text-2xl font-bold text-white mt-16 mb-6">
              The Revenue Engine &mdash; 8 Connected Stages
            </h3>
            <BodyCopy secondary>
              Every sale your business makes passes through these 8 stages.
              Break one link, everything downstream fails. This is the system we
              diagnose, build, and scale.
            </BodyCopy>

            <div className="flex flex-wrap gap-3 my-12">
              <Stage number="01" label="Offer" />
              <Stage number="02" label="Market" />
              <Stage number="03" label="Creative" />
              <Stage number="04" label="Traffic" />
              <Stage number="05" label="Capture" />
              <Stage number="06" label="Nurture" />
              <Stage number="07" label="Sales" />
              <Stage number="08" label="Retention" showArrow={false} />
            </div>

            <BodyCopy secondary className="mt-8">
              Most businesses only focus on stages 03&ndash;04. They throw money
              at ads and funnels without fixing their offer or nurture. They
              wonder why nothing scales.
            </BodyCopy>
          </RevealOnScroll>
        </div>
      </section>

      {/* ===== PROBLEM SECTION ===== */}
      <section className="py-20 border-t border-navy-800">
        <div className="container-narrow">
          <RevealOnScroll>
            <SectionHeading>
              You&rsquo;re good at what you do. But growth still feels like
              gambling.
            </SectionHeading>
            <BodyCopy secondary>
              Your service delivers results. Your clients are happy. But
              predictable revenue? That&rsquo;s a different story.
            </BodyCopy>
          </RevealOnScroll>

          <RevealOnScroll>
            <div className="grid gap-8 my-12">
              <ResultItem
                label="Symptom #1"
                title="Revenue rollercoaster"
                description="One month you close $40K. Next month $12K. There's no baseline, no predictability, no way to plan hiring or investment. Every month is a coin flip."
              />
              <ResultItem
                label="Symptom #2"
                title="You ARE the sales team"
                description="Every deal runs through you. Your network, your reputation, your time. The business can't grow past your personal capacity. Take a week off and the pipeline dries up."
              />
              <ResultItem
                label="Symptom #3"
                title="Agencies haven't worked"
                description="You've tried paid ads agencies, appointment setters, cold email teams. Some generated leads, none built a system. The moment you stop paying, the leads stop too."
              />
            </div>
          </RevealOnScroll>

          <RevealOnScroll>
            <PatternBlock
              label="What This Really Means"
              text="These aren't marketing problems. They're infrastructure problems. You don't need another campaign. You need an acquisition engine that runs whether you're working or not."
            />
          </RevealOnScroll>
        </div>
      </section>

      {/* ===== CHECKPOINT 02 — PACKAGES ===== */}
      <section id="routes" className="py-20 border-t border-navy-800">
        <div className="container-narrow">
          <RevealOnScroll>
            <CheckpointHeader label="Step 02 · Your Starting Point" />
            <SectionHeading>
              Four packages. Matched to where you are right now.
            </SectionHeading>
            <BodyCopy secondary>
              Your current revenue stage determines what needs building first. We
              don&rsquo;t sell one-size-fits-all retainers. We install the
              specific infrastructure your business is missing.
            </BodyCopy>
          </RevealOnScroll>

          <RevealOnScroll>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-12">
              <PathCard
                name="Launchpad"
                subtitle="$10K–$25K/mo businesses"
                bottleneck="No acquisition system exists. You're living on referrals and personal outreach. Revenue disappears when you stop selling."
                installs="Offer positioning, ideal client targeting, ad creative systems, and conversion funnel. Your first real acquisition engine."
              />
              <PathCard
                name="Accelerate"
                subtitle="$25K–$50K/mo businesses"
                bottleneck="You have some lead flow, but it's inconsistent. Conversion rates drop when you try to scale. Unit economics break at higher spend."
                installs="Traffic scaling systems, conversion optimization, automated nurture sequences, and sales process engineering. Scale without breaking."
              />
              <PathCard
                name="Expand"
                subtitle="$50K–$75K/mo businesses"
                bottleneck="Domestic acquisition works. But expanding to new markets or channels has stalled. Growth has plateaued."
                installs="Multi-channel acquisition architecture, market expansion playbooks, and advanced retention systems. New revenue streams, proven framework."
              />
              <PathCard
                name="Overhaul"
                subtitle="$50K–$100K+/mo businesses"
                bottleneck="You've hired agencies, freelancers, internal teams. Nothing compounds. The entire acquisition layer is a patchwork of disconnected experiments."
                installs="Complete system rebuild across all 8 stages. Clean slate. Engineered properly from offer to retention as one connected machine."
              />
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* ===== CHECKPOINT 03 — HOW IT WORKS ===== */}
      <section id="method" className="py-20 border-t border-navy-800">
        <div className="container-narrow">
          <RevealOnScroll>
            <CheckpointHeader label="Step 03 · How We Build It" />
            <SectionHeading>Four phases. One system.</SectionHeading>
            <BodyCopy secondary>
              Every engagement follows the same structure. The sequence is
              non-negotiable because each phase depends on the one before it.
            </BodyCopy>
          </RevealOnScroll>

          <RevealOnScroll>
            <div className="grid gap-8 my-12">
              <Phase
                number="01"
                title="Diagnosis"
                description="We audit your entire acquisition process — all 8 stages. We find the exact point of failure: where leads leak, where conversions drop, where money is wasted. You get a complete system map before we build anything."
                warning="If skipped: You build on assumptions. Assumptions compound into expensive mistakes."
              />
              <Phase
                number="02"
                title="System Build"
                description="We design and install your acquisition infrastructure. Offer architecture. Market targeting. Creative systems. Funnel engineering. Traffic protocols. Every component connects to every other component."
                warning="If skipped: You get disconnected activities, not a system. Each piece optimizes alone and fails together."
              />
              <Phase
                number="03"
                title="Stabilization"
                description="The system goes live. Real data flows. We calibrate conversion rates, cost per acquisition, and pipeline velocity until we hit a stable, repeatable baseline."
                warning="If skipped: You scale instability. Costs spiral, lead quality drops, your team burns out."
              />
              <Phase
                number="04"
                title="Scaling"
                description="Once the baseline is stable, we increase volume methodically. Every dollar of additional spend is measured against output. No vanity metrics. No guesswork."
                warning="If skipped: There is no skip. You can't scale what isn't stable."
              />
            </div>
          </RevealOnScroll>

          <RevealOnScroll>
            <div className="w-10 h-0.5 bg-navy-700 my-12" />
            <BodyCopy>
              Diagnosis before build. Build before stabilization. Stabilization
              before scaling. This is what separates a revenue engine from a
              marketing expense.
            </BodyCopy>
          </RevealOnScroll>
        </div>
      </section>

      {/* ===== CHECKPOINT 04 — QUALIFICATION ===== */}
      <section id="qualification" className="py-20 border-t border-navy-800">
        <div className="container-narrow">
          <RevealOnScroll>
            <CheckpointHeader label="Step 04 · Is This For You?" />
            <SectionHeading>This is not for everyone.</SectionHeading>
            <BodyCopy secondary>
              We&rsquo;re selective about who we work with. Not out of arrogance
              &mdash; out of integrity. These systems require specific conditions
              to succeed. If the fit isn&rsquo;t right, we&rsquo;ll tell you
              upfront.
            </BodyCopy>
          </RevealOnScroll>

          <RevealOnScroll>
            <div className="grid gap-8 my-12">
              <Requirement
                number="01"
                title="Revenue: $10K+/month"
                value="You need cash flow to sustain a system build"
                reason="Acquisition infrastructure takes 60–90 days to mature. You need runway to get through the build and stabilization phases without panic."
                missing="If missing: You'll pull the plug before the system has time to work."
              />
              <Requirement
                number="02"
                title="Delivery: proven and repeatable"
                value="Your clients get results consistently"
                reason="We build the pipeline. If your service can't convert that pipeline into happy, retained clients, the system breaks downstream."
                missing="If missing: More leads amplifies a delivery problem. Fix that first."
              />
              <Requirement
                number="03"
                title="Decision-maker: involved"
                value="Founder or CEO on the calls"
                reason="Acquisition infrastructure touches positioning, pricing, sales process, and client experience. These are leadership decisions, not marketing decisions."
                missing="If missing: Decisions stall. Build timelines collapse. Nothing ships."
              />
              <Requirement
                number="04"
                title="Mindset: systems over hacks"
                value="You want infrastructure, not a quick fix"
                reason="If you need 10 leads by Friday, this isn't the right approach. We build machines, not campaigns."
                missing="If missing: Misaligned expectations create friction that kills systems before they mature."
              />
            </div>
          </RevealOnScroll>

          <RevealOnScroll>
            <div className="w-10 h-0.5 bg-navy-700 my-12" />
            <h3 className="font-display text-2xl font-bold text-white mb-6">
              Not the right fit if:
            </h3>
            <ul className="space-y-0">
              {[
                "You're under $10K/month (not enough runway to sustain the build)",
                "You want overnight results (systems take 60–90 days to mature)",
                "You want to micromanage every ad and email (trust the process or it won't work)",
                "Your service doesn't reliably deliver results (we scale what works, we don't fix what's broken)",
                "You think \"more ads\" is a growth strategy (it's not — it's a scaling tactic for stage 04 only)",
              ].map((item) => (
                <li
                  key={item}
                  className="py-3 border-b border-navy-800 text-base text-navy-300 flex gap-3 items-baseline"
                >
                  <span className="text-navy-600 flex-shrink-0">&ndash;</span>
                  {item}
                </li>
              ))}
            </ul>
          </RevealOnScroll>
        </div>
      </section>

      {/* ===== SOCIAL PROOF ===== */}
      <section className="py-20 border-t border-navy-800 bg-navy-900">
        <div className="container-narrow">
          <RevealOnScroll>
            <p className="text-xs font-semibold tracking-label uppercase text-accent mb-8">
              Client Results
            </p>
            <div>
              <Testimonial
                text="We'd burned through three agencies before Scale.digital. None of them thought in systems. Within 90 days we had a predictable pipeline for the first time in two years. Our revenue went from $45K to $120K/month."
                author="Alex M."
                role="CEO, Growth Consultancy"
              />
              <Testimonial
                text="They told us our offer was wrong. We didn't want to hear it. But we fixed it, and everything changed. Cost per acquisition dropped 60%. Close rate doubled. This is what actual systems thinking looks like."
                author="Sarah K."
                role="Founder, Digital Agency"
              />
              <Testimonial
                text="The diagnosis alone was worth it. They mapped our entire acquisition process and found three stages where we were losing 40% of potential clients. No one had ever shown us that before."
                author="James R."
                role="Director, B2B Services"
              />
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* ===== FINAL CTA ===== */}
      <section className="py-20 border-t border-navy-800">
        <div className="container-narrow">
          <RevealOnScroll>
            <SectionHeading>
              Find out exactly where your acquisition breaks.
            </SectionHeading>
            <BodyCopy>
              Every engagement starts with a free diagnosis call. We map your
              Revenue Engine, identify the specific failure point, and show you
              exactly what needs to be built. No pitch. No pressure.
            </BodyCopy>
            <BodyCopy secondary>
              If we can help, we&rsquo;ll tell you how. If we can&rsquo;t,
              we&rsquo;ll tell you that too. Either way, you leave the call with
              clarity you didn&rsquo;t have before.
            </BodyCopy>

            <div className="flex flex-wrap items-center gap-3 my-10 text-base font-medium text-slate-300">
              <span>Apply</span>
              <span className="text-navy-600">&rarr;</span>
              <span>Free Diagnosis Call</span>
              <span className="text-navy-600">&rarr;</span>
              <span>System Proposal</span>
              <span className="text-navy-600">&rarr;</span>
              <span>Build Begins</span>
            </div>

            <div className="mt-10">
              <Button href="/apply">Book Your Free Diagnosis</Button>
            </div>
            <p className="text-sm text-navy-400 mt-6">
              Limited availability. We take on a maximum of 8 new clients per
              quarter.
            </p>
          </RevealOnScroll>
        </div>
      </section>
    </>
  );
}
