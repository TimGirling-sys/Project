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
            <p className="text-sm text-gray-500 mb-6 tracking-wide">
              Acquisition infrastructure for agencies, coaches &amp; consultants
            </p>
            <SectionHeading as="h1" size="hero">
              Calm, predictable growth systems for companies scaling globally.
            </SectionHeading>
            <p className="text-xl leading-relaxed text-gray-900 font-medium mb-10">
              We build acquisition engines that work across borders. Not
              campaigns. Not hacks. Complete systems that produce pipeline on
              repeat.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button href="/apply">Apply, diagnosis included</Button>
              <Button href="#diagnosis" variant="secondary">
                See the method
              </Button>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* ===== CHECKPOINT 01 — DIAGNOSIS ===== */}
      <section id="diagnosis" className="py-20 border-t border-gray-200">
        <div className="container-narrow">
          <RevealOnScroll>
            <CheckpointHeader label="Checkpoint 01 · Diagnosis" />
            <SectionHeading>
              Acquisition is not a collection of activities. It is a single
              connected system.
            </SectionHeading>
            <BodyCopy>
              Most operators treat acquisition as separate problems. They hire an
              ads person. Then a funnel person. Then a closer. Each optimizes in
              isolation.
            </BodyCopy>
            <BodyCopy>
              The result is a collection of disconnected activities masquerading
              as a system. Volume goes up, but conversions don&rsquo;t follow.
              Costs rise, but clarity doesn&rsquo;t.
            </BodyCopy>
            <PatternBlock
              label="The Pattern"
              text="The constraint is never volume. The constraint is sequence. Every breakdown traces back to a missing or misaligned stage in the conversion process."
            />
          </RevealOnScroll>

          <RevealOnScroll>
            <h3 className="font-display text-2xl font-bold mt-16 mb-6">
              The Conversion Curve
            </h3>
            <BodyCopy secondary>
              8 stages. Each depends on the previous. Skip one, everything
              downstream fails.
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
              Most companies only focus on stages 03&ndash;04. They skip offer
              architecture entirely. They underinvest in nurture. They wonder why
              nothing scales.
            </BodyCopy>
          </RevealOnScroll>
        </div>
      </section>

      {/* ===== PROBLEM SECTION ===== */}
      <section className="py-20 border-t border-gray-200">
        <div className="container-narrow">
          <RevealOnScroll>
            <SectionHeading>
              Businesses don&rsquo;t fail because they&rsquo;re bad at delivery.
              They fail because acquisition is fragile.
            </SectionHeading>
            <BodyCopy secondary>
              Good months feel like luck. Bad months feel like failure. The
              underlying problem is always the same: there is no system. There
              are only activities.
            </BodyCopy>
          </RevealOnScroll>

          <RevealOnScroll>
            <div className="grid gap-8 my-12">
              <ResultItem
                label="Result #1"
                title="Revenue variance"
                description="Good months feel like luck. Bad months feel like failure. No stable baseline. No predictable cash flow. No ability to plan infrastructure investment around reliable inputs."
              />
              <ResultItem
                label="Result #2"
                title="Founder dependency"
                description="The founder is the pipeline. Every new client comes from personal outreach, referrals, or reputation. The business cannot grow beyond the founder's calendar capacity."
              />
              <ResultItem
                label="Result #3"
                title="Scaling paralysis"
                description="The business is capable of delivering more. But cannot reliably generate enough demand. Investment in growth feels like gambling. So nothing changes."
              />
            </div>
          </RevealOnScroll>

          <RevealOnScroll>
            <PatternBlock
              label="The Diagnosis"
              text="These are not marketing problems. They are infrastructure problems. You don't need more leads. You need a system that produces them without constant intervention."
            />
          </RevealOnScroll>
        </div>
      </section>

      {/* ===== CHECKPOINT 02 — DEPLOYMENT PATHS ===== */}
      <section id="routes" className="py-20 border-t border-gray-200">
        <div className="container-narrow">
          <RevealOnScroll>
            <CheckpointHeader label="Checkpoint 02 · Deployment Paths" />
            <SectionHeading>
              Different environments. Different routes.
            </SectionHeading>
            <BodyCopy secondary>
              Not every business needs the same system. Your current stage
              dictates which infrastructure gets installed first. We deploy in
              four routes.
            </BodyCopy>
          </RevealOnScroll>

          <RevealOnScroll>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-12">
              <PathCard
                name="Basecamp"
                subtitle="Foundation Installation"
                bottleneck="No system exists. Relying on referrals, word-of-mouth, or manual selling. Revenue is entirely founder-dependent."
                installs="Offer architecture, market signal clarity, creative infrastructure, and funnel engineering. The foundation everything else builds on."
              />
              <PathCard
                name="Summit"
                subtitle="Scaling Infrastructure"
                bottleneck="System exists but can't scale. Leads come in but conversion is inconsistent. Unit economics don't hold at higher volume."
                installs="Traffic scaling protocols, conversion optimization, sales system refinement, and retention architecture. Scale without breaking."
              />
              <PathCard
                name="Compass"
                subtitle="Market Expansion"
                bottleneck="Domestic system works. International expansion has stalled or failed. Cross-border acquisition is unpredictable."
                installs="Multi-market acquisition architecture, localization infrastructure, and global scaling protocols. Same system, new territories."
              />
              <PathCard
                name="Expedition"
                subtitle="Full System Overhaul"
                bottleneck="Multiple agencies and freelancers have been tried. Nothing sticks. The entire acquisition layer needs rebuilding from scratch."
                installs="Complete acquisition system rebuild. All 8 stages of the Conversion Curve. Full infrastructure replacement. Clean slate. Engineered properly."
              />
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* ===== CHECKPOINT 03 — SYSTEM REALITY ===== */}
      <section id="method" className="py-20 border-t border-gray-200">
        <div className="container-narrow">
          <RevealOnScroll>
            <CheckpointHeader label="Checkpoint 03 · System Reality" />
            <SectionHeading>Four phases. One system.</SectionHeading>
            <BodyCopy secondary>
              Every engagement follows the same structure. Not because we lack
              flexibility. Because the sequence matters. Skip a phase and you
              compromise everything downstream.
            </BodyCopy>
          </RevealOnScroll>

          <RevealOnScroll>
            <div className="grid gap-8 my-12">
              <Phase
                number="01"
                title="Diagnosis"
                description="We map your current Conversion Curve. Every stage is audited. We identify the specific point of failure — the stage where your system breaks or doesn't exist. No guessing. No assumptions."
                warning="If skipped: You build on assumptions. Assumptions compound into expensive mistakes."
              />
              <Phase
                number="02"
                title="System Build"
                description="We design and install the acquisition infrastructure. Offer architecture. Market positioning. Creative systems. Funnel engineering. Traffic protocols. Every component is built to connect to every other component."
                warning="If skipped: You have disconnected activities, not a system. Each part optimizes alone and fails together."
              />
              <Phase
                number="03"
                title="Stabilization"
                description="The system runs. Data flows. We calibrate based on real performance. Conversion rates, cost per acquisition, pipeline velocity — each metric is tracked and adjusted. The goal is a stable baseline."
                warning="If skipped: You scale instability. Costs rise, quality drops, team burns out."
              />
              <Phase
                number="04"
                title="Scaling"
                description='Once the baseline is stable, we increase volume. Methodically. Every scaling input is measured against output. No vanity metrics. No "more spend = more revenue" assumptions.'
                warning="If skipped: There is no skip. You can't scale what isn't stable."
              />
            </div>
          </RevealOnScroll>

          <RevealOnScroll>
            <div className="w-10 h-0.5 bg-gray-300 my-12" />
            <BodyCopy>
              The sequence is non-negotiable. Diagnosis before build. Build
              before stabilization. Stabilization before scaling. This is what
              separates infrastructure from tactics.
            </BodyCopy>
          </RevealOnScroll>
        </div>
      </section>

      {/* ===== CHECKPOINT 04 — QUALIFICATION ===== */}
      <section id="qualification" className="py-20 border-t border-gray-200">
        <div className="container-narrow">
          <RevealOnScroll>
            <CheckpointHeader label="Checkpoint 04 · Qualification" />
            <SectionHeading>This is not for everyone.</SectionHeading>
            <BodyCopy secondary>
              We are selective about who we work with. Not out of arrogance. Out
              of alignment. These systems require specific conditions to succeed.
              If these conditions aren&rsquo;t met, the engagement won&rsquo;t
              work. For either of us.
            </BodyCopy>
          </RevealOnScroll>

          <RevealOnScroll>
            <div className="grid gap-8 my-12">
              <Requirement
                number="01"
                title="Monthly revenue"
                value="$10K+ existing"
                reason="Cash flow stability is required to sustain infrastructure investment. Systems take 60–90 days to mature."
                missing="If missing: Cannot sustain investment through the build and stabilization phases."
              />
              <Requirement
                number="02"
                title="Proven delivery"
                value="Clients get results"
                reason="The system generates pipeline. If your delivery doesn't convert pipeline into retained clients, the system breaks downstream."
                missing="If missing: Acquisition amplifies a retention problem. More leads won't fix bad delivery."
              />
              <Requirement
                number="03"
                title="Decision-making authority"
                value="Founder or CEO involvement"
                reason="Acquisition infrastructure touches every part of the business. It requires decisions that only leadership can make."
                missing="If missing: Decisions stall. Build timelines collapse. Nothing ships."
              />
              <Requirement
                number="04"
                title="Patience for process"
                value="Systems thinking, not quick fixes"
                reason="This is infrastructure, not a campaign. If you need leads tomorrow, this is not the right approach."
                missing="If missing: Misaligned expectations create friction. Friction kills systems before they mature."
              />
            </div>
          </RevealOnScroll>

          <RevealOnScroll>
            <div className="w-10 h-0.5 bg-gray-300 my-12" />
            <h3 className="font-display text-2xl font-bold mb-6">
              Who this is NOT for
            </h3>
            <ul className="space-y-0">
              {[
                "Businesses under $10K/month (insufficient runway for system maturation)",
                'Companies looking for a "quick win" or overnight results',
                "Operators who want to micromanage execution instead of trusting the process",
                "Businesses without a proven service or product (we scale what works, we don't validate ideas)",
                'Anyone who thinks "more ads" is a growth strategy',
              ].map((item) => (
                <li
                  key={item}
                  className="py-3 border-b border-gray-200 text-base text-gray-600 flex gap-3 items-baseline"
                >
                  <span className="text-gray-400 flex-shrink-0">&ndash;</span>
                  {item}
                </li>
              ))}
            </ul>
          </RevealOnScroll>
        </div>
      </section>

      {/* ===== SOCIAL PROOF ===== */}
      <section className="py-20 border-t border-gray-200 bg-gray-50">
        <div className="container-narrow">
          <RevealOnScroll>
            <p className="text-xs font-semibold tracking-label uppercase text-gray-600 mb-8">
              What clients say
            </p>
            <div>
              <Testimonial
                text="We'd worked with three agencies before Nomads. None of them thought in systems. Within 90 days we had a predictable pipeline for the first time in two years. The difference was clarity — not volume."
                author="Alex M."
                role="CEO, Growth Consultancy · $45K/mo → $120K/mo"
              />
              <Testimonial
                text="They told us what we didn't want to hear: our offer was wrong. We fixed it. Everything changed. Our cost per acquisition dropped 60% and our close rate doubled. Systems thinking actually works."
                author="Sarah K."
                role="Founder, Digital Agency · UK → 3 Markets"
              />
              <Testimonial
                text="The diagnosis phase alone was worth the investment. They mapped our entire acquisition process and found three stages where we were losing 40% of potential clients. Nobody had ever shown us that before."
                author="James R."
                role="Director, B2B Services · $80K/mo → $200K/mo"
              />
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* ===== FINAL CTA ===== */}
      <section className="py-20 border-t border-gray-200">
        <div className="container-narrow">
          <RevealOnScroll>
            <SectionHeading>Which stage is most fragile?</SectionHeading>
            <BodyCopy>
              Diagnosis before deployment. Every engagement starts with a
              strategy call where we map your current Conversion Curve, identify
              the specific failure point, and determine which deployment route
              fits your situation.
            </BodyCopy>
            <BodyCopy secondary>
              No pitch. No pressure. Just clarity on what&rsquo;s broken and
              what to do about it. If we&rsquo;re the right fit, we&rsquo;ll
              tell you. If we&rsquo;re not, we&rsquo;ll tell you that too.
            </BodyCopy>

            <div className="flex flex-wrap items-center gap-3 my-10 text-base font-medium">
              <span>Apply</span>
              <span className="text-gray-400">&rarr;</span>
              <span>Diagnosis Call</span>
              <span className="text-gray-400">&rarr;</span>
              <span>System Proposal</span>
              <span className="text-gray-400">&rarr;</span>
              <span>Build Begins</span>
            </div>

            <div className="mt-10">
              <Button href="/apply">Book Strategy Call</Button>
            </div>
            <p className="text-sm text-gray-500 mt-6">
              Limited availability. We work with a maximum of 8 clients per
              quarter.
            </p>
          </RevealOnScroll>
        </div>
      </section>
    </>
  );
}
