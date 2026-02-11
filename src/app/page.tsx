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
      <section className="pt-36 pb-20">
        <div className="container-content">
          <RevealOnScroll>
            <p className="text-sm text-accent mb-8 tracking-wide font-semibold uppercase">
              Websites. Marketing. Automation. Done for you.
            </p>
            <SectionHeading as="h1" size="hero">
              Your business is great. Your online presence should be too.
            </SectionHeading>
            <p className="text-xl leading-relaxed text-slate-300 font-medium mb-12 max-w-2xl">
              We help established businesses get found online, bring in more
              customers, and stop wasting time on things that should run
              themselves. One partner. One system. Real results you can measure.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button href="/apply">Get your free website audit</Button>
              <Button href="#how-it-works" variant="secondary">
                See how it works
              </Button>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* ===== THE PROBLEM ===== */}
      <section className="py-28 border-t border-navy-800/60">
        <div className="container-content">
          <RevealOnScroll>
            <CheckpointHeader label="Sound familiar?" />
            <SectionHeading>
              You run a great business. But online? It feels like guesswork.
            </SectionHeading>
            <BodyCopy>
              You know you need to be online. But between running your team,
              keeping customers happy, and handling everything else, who has
              time to figure out websites, ads, and marketing?
            </BodyCopy>
            <BodyCopy secondary>
              Maybe you tried a web designer who disappeared halfway through.
              Maybe you spent money on ads that brought clicks but no
              customers. Maybe you have a website, but nobody actually finds
              it.
            </BodyCopy>
          </RevealOnScroll>

          <RevealOnScroll>
            <div className="grid md:grid-cols-2 gap-8 my-16">
              <ResultItem
                label="Problem #1"
                title={'"I know I need a website but don\'t know where to start"'}
                description="You're overwhelmed by options. DIY platforms, freelancers, agencies. Every option feels like a gamble. And the last thing you need is another project that drags on for months."
              />
              <ResultItem
                label="Problem #2"
                title={'"I have a website but nobody finds it"'}
                description="You spent money on a site and it just sits there. Your competitors show up on Google. You don't. Customers are searching for what you offer right now, and they're finding someone else."
              />
              <ResultItem
                label="Problem #3"
                title={'"Leads come in but I can\'t keep up"'}
                description="Enquiries arrive at all hours. You can't respond fast enough. Good leads go cold because there's no follow-up system. You're answering the same questions over and over."
              />
              <ResultItem
                label="Problem #4"
                title={'"I\'m stuck doing everything myself"'}
                description="Your team spends hours on repetitive tasks. Everything depends on you personally. You can't take a week off without the business suffering. Scaling feels impossible."
              />
            </div>
          </RevealOnScroll>

          <RevealOnScroll>
            <PatternBlock
              label="The real issue"
              text="You don't need another agency that overpromises and underdelivers. You need a complete system that works together: a website that converts, marketing that brings the right people, and automation that handles the rest."
            />
          </RevealOnScroll>
        </div>
      </section>

      {/* ===== HOW IT WORKS ===== */}
      <section id="how-it-works" className="py-28 border-t border-navy-800/60">
        <div className="container-content">
          <RevealOnScroll>
            <CheckpointHeader label="How it works" />
            <SectionHeading>
              Four stages. One complete system.
            </SectionHeading>
            <BodyCopy secondary>
              We don't just build you a website and wish you luck. We build
              the entire engine that brings customers to your door and keeps
              them coming back.
            </BodyCopy>
          </RevealOnScroll>

          <RevealOnScroll>
            <div className="grid md:grid-cols-2 gap-10 my-16">
              <Phase
                number="01"
                title="Build your online foundation"
                description="We build you a professional website that looks credible, loads fast, works perfectly on phones, and makes it dead simple for customers to contact you or book. Set up in weeks, not months."
                warning="This is where it all starts. Without a solid website, everything else is wasted."
              />
              <Phase
                number="02"
                title="Get customers finding you"
                description="We run ads that bring in actual customers, not just clicks. We make sure you show up when people search for what you offer. Every dollar is tracked so you know exactly what's working."
                warning="No more guessing. You'll see exactly how much each new customer costs and what they're worth."
              />
              <Phase
                number="03"
                title="Never miss a lead again"
                description="Every enquiry gets an instant response, 24/7. Leads are automatically qualified so you only talk to serious buyers. Follow-up happens on autopilot. Nothing falls through the cracks."
                warning="Most businesses lose 40-60% of leads just from slow follow-up. We fix that completely."
              />
              <Phase
                number="04"
                title="Run your business on autopilot"
                description="We automate the repetitive tasks your team does every day. AI handles common customer questions. Workflows run in the background saving hours every week. You focus on the work that matters."
                warning="This is where you get your time back. And where your business starts scaling without needing more of you."
              />
            </div>
          </RevealOnScroll>

          <RevealOnScroll>
            <div className="w-12 h-0.5 bg-navy-700 my-14" />
            <BodyCopy>
              Each stage builds on the last. Your website converts visitors.
              Your marketing brings the right visitors. Your lead system
              captures them. Your automation keeps everything running. It all
              works together.
            </BodyCopy>
          </RevealOnScroll>
        </div>
      </section>

      {/* ===== SERVICES OVERVIEW ===== */}
      <section id="services" className="py-28 border-t border-navy-800/60">
        <div className="container-content">
          <RevealOnScroll>
            <CheckpointHeader label="What you get" />
            <SectionHeading>
              Pick where you need help. Or let us handle the lot.
            </SectionHeading>
            <BodyCopy secondary>
              Most of our clients start with a website and marketing, then
              add lead capture and automation as they grow. You can start
              wherever makes sense for your business.
            </BodyCopy>
          </RevealOnScroll>

          <RevealOnScroll>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-16">
              <PathCard
                name="Website"
                subtitle="Your online foundation"
                bottleneck="Your current site is outdated, slow, or doesn't exist. Customers can't find you or don't trust what they see."
                installs="Professional website that makes you look credible. Mobile-friendly, fast, with a clear message about what you do and why customers should pick you. Easy to contact or book."
              />
              <PathCard
                name="Marketing"
                subtitle="Get customers finding you"
                bottleneck="You're invisible on Google. Competitors are getting the customers who should be yours. Ads you've tried haven't worked."
                installs="Ads that bring in real customers. Search visibility so you show up first. Targeting for your area and your ideal customer. Full tracking so you know what every dollar returns."
              />
              <PathCard
                name="Lead Capture"
                subtitle="Never miss an opportunity"
                bottleneck="Leads come in at all hours and go cold before you can respond. No system for follow-up. Good prospects slip away."
                installs="Instant response to every enquiry, 24/7. Automatic qualification so you talk to serious buyers first. Follow-up that runs itself. A simple CRM that actually makes sense."
              />
              <PathCard
                name="Automation"
                subtitle="Get your time back"
                bottleneck="Your team is buried in repetitive work. Everything depends on you. Scaling means hiring more people for tasks a computer could do."
                installs="AI handles common customer questions. Repetitive tasks run automatically. Streamlined workflows that save hours every week. Consistent service even as you grow."
              />
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* ===== QUALIFICATION ===== */}
      <section id="qualification" className="py-28 border-t border-navy-800/60">
        <div className="container-content">
          <RevealOnScroll>
            <CheckpointHeader label="Is this for me?" />
            <SectionHeading>
              We work best with businesses like these.
            </SectionHeading>
            <BodyCopy secondary>
              We're not for everyone. We work with established businesses
              that are already good at what they do. You don't need us to
              fix your service. You need us to make sure more people find it.
            </BodyCopy>
          </RevealOnScroll>

          <RevealOnScroll>
            <div className="grid md:grid-cols-2 gap-10 my-16">
              <Requirement
                number="01"
                title="You have an established business"
                value="10+ employees, real revenue, proven service"
                reason="You're already good at what you do. Your customers are happy. You just need more of the right people finding you online."
                missing=""
              />
              <Requirement
                number="02"
                title="You're too busy to figure out marketing"
                value="You want results, not a to-do list"
                reason="You don't have time to learn Google Ads or build funnels. You want someone to handle it and show you what's working."
                missing=""
              />
              <Requirement
                number="03"
                title="You've been burned before"
                value="Web designers who vanished. Ads that didn't work."
                reason="You're skeptical of agencies. Good. We track everything, show you real numbers, and don't lock you into long contracts."
                missing=""
              />
              <Requirement
                number="04"
                title="You want a partner, not a vendor"
                value="Someone who understands your business"
                reason="We're not here to sell you a website and disappear. We build systems that grow with you and we stick around to make sure they work."
                missing=""
              />
            </div>
          </RevealOnScroll>

          <RevealOnScroll>
            <div className="w-12 h-0.5 bg-navy-700 my-14" />
            <h3 className="font-display text-2xl font-bold text-white mb-8">
              Industries we work with
            </h3>
            <ul className="grid md:grid-cols-2 gap-x-12">
              {[
                "Professional services (accountants, lawyers, consultants)",
                "Home services (plumbers, electricians, HVAC, landscaping)",
                "Healthcare (dental practices, physio clinics, medical offices)",
                "Local retail and hospitality",
                "B2B service providers",
              ].map((item) => (
                <li
                  key={item}
                  className="py-4 border-b border-navy-800/60 text-base text-navy-300 flex gap-3 items-baseline"
                >
                  <span className="text-accent flex-shrink-0">+</span>
                  {item}
                </li>
              ))}
            </ul>
          </RevealOnScroll>
        </div>
      </section>

      {/* ===== SOCIAL PROOF ===== */}
      <section className="py-28 border-t border-navy-800/60 bg-navy-900">
        <div className="container-content">
          <RevealOnScroll>
            <p className="text-xs font-semibold tracking-label uppercase text-accent mb-10">
              What our clients say
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <Testimonial
                text="We put off getting a proper website for years. Scale.digital had us live in three weeks and within two months we were getting 30+ enquiries a month from Google alone. Should have done this years ago."
                author="Mark T."
                role="Owner, Commercial Plumbing Company"
              />
              <Testimonial
                text="We were spending $3,000 a month on ads with nothing to show for it. They rebuilt everything. Same budget, but now we track every lead. Last month we got 47 qualified enquiries at $64 each."
                author="Rachel S."
                role="Practice Manager, Dental Clinic"
              />
              <Testimonial
                text="The automation alone saves our office manager 15 hours a week. Every lead gets a response in under 2 minutes, even at midnight. Our conversion rate doubled because we stopped losing people to slow follow-up."
                author="David L."
                role="Director, Accounting Firm"
              />
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* ===== FINAL CTA ===== */}
      <section className="py-28 border-t border-navy-800/60">
        <div className="container-content">
          <RevealOnScroll>
            <SectionHeading>
              See what your business looks like online. For free.
            </SectionHeading>
            <BodyCopy>
              We'll audit your current online presence, show you exactly
              where you're losing customers, and give you a clear plan to
              fix it. No jargon. No pressure. Just honest advice about what
              will actually move the needle for your business.
            </BodyCopy>

            <div className="flex flex-wrap items-center gap-4 my-12 text-base font-medium text-slate-300">
              <span>Free audit</span>
              <span className="text-navy-600">&rarr;</span>
              <span>15-min strategy call</span>
              <span className="text-navy-600">&rarr;</span>
              <span>Clear action plan</span>
              <span className="text-navy-600">&rarr;</span>
              <span>We build it</span>
            </div>

            <div className="mt-12">
              <Button href="/apply">Get your free website audit</Button>
            </div>
            <p className="text-sm text-navy-400 mt-8">
              Takes 30 seconds to apply. We'll get back to you within 24
              hours.
            </p>
          </RevealOnScroll>
        </div>
      </section>
    </>
  );
}
